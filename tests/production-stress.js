var _results = [];
var _assert = function(cond, msg) { if (!cond) throw new Error("FAIL: " + msg); _results.push(msg); };
var _log = function(msg) { /* silent in test */ };

// === Utilities ===
var Utils = {
  debounce: function(fn, ms) {
    var timer = null;
    return function() {
      var self = this, args = arguments;
      if (timer) clearTimeout(timer);
      timer = setTimeout(function() { fn.apply(self, args); }, ms);
    };
  },
  throttle: function(fn, ms) {
    var last = 0;
    return function() {
      var now = Date.now();
      if (now - last >= ms) { last = now; return fn.apply(this, arguments); }
    };
  },
  once: function(fn) {
    var called = false, result;
    return function() {
      if (!called) { called = true; result = fn.apply(this, arguments); }
      return result;
    };
  },
  memoize: function(fn) {
    var cache = new Map();
    return function(arg) {
      if (cache.has(arg)) return cache.get(arg);
      var val = fn(arg);
      cache.set(arg, val);
      return val;
    };
  },
  deepClone: function(obj) {
    if (obj === null || typeof obj !== "object") return obj;
    if (Array.isArray(obj)) { var arr = []; for (var i = 0; i < obj.length; i++) arr.push(Utils.deepClone(obj[i])); return arr; }
    var c = {}; for (var k in obj) { if (obj.hasOwnProperty(k)) c[k] = Utils.deepClone(obj[k]); } return c;
  },
  deepEqual: function(a, b) {
    if (a === b) return true;
    if (typeof a !== typeof b) return false;
    if (a === null || b === null) return false;
    if (typeof a !== "object") return false;
    if (Array.isArray(a) !== Array.isArray(b)) return false;
    var keysA = Object.keys(a), keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    for (var i = 0; i < keysA.length; i++) { if (!Utils.deepEqual(a[keysA[i]], b[keysA[i]])) return false; }
    return true;
  },
  pick: function(obj, keys) { var r = {}; for (var i = 0; i < keys.length; i++) { if (obj.hasOwnProperty(keys[i])) r[keys[i]] = obj[keys[i]]; } return r; },
  omit: function(obj, keys) { var r = Utils.deepClone(obj); for (var i = 0; i < keys.length; i++) delete r[keys[i]]; return r; },
  merge: function(target, source) {
    for (var k in source) {
      if (source.hasOwnProperty(k)) {
        if (typeof source[k] === "object" && !Array.isArray(source[k]) && source[k] !== null) {
          target[k] = Utils.merge(target[k] || {}, source[k]);
        } else { target[k] = source[k]; }
      }
    }
    return target;
  }
};

// === Data Models ===
var _idSeq = 0; function _uid() { _idSeq++; return "e" + _idSeq; }

function Model(attrs) { this._attrs = Utils.deepClone(attrs || {}); this._id = _uid(); this._dirty = new Set(); }
Model.prototype.get = function(key, fb) { return this._attrs.hasOwnProperty(key) ? this._attrs[key] : (fb !== undefined ? fb : null); };
Model.prototype.set = function(key, val) { if (this._attrs[key] !== val) { this._dirty.add(key); } this._attrs[key] = val; return this; };
Model.prototype.isDirty = function() { return this._dirty.size > 0; };
Model.prototype.clearDirty = function() { this._dirty.clear(); };
Model.prototype.toJSON = function() { return JSON.parse(JSON.stringify(this._attrs)); };
Model.prototype.id = function() { return this._id; };

function UserModel(attrs) { Model.call(this, attrs); }
UserModel.prototype = Object.create(Model.prototype);
UserModel.prototype.constructor = UserModel;
UserModel.prototype.fullName = function() { return [this.get("title"), this.get("firstName"), this.get("lastName")].filter(Boolean).join(" "); };
UserModel.prototype.validate = function() {
  var errs = [];
  if (!this.get("email")) errs.push("email required");
  else if (this.get("email").indexOf("@") < 0) errs.push("invalid email");
  if (!this.get("firstName")) errs.push("firstName required");
  return errs;
};

function ProductModel(attrs) { Model.call(this, attrs); }
ProductModel.prototype = Object.create(Model.prototype);
ProductModel.prototype.constructor = ProductModel;
ProductModel.prototype.priceWithTax = function(rate) { return this.get("price") * (1 + (rate || 0.1)); };
ProductModel.prototype.validate = function() {
  var errs = [];
  if (!this.get("sku")) errs.push("sku required");
  if (typeof this.get("price") !== "number" || this.get("price") < 0) errs.push("price invalid");
  return errs;
};

function OrderModel(attrs) {
  Model.call(this, attrs);
  this._lineItems = [];
  this.set("status", "draft");
  this.set("createdAt", new Date().toISOString());
}
OrderModel.prototype = Object.create(Model.prototype);
OrderModel.prototype.constructor = OrderModel;
OrderModel.prototype.addLine = function(product, qty, price) {
  this._lineItems.push({ productId: product.id(), sku: product.get("sku"), qty: qty, unitPrice: price, total: Math.round(qty * price * 100) / 100 });
  this._dirty.add("_lineItems");
  return this;
};
OrderModel.prototype.lineCount = function() { return this._lineItems.length; };
OrderModel.prototype.subtotal = function() {
  var s = 0; for (var i = 0; i < this._lineItems.length; i++) s += this._lineItems[i].total;
  return Math.round(s * 100) / 100;
};
OrderModel.prototype.grandTotal = function(taxRate) {
  var sub = this.subtotal();
  return Math.round(sub * (1 + (taxRate || 0)) * 100) / 100;
};
OrderModel.prototype.validate = function() {
  var errs = [];
  if (!this.get("customerId")) errs.push("customerId required");
  if (this._lineItems.length === 0) errs.push("no line items");
  return errs;
};

// === Repository ===
function Repository() { this._store = new Map(); }
Repository.prototype.save = function(model) { this._store.set(model.id(), model); return model; };
Repository.prototype.findById = function(id) { return this._store.get(id) || null; };
Repository.prototype.findAll = function() { return Array.from(this._store.values()); };
Repository.prototype.findBy = function(predicate) {
  var result = [];
  this._store.forEach(function(m) { if (predicate(m)) result.push(m); });
  return result;
};
Repository.prototype.count = function() { return this._store.size; };
Repository.prototype.delete = function(id) { return this._store.delete(id); };
Repository.prototype.clear = function() { this._store.clear(); };

// === API Layer ===
var ApiClient = {
  _latency: 5,
  _failRate: 0,
  _callCount: 0,
  _simulateDelay: async function() { await new Promise(function(r) { setTimeout(r, ApiClient._latency); }); },
  createUser: async function(data) {
    ApiClient._callCount++;
    await ApiClient._simulateDelay();
    if (ApiClient._failRate > 0 && Math.random() < ApiClient._failRate) throw new Error("API: service unavailable");
    var user = new UserModel(data);
    var errs = user.validate();
    if (errs.length > 0) return { ok: false, errors: errs };
    return { ok: true, data: user };
  },
  createProduct: async function(data) {
    await ApiClient._simulateDelay();
    var product = new ProductModel(data);
    var errs = product.validate();
    if (errs.length > 0) return { ok: false, errors: errs };
    return { ok: true, data: product };
  },
  createOrder: async function(customerId, lines) {
    ApiClient._callCount++;
    await ApiClient._simulateDelay();
    var order = new OrderModel({ customerId: customerId });
    for (var i = 0; i < lines.length; i++) {
      order.addLine(lines[i].product, lines[i].qty, lines[i].price);
    }
    var errs = order.validate();
    if (errs.length > 0) return { ok: false, errors: errs };
    return { ok: true, data: order };
  }
};

// === OrderService ===
var OrderService = {
  _orders: new Repository(),
  _users: new Repository(),
  _products: new Repository(),
  placeOrder: async function(customerData, lineItems) {
    var userResult = await ApiClient.createUser(customerData);
    if (!userResult.ok) return userResult;
    var user = userResult.data;
    OrderService._users.save(user);
    for (var i = 0; i < lineItems.length; i++) {
      var prodResult = await ApiClient.createProduct(lineItems[i].productData || { sku: "SKU-" + i, price: lineItems[i].price });
      if (!prodResult.ok) return prodResult;
      OrderService._products.save(prodResult.data);
      lineItems[i].product = prodResult.data;
    }
    var orderResult = await ApiClient.createOrder(user.id(), lineItems);
    if (!orderResult.ok) return orderResult;
    var order = orderResult.data;
    order.set("status", "confirmed");
    OrderService._orders.save(order);
    return { ok: true, data: { order: order, user: user } };
  },
  getOrderStats: function() {
    var orders = OrderService._orders.findAll();
    var total = 0, count = orders.length;
    for (var i = 0; i < orders.length; i++) total += orders[i].subtotal();
    return { count: count, totalRevenue: Math.round(total * 100) / 100, avgOrderValue: count > 0 ? Math.round((total / count) * 100) / 100 : 0 };
  },
  reset: function() {
    OrderService._orders.clear();
    OrderService._users.clear();
    OrderService._products.clear();
    ApiClient._callCount = 0;
  }
};

// === Reporting ===
var Reporting = {
  salesBySku: function(orders) {
    var bySku = {};
    for (var i = 0; i < orders.length; i++) {
      var lines = orders[i]._lineItems;
      for (var j = 0; j < lines.length; j++) {
        var item = lines[j];
        if (!bySku[item.sku]) bySku[item.sku] = { qty: 0, revenue: 0 };
        bySku[item.sku].qty += item.qty;
        bySku[item.sku].revenue += item.total;
      }
    }
    return bySku;
  },
  topCustomers: function(orders, limit) {
    limit = limit || 10;
    var byCustomer = {};
    for (var i = 0; i < orders.length; i++) {
      var cid = orders[i].get("customerId");
      if (!byCustomer[cid]) byCustomer[cid] = 0;
      byCustomer[cid] += orders[i].subtotal();
    }
    var sorted = Object.keys(byCustomer).sort(function(a, b) { return byCustomer[b] - byCustomer[a]; });
    return sorted.slice(0, limit).map(function(k) { return { id: k, total: byCustomer[k] }; });
  }
};

// === Tests ===
async function runTests() {

// -- Utils --
_assert(Utils.deepEqual({a:1,b:{c:2}}, {a:1,b:{c:2}}), "deepEqual same");
_assert(!Utils.deepEqual({a:1}, {a:2}), "deepEqual diff");
var merged = Utils.merge({a:1}, {b:2});
_assert(merged.a === 1 && merged.b === 2, "merge flat");
var mergedDeep = Utils.merge({nested:{x:1}}, {nested:{y:2}});
_assert(mergedDeep.nested.x === 1 && mergedDeep.nested.y === 2, "merge deep");
var picked = Utils.pick({a:1,b:2,c:3}, ["a","c"]);
_assert(Object.keys(picked).length === 2 && picked.a === 1 && picked.c === 3, "pick");
var omitted = Utils.omit({a:1,b:2,c:3}, ["b"]);
_assert(omitted.a === 1 && omitted.c === 3 && omitted.b === undefined, "omit");

// -- Memoize --
var callCount = 0;
var memoized = Utils.memoize(function(x) { callCount++; return x * x; });
_assert(memoized(5) === 25, "memoize first call");
_assert(callCount === 1, "memoize called once");
_assert(memoized(5) === 25, "memoize cached");
_assert(callCount === 1, "memoize not called again");
_assert(memoized(3) === 9, "memoize new arg");
_assert(callCount === 2, "memoize called for new arg");

// -- Models --
var user = new UserModel({ email: "test@test.com", firstName: "John", lastName: "Doe", title: "Mr" });
_assert(user.fullName() === "Mr John Doe", "user fullName");
_assert(user.validate().length === 0, "user valid");
var badUser = new UserModel({ email: "bad" });
_assert(badUser.validate().length === 2, "user invalid");
user.set("age", 30);
_assert(user.isDirty(), "user dirty after set");
user.clearDirty();
_assert(!user.isDirty(), "user clean after clearDirty");

var product = new ProductModel({ sku: "SKU-100", price: 49.99 });
_assert(Math.abs(product.priceWithTax(0.1) - 54.989) < 0.001, "product priceWithTax");
_assert(product.validate().length === 0, "product valid");

// -- Order --
var order = new OrderModel({ customerId: user.id() });
order.addLine(product, 2, 49.99);
order.addLine(product, 1, 49.99);
_assert(order.lineCount() === 2, "order line count");
_assert(Math.abs(order.subtotal() - 149.97) < 0.01, "order subtotal");
_assert(Math.abs(order.grandTotal(0.1) - 164.97) < 0.01, "order grandTotal with tax");
_assert(order.validate().length === 0, "order valid");

// -- Repository --
var repo = new Repository();
repo.save(user);
repo.save(product);
_assert(repo.count() === 2, "repo count");
_assert(repo.findById(user.id()) === user, "repo findById");
_assert(repo.findAll().length === 2, "repo findAll");
var found = repo.findBy(function(m) { return m instanceof ProductModel; });
_assert(found.length === 1, "repo findBy type");
repo.delete(user.id());
_assert(repo.count() === 1, "repo after delete");

// -- API Client --
var apiUser = await ApiClient.createUser({ email: "api@test.com", firstName: "Api" });
_assert(apiUser.ok, "api create user");
var apiBad = await ApiClient.createUser({ email: "bad" });
_assert(!apiBad.ok, "api reject bad user");
_assert(ApiClient._callCount === 2, "api call count");

// -- OrderService --
OrderService.reset();
var svcResult = await OrderService.placeOrder(
  { email: "cust@test.com", firstName: "Jane" },
  [
    { price: 29.99, qty: 2, productData: { sku: "A-1", price: 29.99 } },
    { price: 49.99, qty: 1, productData: { sku: "A-2", price: 49.99 } }
  ]
);
_assert(svcResult.ok, "orderService placeOrder");
_assert(Math.abs(svcResult.data.order.subtotal() - 109.97) < 0.01, "orderService subtotal");

var stats = OrderService.getOrderStats();
_assert(stats.count === 1, "orderService stats count");
_assert(Math.abs(stats.totalRevenue - 109.97) < 0.01, "orderService stats revenue");

// -- Reporting --
var report = Reporting.salesBySku([svcResult.data.order]);
_assert(Object.keys(report).length === 2, "report sku count");
_assert(report["A-1"].qty === 2, "report sku qty");

// -- Recursion --
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
_assert(fibonacci(10) === 55, "fibonacci 10");

function binarySearch(arr, target, lo, hi) {
  if (lo === undefined) lo = 0;
  if (hi === undefined) hi = arr.length - 1;
  if (lo > hi) return -1;
  var mid = Math.floor((lo + hi) / 2);
  if (arr[mid] === target) return mid;
  if (arr[mid] < target) return binarySearch(arr, target, mid + 1, hi);
  return binarySearch(arr, target, lo, mid - 1);
}
var sortedArr = [1,3,5,7,9,11,13,15,17,19];
_assert(binarySearch(sortedArr, 11) === 5, "binarySearch found");
_assert(binarySearch(sortedArr, 2) === -1, "binarySearch not found");

// -- Async error handling --
async function mightFail(shouldThrow) {
  await Promise.resolve();
  if (shouldThrow) throw new Error("boom");
  return "safe";
}
try { await mightFail(true); _assert(false, "should not reach"); }
catch(e) { _assert(e.message === "boom", "async error caught"); }
var val = await mightFail(false);
_assert(val === "safe", "async success");

// -- Complex data transform --
var data = [{type:"A",val:10},{type:"B",val:20},{type:"A",val:30},{type:"C",val:40},{type:"B",val:50}];
var grouped = {};
for (var di = 0; di < data.length; di++) {
  var d = data[di];
  if (!grouped[d.type]) grouped[d.type] = [];
  grouped[d.type].push(d.val);
}
var summaries = Object.keys(grouped).sort().map(function(k) {
  var vals = grouped[k];
  var sum = 0; for (var vi = 0; vi < vals.length; vi++) sum += vals[vi];
  return k + ":" + sum + ":" + vals.length;
});
_assert(summaries.join("|") === "A:40:2|B:70:2|C:40:1", "group and summarize");

// -- Closure scope --
function makeAccumulator(seed) {
  var total = seed;
  return function(x) { total += x; return total; };
}
var acc = makeAccumulator(10);
_assert(acc(5) === 15, "accumulator 1");
_assert(acc(3) === 18, "accumulator 2");

// Final
console.log("ALL " + _results.length + " TESTS PASSED");
_results.forEach(function(r, i) { console.log(" [" + (i+1) + "] " + r); });
}

runTests().then(function() { console.log("DONE"); }).catch(function(e) { console.log("FATAL: " + e.message); console.log(e.stack); });