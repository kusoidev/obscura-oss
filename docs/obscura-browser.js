"use strict";
var Obscura = (() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/browser.ts
  var browser_exports = {};
  __export(browser_exports, {
    ObfuscateSource: () => ObfuscateSource
  });

  // node_modules/acorn/dist/acorn.mjs
  var astralIdentifierCodes = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 7, 9, 32, 4, 318, 1, 78, 5, 71, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 3, 0, 158, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 68, 8, 2, 0, 3, 0, 2, 3, 2, 4, 2, 0, 15, 1, 83, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 7, 19, 58, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 199, 7, 137, 9, 54, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 55, 9, 266, 3, 10, 1, 2, 0, 49, 6, 4, 4, 14, 10, 5350, 0, 7, 14, 11465, 27, 2343, 9, 87, 9, 39, 4, 60, 6, 26, 9, 535, 9, 470, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4178, 9, 519, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 101, 0, 161, 6, 10, 9, 357, 0, 62, 13, 499, 13, 245, 1, 2, 9, 233, 0, 3, 0, 8, 1, 6, 0, 475, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
  var astralIdentifierStartCodes = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 4, 51, 13, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 7, 25, 39, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 39, 27, 10, 22, 251, 41, 7, 1, 17, 5, 57, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 20, 1, 64, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 31, 9, 2, 0, 3, 0, 2, 37, 2, 0, 26, 0, 2, 0, 45, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 200, 32, 32, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 24, 43, 261, 18, 16, 0, 2, 12, 2, 33, 125, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1071, 18, 5, 26, 3994, 6, 582, 6842, 29, 1763, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 433, 44, 212, 63, 33, 24, 3, 24, 45, 74, 6, 0, 67, 12, 65, 1, 2, 0, 15, 4, 10, 7381, 42, 31, 98, 114, 8702, 3, 2, 6, 2, 1, 2, 290, 16, 0, 30, 2, 3, 0, 15, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 7, 5, 262, 61, 147, 44, 11, 6, 17, 0, 322, 29, 19, 43, 485, 27, 229, 29, 3, 0, 208, 30, 2, 2, 2, 1, 2, 6, 3, 4, 10, 1, 225, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4381, 3, 5773, 3, 7472, 16, 621, 2467, 541, 1507, 4938, 6, 8489];
  var nonASCIIidentifierChars = "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0897-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0CF3\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECE\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF-\u1ADD\u1AE0-\u1AEB\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u200C\u200D\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\u30FB\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F\uFF65";
  var nonASCIIidentifierStartChars = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088F\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5C\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDC-\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C8A\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7DC\uA7F1-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC";
  var reservedWords = {
    3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
    5: "class enum extends super const export import",
    6: "enum",
    strict: "implements interface let package private protected public static yield",
    strictBind: "eval arguments"
  };
  var ecma5AndLessKeywords = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this";
  var keywords$1 = {
    5: ecma5AndLessKeywords,
    "5module": ecma5AndLessKeywords + " export import",
    6: ecma5AndLessKeywords + " const class extends export import super"
  };
  var keywordRelationalOperator = /^in(stanceof)?$/;
  var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
  var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");
  function isInAstralSet(code, set) {
    var pos = 65536;
    for (var i = 0; i < set.length; i += 2) {
      pos += set[i];
      if (pos > code) {
        return false;
      }
      pos += set[i + 1];
      if (pos >= code) {
        return true;
      }
    }
    return false;
  }
  function isIdentifierStart(code, astral) {
    if (code < 65) {
      return code === 36;
    }
    if (code < 91) {
      return true;
    }
    if (code < 97) {
      return code === 95;
    }
    if (code < 123) {
      return true;
    }
    if (code <= 65535) {
      return code >= 170 && nonASCIIidentifierStart.test(String.fromCharCode(code));
    }
    if (astral === false) {
      return false;
    }
    return isInAstralSet(code, astralIdentifierStartCodes);
  }
  function isIdentifierChar(code, astral) {
    if (code < 48) {
      return code === 36;
    }
    if (code < 58) {
      return true;
    }
    if (code < 65) {
      return false;
    }
    if (code < 91) {
      return true;
    }
    if (code < 97) {
      return code === 95;
    }
    if (code < 123) {
      return true;
    }
    if (code <= 65535) {
      return code >= 170 && nonASCIIidentifier.test(String.fromCharCode(code));
    }
    if (astral === false) {
      return false;
    }
    return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes);
  }
  var TokenType = function TokenType2(label, conf) {
    if (conf === void 0) conf = {};
    this.label = label;
    this.keyword = conf.keyword;
    this.beforeExpr = !!conf.beforeExpr;
    this.startsExpr = !!conf.startsExpr;
    this.isLoop = !!conf.isLoop;
    this.isAssign = !!conf.isAssign;
    this.prefix = !!conf.prefix;
    this.postfix = !!conf.postfix;
    this.binop = conf.binop || null;
    this.updateContext = null;
  };
  function binop(name, prec) {
    return new TokenType(name, { beforeExpr: true, binop: prec });
  }
  var beforeExpr = { beforeExpr: true };
  var startsExpr = { startsExpr: true };
  var keywords = {};
  function kw(name, options) {
    if (options === void 0) options = {};
    options.keyword = name;
    return keywords[name] = new TokenType(name, options);
  }
  var types$1 = {
    num: new TokenType("num", startsExpr),
    regexp: new TokenType("regexp", startsExpr),
    string: new TokenType("string", startsExpr),
    name: new TokenType("name", startsExpr),
    privateId: new TokenType("privateId", startsExpr),
    eof: new TokenType("eof"),
    // Punctuation token types.
    bracketL: new TokenType("[", { beforeExpr: true, startsExpr: true }),
    bracketR: new TokenType("]"),
    braceL: new TokenType("{", { beforeExpr: true, startsExpr: true }),
    braceR: new TokenType("}"),
    parenL: new TokenType("(", { beforeExpr: true, startsExpr: true }),
    parenR: new TokenType(")"),
    comma: new TokenType(",", beforeExpr),
    semi: new TokenType(";", beforeExpr),
    colon: new TokenType(":", beforeExpr),
    dot: new TokenType("."),
    question: new TokenType("?", beforeExpr),
    questionDot: new TokenType("?."),
    arrow: new TokenType("=>", beforeExpr),
    template: new TokenType("template"),
    invalidTemplate: new TokenType("invalidTemplate"),
    ellipsis: new TokenType("...", beforeExpr),
    backQuote: new TokenType("`", startsExpr),
    dollarBraceL: new TokenType("${", { beforeExpr: true, startsExpr: true }),
    // Operators. These carry several kinds of properties to help the
    // parser use them properly (the presence of these properties is
    // what categorizes them as operators).
    //
    // `binop`, when present, specifies that this operator is a binary
    // operator, and will refer to its precedence.
    //
    // `prefix` and `postfix` mark the operator as a prefix or postfix
    // unary operator.
    //
    // `isAssign` marks all of `=`, `+=`, `-=` etcetera, which act as
    // binary operators with a very low precedence, that should result
    // in AssignmentExpression nodes.
    eq: new TokenType("=", { beforeExpr: true, isAssign: true }),
    assign: new TokenType("_=", { beforeExpr: true, isAssign: true }),
    incDec: new TokenType("++/--", { prefix: true, postfix: true, startsExpr: true }),
    prefix: new TokenType("!/~", { beforeExpr: true, prefix: true, startsExpr: true }),
    logicalOR: binop("||", 1),
    logicalAND: binop("&&", 2),
    bitwiseOR: binop("|", 3),
    bitwiseXOR: binop("^", 4),
    bitwiseAND: binop("&", 5),
    equality: binop("==/!=/===/!==", 6),
    relational: binop("</>/<=/>=", 7),
    bitShift: binop("<</>>/>>>", 8),
    plusMin: new TokenType("+/-", { beforeExpr: true, binop: 9, prefix: true, startsExpr: true }),
    modulo: binop("%", 10),
    star: binop("*", 10),
    slash: binop("/", 10),
    starstar: new TokenType("**", { beforeExpr: true }),
    coalesce: binop("??", 1),
    // Keyword token types.
    _break: kw("break"),
    _case: kw("case", beforeExpr),
    _catch: kw("catch"),
    _continue: kw("continue"),
    _debugger: kw("debugger"),
    _default: kw("default", beforeExpr),
    _do: kw("do", { isLoop: true, beforeExpr: true }),
    _else: kw("else", beforeExpr),
    _finally: kw("finally"),
    _for: kw("for", { isLoop: true }),
    _function: kw("function", startsExpr),
    _if: kw("if"),
    _return: kw("return", beforeExpr),
    _switch: kw("switch"),
    _throw: kw("throw", beforeExpr),
    _try: kw("try"),
    _var: kw("var"),
    _const: kw("const"),
    _while: kw("while", { isLoop: true }),
    _with: kw("with"),
    _new: kw("new", { beforeExpr: true, startsExpr: true }),
    _this: kw("this", startsExpr),
    _super: kw("super", startsExpr),
    _class: kw("class", startsExpr),
    _extends: kw("extends", beforeExpr),
    _export: kw("export"),
    _import: kw("import", startsExpr),
    _null: kw("null", startsExpr),
    _true: kw("true", startsExpr),
    _false: kw("false", startsExpr),
    _in: kw("in", { beforeExpr: true, binop: 7 }),
    _instanceof: kw("instanceof", { beforeExpr: true, binop: 7 }),
    _typeof: kw("typeof", { beforeExpr: true, prefix: true, startsExpr: true }),
    _void: kw("void", { beforeExpr: true, prefix: true, startsExpr: true }),
    _delete: kw("delete", { beforeExpr: true, prefix: true, startsExpr: true })
  };
  var lineBreak = /\r\n?|\n|\u2028|\u2029/;
  var lineBreakG = new RegExp(lineBreak.source, "g");
  function isNewLine(code) {
    return code === 10 || code === 13 || code === 8232 || code === 8233;
  }
  function nextLineBreak(code, from, end) {
    if (end === void 0) end = code.length;
    for (var i = from; i < end; i++) {
      var next = code.charCodeAt(i);
      if (isNewLine(next)) {
        return i < end - 1 && next === 13 && code.charCodeAt(i + 1) === 10 ? i + 2 : i + 1;
      }
    }
    return -1;
  }
  var nonASCIIwhitespace = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/;
  var skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;
  var ref = Object.prototype;
  var hasOwnProperty = ref.hasOwnProperty;
  var toString = ref.toString;
  var hasOwn = Object.hasOwn || (function(obj, propName) {
    return hasOwnProperty.call(obj, propName);
  });
  var isArray = Array.isArray || (function(obj) {
    return toString.call(obj) === "[object Array]";
  });
  var regexpCache = /* @__PURE__ */ Object.create(null);
  function wordsRegexp(words) {
    return regexpCache[words] || (regexpCache[words] = new RegExp("^(?:" + words.replace(/ /g, "|") + ")$"));
  }
  function codePointToString(code) {
    if (code <= 65535) {
      return String.fromCharCode(code);
    }
    code -= 65536;
    return String.fromCharCode((code >> 10) + 55296, (code & 1023) + 56320);
  }
  var loneSurrogate = /(?:[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF])/;
  var Position = function Position2(line, col) {
    this.line = line;
    this.column = col;
  };
  Position.prototype.offset = function offset(n) {
    return new Position(this.line, this.column + n);
  };
  var SourceLocation = function SourceLocation2(p, start, end) {
    this.start = start;
    this.end = end;
    if (p.sourceFile !== null) {
      this.source = p.sourceFile;
    }
  };
  function getLineInfo(input, offset2) {
    for (var line = 1, cur = 0; ; ) {
      var nextBreak = nextLineBreak(input, cur, offset2);
      if (nextBreak < 0) {
        return new Position(line, offset2 - cur);
      }
      ++line;
      cur = nextBreak;
    }
  }
  var defaultOptions = {
    // `ecmaVersion` indicates the ECMAScript version to parse. Must be
    // either 3, 5, 6 (or 2015), 7 (2016), 8 (2017), 9 (2018), 10
    // (2019), 11 (2020), 12 (2021), 13 (2022), 14 (2023), or `"latest"`
    // (the latest version the library supports). This influences
    // support for strict mode, the set of reserved words, and support
    // for new syntax features.
    ecmaVersion: null,
    // `sourceType` indicates the mode the code should be parsed in.
    // Can be either `"script"`, `"module"` or `"commonjs"`. This influences global
    // strict mode and parsing of `import` and `export` declarations.
    sourceType: "script",
    // `onInsertedSemicolon` can be a callback that will be called when
    // a semicolon is automatically inserted. It will be passed the
    // position of the inserted semicolon as an offset, and if
    // `locations` is enabled, it is given the location as a `{line,
    // column}` object as second argument.
    onInsertedSemicolon: null,
    // `onTrailingComma` is similar to `onInsertedSemicolon`, but for
    // trailing commas.
    onTrailingComma: null,
    // By default, reserved words are only enforced if ecmaVersion >= 5.
    // Set `allowReserved` to a boolean value to explicitly turn this on
    // an off. When this option has the value "never", reserved words
    // and keywords can also not be used as property names.
    allowReserved: null,
    // When enabled, a return at the top level is not considered an
    // error.
    allowReturnOutsideFunction: false,
    // When enabled, import/export statements are not constrained to
    // appearing at the top of the program, and an import.meta expression
    // in a script isn't considered an error.
    allowImportExportEverywhere: false,
    // By default, await identifiers are allowed to appear at the top-level scope only if ecmaVersion >= 2022.
    // When enabled, await identifiers are allowed to appear at the top-level scope,
    // but they are still not allowed in non-async functions.
    allowAwaitOutsideFunction: null,
    // When enabled, super identifiers are not constrained to
    // appearing in methods and do not raise an error when they appear elsewhere.
    allowSuperOutsideMethod: null,
    // When enabled, hashbang directive in the beginning of file is
    // allowed and treated as a line comment. Enabled by default when
    // `ecmaVersion` >= 2023.
    allowHashBang: false,
    // By default, the parser will verify that private properties are
    // only used in places where they are valid and have been declared.
    // Set this to false to turn such checks off.
    checkPrivateFields: true,
    // When `locations` is on, `loc` properties holding objects with
    // `start` and `end` properties in `{line, column}` form (with
    // line being 1-based and column 0-based) will be attached to the
    // nodes.
    locations: false,
    // A function can be passed as `onToken` option, which will
    // cause Acorn to call that function with object in the same
    // format as tokens returned from `tokenizer().getToken()`. Note
    // that you are not allowed to call the parser from the
    // callback—that will corrupt its internal state.
    onToken: null,
    // A function can be passed as `onComment` option, which will
    // cause Acorn to call that function with `(block, text, start,
    // end)` parameters whenever a comment is skipped. `block` is a
    // boolean indicating whether this is a block (`/* */`) comment,
    // `text` is the content of the comment, and `start` and `end` are
    // character offsets that denote the start and end of the comment.
    // When the `locations` option is on, two more parameters are
    // passed, the full `{line, column}` locations of the start and
    // end of the comments. Note that you are not allowed to call the
    // parser from the callback—that will corrupt its internal state.
    // When this option has an array as value, objects representing the
    // comments are pushed to it.
    onComment: null,
    // Nodes have their start and end characters offsets recorded in
    // `start` and `end` properties (directly on the node, rather than
    // the `loc` object, which holds line/column data. To also add a
    // [semi-standardized][range] `range` property holding a `[start,
    // end]` array with the same numbers, set the `ranges` option to
    // `true`.
    //
    // [range]: https://bugzilla.mozilla.org/show_bug.cgi?id=745678
    ranges: false,
    // It is possible to parse multiple files into a single AST by
    // passing the tree produced by parsing the first file as
    // `program` option in subsequent parses. This will add the
    // toplevel forms of the parsed file to the `Program` (top) node
    // of an existing parse tree.
    program: null,
    // When `locations` is on, you can pass this to record the source
    // file in every node's `loc` object.
    sourceFile: null,
    // This value, if given, is stored in every node, whether
    // `locations` is on or off.
    directSourceFile: null,
    // When enabled, parenthesized expressions are represented by
    // (non-standard) ParenthesizedExpression nodes
    preserveParens: false
  };
  var warnedAboutEcmaVersion = false;
  function getOptions(opts) {
    var options = {};
    for (var opt in defaultOptions) {
      options[opt] = opts && hasOwn(opts, opt) ? opts[opt] : defaultOptions[opt];
    }
    if (options.ecmaVersion === "latest") {
      options.ecmaVersion = 1e8;
    } else if (options.ecmaVersion == null) {
      if (!warnedAboutEcmaVersion && typeof console === "object" && console.warn) {
        warnedAboutEcmaVersion = true;
        console.warn("Since Acorn 8.0.0, options.ecmaVersion is required.\nDefaulting to 2020, but this will stop working in the future.");
      }
      options.ecmaVersion = 11;
    } else if (options.ecmaVersion >= 2015) {
      options.ecmaVersion -= 2009;
    }
    if (options.allowReserved == null) {
      options.allowReserved = options.ecmaVersion < 5;
    }
    if (!opts || opts.allowHashBang == null) {
      options.allowHashBang = options.ecmaVersion >= 14;
    }
    if (isArray(options.onToken)) {
      var tokens = options.onToken;
      options.onToken = function(token) {
        return tokens.push(token);
      };
    }
    if (isArray(options.onComment)) {
      options.onComment = pushComment(options, options.onComment);
    }
    if (options.sourceType === "commonjs" && options.allowAwaitOutsideFunction) {
      throw new Error("Cannot use allowAwaitOutsideFunction with sourceType: commonjs");
    }
    return options;
  }
  function pushComment(options, array) {
    return function(block, text, start, end, startLoc, endLoc) {
      var comment = {
        type: block ? "Block" : "Line",
        value: text,
        start,
        end
      };
      if (options.locations) {
        comment.loc = new SourceLocation(this, startLoc, endLoc);
      }
      if (options.ranges) {
        comment.range = [start, end];
      }
      array.push(comment);
    };
  }
  var SCOPE_TOP = 1;
  var SCOPE_FUNCTION = 2;
  var SCOPE_ASYNC = 4;
  var SCOPE_GENERATOR = 8;
  var SCOPE_ARROW = 16;
  var SCOPE_SIMPLE_CATCH = 32;
  var SCOPE_SUPER = 64;
  var SCOPE_DIRECT_SUPER = 128;
  var SCOPE_CLASS_STATIC_BLOCK = 256;
  var SCOPE_CLASS_FIELD_INIT = 512;
  var SCOPE_SWITCH = 1024;
  var SCOPE_VAR = SCOPE_TOP | SCOPE_FUNCTION | SCOPE_CLASS_STATIC_BLOCK;
  function functionFlags(async, generator) {
    return SCOPE_FUNCTION | (async ? SCOPE_ASYNC : 0) | (generator ? SCOPE_GENERATOR : 0);
  }
  var BIND_NONE = 0;
  var BIND_VAR = 1;
  var BIND_LEXICAL = 2;
  var BIND_FUNCTION = 3;
  var BIND_SIMPLE_CATCH = 4;
  var BIND_OUTSIDE = 5;
  var Parser = function Parser2(options, input, startPos) {
    this.options = options = getOptions(options);
    this.sourceFile = options.sourceFile;
    this.keywords = wordsRegexp(keywords$1[options.ecmaVersion >= 6 ? 6 : options.sourceType === "module" ? "5module" : 5]);
    var reserved = "";
    if (options.allowReserved !== true) {
      reserved = reservedWords[options.ecmaVersion >= 6 ? 6 : options.ecmaVersion === 5 ? 5 : 3];
      if (options.sourceType === "module") {
        reserved += " await";
      }
    }
    this.reservedWords = wordsRegexp(reserved);
    var reservedStrict = (reserved ? reserved + " " : "") + reservedWords.strict;
    this.reservedWordsStrict = wordsRegexp(reservedStrict);
    this.reservedWordsStrictBind = wordsRegexp(reservedStrict + " " + reservedWords.strictBind);
    this.input = String(input);
    this.containsEsc = false;
    if (startPos) {
      this.pos = startPos;
      this.lineStart = this.input.lastIndexOf("\n", startPos - 1) + 1;
      this.curLine = this.input.slice(0, this.lineStart).split(lineBreak).length;
    } else {
      this.pos = this.lineStart = 0;
      this.curLine = 1;
    }
    this.type = types$1.eof;
    this.value = null;
    this.start = this.end = this.pos;
    this.startLoc = this.endLoc = this.curPosition();
    this.lastTokEndLoc = this.lastTokStartLoc = null;
    this.lastTokStart = this.lastTokEnd = this.pos;
    this.context = this.initialContext();
    this.exprAllowed = true;
    this.inModule = options.sourceType === "module";
    this.strict = this.inModule || this.strictDirective(this.pos);
    this.potentialArrowAt = -1;
    this.potentialArrowInForAwait = false;
    this.yieldPos = this.awaitPos = this.awaitIdentPos = 0;
    this.labels = [];
    this.undefinedExports = /* @__PURE__ */ Object.create(null);
    if (this.pos === 0 && options.allowHashBang && this.input.slice(0, 2) === "#!") {
      this.skipLineComment(2);
    }
    this.scopeStack = [];
    this.enterScope(
      this.options.sourceType === "commonjs" ? SCOPE_FUNCTION : SCOPE_TOP
    );
    this.regexpState = null;
    this.privateNameStack = [];
  };
  var prototypeAccessors = { inFunction: { configurable: true }, inGenerator: { configurable: true }, inAsync: { configurable: true }, canAwait: { configurable: true }, allowReturn: { configurable: true }, allowSuper: { configurable: true }, allowDirectSuper: { configurable: true }, treatFunctionsAsVar: { configurable: true }, allowNewDotTarget: { configurable: true }, allowUsing: { configurable: true }, inClassStaticBlock: { configurable: true } };
  Parser.prototype.parse = function parse() {
    var node = this.options.program || this.startNode();
    this.nextToken();
    return this.parseTopLevel(node);
  };
  prototypeAccessors.inFunction.get = function() {
    return (this.currentVarScope().flags & SCOPE_FUNCTION) > 0;
  };
  prototypeAccessors.inGenerator.get = function() {
    return (this.currentVarScope().flags & SCOPE_GENERATOR) > 0;
  };
  prototypeAccessors.inAsync.get = function() {
    return (this.currentVarScope().flags & SCOPE_ASYNC) > 0;
  };
  prototypeAccessors.canAwait.get = function() {
    for (var i = this.scopeStack.length - 1; i >= 0; i--) {
      var ref2 = this.scopeStack[i];
      var flags = ref2.flags;
      if (flags & (SCOPE_CLASS_STATIC_BLOCK | SCOPE_CLASS_FIELD_INIT)) {
        return false;
      }
      if (flags & SCOPE_FUNCTION) {
        return (flags & SCOPE_ASYNC) > 0;
      }
    }
    return this.inModule && this.options.ecmaVersion >= 13 || this.options.allowAwaitOutsideFunction;
  };
  prototypeAccessors.allowReturn.get = function() {
    if (this.inFunction) {
      return true;
    }
    if (this.options.allowReturnOutsideFunction && this.currentVarScope().flags & SCOPE_TOP) {
      return true;
    }
    return false;
  };
  prototypeAccessors.allowSuper.get = function() {
    var ref2 = this.currentThisScope();
    var flags = ref2.flags;
    return (flags & SCOPE_SUPER) > 0 || this.options.allowSuperOutsideMethod;
  };
  prototypeAccessors.allowDirectSuper.get = function() {
    return (this.currentThisScope().flags & SCOPE_DIRECT_SUPER) > 0;
  };
  prototypeAccessors.treatFunctionsAsVar.get = function() {
    return this.treatFunctionsAsVarInScope(this.currentScope());
  };
  prototypeAccessors.allowNewDotTarget.get = function() {
    for (var i = this.scopeStack.length - 1; i >= 0; i--) {
      var ref2 = this.scopeStack[i];
      var flags = ref2.flags;
      if (flags & (SCOPE_CLASS_STATIC_BLOCK | SCOPE_CLASS_FIELD_INIT) || flags & SCOPE_FUNCTION && !(flags & SCOPE_ARROW)) {
        return true;
      }
    }
    return false;
  };
  prototypeAccessors.allowUsing.get = function() {
    var ref2 = this.currentScope();
    var flags = ref2.flags;
    if (flags & SCOPE_SWITCH) {
      return false;
    }
    if (!this.inModule && flags & SCOPE_TOP) {
      return false;
    }
    return true;
  };
  prototypeAccessors.inClassStaticBlock.get = function() {
    return (this.currentVarScope().flags & SCOPE_CLASS_STATIC_BLOCK) > 0;
  };
  Parser.extend = function extend() {
    var plugins = [], len = arguments.length;
    while (len--) plugins[len] = arguments[len];
    var cls = this;
    for (var i = 0; i < plugins.length; i++) {
      cls = plugins[i](cls);
    }
    return cls;
  };
  Parser.parse = function parse2(input, options) {
    return new this(options, input).parse();
  };
  Parser.parseExpressionAt = function parseExpressionAt(input, pos, options) {
    var parser = new this(options, input, pos);
    parser.nextToken();
    return parser.parseExpression();
  };
  Parser.tokenizer = function tokenizer(input, options) {
    return new this(options, input);
  };
  Object.defineProperties(Parser.prototype, prototypeAccessors);
  var pp$9 = Parser.prototype;
  var literal = /^(?:'((?:\\[^]|[^'\\])*?)'|"((?:\\[^]|[^"\\])*?)")/;
  pp$9.strictDirective = function(start) {
    if (this.options.ecmaVersion < 5) {
      return false;
    }
    for (; ; ) {
      skipWhiteSpace.lastIndex = start;
      start += skipWhiteSpace.exec(this.input)[0].length;
      var match = literal.exec(this.input.slice(start));
      if (!match) {
        return false;
      }
      if ((match[1] || match[2]) === "use strict") {
        skipWhiteSpace.lastIndex = start + match[0].length;
        var spaceAfter = skipWhiteSpace.exec(this.input), end = spaceAfter.index + spaceAfter[0].length;
        var next = this.input.charAt(end);
        return next === ";" || next === "}" || lineBreak.test(spaceAfter[0]) && !(/[(`.[+\-/*%<>=,?^&]/.test(next) || next === "!" && this.input.charAt(end + 1) === "=");
      }
      start += match[0].length;
      skipWhiteSpace.lastIndex = start;
      start += skipWhiteSpace.exec(this.input)[0].length;
      if (this.input[start] === ";") {
        start++;
      }
    }
  };
  pp$9.eat = function(type) {
    if (this.type === type) {
      this.next();
      return true;
    } else {
      return false;
    }
  };
  pp$9.isContextual = function(name) {
    return this.type === types$1.name && this.value === name && !this.containsEsc;
  };
  pp$9.eatContextual = function(name) {
    if (!this.isContextual(name)) {
      return false;
    }
    this.next();
    return true;
  };
  pp$9.expectContextual = function(name) {
    if (!this.eatContextual(name)) {
      this.unexpected();
    }
  };
  pp$9.canInsertSemicolon = function() {
    return this.type === types$1.eof || this.type === types$1.braceR || lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
  };
  pp$9.insertSemicolon = function() {
    if (this.canInsertSemicolon()) {
      if (this.options.onInsertedSemicolon) {
        this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc);
      }
      return true;
    }
  };
  pp$9.semicolon = function() {
    if (!this.eat(types$1.semi) && !this.insertSemicolon()) {
      this.unexpected();
    }
  };
  pp$9.afterTrailingComma = function(tokType, notNext) {
    if (this.type === tokType) {
      if (this.options.onTrailingComma) {
        this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc);
      }
      if (!notNext) {
        this.next();
      }
      return true;
    }
  };
  pp$9.expect = function(type) {
    this.eat(type) || this.unexpected();
  };
  pp$9.unexpected = function(pos) {
    this.raise(pos != null ? pos : this.start, "Unexpected token");
  };
  var DestructuringErrors = function DestructuringErrors2() {
    this.shorthandAssign = this.trailingComma = this.parenthesizedAssign = this.parenthesizedBind = this.doubleProto = -1;
  };
  pp$9.checkPatternErrors = function(refDestructuringErrors, isAssign) {
    if (!refDestructuringErrors) {
      return;
    }
    if (refDestructuringErrors.trailingComma > -1) {
      this.raiseRecoverable(refDestructuringErrors.trailingComma, "Comma is not permitted after the rest element");
    }
    var parens = isAssign ? refDestructuringErrors.parenthesizedAssign : refDestructuringErrors.parenthesizedBind;
    if (parens > -1) {
      this.raiseRecoverable(parens, isAssign ? "Assigning to rvalue" : "Parenthesized pattern");
    }
  };
  pp$9.checkExpressionErrors = function(refDestructuringErrors, andThrow) {
    if (!refDestructuringErrors) {
      return false;
    }
    var shorthandAssign = refDestructuringErrors.shorthandAssign;
    var doubleProto = refDestructuringErrors.doubleProto;
    if (!andThrow) {
      return shorthandAssign >= 0 || doubleProto >= 0;
    }
    if (shorthandAssign >= 0) {
      this.raise(shorthandAssign, "Shorthand property assignments are valid only in destructuring patterns");
    }
    if (doubleProto >= 0) {
      this.raiseRecoverable(doubleProto, "Redefinition of __proto__ property");
    }
  };
  pp$9.checkYieldAwaitInDefaultParams = function() {
    if (this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos)) {
      this.raise(this.yieldPos, "Yield expression cannot be a default value");
    }
    if (this.awaitPos) {
      this.raise(this.awaitPos, "Await expression cannot be a default value");
    }
  };
  pp$9.isSimpleAssignTarget = function(expr) {
    if (expr.type === "ParenthesizedExpression") {
      return this.isSimpleAssignTarget(expr.expression);
    }
    return expr.type === "Identifier" || expr.type === "MemberExpression";
  };
  var pp$8 = Parser.prototype;
  pp$8.parseTopLevel = function(node) {
    var exports = /* @__PURE__ */ Object.create(null);
    if (!node.body) {
      node.body = [];
    }
    while (this.type !== types$1.eof) {
      var stmt = this.parseStatement(null, true, exports);
      node.body.push(stmt);
    }
    if (this.inModule) {
      for (var i = 0, list = Object.keys(this.undefinedExports); i < list.length; i += 1) {
        var name = list[i];
        this.raiseRecoverable(this.undefinedExports[name].start, "Export '" + name + "' is not defined");
      }
    }
    this.adaptDirectivePrologue(node.body);
    this.next();
    node.sourceType = this.options.sourceType === "commonjs" ? "script" : this.options.sourceType;
    return this.finishNode(node, "Program");
  };
  var loopLabel = { kind: "loop" };
  var switchLabel = { kind: "switch" };
  pp$8.isLet = function(context) {
    if (this.options.ecmaVersion < 6 || !this.isContextual("let")) {
      return false;
    }
    skipWhiteSpace.lastIndex = this.pos;
    var skip = skipWhiteSpace.exec(this.input);
    var next = this.pos + skip[0].length, nextCh = this.fullCharCodeAt(next);
    if (nextCh === 91 || nextCh === 92) {
      return true;
    }
    if (context) {
      return false;
    }
    if (nextCh === 123) {
      return true;
    }
    if (isIdentifierStart(nextCh)) {
      var start = next;
      do {
        next += nextCh <= 65535 ? 1 : 2;
      } while (isIdentifierChar(nextCh = this.fullCharCodeAt(next)));
      if (nextCh === 92) {
        return true;
      }
      var ident = this.input.slice(start, next);
      if (!keywordRelationalOperator.test(ident)) {
        return true;
      }
    }
    return false;
  };
  pp$8.isAsyncFunction = function() {
    if (this.options.ecmaVersion < 8 || !this.isContextual("async")) {
      return false;
    }
    skipWhiteSpace.lastIndex = this.pos;
    var skip = skipWhiteSpace.exec(this.input);
    var next = this.pos + skip[0].length, after;
    return !lineBreak.test(this.input.slice(this.pos, next)) && this.input.slice(next, next + 8) === "function" && (next + 8 === this.input.length || !(isIdentifierChar(after = this.fullCharCodeAt(next + 8)) || after === 92));
  };
  pp$8.isUsingKeyword = function(isAwaitUsing, isFor) {
    if (this.options.ecmaVersion < 17 || !this.isContextual(isAwaitUsing ? "await" : "using")) {
      return false;
    }
    skipWhiteSpace.lastIndex = this.pos;
    var skip = skipWhiteSpace.exec(this.input);
    var next = this.pos + skip[0].length;
    if (lineBreak.test(this.input.slice(this.pos, next))) {
      return false;
    }
    if (isAwaitUsing) {
      var usingEndPos = next + 5, after;
      if (this.input.slice(next, usingEndPos) !== "using" || usingEndPos === this.input.length || isIdentifierChar(after = this.fullCharCodeAt(usingEndPos)) || after === 92) {
        return false;
      }
      skipWhiteSpace.lastIndex = usingEndPos;
      var skipAfterUsing = skipWhiteSpace.exec(this.input);
      next = usingEndPos + skipAfterUsing[0].length;
      if (skipAfterUsing && lineBreak.test(this.input.slice(usingEndPos, next))) {
        return false;
      }
    }
    var ch = this.fullCharCodeAt(next);
    if (!isIdentifierStart(ch) && ch !== 92) {
      return false;
    }
    var idStart = next;
    do {
      next += ch <= 65535 ? 1 : 2;
    } while (isIdentifierChar(ch = this.fullCharCodeAt(next)));
    if (ch === 92) {
      return true;
    }
    var id = this.input.slice(idStart, next);
    if (keywordRelationalOperator.test(id) || isFor && id === "of") {
      return false;
    }
    return true;
  };
  pp$8.isAwaitUsing = function(isFor) {
    return this.isUsingKeyword(true, isFor);
  };
  pp$8.isUsing = function(isFor) {
    return this.isUsingKeyword(false, isFor);
  };
  pp$8.parseStatement = function(context, topLevel, exports) {
    var starttype = this.type, node = this.startNode(), kind;
    if (this.isLet(context)) {
      starttype = types$1._var;
      kind = "let";
    }
    switch (starttype) {
      case types$1._break:
      case types$1._continue:
        return this.parseBreakContinueStatement(node, starttype.keyword);
      case types$1._debugger:
        return this.parseDebuggerStatement(node);
      case types$1._do:
        return this.parseDoStatement(node);
      case types$1._for:
        return this.parseForStatement(node);
      case types$1._function:
        if (context && (this.strict || context !== "if" && context !== "label") && this.options.ecmaVersion >= 6) {
          this.unexpected();
        }
        return this.parseFunctionStatement(node, false, !context);
      case types$1._class:
        if (context) {
          this.unexpected();
        }
        return this.parseClass(node, true);
      case types$1._if:
        return this.parseIfStatement(node);
      case types$1._return:
        return this.parseReturnStatement(node);
      case types$1._switch:
        return this.parseSwitchStatement(node);
      case types$1._throw:
        return this.parseThrowStatement(node);
      case types$1._try:
        return this.parseTryStatement(node);
      case types$1._const:
      case types$1._var:
        kind = kind || this.value;
        if (context && kind !== "var") {
          this.unexpected();
        }
        return this.parseVarStatement(node, kind);
      case types$1._while:
        return this.parseWhileStatement(node);
      case types$1._with:
        return this.parseWithStatement(node);
      case types$1.braceL:
        return this.parseBlock(true, node);
      case types$1.semi:
        return this.parseEmptyStatement(node);
      case types$1._export:
      case types$1._import:
        if (this.options.ecmaVersion > 10 && starttype === types$1._import) {
          skipWhiteSpace.lastIndex = this.pos;
          var skip = skipWhiteSpace.exec(this.input);
          var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
          if (nextCh === 40 || nextCh === 46) {
            return this.parseExpressionStatement(node, this.parseExpression());
          }
        }
        if (!this.options.allowImportExportEverywhere) {
          if (!topLevel) {
            this.raise(this.start, "'import' and 'export' may only appear at the top level");
          }
          if (!this.inModule) {
            this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'");
          }
        }
        return starttype === types$1._import ? this.parseImport(node) : this.parseExport(node, exports);
      // If the statement does not start with a statement keyword or a
      // brace, it's an ExpressionStatement or LabeledStatement. We
      // simply start parsing an expression, and afterwards, if the
      // next token is a colon and the expression was a simple
      // Identifier node, we switch to interpreting it as a label.
      default:
        if (this.isAsyncFunction()) {
          if (context) {
            this.unexpected();
          }
          this.next();
          return this.parseFunctionStatement(node, true, !context);
        }
        var usingKind = this.isAwaitUsing(false) ? "await using" : this.isUsing(false) ? "using" : null;
        if (usingKind) {
          if (!this.allowUsing) {
            this.raise(this.start, "Using declaration cannot appear in the top level when source type is `script` or in the bare case statement");
          }
          if (usingKind === "await using") {
            if (!this.canAwait) {
              this.raise(this.start, "Await using cannot appear outside of async function");
            }
            this.next();
          }
          this.next();
          this.parseVar(node, false, usingKind);
          this.semicolon();
          return this.finishNode(node, "VariableDeclaration");
        }
        var maybeName = this.value, expr = this.parseExpression();
        if (starttype === types$1.name && expr.type === "Identifier" && this.eat(types$1.colon)) {
          return this.parseLabeledStatement(node, maybeName, expr, context);
        } else {
          return this.parseExpressionStatement(node, expr);
        }
    }
  };
  pp$8.parseBreakContinueStatement = function(node, keyword) {
    var isBreak = keyword === "break";
    this.next();
    if (this.eat(types$1.semi) || this.insertSemicolon()) {
      node.label = null;
    } else if (this.type !== types$1.name) {
      this.unexpected();
    } else {
      node.label = this.parseIdent();
      this.semicolon();
    }
    var i = 0;
    for (; i < this.labels.length; ++i) {
      var lab = this.labels[i];
      if (node.label == null || lab.name === node.label.name) {
        if (lab.kind != null && (isBreak || lab.kind === "loop")) {
          break;
        }
        if (node.label && isBreak) {
          break;
        }
      }
    }
    if (i === this.labels.length) {
      this.raise(node.start, "Unsyntactic " + keyword);
    }
    return this.finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement");
  };
  pp$8.parseDebuggerStatement = function(node) {
    this.next();
    this.semicolon();
    return this.finishNode(node, "DebuggerStatement");
  };
  pp$8.parseDoStatement = function(node) {
    this.next();
    this.labels.push(loopLabel);
    node.body = this.parseStatement("do");
    this.labels.pop();
    this.expect(types$1._while);
    node.test = this.parseParenExpression();
    if (this.options.ecmaVersion >= 6) {
      this.eat(types$1.semi);
    } else {
      this.semicolon();
    }
    return this.finishNode(node, "DoWhileStatement");
  };
  pp$8.parseForStatement = function(node) {
    this.next();
    var awaitAt = this.options.ecmaVersion >= 9 && this.canAwait && this.eatContextual("await") ? this.lastTokStart : -1;
    this.labels.push(loopLabel);
    this.enterScope(0);
    this.expect(types$1.parenL);
    if (this.type === types$1.semi) {
      if (awaitAt > -1) {
        this.unexpected(awaitAt);
      }
      return this.parseFor(node, null);
    }
    var isLet = this.isLet();
    if (this.type === types$1._var || this.type === types$1._const || isLet) {
      var init$1 = this.startNode(), kind = isLet ? "let" : this.value;
      this.next();
      this.parseVar(init$1, true, kind);
      this.finishNode(init$1, "VariableDeclaration");
      return this.parseForAfterInit(node, init$1, awaitAt);
    }
    var startsWithLet = this.isContextual("let"), isForOf = false;
    var usingKind = this.isUsing(true) ? "using" : this.isAwaitUsing(true) ? "await using" : null;
    if (usingKind) {
      var init$2 = this.startNode();
      this.next();
      if (usingKind === "await using") {
        if (!this.canAwait) {
          this.raise(this.start, "Await using cannot appear outside of async function");
        }
        this.next();
      }
      this.parseVar(init$2, true, usingKind);
      this.finishNode(init$2, "VariableDeclaration");
      return this.parseForAfterInit(node, init$2, awaitAt);
    }
    var containsEsc = this.containsEsc;
    var refDestructuringErrors = new DestructuringErrors();
    var initPos = this.start;
    var init = awaitAt > -1 ? this.parseExprSubscripts(refDestructuringErrors, "await") : this.parseExpression(true, refDestructuringErrors);
    if (this.type === types$1._in || (isForOf = this.options.ecmaVersion >= 6 && this.isContextual("of"))) {
      if (awaitAt > -1) {
        if (this.type === types$1._in) {
          this.unexpected(awaitAt);
        }
        node.await = true;
      } else if (isForOf && this.options.ecmaVersion >= 8) {
        if (init.start === initPos && !containsEsc && init.type === "Identifier" && init.name === "async") {
          this.unexpected();
        } else if (this.options.ecmaVersion >= 9) {
          node.await = false;
        }
      }
      if (startsWithLet && isForOf) {
        this.raise(init.start, "The left-hand side of a for-of loop may not start with 'let'.");
      }
      this.toAssignable(init, false, refDestructuringErrors);
      this.checkLValPattern(init);
      return this.parseForIn(node, init);
    } else {
      this.checkExpressionErrors(refDestructuringErrors, true);
    }
    if (awaitAt > -1) {
      this.unexpected(awaitAt);
    }
    return this.parseFor(node, init);
  };
  pp$8.parseForAfterInit = function(node, init, awaitAt) {
    if ((this.type === types$1._in || this.options.ecmaVersion >= 6 && this.isContextual("of")) && init.declarations.length === 1) {
      if (this.options.ecmaVersion >= 9) {
        if (this.type === types$1._in) {
          if (awaitAt > -1) {
            this.unexpected(awaitAt);
          }
        } else {
          node.await = awaitAt > -1;
        }
      }
      return this.parseForIn(node, init);
    }
    if (awaitAt > -1) {
      this.unexpected(awaitAt);
    }
    return this.parseFor(node, init);
  };
  pp$8.parseFunctionStatement = function(node, isAsync, declarationPosition) {
    this.next();
    return this.parseFunction(node, FUNC_STATEMENT | (declarationPosition ? 0 : FUNC_HANGING_STATEMENT), false, isAsync);
  };
  pp$8.parseIfStatement = function(node) {
    this.next();
    node.test = this.parseParenExpression();
    node.consequent = this.parseStatement("if");
    node.alternate = this.eat(types$1._else) ? this.parseStatement("if") : null;
    return this.finishNode(node, "IfStatement");
  };
  pp$8.parseReturnStatement = function(node) {
    if (!this.allowReturn) {
      this.raise(this.start, "'return' outside of function");
    }
    this.next();
    if (this.eat(types$1.semi) || this.insertSemicolon()) {
      node.argument = null;
    } else {
      node.argument = this.parseExpression();
      this.semicolon();
    }
    return this.finishNode(node, "ReturnStatement");
  };
  pp$8.parseSwitchStatement = function(node) {
    this.next();
    node.discriminant = this.parseParenExpression();
    node.cases = [];
    this.expect(types$1.braceL);
    this.labels.push(switchLabel);
    this.enterScope(SCOPE_SWITCH);
    var cur;
    for (var sawDefault = false; this.type !== types$1.braceR; ) {
      if (this.type === types$1._case || this.type === types$1._default) {
        var isCase = this.type === types$1._case;
        if (cur) {
          this.finishNode(cur, "SwitchCase");
        }
        node.cases.push(cur = this.startNode());
        cur.consequent = [];
        this.next();
        if (isCase) {
          cur.test = this.parseExpression();
        } else {
          if (sawDefault) {
            this.raiseRecoverable(this.lastTokStart, "Multiple default clauses");
          }
          sawDefault = true;
          cur.test = null;
        }
        this.expect(types$1.colon);
      } else {
        if (!cur) {
          this.unexpected();
        }
        cur.consequent.push(this.parseStatement(null));
      }
    }
    this.exitScope();
    if (cur) {
      this.finishNode(cur, "SwitchCase");
    }
    this.next();
    this.labels.pop();
    return this.finishNode(node, "SwitchStatement");
  };
  pp$8.parseThrowStatement = function(node) {
    this.next();
    if (lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) {
      this.raise(this.lastTokEnd, "Illegal newline after throw");
    }
    node.argument = this.parseExpression();
    this.semicolon();
    return this.finishNode(node, "ThrowStatement");
  };
  var empty$1 = [];
  pp$8.parseCatchClauseParam = function() {
    var param = this.parseBindingAtom();
    var simple2 = param.type === "Identifier";
    this.enterScope(simple2 ? SCOPE_SIMPLE_CATCH : 0);
    this.checkLValPattern(param, simple2 ? BIND_SIMPLE_CATCH : BIND_LEXICAL);
    this.expect(types$1.parenR);
    return param;
  };
  pp$8.parseTryStatement = function(node) {
    this.next();
    node.block = this.parseBlock();
    node.handler = null;
    if (this.type === types$1._catch) {
      var clause = this.startNode();
      this.next();
      if (this.eat(types$1.parenL)) {
        clause.param = this.parseCatchClauseParam();
      } else {
        if (this.options.ecmaVersion < 10) {
          this.unexpected();
        }
        clause.param = null;
        this.enterScope(0);
      }
      clause.body = this.parseBlock(false);
      this.exitScope();
      node.handler = this.finishNode(clause, "CatchClause");
    }
    node.finalizer = this.eat(types$1._finally) ? this.parseBlock() : null;
    if (!node.handler && !node.finalizer) {
      this.raise(node.start, "Missing catch or finally clause");
    }
    return this.finishNode(node, "TryStatement");
  };
  pp$8.parseVarStatement = function(node, kind, allowMissingInitializer) {
    this.next();
    this.parseVar(node, false, kind, allowMissingInitializer);
    this.semicolon();
    return this.finishNode(node, "VariableDeclaration");
  };
  pp$8.parseWhileStatement = function(node) {
    this.next();
    node.test = this.parseParenExpression();
    this.labels.push(loopLabel);
    node.body = this.parseStatement("while");
    this.labels.pop();
    return this.finishNode(node, "WhileStatement");
  };
  pp$8.parseWithStatement = function(node) {
    if (this.strict) {
      this.raise(this.start, "'with' in strict mode");
    }
    this.next();
    node.object = this.parseParenExpression();
    node.body = this.parseStatement("with");
    return this.finishNode(node, "WithStatement");
  };
  pp$8.parseEmptyStatement = function(node) {
    this.next();
    return this.finishNode(node, "EmptyStatement");
  };
  pp$8.parseLabeledStatement = function(node, maybeName, expr, context) {
    for (var i$1 = 0, list = this.labels; i$1 < list.length; i$1 += 1) {
      var label = list[i$1];
      if (label.name === maybeName) {
        this.raise(expr.start, "Label '" + maybeName + "' is already declared");
      }
    }
    var kind = this.type.isLoop ? "loop" : this.type === types$1._switch ? "switch" : null;
    for (var i = this.labels.length - 1; i >= 0; i--) {
      var label$1 = this.labels[i];
      if (label$1.statementStart === node.start) {
        label$1.statementStart = this.start;
        label$1.kind = kind;
      } else {
        break;
      }
    }
    this.labels.push({ name: maybeName, kind, statementStart: this.start });
    node.body = this.parseStatement(context ? context.indexOf("label") === -1 ? context + "label" : context : "label");
    this.labels.pop();
    node.label = expr;
    return this.finishNode(node, "LabeledStatement");
  };
  pp$8.parseExpressionStatement = function(node, expr) {
    node.expression = expr;
    this.semicolon();
    return this.finishNode(node, "ExpressionStatement");
  };
  pp$8.parseBlock = function(createNewLexicalScope, node, exitStrict) {
    if (createNewLexicalScope === void 0) createNewLexicalScope = true;
    if (node === void 0) node = this.startNode();
    node.body = [];
    this.expect(types$1.braceL);
    if (createNewLexicalScope) {
      this.enterScope(0);
    }
    while (this.type !== types$1.braceR) {
      var stmt = this.parseStatement(null);
      node.body.push(stmt);
    }
    if (exitStrict) {
      this.strict = false;
    }
    this.next();
    if (createNewLexicalScope) {
      this.exitScope();
    }
    return this.finishNode(node, "BlockStatement");
  };
  pp$8.parseFor = function(node, init) {
    node.init = init;
    this.expect(types$1.semi);
    node.test = this.type === types$1.semi ? null : this.parseExpression();
    this.expect(types$1.semi);
    node.update = this.type === types$1.parenR ? null : this.parseExpression();
    this.expect(types$1.parenR);
    node.body = this.parseStatement("for");
    this.exitScope();
    this.labels.pop();
    return this.finishNode(node, "ForStatement");
  };
  pp$8.parseForIn = function(node, init) {
    var isForIn = this.type === types$1._in;
    this.next();
    if (init.type === "VariableDeclaration" && init.declarations[0].init != null && (!isForIn || this.options.ecmaVersion < 8 || this.strict || init.kind !== "var" || init.declarations[0].id.type !== "Identifier")) {
      this.raise(
        init.start,
        (isForIn ? "for-in" : "for-of") + " loop variable declaration may not have an initializer"
      );
    }
    node.left = init;
    node.right = isForIn ? this.parseExpression() : this.parseMaybeAssign();
    this.expect(types$1.parenR);
    node.body = this.parseStatement("for");
    this.exitScope();
    this.labels.pop();
    return this.finishNode(node, isForIn ? "ForInStatement" : "ForOfStatement");
  };
  pp$8.parseVar = function(node, isFor, kind, allowMissingInitializer) {
    node.declarations = [];
    node.kind = kind;
    for (; ; ) {
      var decl = this.startNode();
      this.parseVarId(decl, kind);
      if (this.eat(types$1.eq)) {
        decl.init = this.parseMaybeAssign(isFor);
      } else if (!allowMissingInitializer && kind === "const" && !(this.type === types$1._in || this.options.ecmaVersion >= 6 && this.isContextual("of"))) {
        this.unexpected();
      } else if (!allowMissingInitializer && (kind === "using" || kind === "await using") && this.options.ecmaVersion >= 17 && this.type !== types$1._in && !this.isContextual("of")) {
        this.raise(this.lastTokEnd, "Missing initializer in " + kind + " declaration");
      } else if (!allowMissingInitializer && decl.id.type !== "Identifier" && !(isFor && (this.type === types$1._in || this.isContextual("of")))) {
        this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value");
      } else {
        decl.init = null;
      }
      node.declarations.push(this.finishNode(decl, "VariableDeclarator"));
      if (!this.eat(types$1.comma)) {
        break;
      }
    }
    return node;
  };
  pp$8.parseVarId = function(decl, kind) {
    decl.id = kind === "using" || kind === "await using" ? this.parseIdent() : this.parseBindingAtom();
    this.checkLValPattern(decl.id, kind === "var" ? BIND_VAR : BIND_LEXICAL, false);
  };
  var FUNC_STATEMENT = 1;
  var FUNC_HANGING_STATEMENT = 2;
  var FUNC_NULLABLE_ID = 4;
  pp$8.parseFunction = function(node, statement, allowExpressionBody, isAsync, forInit) {
    this.initFunction(node);
    if (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !isAsync) {
      if (this.type === types$1.star && statement & FUNC_HANGING_STATEMENT) {
        this.unexpected();
      }
      node.generator = this.eat(types$1.star);
    }
    if (this.options.ecmaVersion >= 8) {
      node.async = !!isAsync;
    }
    if (statement & FUNC_STATEMENT) {
      node.id = statement & FUNC_NULLABLE_ID && this.type !== types$1.name ? null : this.parseIdent();
      if (node.id && !(statement & FUNC_HANGING_STATEMENT)) {
        this.checkLValSimple(node.id, this.strict || node.generator || node.async ? this.treatFunctionsAsVar ? BIND_VAR : BIND_LEXICAL : BIND_FUNCTION);
      }
    }
    var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
    this.yieldPos = 0;
    this.awaitPos = 0;
    this.awaitIdentPos = 0;
    this.enterScope(functionFlags(node.async, node.generator));
    if (!(statement & FUNC_STATEMENT)) {
      node.id = this.type === types$1.name ? this.parseIdent() : null;
    }
    this.parseFunctionParams(node);
    this.parseFunctionBody(node, allowExpressionBody, false, forInit);
    this.yieldPos = oldYieldPos;
    this.awaitPos = oldAwaitPos;
    this.awaitIdentPos = oldAwaitIdentPos;
    return this.finishNode(node, statement & FUNC_STATEMENT ? "FunctionDeclaration" : "FunctionExpression");
  };
  pp$8.parseFunctionParams = function(node) {
    this.expect(types$1.parenL);
    node.params = this.parseBindingList(types$1.parenR, false, this.options.ecmaVersion >= 8);
    this.checkYieldAwaitInDefaultParams();
  };
  pp$8.parseClass = function(node, isStatement) {
    this.next();
    var oldStrict = this.strict;
    this.strict = true;
    this.parseClassId(node, isStatement);
    this.parseClassSuper(node);
    var privateNameMap = this.enterClassBody();
    var classBody = this.startNode();
    var hadConstructor = false;
    classBody.body = [];
    this.expect(types$1.braceL);
    while (this.type !== types$1.braceR) {
      var element = this.parseClassElement(node.superClass !== null);
      if (element) {
        classBody.body.push(element);
        if (element.type === "MethodDefinition" && element.kind === "constructor") {
          if (hadConstructor) {
            this.raiseRecoverable(element.start, "Duplicate constructor in the same class");
          }
          hadConstructor = true;
        } else if (element.key && element.key.type === "PrivateIdentifier" && isPrivateNameConflicted(privateNameMap, element)) {
          this.raiseRecoverable(element.key.start, "Identifier '#" + element.key.name + "' has already been declared");
        }
      }
    }
    this.strict = oldStrict;
    this.next();
    node.body = this.finishNode(classBody, "ClassBody");
    this.exitClassBody();
    return this.finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression");
  };
  pp$8.parseClassElement = function(constructorAllowsSuper) {
    if (this.eat(types$1.semi)) {
      return null;
    }
    var ecmaVersion = this.options.ecmaVersion;
    var node = this.startNode();
    var keyName = "";
    var isGenerator = false;
    var isAsync = false;
    var kind = "method";
    var isStatic = false;
    if (this.eatContextual("static")) {
      if (ecmaVersion >= 13 && this.eat(types$1.braceL)) {
        this.parseClassStaticBlock(node);
        return node;
      }
      if (this.isClassElementNameStart() || this.type === types$1.star) {
        isStatic = true;
      } else {
        keyName = "static";
      }
    }
    node.static = isStatic;
    if (!keyName && ecmaVersion >= 8 && this.eatContextual("async")) {
      if ((this.isClassElementNameStart() || this.type === types$1.star) && !this.canInsertSemicolon()) {
        isAsync = true;
      } else {
        keyName = "async";
      }
    }
    if (!keyName && (ecmaVersion >= 9 || !isAsync) && this.eat(types$1.star)) {
      isGenerator = true;
    }
    if (!keyName && !isAsync && !isGenerator) {
      var lastValue = this.value;
      if (this.eatContextual("get") || this.eatContextual("set")) {
        if (this.isClassElementNameStart()) {
          kind = lastValue;
        } else {
          keyName = lastValue;
        }
      }
    }
    if (keyName) {
      node.computed = false;
      node.key = this.startNodeAt(this.lastTokStart, this.lastTokStartLoc);
      node.key.name = keyName;
      this.finishNode(node.key, "Identifier");
    } else {
      this.parseClassElementName(node);
    }
    if (ecmaVersion < 13 || this.type === types$1.parenL || kind !== "method" || isGenerator || isAsync) {
      var isConstructor = !node.static && checkKeyName(node, "constructor");
      var allowsDirectSuper = isConstructor && constructorAllowsSuper;
      if (isConstructor && kind !== "method") {
        this.raise(node.key.start, "Constructor can't have get/set modifier");
      }
      node.kind = isConstructor ? "constructor" : kind;
      this.parseClassMethod(node, isGenerator, isAsync, allowsDirectSuper);
    } else {
      this.parseClassField(node);
    }
    return node;
  };
  pp$8.isClassElementNameStart = function() {
    return this.type === types$1.name || this.type === types$1.privateId || this.type === types$1.num || this.type === types$1.string || this.type === types$1.bracketL || this.type.keyword;
  };
  pp$8.parseClassElementName = function(element) {
    if (this.type === types$1.privateId) {
      if (this.value === "constructor") {
        this.raise(this.start, "Classes can't have an element named '#constructor'");
      }
      element.computed = false;
      element.key = this.parsePrivateIdent();
    } else {
      this.parsePropertyName(element);
    }
  };
  pp$8.parseClassMethod = function(method, isGenerator, isAsync, allowsDirectSuper) {
    var key = method.key;
    if (method.kind === "constructor") {
      if (isGenerator) {
        this.raise(key.start, "Constructor can't be a generator");
      }
      if (isAsync) {
        this.raise(key.start, "Constructor can't be an async method");
      }
    } else if (method.static && checkKeyName(method, "prototype")) {
      this.raise(key.start, "Classes may not have a static property named prototype");
    }
    var value = method.value = this.parseMethod(isGenerator, isAsync, allowsDirectSuper);
    if (method.kind === "get" && value.params.length !== 0) {
      this.raiseRecoverable(value.start, "getter should have no params");
    }
    if (method.kind === "set" && value.params.length !== 1) {
      this.raiseRecoverable(value.start, "setter should have exactly one param");
    }
    if (method.kind === "set" && value.params[0].type === "RestElement") {
      this.raiseRecoverable(value.params[0].start, "Setter cannot use rest params");
    }
    return this.finishNode(method, "MethodDefinition");
  };
  pp$8.parseClassField = function(field) {
    if (checkKeyName(field, "constructor")) {
      this.raise(field.key.start, "Classes can't have a field named 'constructor'");
    } else if (field.static && checkKeyName(field, "prototype")) {
      this.raise(field.key.start, "Classes can't have a static field named 'prototype'");
    }
    if (this.eat(types$1.eq)) {
      this.enterScope(SCOPE_CLASS_FIELD_INIT | SCOPE_SUPER);
      field.value = this.parseMaybeAssign();
      this.exitScope();
    } else {
      field.value = null;
    }
    this.semicolon();
    return this.finishNode(field, "PropertyDefinition");
  };
  pp$8.parseClassStaticBlock = function(node) {
    node.body = [];
    var oldLabels = this.labels;
    this.labels = [];
    this.enterScope(SCOPE_CLASS_STATIC_BLOCK | SCOPE_SUPER);
    while (this.type !== types$1.braceR) {
      var stmt = this.parseStatement(null);
      node.body.push(stmt);
    }
    this.next();
    this.exitScope();
    this.labels = oldLabels;
    return this.finishNode(node, "StaticBlock");
  };
  pp$8.parseClassId = function(node, isStatement) {
    if (this.type === types$1.name) {
      node.id = this.parseIdent();
      if (isStatement) {
        this.checkLValSimple(node.id, BIND_LEXICAL, false);
      }
    } else {
      if (isStatement === true) {
        this.unexpected();
      }
      node.id = null;
    }
  };
  pp$8.parseClassSuper = function(node) {
    node.superClass = this.eat(types$1._extends) ? this.parseExprSubscripts(null, false) : null;
  };
  pp$8.enterClassBody = function() {
    var element = { declared: /* @__PURE__ */ Object.create(null), used: [] };
    this.privateNameStack.push(element);
    return element.declared;
  };
  pp$8.exitClassBody = function() {
    var ref2 = this.privateNameStack.pop();
    var declared = ref2.declared;
    var used = ref2.used;
    if (!this.options.checkPrivateFields) {
      return;
    }
    var len = this.privateNameStack.length;
    var parent = len === 0 ? null : this.privateNameStack[len - 1];
    for (var i = 0; i < used.length; ++i) {
      var id = used[i];
      if (!hasOwn(declared, id.name)) {
        if (parent) {
          parent.used.push(id);
        } else {
          this.raiseRecoverable(id.start, "Private field '#" + id.name + "' must be declared in an enclosing class");
        }
      }
    }
  };
  function isPrivateNameConflicted(privateNameMap, element) {
    var name = element.key.name;
    var curr = privateNameMap[name];
    var next = "true";
    if (element.type === "MethodDefinition" && (element.kind === "get" || element.kind === "set")) {
      next = (element.static ? "s" : "i") + element.kind;
    }
    if (curr === "iget" && next === "iset" || curr === "iset" && next === "iget" || curr === "sget" && next === "sset" || curr === "sset" && next === "sget") {
      privateNameMap[name] = "true";
      return false;
    } else if (!curr) {
      privateNameMap[name] = next;
      return false;
    } else {
      return true;
    }
  }
  function checkKeyName(node, name) {
    var computed = node.computed;
    var key = node.key;
    return !computed && (key.type === "Identifier" && key.name === name || key.type === "Literal" && key.value === name);
  }
  pp$8.parseExportAllDeclaration = function(node, exports) {
    if (this.options.ecmaVersion >= 11) {
      if (this.eatContextual("as")) {
        node.exported = this.parseModuleExportName();
        this.checkExport(exports, node.exported, this.lastTokStart);
      } else {
        node.exported = null;
      }
    }
    this.expectContextual("from");
    if (this.type !== types$1.string) {
      this.unexpected();
    }
    node.source = this.parseExprAtom();
    if (this.options.ecmaVersion >= 16) {
      node.attributes = this.parseWithClause();
    }
    this.semicolon();
    return this.finishNode(node, "ExportAllDeclaration");
  };
  pp$8.parseExport = function(node, exports) {
    this.next();
    if (this.eat(types$1.star)) {
      return this.parseExportAllDeclaration(node, exports);
    }
    if (this.eat(types$1._default)) {
      this.checkExport(exports, "default", this.lastTokStart);
      node.declaration = this.parseExportDefaultDeclaration();
      return this.finishNode(node, "ExportDefaultDeclaration");
    }
    if (this.shouldParseExportStatement()) {
      node.declaration = this.parseExportDeclaration(node);
      if (node.declaration.type === "VariableDeclaration") {
        this.checkVariableExport(exports, node.declaration.declarations);
      } else {
        this.checkExport(exports, node.declaration.id, node.declaration.id.start);
      }
      node.specifiers = [];
      node.source = null;
      if (this.options.ecmaVersion >= 16) {
        node.attributes = [];
      }
    } else {
      node.declaration = null;
      node.specifiers = this.parseExportSpecifiers(exports);
      if (this.eatContextual("from")) {
        if (this.type !== types$1.string) {
          this.unexpected();
        }
        node.source = this.parseExprAtom();
        if (this.options.ecmaVersion >= 16) {
          node.attributes = this.parseWithClause();
        }
      } else {
        for (var i = 0, list = node.specifiers; i < list.length; i += 1) {
          var spec = list[i];
          this.checkUnreserved(spec.local);
          this.checkLocalExport(spec.local);
          if (spec.local.type === "Literal") {
            this.raise(spec.local.start, "A string literal cannot be used as an exported binding without `from`.");
          }
        }
        node.source = null;
        if (this.options.ecmaVersion >= 16) {
          node.attributes = [];
        }
      }
      this.semicolon();
    }
    return this.finishNode(node, "ExportNamedDeclaration");
  };
  pp$8.parseExportDeclaration = function(node) {
    return this.parseStatement(null);
  };
  pp$8.parseExportDefaultDeclaration = function() {
    var isAsync;
    if (this.type === types$1._function || (isAsync = this.isAsyncFunction())) {
      var fNode = this.startNode();
      this.next();
      if (isAsync) {
        this.next();
      }
      return this.parseFunction(fNode, FUNC_STATEMENT | FUNC_NULLABLE_ID, false, isAsync);
    } else if (this.type === types$1._class) {
      var cNode = this.startNode();
      return this.parseClass(cNode, "nullableID");
    } else {
      var declaration = this.parseMaybeAssign();
      this.semicolon();
      return declaration;
    }
  };
  pp$8.checkExport = function(exports, name, pos) {
    if (!exports) {
      return;
    }
    if (typeof name !== "string") {
      name = name.type === "Identifier" ? name.name : name.value;
    }
    if (hasOwn(exports, name)) {
      this.raiseRecoverable(pos, "Duplicate export '" + name + "'");
    }
    exports[name] = true;
  };
  pp$8.checkPatternExport = function(exports, pat) {
    var type = pat.type;
    if (type === "Identifier") {
      this.checkExport(exports, pat, pat.start);
    } else if (type === "ObjectPattern") {
      for (var i = 0, list = pat.properties; i < list.length; i += 1) {
        var prop = list[i];
        this.checkPatternExport(exports, prop);
      }
    } else if (type === "ArrayPattern") {
      for (var i$1 = 0, list$1 = pat.elements; i$1 < list$1.length; i$1 += 1) {
        var elt = list$1[i$1];
        if (elt) {
          this.checkPatternExport(exports, elt);
        }
      }
    } else if (type === "Property") {
      this.checkPatternExport(exports, pat.value);
    } else if (type === "AssignmentPattern") {
      this.checkPatternExport(exports, pat.left);
    } else if (type === "RestElement") {
      this.checkPatternExport(exports, pat.argument);
    }
  };
  pp$8.checkVariableExport = function(exports, decls) {
    if (!exports) {
      return;
    }
    for (var i = 0, list = decls; i < list.length; i += 1) {
      var decl = list[i];
      this.checkPatternExport(exports, decl.id);
    }
  };
  pp$8.shouldParseExportStatement = function() {
    return this.type.keyword === "var" || this.type.keyword === "const" || this.type.keyword === "class" || this.type.keyword === "function" || this.isLet() || this.isAsyncFunction();
  };
  pp$8.parseExportSpecifier = function(exports) {
    var node = this.startNode();
    node.local = this.parseModuleExportName();
    node.exported = this.eatContextual("as") ? this.parseModuleExportName() : node.local;
    this.checkExport(
      exports,
      node.exported,
      node.exported.start
    );
    return this.finishNode(node, "ExportSpecifier");
  };
  pp$8.parseExportSpecifiers = function(exports) {
    var nodes = [], first = true;
    this.expect(types$1.braceL);
    while (!this.eat(types$1.braceR)) {
      if (!first) {
        this.expect(types$1.comma);
        if (this.afterTrailingComma(types$1.braceR)) {
          break;
        }
      } else {
        first = false;
      }
      nodes.push(this.parseExportSpecifier(exports));
    }
    return nodes;
  };
  pp$8.parseImport = function(node) {
    this.next();
    if (this.type === types$1.string) {
      node.specifiers = empty$1;
      node.source = this.parseExprAtom();
    } else {
      node.specifiers = this.parseImportSpecifiers();
      this.expectContextual("from");
      node.source = this.type === types$1.string ? this.parseExprAtom() : this.unexpected();
    }
    if (this.options.ecmaVersion >= 16) {
      node.attributes = this.parseWithClause();
    }
    this.semicolon();
    return this.finishNode(node, "ImportDeclaration");
  };
  pp$8.parseImportSpecifier = function() {
    var node = this.startNode();
    node.imported = this.parseModuleExportName();
    if (this.eatContextual("as")) {
      node.local = this.parseIdent();
    } else {
      this.checkUnreserved(node.imported);
      node.local = node.imported;
    }
    this.checkLValSimple(node.local, BIND_LEXICAL);
    return this.finishNode(node, "ImportSpecifier");
  };
  pp$8.parseImportDefaultSpecifier = function() {
    var node = this.startNode();
    node.local = this.parseIdent();
    this.checkLValSimple(node.local, BIND_LEXICAL);
    return this.finishNode(node, "ImportDefaultSpecifier");
  };
  pp$8.parseImportNamespaceSpecifier = function() {
    var node = this.startNode();
    this.next();
    this.expectContextual("as");
    node.local = this.parseIdent();
    this.checkLValSimple(node.local, BIND_LEXICAL);
    return this.finishNode(node, "ImportNamespaceSpecifier");
  };
  pp$8.parseImportSpecifiers = function() {
    var nodes = [], first = true;
    if (this.type === types$1.name) {
      nodes.push(this.parseImportDefaultSpecifier());
      if (!this.eat(types$1.comma)) {
        return nodes;
      }
    }
    if (this.type === types$1.star) {
      nodes.push(this.parseImportNamespaceSpecifier());
      return nodes;
    }
    this.expect(types$1.braceL);
    while (!this.eat(types$1.braceR)) {
      if (!first) {
        this.expect(types$1.comma);
        if (this.afterTrailingComma(types$1.braceR)) {
          break;
        }
      } else {
        first = false;
      }
      nodes.push(this.parseImportSpecifier());
    }
    return nodes;
  };
  pp$8.parseWithClause = function() {
    var nodes = [];
    if (!this.eat(types$1._with)) {
      return nodes;
    }
    this.expect(types$1.braceL);
    var attributeKeys = {};
    var first = true;
    while (!this.eat(types$1.braceR)) {
      if (!first) {
        this.expect(types$1.comma);
        if (this.afterTrailingComma(types$1.braceR)) {
          break;
        }
      } else {
        first = false;
      }
      var attr = this.parseImportAttribute();
      var keyName = attr.key.type === "Identifier" ? attr.key.name : attr.key.value;
      if (hasOwn(attributeKeys, keyName)) {
        this.raiseRecoverable(attr.key.start, "Duplicate attribute key '" + keyName + "'");
      }
      attributeKeys[keyName] = true;
      nodes.push(attr);
    }
    return nodes;
  };
  pp$8.parseImportAttribute = function() {
    var node = this.startNode();
    node.key = this.type === types$1.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
    this.expect(types$1.colon);
    if (this.type !== types$1.string) {
      this.unexpected();
    }
    node.value = this.parseExprAtom();
    return this.finishNode(node, "ImportAttribute");
  };
  pp$8.parseModuleExportName = function() {
    if (this.options.ecmaVersion >= 13 && this.type === types$1.string) {
      var stringLiteral = this.parseLiteral(this.value);
      if (loneSurrogate.test(stringLiteral.value)) {
        this.raise(stringLiteral.start, "An export name cannot include a lone surrogate.");
      }
      return stringLiteral;
    }
    return this.parseIdent(true);
  };
  pp$8.adaptDirectivePrologue = function(statements) {
    for (var i = 0; i < statements.length && this.isDirectiveCandidate(statements[i]); ++i) {
      statements[i].directive = statements[i].expression.raw.slice(1, -1);
    }
  };
  pp$8.isDirectiveCandidate = function(statement) {
    return this.options.ecmaVersion >= 5 && statement.type === "ExpressionStatement" && statement.expression.type === "Literal" && typeof statement.expression.value === "string" && // Reject parenthesized strings.
    (this.input[statement.start] === '"' || this.input[statement.start] === "'");
  };
  var pp$7 = Parser.prototype;
  pp$7.toAssignable = function(node, isBinding, refDestructuringErrors) {
    if (this.options.ecmaVersion >= 6 && node) {
      switch (node.type) {
        case "Identifier":
          if (this.inAsync && node.name === "await") {
            this.raise(node.start, "Cannot use 'await' as identifier inside an async function");
          }
          break;
        case "ObjectPattern":
        case "ArrayPattern":
        case "AssignmentPattern":
        case "RestElement":
          break;
        case "ObjectExpression":
          node.type = "ObjectPattern";
          if (refDestructuringErrors) {
            this.checkPatternErrors(refDestructuringErrors, true);
          }
          for (var i = 0, list = node.properties; i < list.length; i += 1) {
            var prop = list[i];
            this.toAssignable(prop, isBinding);
            if (prop.type === "RestElement" && (prop.argument.type === "ArrayPattern" || prop.argument.type === "ObjectPattern")) {
              this.raise(prop.argument.start, "Unexpected token");
            }
          }
          break;
        case "Property":
          if (node.kind !== "init") {
            this.raise(node.key.start, "Object pattern can't contain getter or setter");
          }
          this.toAssignable(node.value, isBinding);
          break;
        case "ArrayExpression":
          node.type = "ArrayPattern";
          if (refDestructuringErrors) {
            this.checkPatternErrors(refDestructuringErrors, true);
          }
          this.toAssignableList(node.elements, isBinding);
          break;
        case "SpreadElement":
          node.type = "RestElement";
          this.toAssignable(node.argument, isBinding);
          if (node.argument.type === "AssignmentPattern") {
            this.raise(node.argument.start, "Rest elements cannot have a default value");
          }
          break;
        case "AssignmentExpression":
          if (node.operator !== "=") {
            this.raise(node.left.end, "Only '=' operator can be used for specifying default value.");
          }
          node.type = "AssignmentPattern";
          delete node.operator;
          this.toAssignable(node.left, isBinding);
          break;
        case "ParenthesizedExpression":
          this.toAssignable(node.expression, isBinding, refDestructuringErrors);
          break;
        case "ChainExpression":
          this.raiseRecoverable(node.start, "Optional chaining cannot appear in left-hand side");
          break;
        case "MemberExpression":
          if (!isBinding) {
            break;
          }
        default:
          this.raise(node.start, "Assigning to rvalue");
      }
    } else if (refDestructuringErrors) {
      this.checkPatternErrors(refDestructuringErrors, true);
    }
    return node;
  };
  pp$7.toAssignableList = function(exprList, isBinding) {
    var end = exprList.length;
    for (var i = 0; i < end; i++) {
      var elt = exprList[i];
      if (elt) {
        this.toAssignable(elt, isBinding);
      }
    }
    if (end) {
      var last = exprList[end - 1];
      if (this.options.ecmaVersion === 6 && isBinding && last && last.type === "RestElement" && last.argument.type !== "Identifier") {
        this.unexpected(last.argument.start);
      }
    }
    return exprList;
  };
  pp$7.parseSpread = function(refDestructuringErrors) {
    var node = this.startNode();
    this.next();
    node.argument = this.parseMaybeAssign(false, refDestructuringErrors);
    return this.finishNode(node, "SpreadElement");
  };
  pp$7.parseRestBinding = function() {
    var node = this.startNode();
    this.next();
    if (this.options.ecmaVersion === 6 && this.type !== types$1.name) {
      this.unexpected();
    }
    node.argument = this.parseBindingAtom();
    return this.finishNode(node, "RestElement");
  };
  pp$7.parseBindingAtom = function() {
    if (this.options.ecmaVersion >= 6) {
      switch (this.type) {
        case types$1.bracketL:
          var node = this.startNode();
          this.next();
          node.elements = this.parseBindingList(types$1.bracketR, true, true);
          return this.finishNode(node, "ArrayPattern");
        case types$1.braceL:
          return this.parseObj(true);
      }
    }
    return this.parseIdent();
  };
  pp$7.parseBindingList = function(close, allowEmpty, allowTrailingComma, allowModifiers) {
    var elts = [], first = true;
    while (!this.eat(close)) {
      if (first) {
        first = false;
      } else {
        this.expect(types$1.comma);
      }
      if (allowEmpty && this.type === types$1.comma) {
        elts.push(null);
      } else if (allowTrailingComma && this.afterTrailingComma(close)) {
        break;
      } else if (this.type === types$1.ellipsis) {
        var rest = this.parseRestBinding();
        this.parseBindingListItem(rest);
        elts.push(rest);
        if (this.type === types$1.comma) {
          this.raiseRecoverable(this.start, "Comma is not permitted after the rest element");
        }
        this.expect(close);
        break;
      } else {
        elts.push(this.parseAssignableListItem(allowModifiers));
      }
    }
    return elts;
  };
  pp$7.parseAssignableListItem = function(allowModifiers) {
    var elem = this.parseMaybeDefault(this.start, this.startLoc);
    this.parseBindingListItem(elem);
    return elem;
  };
  pp$7.parseBindingListItem = function(param) {
    return param;
  };
  pp$7.parseMaybeDefault = function(startPos, startLoc, left) {
    left = left || this.parseBindingAtom();
    if (this.options.ecmaVersion < 6 || !this.eat(types$1.eq)) {
      return left;
    }
    var node = this.startNodeAt(startPos, startLoc);
    node.left = left;
    node.right = this.parseMaybeAssign();
    return this.finishNode(node, "AssignmentPattern");
  };
  pp$7.checkLValSimple = function(expr, bindingType, checkClashes) {
    if (bindingType === void 0) bindingType = BIND_NONE;
    var isBind = bindingType !== BIND_NONE;
    switch (expr.type) {
      case "Identifier":
        if (this.strict && this.reservedWordsStrictBind.test(expr.name)) {
          this.raiseRecoverable(expr.start, (isBind ? "Binding " : "Assigning to ") + expr.name + " in strict mode");
        }
        if (isBind) {
          if (bindingType === BIND_LEXICAL && expr.name === "let") {
            this.raiseRecoverable(expr.start, "let is disallowed as a lexically bound name");
          }
          if (checkClashes) {
            if (hasOwn(checkClashes, expr.name)) {
              this.raiseRecoverable(expr.start, "Argument name clash");
            }
            checkClashes[expr.name] = true;
          }
          if (bindingType !== BIND_OUTSIDE) {
            this.declareName(expr.name, bindingType, expr.start);
          }
        }
        break;
      case "ChainExpression":
        this.raiseRecoverable(expr.start, "Optional chaining cannot appear in left-hand side");
        break;
      case "MemberExpression":
        if (isBind) {
          this.raiseRecoverable(expr.start, "Binding member expression");
        }
        break;
      case "ParenthesizedExpression":
        if (isBind) {
          this.raiseRecoverable(expr.start, "Binding parenthesized expression");
        }
        return this.checkLValSimple(expr.expression, bindingType, checkClashes);
      default:
        this.raise(expr.start, (isBind ? "Binding" : "Assigning to") + " rvalue");
    }
  };
  pp$7.checkLValPattern = function(expr, bindingType, checkClashes) {
    if (bindingType === void 0) bindingType = BIND_NONE;
    switch (expr.type) {
      case "ObjectPattern":
        for (var i = 0, list = expr.properties; i < list.length; i += 1) {
          var prop = list[i];
          this.checkLValInnerPattern(prop, bindingType, checkClashes);
        }
        break;
      case "ArrayPattern":
        for (var i$1 = 0, list$1 = expr.elements; i$1 < list$1.length; i$1 += 1) {
          var elem = list$1[i$1];
          if (elem) {
            this.checkLValInnerPattern(elem, bindingType, checkClashes);
          }
        }
        break;
      default:
        this.checkLValSimple(expr, bindingType, checkClashes);
    }
  };
  pp$7.checkLValInnerPattern = function(expr, bindingType, checkClashes) {
    if (bindingType === void 0) bindingType = BIND_NONE;
    switch (expr.type) {
      case "Property":
        this.checkLValInnerPattern(expr.value, bindingType, checkClashes);
        break;
      case "AssignmentPattern":
        this.checkLValPattern(expr.left, bindingType, checkClashes);
        break;
      case "RestElement":
        this.checkLValPattern(expr.argument, bindingType, checkClashes);
        break;
      default:
        this.checkLValPattern(expr, bindingType, checkClashes);
    }
  };
  var TokContext = function TokContext2(token, isExpr, preserveSpace, override, generator) {
    this.token = token;
    this.isExpr = !!isExpr;
    this.preserveSpace = !!preserveSpace;
    this.override = override;
    this.generator = !!generator;
  };
  var types = {
    b_stat: new TokContext("{", false),
    b_expr: new TokContext("{", true),
    b_tmpl: new TokContext("${", false),
    p_stat: new TokContext("(", false),
    p_expr: new TokContext("(", true),
    q_tmpl: new TokContext("`", true, true, function(p) {
      return p.tryReadTemplateToken();
    }),
    f_stat: new TokContext("function", false),
    f_expr: new TokContext("function", true),
    f_expr_gen: new TokContext("function", true, false, null, true),
    f_gen: new TokContext("function", false, false, null, true)
  };
  var pp$6 = Parser.prototype;
  pp$6.initialContext = function() {
    return [types.b_stat];
  };
  pp$6.curContext = function() {
    return this.context[this.context.length - 1];
  };
  pp$6.braceIsBlock = function(prevType) {
    var parent = this.curContext();
    if (parent === types.f_expr || parent === types.f_stat) {
      return true;
    }
    if (prevType === types$1.colon && (parent === types.b_stat || parent === types.b_expr)) {
      return !parent.isExpr;
    }
    if (prevType === types$1._return || prevType === types$1.name && this.exprAllowed) {
      return lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
    }
    if (prevType === types$1._else || prevType === types$1.semi || prevType === types$1.eof || prevType === types$1.parenR || prevType === types$1.arrow) {
      return true;
    }
    if (prevType === types$1.braceL) {
      return parent === types.b_stat;
    }
    if (prevType === types$1._var || prevType === types$1._const || prevType === types$1.name) {
      return false;
    }
    return !this.exprAllowed;
  };
  pp$6.inGeneratorContext = function() {
    for (var i = this.context.length - 1; i >= 1; i--) {
      var context = this.context[i];
      if (context.token === "function") {
        return context.generator;
      }
    }
    return false;
  };
  pp$6.updateContext = function(prevType) {
    var update, type = this.type;
    if (type.keyword && prevType === types$1.dot) {
      this.exprAllowed = false;
    } else if (update = type.updateContext) {
      update.call(this, prevType);
    } else {
      this.exprAllowed = type.beforeExpr;
    }
  };
  pp$6.overrideContext = function(tokenCtx) {
    if (this.curContext() !== tokenCtx) {
      this.context[this.context.length - 1] = tokenCtx;
    }
  };
  types$1.parenR.updateContext = types$1.braceR.updateContext = function() {
    if (this.context.length === 1) {
      this.exprAllowed = true;
      return;
    }
    var out = this.context.pop();
    if (out === types.b_stat && this.curContext().token === "function") {
      out = this.context.pop();
    }
    this.exprAllowed = !out.isExpr;
  };
  types$1.braceL.updateContext = function(prevType) {
    this.context.push(this.braceIsBlock(prevType) ? types.b_stat : types.b_expr);
    this.exprAllowed = true;
  };
  types$1.dollarBraceL.updateContext = function() {
    this.context.push(types.b_tmpl);
    this.exprAllowed = true;
  };
  types$1.parenL.updateContext = function(prevType) {
    var statementParens = prevType === types$1._if || prevType === types$1._for || prevType === types$1._with || prevType === types$1._while;
    this.context.push(statementParens ? types.p_stat : types.p_expr);
    this.exprAllowed = true;
  };
  types$1.incDec.updateContext = function() {
  };
  types$1._function.updateContext = types$1._class.updateContext = function(prevType) {
    if (prevType.beforeExpr && prevType !== types$1._else && !(prevType === types$1.semi && this.curContext() !== types.p_stat) && !(prevType === types$1._return && lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) && !((prevType === types$1.colon || prevType === types$1.braceL) && this.curContext() === types.b_stat)) {
      this.context.push(types.f_expr);
    } else {
      this.context.push(types.f_stat);
    }
    this.exprAllowed = false;
  };
  types$1.colon.updateContext = function() {
    if (this.curContext().token === "function") {
      this.context.pop();
    }
    this.exprAllowed = true;
  };
  types$1.backQuote.updateContext = function() {
    if (this.curContext() === types.q_tmpl) {
      this.context.pop();
    } else {
      this.context.push(types.q_tmpl);
    }
    this.exprAllowed = false;
  };
  types$1.star.updateContext = function(prevType) {
    if (prevType === types$1._function) {
      var index = this.context.length - 1;
      if (this.context[index] === types.f_expr) {
        this.context[index] = types.f_expr_gen;
      } else {
        this.context[index] = types.f_gen;
      }
    }
    this.exprAllowed = true;
  };
  types$1.name.updateContext = function(prevType) {
    var allowed = false;
    if (this.options.ecmaVersion >= 6 && prevType !== types$1.dot) {
      if (this.value === "of" && !this.exprAllowed || this.value === "yield" && this.inGeneratorContext()) {
        allowed = true;
      }
    }
    this.exprAllowed = allowed;
  };
  var pp$5 = Parser.prototype;
  pp$5.checkPropClash = function(prop, propHash, refDestructuringErrors) {
    if (this.options.ecmaVersion >= 9 && prop.type === "SpreadElement") {
      return;
    }
    if (this.options.ecmaVersion >= 6 && (prop.computed || prop.method || prop.shorthand)) {
      return;
    }
    var key = prop.key;
    var name;
    switch (key.type) {
      case "Identifier":
        name = key.name;
        break;
      case "Literal":
        name = String(key.value);
        break;
      default:
        return;
    }
    var kind = prop.kind;
    if (this.options.ecmaVersion >= 6) {
      if (name === "__proto__" && kind === "init") {
        if (propHash.proto) {
          if (refDestructuringErrors) {
            if (refDestructuringErrors.doubleProto < 0) {
              refDestructuringErrors.doubleProto = key.start;
            }
          } else {
            this.raiseRecoverable(key.start, "Redefinition of __proto__ property");
          }
        }
        propHash.proto = true;
      }
      return;
    }
    name = "$" + name;
    var other = propHash[name];
    if (other) {
      var redefinition;
      if (kind === "init") {
        redefinition = this.strict && other.init || other.get || other.set;
      } else {
        redefinition = other.init || other[kind];
      }
      if (redefinition) {
        this.raiseRecoverable(key.start, "Redefinition of property");
      }
    } else {
      other = propHash[name] = {
        init: false,
        get: false,
        set: false
      };
    }
    other[kind] = true;
  };
  pp$5.parseExpression = function(forInit, refDestructuringErrors) {
    var startPos = this.start, startLoc = this.startLoc;
    var expr = this.parseMaybeAssign(forInit, refDestructuringErrors);
    if (this.type === types$1.comma) {
      var node = this.startNodeAt(startPos, startLoc);
      node.expressions = [expr];
      while (this.eat(types$1.comma)) {
        node.expressions.push(this.parseMaybeAssign(forInit, refDestructuringErrors));
      }
      return this.finishNode(node, "SequenceExpression");
    }
    return expr;
  };
  pp$5.parseMaybeAssign = function(forInit, refDestructuringErrors, afterLeftParse) {
    if (this.isContextual("yield")) {
      if (this.inGenerator) {
        return this.parseYield(forInit);
      } else {
        this.exprAllowed = false;
      }
    }
    var ownDestructuringErrors = false, oldParenAssign = -1, oldTrailingComma = -1, oldDoubleProto = -1;
    if (refDestructuringErrors) {
      oldParenAssign = refDestructuringErrors.parenthesizedAssign;
      oldTrailingComma = refDestructuringErrors.trailingComma;
      oldDoubleProto = refDestructuringErrors.doubleProto;
      refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = -1;
    } else {
      refDestructuringErrors = new DestructuringErrors();
      ownDestructuringErrors = true;
    }
    var startPos = this.start, startLoc = this.startLoc;
    if (this.type === types$1.parenL || this.type === types$1.name) {
      this.potentialArrowAt = this.start;
      this.potentialArrowInForAwait = forInit === "await";
    }
    var left = this.parseMaybeConditional(forInit, refDestructuringErrors);
    if (afterLeftParse) {
      left = afterLeftParse.call(this, left, startPos, startLoc);
    }
    if (this.type.isAssign) {
      var node = this.startNodeAt(startPos, startLoc);
      node.operator = this.value;
      if (this.type === types$1.eq) {
        left = this.toAssignable(left, false, refDestructuringErrors);
      }
      if (!ownDestructuringErrors) {
        refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = refDestructuringErrors.doubleProto = -1;
      }
      if (refDestructuringErrors.shorthandAssign >= left.start) {
        refDestructuringErrors.shorthandAssign = -1;
      }
      if (this.type === types$1.eq) {
        this.checkLValPattern(left);
      } else {
        this.checkLValSimple(left);
      }
      node.left = left;
      this.next();
      node.right = this.parseMaybeAssign(forInit);
      if (oldDoubleProto > -1) {
        refDestructuringErrors.doubleProto = oldDoubleProto;
      }
      return this.finishNode(node, "AssignmentExpression");
    } else {
      if (ownDestructuringErrors) {
        this.checkExpressionErrors(refDestructuringErrors, true);
      }
    }
    if (oldParenAssign > -1) {
      refDestructuringErrors.parenthesizedAssign = oldParenAssign;
    }
    if (oldTrailingComma > -1) {
      refDestructuringErrors.trailingComma = oldTrailingComma;
    }
    return left;
  };
  pp$5.parseMaybeConditional = function(forInit, refDestructuringErrors) {
    var startPos = this.start, startLoc = this.startLoc;
    var expr = this.parseExprOps(forInit, refDestructuringErrors);
    if (this.checkExpressionErrors(refDestructuringErrors)) {
      return expr;
    }
    if (this.eat(types$1.question)) {
      var node = this.startNodeAt(startPos, startLoc);
      node.test = expr;
      node.consequent = this.parseMaybeAssign();
      this.expect(types$1.colon);
      node.alternate = this.parseMaybeAssign(forInit);
      return this.finishNode(node, "ConditionalExpression");
    }
    return expr;
  };
  pp$5.parseExprOps = function(forInit, refDestructuringErrors) {
    var startPos = this.start, startLoc = this.startLoc;
    var expr = this.parseMaybeUnary(refDestructuringErrors, false, false, forInit);
    if (this.checkExpressionErrors(refDestructuringErrors)) {
      return expr;
    }
    return expr.start === startPos && expr.type === "ArrowFunctionExpression" ? expr : this.parseExprOp(expr, startPos, startLoc, -1, forInit);
  };
  pp$5.parseExprOp = function(left, leftStartPos, leftStartLoc, minPrec, forInit) {
    var prec = this.type.binop;
    if (prec != null && (!forInit || this.type !== types$1._in)) {
      if (prec > minPrec) {
        var logical = this.type === types$1.logicalOR || this.type === types$1.logicalAND;
        var coalesce = this.type === types$1.coalesce;
        if (coalesce) {
          prec = types$1.logicalAND.binop;
        }
        var op = this.value;
        this.next();
        var startPos = this.start, startLoc = this.startLoc;
        var right = this.parseExprOp(this.parseMaybeUnary(null, false, false, forInit), startPos, startLoc, prec, forInit);
        var node = this.buildBinary(leftStartPos, leftStartLoc, left, right, op, logical || coalesce);
        if (logical && this.type === types$1.coalesce || coalesce && (this.type === types$1.logicalOR || this.type === types$1.logicalAND)) {
          this.raiseRecoverable(this.start, "Logical expressions and coalesce expressions cannot be mixed. Wrap either by parentheses");
        }
        return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec, forInit);
      }
    }
    return left;
  };
  pp$5.buildBinary = function(startPos, startLoc, left, right, op, logical) {
    if (right.type === "PrivateIdentifier") {
      this.raise(right.start, "Private identifier can only be left side of binary expression");
    }
    var node = this.startNodeAt(startPos, startLoc);
    node.left = left;
    node.operator = op;
    node.right = right;
    return this.finishNode(node, logical ? "LogicalExpression" : "BinaryExpression");
  };
  pp$5.parseMaybeUnary = function(refDestructuringErrors, sawUnary, incDec, forInit) {
    var startPos = this.start, startLoc = this.startLoc, expr;
    if (this.isContextual("await") && this.canAwait) {
      expr = this.parseAwait(forInit);
      sawUnary = true;
    } else if (this.type.prefix) {
      var node = this.startNode(), update = this.type === types$1.incDec;
      node.operator = this.value;
      node.prefix = true;
      this.next();
      node.argument = this.parseMaybeUnary(null, true, update, forInit);
      this.checkExpressionErrors(refDestructuringErrors, true);
      if (update) {
        this.checkLValSimple(node.argument);
      } else if (this.strict && node.operator === "delete" && isLocalVariableAccess(node.argument)) {
        this.raiseRecoverable(node.start, "Deleting local variable in strict mode");
      } else if (node.operator === "delete" && isPrivateFieldAccess(node.argument)) {
        this.raiseRecoverable(node.start, "Private fields can not be deleted");
      } else {
        sawUnary = true;
      }
      expr = this.finishNode(node, update ? "UpdateExpression" : "UnaryExpression");
    } else if (!sawUnary && this.type === types$1.privateId) {
      if ((forInit || this.privateNameStack.length === 0) && this.options.checkPrivateFields) {
        this.unexpected();
      }
      expr = this.parsePrivateIdent();
      if (this.type !== types$1._in) {
        this.unexpected();
      }
    } else {
      expr = this.parseExprSubscripts(refDestructuringErrors, forInit);
      if (this.checkExpressionErrors(refDestructuringErrors)) {
        return expr;
      }
      while (this.type.postfix && !this.canInsertSemicolon()) {
        var node$1 = this.startNodeAt(startPos, startLoc);
        node$1.operator = this.value;
        node$1.prefix = false;
        node$1.argument = expr;
        this.checkLValSimple(expr);
        this.next();
        expr = this.finishNode(node$1, "UpdateExpression");
      }
    }
    if (!incDec && this.eat(types$1.starstar)) {
      if (sawUnary) {
        this.unexpected(this.lastTokStart);
      } else {
        return this.buildBinary(startPos, startLoc, expr, this.parseMaybeUnary(null, false, false, forInit), "**", false);
      }
    } else {
      return expr;
    }
  };
  function isLocalVariableAccess(node) {
    return node.type === "Identifier" || node.type === "ParenthesizedExpression" && isLocalVariableAccess(node.expression);
  }
  function isPrivateFieldAccess(node) {
    return node.type === "MemberExpression" && node.property.type === "PrivateIdentifier" || node.type === "ChainExpression" && isPrivateFieldAccess(node.expression) || node.type === "ParenthesizedExpression" && isPrivateFieldAccess(node.expression);
  }
  pp$5.parseExprSubscripts = function(refDestructuringErrors, forInit) {
    var startPos = this.start, startLoc = this.startLoc;
    var expr = this.parseExprAtom(refDestructuringErrors, forInit);
    if (expr.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")") {
      return expr;
    }
    var result = this.parseSubscripts(expr, startPos, startLoc, false, forInit);
    if (refDestructuringErrors && result.type === "MemberExpression") {
      if (refDestructuringErrors.parenthesizedAssign >= result.start) {
        refDestructuringErrors.parenthesizedAssign = -1;
      }
      if (refDestructuringErrors.parenthesizedBind >= result.start) {
        refDestructuringErrors.parenthesizedBind = -1;
      }
      if (refDestructuringErrors.trailingComma >= result.start) {
        refDestructuringErrors.trailingComma = -1;
      }
    }
    return result;
  };
  pp$5.parseSubscripts = function(base2, startPos, startLoc, noCalls, forInit) {
    var maybeAsyncArrow = this.options.ecmaVersion >= 8 && base2.type === "Identifier" && base2.name === "async" && this.lastTokEnd === base2.end && !this.canInsertSemicolon() && base2.end - base2.start === 5 && this.potentialArrowAt === base2.start;
    var optionalChained = false;
    while (true) {
      var element = this.parseSubscript(base2, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained, forInit);
      if (element.optional) {
        optionalChained = true;
      }
      if (element === base2 || element.type === "ArrowFunctionExpression") {
        if (optionalChained) {
          var chainNode = this.startNodeAt(startPos, startLoc);
          chainNode.expression = element;
          element = this.finishNode(chainNode, "ChainExpression");
        }
        return element;
      }
      base2 = element;
    }
  };
  pp$5.shouldParseAsyncArrow = function() {
    return !this.canInsertSemicolon() && this.eat(types$1.arrow);
  };
  pp$5.parseSubscriptAsyncArrow = function(startPos, startLoc, exprList, forInit) {
    return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList, true, forInit);
  };
  pp$5.parseSubscript = function(base2, startPos, startLoc, noCalls, maybeAsyncArrow, optionalChained, forInit) {
    var optionalSupported = this.options.ecmaVersion >= 11;
    var optional = optionalSupported && this.eat(types$1.questionDot);
    if (noCalls && optional) {
      this.raise(this.lastTokStart, "Optional chaining cannot appear in the callee of new expressions");
    }
    var computed = this.eat(types$1.bracketL);
    if (computed || optional && this.type !== types$1.parenL && this.type !== types$1.backQuote || this.eat(types$1.dot)) {
      var node = this.startNodeAt(startPos, startLoc);
      node.object = base2;
      if (computed) {
        node.property = this.parseExpression();
        this.expect(types$1.bracketR);
      } else if (this.type === types$1.privateId && base2.type !== "Super") {
        node.property = this.parsePrivateIdent();
      } else {
        node.property = this.parseIdent(this.options.allowReserved !== "never");
      }
      node.computed = !!computed;
      if (optionalSupported) {
        node.optional = optional;
      }
      base2 = this.finishNode(node, "MemberExpression");
    } else if (!noCalls && this.eat(types$1.parenL)) {
      var refDestructuringErrors = new DestructuringErrors(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
      this.yieldPos = 0;
      this.awaitPos = 0;
      this.awaitIdentPos = 0;
      var exprList = this.parseExprList(types$1.parenR, this.options.ecmaVersion >= 8, false, refDestructuringErrors);
      if (maybeAsyncArrow && !optional && this.shouldParseAsyncArrow()) {
        this.checkPatternErrors(refDestructuringErrors, false);
        this.checkYieldAwaitInDefaultParams();
        if (this.awaitIdentPos > 0) {
          this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function");
        }
        this.yieldPos = oldYieldPos;
        this.awaitPos = oldAwaitPos;
        this.awaitIdentPos = oldAwaitIdentPos;
        return this.parseSubscriptAsyncArrow(startPos, startLoc, exprList, forInit);
      }
      this.checkExpressionErrors(refDestructuringErrors, true);
      this.yieldPos = oldYieldPos || this.yieldPos;
      this.awaitPos = oldAwaitPos || this.awaitPos;
      this.awaitIdentPos = oldAwaitIdentPos || this.awaitIdentPos;
      var node$1 = this.startNodeAt(startPos, startLoc);
      node$1.callee = base2;
      node$1.arguments = exprList;
      if (optionalSupported) {
        node$1.optional = optional;
      }
      base2 = this.finishNode(node$1, "CallExpression");
    } else if (this.type === types$1.backQuote) {
      if (optional || optionalChained) {
        this.raise(this.start, "Optional chaining cannot appear in the tag of tagged template expressions");
      }
      var node$2 = this.startNodeAt(startPos, startLoc);
      node$2.tag = base2;
      node$2.quasi = this.parseTemplate({ isTagged: true });
      base2 = this.finishNode(node$2, "TaggedTemplateExpression");
    }
    return base2;
  };
  pp$5.parseExprAtom = function(refDestructuringErrors, forInit, forNew) {
    if (this.type === types$1.slash) {
      this.readRegexp();
    }
    var node, canBeArrow = this.potentialArrowAt === this.start;
    switch (this.type) {
      case types$1._super:
        if (!this.allowSuper) {
          this.raise(this.start, "'super' keyword outside a method");
        }
        node = this.startNode();
        this.next();
        if (this.type === types$1.parenL && !this.allowDirectSuper) {
          this.raise(node.start, "super() call outside constructor of a subclass");
        }
        if (this.type !== types$1.dot && this.type !== types$1.bracketL && this.type !== types$1.parenL) {
          this.unexpected();
        }
        return this.finishNode(node, "Super");
      case types$1._this:
        node = this.startNode();
        this.next();
        return this.finishNode(node, "ThisExpression");
      case types$1.name:
        var startPos = this.start, startLoc = this.startLoc, containsEsc = this.containsEsc;
        var id = this.parseIdent(false);
        if (this.options.ecmaVersion >= 8 && !containsEsc && id.name === "async" && !this.canInsertSemicolon() && this.eat(types$1._function)) {
          this.overrideContext(types.f_expr);
          return this.parseFunction(this.startNodeAt(startPos, startLoc), 0, false, true, forInit);
        }
        if (canBeArrow && !this.canInsertSemicolon()) {
          if (this.eat(types$1.arrow)) {
            return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], false, forInit);
          }
          if (this.options.ecmaVersion >= 8 && id.name === "async" && this.type === types$1.name && !containsEsc && (!this.potentialArrowInForAwait || this.value !== "of" || this.containsEsc)) {
            id = this.parseIdent(false);
            if (this.canInsertSemicolon() || !this.eat(types$1.arrow)) {
              this.unexpected();
            }
            return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], true, forInit);
          }
        }
        return id;
      case types$1.regexp:
        var value = this.value;
        node = this.parseLiteral(value.value);
        node.regex = { pattern: value.pattern, flags: value.flags };
        return node;
      case types$1.num:
      case types$1.string:
        return this.parseLiteral(this.value);
      case types$1._null:
      case types$1._true:
      case types$1._false:
        node = this.startNode();
        node.value = this.type === types$1._null ? null : this.type === types$1._true;
        node.raw = this.type.keyword;
        this.next();
        return this.finishNode(node, "Literal");
      case types$1.parenL:
        var start = this.start, expr = this.parseParenAndDistinguishExpression(canBeArrow, forInit);
        if (refDestructuringErrors) {
          if (refDestructuringErrors.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(expr)) {
            refDestructuringErrors.parenthesizedAssign = start;
          }
          if (refDestructuringErrors.parenthesizedBind < 0) {
            refDestructuringErrors.parenthesizedBind = start;
          }
        }
        return expr;
      case types$1.bracketL:
        node = this.startNode();
        this.next();
        node.elements = this.parseExprList(types$1.bracketR, true, true, refDestructuringErrors);
        return this.finishNode(node, "ArrayExpression");
      case types$1.braceL:
        this.overrideContext(types.b_expr);
        return this.parseObj(false, refDestructuringErrors);
      case types$1._function:
        node = this.startNode();
        this.next();
        return this.parseFunction(node, 0);
      case types$1._class:
        return this.parseClass(this.startNode(), false);
      case types$1._new:
        return this.parseNew();
      case types$1.backQuote:
        return this.parseTemplate();
      case types$1._import:
        if (this.options.ecmaVersion >= 11) {
          return this.parseExprImport(forNew);
        } else {
          return this.unexpected();
        }
      default:
        return this.parseExprAtomDefault();
    }
  };
  pp$5.parseExprAtomDefault = function() {
    this.unexpected();
  };
  pp$5.parseExprImport = function(forNew) {
    var node = this.startNode();
    if (this.containsEsc) {
      this.raiseRecoverable(this.start, "Escape sequence in keyword import");
    }
    this.next();
    if (this.type === types$1.parenL && !forNew) {
      return this.parseDynamicImport(node);
    } else if (this.type === types$1.dot) {
      var meta = this.startNodeAt(node.start, node.loc && node.loc.start);
      meta.name = "import";
      node.meta = this.finishNode(meta, "Identifier");
      return this.parseImportMeta(node);
    } else {
      this.unexpected();
    }
  };
  pp$5.parseDynamicImport = function(node) {
    this.next();
    node.source = this.parseMaybeAssign();
    if (this.options.ecmaVersion >= 16) {
      if (!this.eat(types$1.parenR)) {
        this.expect(types$1.comma);
        if (!this.afterTrailingComma(types$1.parenR)) {
          node.options = this.parseMaybeAssign();
          if (!this.eat(types$1.parenR)) {
            this.expect(types$1.comma);
            if (!this.afterTrailingComma(types$1.parenR)) {
              this.unexpected();
            }
          }
        } else {
          node.options = null;
        }
      } else {
        node.options = null;
      }
    } else {
      if (!this.eat(types$1.parenR)) {
        var errorPos = this.start;
        if (this.eat(types$1.comma) && this.eat(types$1.parenR)) {
          this.raiseRecoverable(errorPos, "Trailing comma is not allowed in import()");
        } else {
          this.unexpected(errorPos);
        }
      }
    }
    return this.finishNode(node, "ImportExpression");
  };
  pp$5.parseImportMeta = function(node) {
    this.next();
    var containsEsc = this.containsEsc;
    node.property = this.parseIdent(true);
    if (node.property.name !== "meta") {
      this.raiseRecoverable(node.property.start, "The only valid meta property for import is 'import.meta'");
    }
    if (containsEsc) {
      this.raiseRecoverable(node.start, "'import.meta' must not contain escaped characters");
    }
    if (this.options.sourceType !== "module" && !this.options.allowImportExportEverywhere) {
      this.raiseRecoverable(node.start, "Cannot use 'import.meta' outside a module");
    }
    return this.finishNode(node, "MetaProperty");
  };
  pp$5.parseLiteral = function(value) {
    var node = this.startNode();
    node.value = value;
    node.raw = this.input.slice(this.start, this.end);
    if (node.raw.charCodeAt(node.raw.length - 1) === 110) {
      node.bigint = node.value != null ? node.value.toString() : node.raw.slice(0, -1).replace(/_/g, "");
    }
    this.next();
    return this.finishNode(node, "Literal");
  };
  pp$5.parseParenExpression = function() {
    this.expect(types$1.parenL);
    var val = this.parseExpression();
    this.expect(types$1.parenR);
    return val;
  };
  pp$5.shouldParseArrow = function(exprList) {
    return !this.canInsertSemicolon();
  };
  pp$5.parseParenAndDistinguishExpression = function(canBeArrow, forInit) {
    var startPos = this.start, startLoc = this.startLoc, val, allowTrailingComma = this.options.ecmaVersion >= 8;
    if (this.options.ecmaVersion >= 6) {
      this.next();
      var innerStartPos = this.start, innerStartLoc = this.startLoc;
      var exprList = [], first = true, lastIsComma = false;
      var refDestructuringErrors = new DestructuringErrors(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, spreadStart;
      this.yieldPos = 0;
      this.awaitPos = 0;
      while (this.type !== types$1.parenR) {
        first ? first = false : this.expect(types$1.comma);
        if (allowTrailingComma && this.afterTrailingComma(types$1.parenR, true)) {
          lastIsComma = true;
          break;
        } else if (this.type === types$1.ellipsis) {
          spreadStart = this.start;
          exprList.push(this.parseParenItem(this.parseRestBinding()));
          if (this.type === types$1.comma) {
            this.raiseRecoverable(
              this.start,
              "Comma is not permitted after the rest element"
            );
          }
          break;
        } else {
          exprList.push(this.parseMaybeAssign(false, refDestructuringErrors, this.parseParenItem));
        }
      }
      var innerEndPos = this.lastTokEnd, innerEndLoc = this.lastTokEndLoc;
      this.expect(types$1.parenR);
      if (canBeArrow && this.shouldParseArrow(exprList) && this.eat(types$1.arrow)) {
        this.checkPatternErrors(refDestructuringErrors, false);
        this.checkYieldAwaitInDefaultParams();
        this.yieldPos = oldYieldPos;
        this.awaitPos = oldAwaitPos;
        return this.parseParenArrowList(startPos, startLoc, exprList, forInit);
      }
      if (!exprList.length || lastIsComma) {
        this.unexpected(this.lastTokStart);
      }
      if (spreadStart) {
        this.unexpected(spreadStart);
      }
      this.checkExpressionErrors(refDestructuringErrors, true);
      this.yieldPos = oldYieldPos || this.yieldPos;
      this.awaitPos = oldAwaitPos || this.awaitPos;
      if (exprList.length > 1) {
        val = this.startNodeAt(innerStartPos, innerStartLoc);
        val.expressions = exprList;
        this.finishNodeAt(val, "SequenceExpression", innerEndPos, innerEndLoc);
      } else {
        val = exprList[0];
      }
    } else {
      val = this.parseParenExpression();
    }
    if (this.options.preserveParens) {
      var par = this.startNodeAt(startPos, startLoc);
      par.expression = val;
      return this.finishNode(par, "ParenthesizedExpression");
    } else {
      return val;
    }
  };
  pp$5.parseParenItem = function(item) {
    return item;
  };
  pp$5.parseParenArrowList = function(startPos, startLoc, exprList, forInit) {
    return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList, false, forInit);
  };
  var empty = [];
  pp$5.parseNew = function() {
    if (this.containsEsc) {
      this.raiseRecoverable(this.start, "Escape sequence in keyword new");
    }
    var node = this.startNode();
    this.next();
    if (this.options.ecmaVersion >= 6 && this.type === types$1.dot) {
      var meta = this.startNodeAt(node.start, node.loc && node.loc.start);
      meta.name = "new";
      node.meta = this.finishNode(meta, "Identifier");
      this.next();
      var containsEsc = this.containsEsc;
      node.property = this.parseIdent(true);
      if (node.property.name !== "target") {
        this.raiseRecoverable(node.property.start, "The only valid meta property for new is 'new.target'");
      }
      if (containsEsc) {
        this.raiseRecoverable(node.start, "'new.target' must not contain escaped characters");
      }
      if (!this.allowNewDotTarget) {
        this.raiseRecoverable(node.start, "'new.target' can only be used in functions and class static block");
      }
      return this.finishNode(node, "MetaProperty");
    }
    var startPos = this.start, startLoc = this.startLoc;
    node.callee = this.parseSubscripts(this.parseExprAtom(null, false, true), startPos, startLoc, true, false);
    if (this.eat(types$1.parenL)) {
      node.arguments = this.parseExprList(types$1.parenR, this.options.ecmaVersion >= 8, false);
    } else {
      node.arguments = empty;
    }
    return this.finishNode(node, "NewExpression");
  };
  pp$5.parseTemplateElement = function(ref2) {
    var isTagged = ref2.isTagged;
    var elem = this.startNode();
    if (this.type === types$1.invalidTemplate) {
      if (!isTagged) {
        this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal");
      }
      elem.value = {
        raw: this.value.replace(/\r\n?/g, "\n"),
        cooked: null
      };
    } else {
      elem.value = {
        raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
        cooked: this.value
      };
    }
    this.next();
    elem.tail = this.type === types$1.backQuote;
    return this.finishNode(elem, "TemplateElement");
  };
  pp$5.parseTemplate = function(ref2) {
    if (ref2 === void 0) ref2 = {};
    var isTagged = ref2.isTagged;
    if (isTagged === void 0) isTagged = false;
    var node = this.startNode();
    this.next();
    node.expressions = [];
    var curElt = this.parseTemplateElement({ isTagged });
    node.quasis = [curElt];
    while (!curElt.tail) {
      if (this.type === types$1.eof) {
        this.raise(this.pos, "Unterminated template literal");
      }
      this.expect(types$1.dollarBraceL);
      node.expressions.push(this.parseExpression());
      this.expect(types$1.braceR);
      node.quasis.push(curElt = this.parseTemplateElement({ isTagged }));
    }
    this.next();
    return this.finishNode(node, "TemplateLiteral");
  };
  pp$5.isAsyncProp = function(prop) {
    return !prop.computed && prop.key.type === "Identifier" && prop.key.name === "async" && (this.type === types$1.name || this.type === types$1.num || this.type === types$1.string || this.type === types$1.bracketL || this.type.keyword || this.options.ecmaVersion >= 9 && this.type === types$1.star) && !lineBreak.test(this.input.slice(this.lastTokEnd, this.start));
  };
  pp$5.parseObj = function(isPattern, refDestructuringErrors) {
    var node = this.startNode(), first = true, propHash = {};
    node.properties = [];
    this.next();
    while (!this.eat(types$1.braceR)) {
      if (!first) {
        this.expect(types$1.comma);
        if (this.options.ecmaVersion >= 5 && this.afterTrailingComma(types$1.braceR)) {
          break;
        }
      } else {
        first = false;
      }
      var prop = this.parseProperty(isPattern, refDestructuringErrors);
      if (!isPattern) {
        this.checkPropClash(prop, propHash, refDestructuringErrors);
      }
      node.properties.push(prop);
    }
    return this.finishNode(node, isPattern ? "ObjectPattern" : "ObjectExpression");
  };
  pp$5.parseProperty = function(isPattern, refDestructuringErrors) {
    var prop = this.startNode(), isGenerator, isAsync, startPos, startLoc;
    if (this.options.ecmaVersion >= 9 && this.eat(types$1.ellipsis)) {
      if (isPattern) {
        prop.argument = this.parseIdent(false);
        if (this.type === types$1.comma) {
          this.raiseRecoverable(this.start, "Comma is not permitted after the rest element");
        }
        return this.finishNode(prop, "RestElement");
      }
      prop.argument = this.parseMaybeAssign(false, refDestructuringErrors);
      if (this.type === types$1.comma && refDestructuringErrors && refDestructuringErrors.trailingComma < 0) {
        refDestructuringErrors.trailingComma = this.start;
      }
      return this.finishNode(prop, "SpreadElement");
    }
    if (this.options.ecmaVersion >= 6) {
      prop.method = false;
      prop.shorthand = false;
      if (isPattern || refDestructuringErrors) {
        startPos = this.start;
        startLoc = this.startLoc;
      }
      if (!isPattern) {
        isGenerator = this.eat(types$1.star);
      }
    }
    var containsEsc = this.containsEsc;
    this.parsePropertyName(prop);
    if (!isPattern && !containsEsc && this.options.ecmaVersion >= 8 && !isGenerator && this.isAsyncProp(prop)) {
      isAsync = true;
      isGenerator = this.options.ecmaVersion >= 9 && this.eat(types$1.star);
      this.parsePropertyName(prop);
    } else {
      isAsync = false;
    }
    this.parsePropertyValue(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc);
    return this.finishNode(prop, "Property");
  };
  pp$5.parseGetterSetter = function(prop) {
    var kind = prop.key.name;
    this.parsePropertyName(prop);
    prop.value = this.parseMethod(false);
    prop.kind = kind;
    var paramCount = prop.kind === "get" ? 0 : 1;
    if (prop.value.params.length !== paramCount) {
      var start = prop.value.start;
      if (prop.kind === "get") {
        this.raiseRecoverable(start, "getter should have no params");
      } else {
        this.raiseRecoverable(start, "setter should have exactly one param");
      }
    } else {
      if (prop.kind === "set" && prop.value.params[0].type === "RestElement") {
        this.raiseRecoverable(prop.value.params[0].start, "Setter cannot use rest params");
      }
    }
  };
  pp$5.parsePropertyValue = function(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc) {
    if ((isGenerator || isAsync) && this.type === types$1.colon) {
      this.unexpected();
    }
    if (this.eat(types$1.colon)) {
      prop.value = isPattern ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(false, refDestructuringErrors);
      prop.kind = "init";
    } else if (this.options.ecmaVersion >= 6 && this.type === types$1.parenL) {
      if (isPattern) {
        this.unexpected();
      }
      prop.method = true;
      prop.value = this.parseMethod(isGenerator, isAsync);
      prop.kind = "init";
    } else if (!isPattern && !containsEsc && this.options.ecmaVersion >= 5 && !prop.computed && prop.key.type === "Identifier" && (prop.key.name === "get" || prop.key.name === "set") && (this.type !== types$1.comma && this.type !== types$1.braceR && this.type !== types$1.eq)) {
      if (isGenerator || isAsync) {
        this.unexpected();
      }
      this.parseGetterSetter(prop);
    } else if (this.options.ecmaVersion >= 6 && !prop.computed && prop.key.type === "Identifier") {
      if (isGenerator || isAsync) {
        this.unexpected();
      }
      this.checkUnreserved(prop.key);
      if (prop.key.name === "await" && !this.awaitIdentPos) {
        this.awaitIdentPos = startPos;
      }
      if (isPattern) {
        prop.value = this.parseMaybeDefault(startPos, startLoc, this.copyNode(prop.key));
      } else if (this.type === types$1.eq && refDestructuringErrors) {
        if (refDestructuringErrors.shorthandAssign < 0) {
          refDestructuringErrors.shorthandAssign = this.start;
        }
        prop.value = this.parseMaybeDefault(startPos, startLoc, this.copyNode(prop.key));
      } else {
        prop.value = this.copyNode(prop.key);
      }
      prop.kind = "init";
      prop.shorthand = true;
    } else {
      this.unexpected();
    }
  };
  pp$5.parsePropertyName = function(prop) {
    if (this.options.ecmaVersion >= 6) {
      if (this.eat(types$1.bracketL)) {
        prop.computed = true;
        prop.key = this.parseMaybeAssign();
        this.expect(types$1.bracketR);
        return prop.key;
      } else {
        prop.computed = false;
      }
    }
    return prop.key = this.type === types$1.num || this.type === types$1.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never");
  };
  pp$5.initFunction = function(node) {
    node.id = null;
    if (this.options.ecmaVersion >= 6) {
      node.generator = node.expression = false;
    }
    if (this.options.ecmaVersion >= 8) {
      node.async = false;
    }
  };
  pp$5.parseMethod = function(isGenerator, isAsync, allowDirectSuper) {
    var node = this.startNode(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
    this.initFunction(node);
    if (this.options.ecmaVersion >= 6) {
      node.generator = isGenerator;
    }
    if (this.options.ecmaVersion >= 8) {
      node.async = !!isAsync;
    }
    this.yieldPos = 0;
    this.awaitPos = 0;
    this.awaitIdentPos = 0;
    this.enterScope(functionFlags(isAsync, node.generator) | SCOPE_SUPER | (allowDirectSuper ? SCOPE_DIRECT_SUPER : 0));
    this.expect(types$1.parenL);
    node.params = this.parseBindingList(types$1.parenR, false, this.options.ecmaVersion >= 8);
    this.checkYieldAwaitInDefaultParams();
    this.parseFunctionBody(node, false, true, false);
    this.yieldPos = oldYieldPos;
    this.awaitPos = oldAwaitPos;
    this.awaitIdentPos = oldAwaitIdentPos;
    return this.finishNode(node, "FunctionExpression");
  };
  pp$5.parseArrowExpression = function(node, params, isAsync, forInit) {
    var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
    this.enterScope(functionFlags(isAsync, false) | SCOPE_ARROW);
    this.initFunction(node);
    if (this.options.ecmaVersion >= 8) {
      node.async = !!isAsync;
    }
    this.yieldPos = 0;
    this.awaitPos = 0;
    this.awaitIdentPos = 0;
    node.params = this.toAssignableList(params, true);
    this.parseFunctionBody(node, true, false, forInit);
    this.yieldPos = oldYieldPos;
    this.awaitPos = oldAwaitPos;
    this.awaitIdentPos = oldAwaitIdentPos;
    return this.finishNode(node, "ArrowFunctionExpression");
  };
  pp$5.parseFunctionBody = function(node, isArrowFunction, isMethod, forInit) {
    var isExpression = isArrowFunction && this.type !== types$1.braceL;
    var oldStrict = this.strict, useStrict = false;
    if (isExpression) {
      node.body = this.parseMaybeAssign(forInit);
      node.expression = true;
      this.checkParams(node, false);
    } else {
      var nonSimple = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(node.params);
      if (!oldStrict || nonSimple) {
        useStrict = this.strictDirective(this.end);
        if (useStrict && nonSimple) {
          this.raiseRecoverable(node.start, "Illegal 'use strict' directive in function with non-simple parameter list");
        }
      }
      var oldLabels = this.labels;
      this.labels = [];
      if (useStrict) {
        this.strict = true;
      }
      this.checkParams(node, !oldStrict && !useStrict && !isArrowFunction && !isMethod && this.isSimpleParamList(node.params));
      if (this.strict && node.id) {
        this.checkLValSimple(node.id, BIND_OUTSIDE);
      }
      node.body = this.parseBlock(false, void 0, useStrict && !oldStrict);
      node.expression = false;
      this.adaptDirectivePrologue(node.body.body);
      this.labels = oldLabels;
    }
    this.exitScope();
  };
  pp$5.isSimpleParamList = function(params) {
    for (var i = 0, list = params; i < list.length; i += 1) {
      var param = list[i];
      if (param.type !== "Identifier") {
        return false;
      }
    }
    return true;
  };
  pp$5.checkParams = function(node, allowDuplicates) {
    var nameHash = /* @__PURE__ */ Object.create(null);
    for (var i = 0, list = node.params; i < list.length; i += 1) {
      var param = list[i];
      this.checkLValInnerPattern(param, BIND_VAR, allowDuplicates ? null : nameHash);
    }
  };
  pp$5.parseExprList = function(close, allowTrailingComma, allowEmpty, refDestructuringErrors) {
    var elts = [], first = true;
    while (!this.eat(close)) {
      if (!first) {
        this.expect(types$1.comma);
        if (allowTrailingComma && this.afterTrailingComma(close)) {
          break;
        }
      } else {
        first = false;
      }
      var elt = void 0;
      if (allowEmpty && this.type === types$1.comma) {
        elt = null;
      } else if (this.type === types$1.ellipsis) {
        elt = this.parseSpread(refDestructuringErrors);
        if (refDestructuringErrors && this.type === types$1.comma && refDestructuringErrors.trailingComma < 0) {
          refDestructuringErrors.trailingComma = this.start;
        }
      } else {
        elt = this.parseMaybeAssign(false, refDestructuringErrors);
      }
      elts.push(elt);
    }
    return elts;
  };
  pp$5.checkUnreserved = function(ref2) {
    var start = ref2.start;
    var end = ref2.end;
    var name = ref2.name;
    if (this.inGenerator && name === "yield") {
      this.raiseRecoverable(start, "Cannot use 'yield' as identifier inside a generator");
    }
    if (this.inAsync && name === "await") {
      this.raiseRecoverable(start, "Cannot use 'await' as identifier inside an async function");
    }
    if (!(this.currentThisScope().flags & SCOPE_VAR) && name === "arguments") {
      this.raiseRecoverable(start, "Cannot use 'arguments' in class field initializer");
    }
    if (this.inClassStaticBlock && (name === "arguments" || name === "await")) {
      this.raise(start, "Cannot use " + name + " in class static initialization block");
    }
    if (this.keywords.test(name)) {
      this.raise(start, "Unexpected keyword '" + name + "'");
    }
    if (this.options.ecmaVersion < 6 && this.input.slice(start, end).indexOf("\\") !== -1) {
      return;
    }
    var re = this.strict ? this.reservedWordsStrict : this.reservedWords;
    if (re.test(name)) {
      if (!this.inAsync && name === "await") {
        this.raiseRecoverable(start, "Cannot use keyword 'await' outside an async function");
      }
      this.raiseRecoverable(start, "The keyword '" + name + "' is reserved");
    }
  };
  pp$5.parseIdent = function(liberal) {
    var node = this.parseIdentNode();
    this.next(!!liberal);
    this.finishNode(node, "Identifier");
    if (!liberal) {
      this.checkUnreserved(node);
      if (node.name === "await" && !this.awaitIdentPos) {
        this.awaitIdentPos = node.start;
      }
    }
    return node;
  };
  pp$5.parseIdentNode = function() {
    var node = this.startNode();
    if (this.type === types$1.name) {
      node.name = this.value;
    } else if (this.type.keyword) {
      node.name = this.type.keyword;
      if ((node.name === "class" || node.name === "function") && (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46)) {
        this.context.pop();
      }
      this.type = types$1.name;
    } else {
      this.unexpected();
    }
    return node;
  };
  pp$5.parsePrivateIdent = function() {
    var node = this.startNode();
    if (this.type === types$1.privateId) {
      node.name = this.value;
    } else {
      this.unexpected();
    }
    this.next();
    this.finishNode(node, "PrivateIdentifier");
    if (this.options.checkPrivateFields) {
      if (this.privateNameStack.length === 0) {
        this.raise(node.start, "Private field '#" + node.name + "' must be declared in an enclosing class");
      } else {
        this.privateNameStack[this.privateNameStack.length - 1].used.push(node);
      }
    }
    return node;
  };
  pp$5.parseYield = function(forInit) {
    if (!this.yieldPos) {
      this.yieldPos = this.start;
    }
    var node = this.startNode();
    this.next();
    if (this.type === types$1.semi || this.canInsertSemicolon() || this.type !== types$1.star && !this.type.startsExpr) {
      node.delegate = false;
      node.argument = null;
    } else {
      node.delegate = this.eat(types$1.star);
      node.argument = this.parseMaybeAssign(forInit);
    }
    return this.finishNode(node, "YieldExpression");
  };
  pp$5.parseAwait = function(forInit) {
    if (!this.awaitPos) {
      this.awaitPos = this.start;
    }
    var node = this.startNode();
    this.next();
    node.argument = this.parseMaybeUnary(null, true, false, forInit);
    return this.finishNode(node, "AwaitExpression");
  };
  var pp$4 = Parser.prototype;
  pp$4.raise = function(pos, message) {
    var loc = getLineInfo(this.input, pos);
    message += " (" + loc.line + ":" + loc.column + ")";
    if (this.sourceFile) {
      message += " in " + this.sourceFile;
    }
    var err = new SyntaxError(message);
    err.pos = pos;
    err.loc = loc;
    err.raisedAt = this.pos;
    throw err;
  };
  pp$4.raiseRecoverable = pp$4.raise;
  pp$4.curPosition = function() {
    if (this.options.locations) {
      return new Position(this.curLine, this.pos - this.lineStart);
    }
  };
  var pp$3 = Parser.prototype;
  var Scope = function Scope2(flags) {
    this.flags = flags;
    this.var = [];
    this.lexical = [];
    this.functions = [];
  };
  pp$3.enterScope = function(flags) {
    this.scopeStack.push(new Scope(flags));
  };
  pp$3.exitScope = function() {
    this.scopeStack.pop();
  };
  pp$3.treatFunctionsAsVarInScope = function(scope) {
    return scope.flags & SCOPE_FUNCTION || !this.inModule && scope.flags & SCOPE_TOP;
  };
  pp$3.declareName = function(name, bindingType, pos) {
    var redeclared = false;
    if (bindingType === BIND_LEXICAL) {
      var scope = this.currentScope();
      redeclared = scope.lexical.indexOf(name) > -1 || scope.functions.indexOf(name) > -1 || scope.var.indexOf(name) > -1;
      scope.lexical.push(name);
      if (this.inModule && scope.flags & SCOPE_TOP) {
        delete this.undefinedExports[name];
      }
    } else if (bindingType === BIND_SIMPLE_CATCH) {
      var scope$1 = this.currentScope();
      scope$1.lexical.push(name);
    } else if (bindingType === BIND_FUNCTION) {
      var scope$2 = this.currentScope();
      if (this.treatFunctionsAsVar) {
        redeclared = scope$2.lexical.indexOf(name) > -1;
      } else {
        redeclared = scope$2.lexical.indexOf(name) > -1 || scope$2.var.indexOf(name) > -1;
      }
      scope$2.functions.push(name);
    } else {
      for (var i = this.scopeStack.length - 1; i >= 0; --i) {
        var scope$3 = this.scopeStack[i];
        if (scope$3.lexical.indexOf(name) > -1 && !(scope$3.flags & SCOPE_SIMPLE_CATCH && scope$3.lexical[0] === name) || !this.treatFunctionsAsVarInScope(scope$3) && scope$3.functions.indexOf(name) > -1) {
          redeclared = true;
          break;
        }
        scope$3.var.push(name);
        if (this.inModule && scope$3.flags & SCOPE_TOP) {
          delete this.undefinedExports[name];
        }
        if (scope$3.flags & SCOPE_VAR) {
          break;
        }
      }
    }
    if (redeclared) {
      this.raiseRecoverable(pos, "Identifier '" + name + "' has already been declared");
    }
  };
  pp$3.checkLocalExport = function(id) {
    if (this.scopeStack[0].lexical.indexOf(id.name) === -1 && this.scopeStack[0].var.indexOf(id.name) === -1) {
      this.undefinedExports[id.name] = id;
    }
  };
  pp$3.currentScope = function() {
    return this.scopeStack[this.scopeStack.length - 1];
  };
  pp$3.currentVarScope = function() {
    for (var i = this.scopeStack.length - 1; ; i--) {
      var scope = this.scopeStack[i];
      if (scope.flags & (SCOPE_VAR | SCOPE_CLASS_FIELD_INIT | SCOPE_CLASS_STATIC_BLOCK)) {
        return scope;
      }
    }
  };
  pp$3.currentThisScope = function() {
    for (var i = this.scopeStack.length - 1; ; i--) {
      var scope = this.scopeStack[i];
      if (scope.flags & (SCOPE_VAR | SCOPE_CLASS_FIELD_INIT | SCOPE_CLASS_STATIC_BLOCK) && !(scope.flags & SCOPE_ARROW)) {
        return scope;
      }
    }
  };
  var Node = function Node2(parser, pos, loc) {
    this.type = "";
    this.start = pos;
    this.end = 0;
    if (parser.options.locations) {
      this.loc = new SourceLocation(parser, loc);
    }
    if (parser.options.directSourceFile) {
      this.sourceFile = parser.options.directSourceFile;
    }
    if (parser.options.ranges) {
      this.range = [pos, 0];
    }
  };
  var pp$2 = Parser.prototype;
  pp$2.startNode = function() {
    return new Node(this, this.start, this.startLoc);
  };
  pp$2.startNodeAt = function(pos, loc) {
    return new Node(this, pos, loc);
  };
  function finishNodeAt(node, type, pos, loc) {
    node.type = type;
    node.end = pos;
    if (this.options.locations) {
      node.loc.end = loc;
    }
    if (this.options.ranges) {
      node.range[1] = pos;
    }
    return node;
  }
  pp$2.finishNode = function(node, type) {
    return finishNodeAt.call(this, node, type, this.lastTokEnd, this.lastTokEndLoc);
  };
  pp$2.finishNodeAt = function(node, type, pos, loc) {
    return finishNodeAt.call(this, node, type, pos, loc);
  };
  pp$2.copyNode = function(node) {
    var newNode = new Node(this, node.start, this.startLoc);
    for (var prop in node) {
      newNode[prop] = node[prop];
    }
    return newNode;
  };
  var scriptValuesAddedInUnicode = "Berf Beria_Erfe Gara Garay Gukh Gurung_Khema Hrkt Katakana_Or_Hiragana Kawi Kirat_Rai Krai Nag_Mundari Nagm Ol_Onal Onao Sidetic Sidt Sunu Sunuwar Tai_Yo Tayo Todhri Todr Tolong_Siki Tols Tulu_Tigalari Tutg Unknown Zzzz";
  var ecma9BinaryProperties = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS";
  var ecma10BinaryProperties = ecma9BinaryProperties + " Extended_Pictographic";
  var ecma11BinaryProperties = ecma10BinaryProperties;
  var ecma12BinaryProperties = ecma11BinaryProperties + " EBase EComp EMod EPres ExtPict";
  var ecma13BinaryProperties = ecma12BinaryProperties;
  var ecma14BinaryProperties = ecma13BinaryProperties;
  var unicodeBinaryProperties = {
    9: ecma9BinaryProperties,
    10: ecma10BinaryProperties,
    11: ecma11BinaryProperties,
    12: ecma12BinaryProperties,
    13: ecma13BinaryProperties,
    14: ecma14BinaryProperties
  };
  var ecma14BinaryPropertiesOfStrings = "Basic_Emoji Emoji_Keycap_Sequence RGI_Emoji_Modifier_Sequence RGI_Emoji_Flag_Sequence RGI_Emoji_Tag_Sequence RGI_Emoji_ZWJ_Sequence RGI_Emoji";
  var unicodeBinaryPropertiesOfStrings = {
    9: "",
    10: "",
    11: "",
    12: "",
    13: "",
    14: ecma14BinaryPropertiesOfStrings
  };
  var unicodeGeneralCategoryValues = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu";
  var ecma9ScriptValues = "Adlam Adlm Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb";
  var ecma10ScriptValues = ecma9ScriptValues + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd";
  var ecma11ScriptValues = ecma10ScriptValues + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho";
  var ecma12ScriptValues = ecma11ScriptValues + " Chorasmian Chrs Diak Dives_Akuru Khitan_Small_Script Kits Yezi Yezidi";
  var ecma13ScriptValues = ecma12ScriptValues + " Cypro_Minoan Cpmn Old_Uyghur Ougr Tangsa Tnsa Toto Vithkuqi Vith";
  var ecma14ScriptValues = ecma13ScriptValues + " " + scriptValuesAddedInUnicode;
  var unicodeScriptValues = {
    9: ecma9ScriptValues,
    10: ecma10ScriptValues,
    11: ecma11ScriptValues,
    12: ecma12ScriptValues,
    13: ecma13ScriptValues,
    14: ecma14ScriptValues
  };
  var data = {};
  function buildUnicodeData(ecmaVersion) {
    var d = data[ecmaVersion] = {
      binary: wordsRegexp(unicodeBinaryProperties[ecmaVersion] + " " + unicodeGeneralCategoryValues),
      binaryOfStrings: wordsRegexp(unicodeBinaryPropertiesOfStrings[ecmaVersion]),
      nonBinary: {
        General_Category: wordsRegexp(unicodeGeneralCategoryValues),
        Script: wordsRegexp(unicodeScriptValues[ecmaVersion])
      }
    };
    d.nonBinary.Script_Extensions = d.nonBinary.Script;
    d.nonBinary.gc = d.nonBinary.General_Category;
    d.nonBinary.sc = d.nonBinary.Script;
    d.nonBinary.scx = d.nonBinary.Script_Extensions;
  }
  for (i = 0, list = [9, 10, 11, 12, 13, 14]; i < list.length; i += 1) {
    ecmaVersion = list[i];
    buildUnicodeData(ecmaVersion);
  }
  var ecmaVersion;
  var i;
  var list;
  var pp$1 = Parser.prototype;
  var BranchID = function BranchID2(parent, base2) {
    this.parent = parent;
    this.base = base2 || this;
  };
  BranchID.prototype.separatedFrom = function separatedFrom(alt) {
    for (var self = this; self; self = self.parent) {
      for (var other = alt; other; other = other.parent) {
        if (self.base === other.base && self !== other) {
          return true;
        }
      }
    }
    return false;
  };
  BranchID.prototype.sibling = function sibling() {
    return new BranchID(this.parent, this.base);
  };
  var RegExpValidationState = function RegExpValidationState2(parser) {
    this.parser = parser;
    this.validFlags = "gim" + (parser.options.ecmaVersion >= 6 ? "uy" : "") + (parser.options.ecmaVersion >= 9 ? "s" : "") + (parser.options.ecmaVersion >= 13 ? "d" : "") + (parser.options.ecmaVersion >= 15 ? "v" : "");
    this.unicodeProperties = data[parser.options.ecmaVersion >= 14 ? 14 : parser.options.ecmaVersion];
    this.source = "";
    this.flags = "";
    this.start = 0;
    this.switchU = false;
    this.switchV = false;
    this.switchN = false;
    this.pos = 0;
    this.lastIntValue = 0;
    this.lastStringValue = "";
    this.lastAssertionIsQuantifiable = false;
    this.numCapturingParens = 0;
    this.maxBackReference = 0;
    this.groupNames = /* @__PURE__ */ Object.create(null);
    this.backReferenceNames = [];
    this.branchID = null;
  };
  RegExpValidationState.prototype.reset = function reset(start, pattern, flags) {
    var unicodeSets = flags.indexOf("v") !== -1;
    var unicode = flags.indexOf("u") !== -1;
    this.start = start | 0;
    this.source = pattern + "";
    this.flags = flags;
    if (unicodeSets && this.parser.options.ecmaVersion >= 15) {
      this.switchU = true;
      this.switchV = true;
      this.switchN = true;
    } else {
      this.switchU = unicode && this.parser.options.ecmaVersion >= 6;
      this.switchV = false;
      this.switchN = unicode && this.parser.options.ecmaVersion >= 9;
    }
  };
  RegExpValidationState.prototype.raise = function raise(message) {
    this.parser.raiseRecoverable(this.start, "Invalid regular expression: /" + this.source + "/: " + message);
  };
  RegExpValidationState.prototype.at = function at(i, forceU) {
    if (forceU === void 0) forceU = false;
    var s = this.source;
    var l = s.length;
    if (i >= l) {
      return -1;
    }
    var c = s.charCodeAt(i);
    if (!(forceU || this.switchU) || c <= 55295 || c >= 57344 || i + 1 >= l) {
      return c;
    }
    var next = s.charCodeAt(i + 1);
    return next >= 56320 && next <= 57343 ? (c << 10) + next - 56613888 : c;
  };
  RegExpValidationState.prototype.nextIndex = function nextIndex(i, forceU) {
    if (forceU === void 0) forceU = false;
    var s = this.source;
    var l = s.length;
    if (i >= l) {
      return l;
    }
    var c = s.charCodeAt(i), next;
    if (!(forceU || this.switchU) || c <= 55295 || c >= 57344 || i + 1 >= l || (next = s.charCodeAt(i + 1)) < 56320 || next > 57343) {
      return i + 1;
    }
    return i + 2;
  };
  RegExpValidationState.prototype.current = function current(forceU) {
    if (forceU === void 0) forceU = false;
    return this.at(this.pos, forceU);
  };
  RegExpValidationState.prototype.lookahead = function lookahead(forceU) {
    if (forceU === void 0) forceU = false;
    return this.at(this.nextIndex(this.pos, forceU), forceU);
  };
  RegExpValidationState.prototype.advance = function advance(forceU) {
    if (forceU === void 0) forceU = false;
    this.pos = this.nextIndex(this.pos, forceU);
  };
  RegExpValidationState.prototype.eat = function eat(ch, forceU) {
    if (forceU === void 0) forceU = false;
    if (this.current(forceU) === ch) {
      this.advance(forceU);
      return true;
    }
    return false;
  };
  RegExpValidationState.prototype.eatChars = function eatChars(chs, forceU) {
    if (forceU === void 0) forceU = false;
    var pos = this.pos;
    for (var i = 0, list = chs; i < list.length; i += 1) {
      var ch = list[i];
      var current2 = this.at(pos, forceU);
      if (current2 === -1 || current2 !== ch) {
        return false;
      }
      pos = this.nextIndex(pos, forceU);
    }
    this.pos = pos;
    return true;
  };
  pp$1.validateRegExpFlags = function(state) {
    var validFlags = state.validFlags;
    var flags = state.flags;
    var u = false;
    var v = false;
    for (var i = 0; i < flags.length; i++) {
      var flag = flags.charAt(i);
      if (validFlags.indexOf(flag) === -1) {
        this.raise(state.start, "Invalid regular expression flag");
      }
      if (flags.indexOf(flag, i + 1) > -1) {
        this.raise(state.start, "Duplicate regular expression flag");
      }
      if (flag === "u") {
        u = true;
      }
      if (flag === "v") {
        v = true;
      }
    }
    if (this.options.ecmaVersion >= 15 && u && v) {
      this.raise(state.start, "Invalid regular expression flag");
    }
  };
  function hasProp(obj) {
    for (var _ in obj) {
      return true;
    }
    return false;
  }
  pp$1.validateRegExpPattern = function(state) {
    this.regexp_pattern(state);
    if (!state.switchN && this.options.ecmaVersion >= 9 && hasProp(state.groupNames)) {
      state.switchN = true;
      this.regexp_pattern(state);
    }
  };
  pp$1.regexp_pattern = function(state) {
    state.pos = 0;
    state.lastIntValue = 0;
    state.lastStringValue = "";
    state.lastAssertionIsQuantifiable = false;
    state.numCapturingParens = 0;
    state.maxBackReference = 0;
    state.groupNames = /* @__PURE__ */ Object.create(null);
    state.backReferenceNames.length = 0;
    state.branchID = null;
    this.regexp_disjunction(state);
    if (state.pos !== state.source.length) {
      if (state.eat(
        41
        /* ) */
      )) {
        state.raise("Unmatched ')'");
      }
      if (state.eat(
        93
        /* ] */
      ) || state.eat(
        125
        /* } */
      )) {
        state.raise("Lone quantifier brackets");
      }
    }
    if (state.maxBackReference > state.numCapturingParens) {
      state.raise("Invalid escape");
    }
    for (var i = 0, list = state.backReferenceNames; i < list.length; i += 1) {
      var name = list[i];
      if (!state.groupNames[name]) {
        state.raise("Invalid named capture referenced");
      }
    }
  };
  pp$1.regexp_disjunction = function(state) {
    var trackDisjunction = this.options.ecmaVersion >= 16;
    if (trackDisjunction) {
      state.branchID = new BranchID(state.branchID, null);
    }
    this.regexp_alternative(state);
    while (state.eat(
      124
      /* | */
    )) {
      if (trackDisjunction) {
        state.branchID = state.branchID.sibling();
      }
      this.regexp_alternative(state);
    }
    if (trackDisjunction) {
      state.branchID = state.branchID.parent;
    }
    if (this.regexp_eatQuantifier(state, true)) {
      state.raise("Nothing to repeat");
    }
    if (state.eat(
      123
      /* { */
    )) {
      state.raise("Lone quantifier brackets");
    }
  };
  pp$1.regexp_alternative = function(state) {
    while (state.pos < state.source.length && this.regexp_eatTerm(state)) {
    }
  };
  pp$1.regexp_eatTerm = function(state) {
    if (this.regexp_eatAssertion(state)) {
      if (state.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(state)) {
        if (state.switchU) {
          state.raise("Invalid quantifier");
        }
      }
      return true;
    }
    if (state.switchU ? this.regexp_eatAtom(state) : this.regexp_eatExtendedAtom(state)) {
      this.regexp_eatQuantifier(state);
      return true;
    }
    return false;
  };
  pp$1.regexp_eatAssertion = function(state) {
    var start = state.pos;
    state.lastAssertionIsQuantifiable = false;
    if (state.eat(
      94
      /* ^ */
    ) || state.eat(
      36
      /* $ */
    )) {
      return true;
    }
    if (state.eat(
      92
      /* \ */
    )) {
      if (state.eat(
        66
        /* B */
      ) || state.eat(
        98
        /* b */
      )) {
        return true;
      }
      state.pos = start;
    }
    if (state.eat(
      40
      /* ( */
    ) && state.eat(
      63
      /* ? */
    )) {
      var lookbehind = false;
      if (this.options.ecmaVersion >= 9) {
        lookbehind = state.eat(
          60
          /* < */
        );
      }
      if (state.eat(
        61
        /* = */
      ) || state.eat(
        33
        /* ! */
      )) {
        this.regexp_disjunction(state);
        if (!state.eat(
          41
          /* ) */
        )) {
          state.raise("Unterminated group");
        }
        state.lastAssertionIsQuantifiable = !lookbehind;
        return true;
      }
    }
    state.pos = start;
    return false;
  };
  pp$1.regexp_eatQuantifier = function(state, noError) {
    if (noError === void 0) noError = false;
    if (this.regexp_eatQuantifierPrefix(state, noError)) {
      state.eat(
        63
        /* ? */
      );
      return true;
    }
    return false;
  };
  pp$1.regexp_eatQuantifierPrefix = function(state, noError) {
    return state.eat(
      42
      /* * */
    ) || state.eat(
      43
      /* + */
    ) || state.eat(
      63
      /* ? */
    ) || this.regexp_eatBracedQuantifier(state, noError);
  };
  pp$1.regexp_eatBracedQuantifier = function(state, noError) {
    var start = state.pos;
    if (state.eat(
      123
      /* { */
    )) {
      var min = 0, max = -1;
      if (this.regexp_eatDecimalDigits(state)) {
        min = state.lastIntValue;
        if (state.eat(
          44
          /* , */
        ) && this.regexp_eatDecimalDigits(state)) {
          max = state.lastIntValue;
        }
        if (state.eat(
          125
          /* } */
        )) {
          if (max !== -1 && max < min && !noError) {
            state.raise("numbers out of order in {} quantifier");
          }
          return true;
        }
      }
      if (state.switchU && !noError) {
        state.raise("Incomplete quantifier");
      }
      state.pos = start;
    }
    return false;
  };
  pp$1.regexp_eatAtom = function(state) {
    return this.regexp_eatPatternCharacters(state) || state.eat(
      46
      /* . */
    ) || this.regexp_eatReverseSolidusAtomEscape(state) || this.regexp_eatCharacterClass(state) || this.regexp_eatUncapturingGroup(state) || this.regexp_eatCapturingGroup(state);
  };
  pp$1.regexp_eatReverseSolidusAtomEscape = function(state) {
    var start = state.pos;
    if (state.eat(
      92
      /* \ */
    )) {
      if (this.regexp_eatAtomEscape(state)) {
        return true;
      }
      state.pos = start;
    }
    return false;
  };
  pp$1.regexp_eatUncapturingGroup = function(state) {
    var start = state.pos;
    if (state.eat(
      40
      /* ( */
    )) {
      if (state.eat(
        63
        /* ? */
      )) {
        if (this.options.ecmaVersion >= 16) {
          var addModifiers = this.regexp_eatModifiers(state);
          var hasHyphen = state.eat(
            45
            /* - */
          );
          if (addModifiers || hasHyphen) {
            for (var i = 0; i < addModifiers.length; i++) {
              var modifier = addModifiers.charAt(i);
              if (addModifiers.indexOf(modifier, i + 1) > -1) {
                state.raise("Duplicate regular expression modifiers");
              }
            }
            if (hasHyphen) {
              var removeModifiers = this.regexp_eatModifiers(state);
              if (!addModifiers && !removeModifiers && state.current() === 58) {
                state.raise("Invalid regular expression modifiers");
              }
              for (var i$1 = 0; i$1 < removeModifiers.length; i$1++) {
                var modifier$1 = removeModifiers.charAt(i$1);
                if (removeModifiers.indexOf(modifier$1, i$1 + 1) > -1 || addModifiers.indexOf(modifier$1) > -1) {
                  state.raise("Duplicate regular expression modifiers");
                }
              }
            }
          }
        }
        if (state.eat(
          58
          /* : */
        )) {
          this.regexp_disjunction(state);
          if (state.eat(
            41
            /* ) */
          )) {
            return true;
          }
          state.raise("Unterminated group");
        }
      }
      state.pos = start;
    }
    return false;
  };
  pp$1.regexp_eatCapturingGroup = function(state) {
    if (state.eat(
      40
      /* ( */
    )) {
      if (this.options.ecmaVersion >= 9) {
        this.regexp_groupSpecifier(state);
      } else if (state.current() === 63) {
        state.raise("Invalid group");
      }
      this.regexp_disjunction(state);
      if (state.eat(
        41
        /* ) */
      )) {
        state.numCapturingParens += 1;
        return true;
      }
      state.raise("Unterminated group");
    }
    return false;
  };
  pp$1.regexp_eatModifiers = function(state) {
    var modifiers = "";
    var ch = 0;
    while ((ch = state.current()) !== -1 && isRegularExpressionModifier(ch)) {
      modifiers += codePointToString(ch);
      state.advance();
    }
    return modifiers;
  };
  function isRegularExpressionModifier(ch) {
    return ch === 105 || ch === 109 || ch === 115;
  }
  pp$1.regexp_eatExtendedAtom = function(state) {
    return state.eat(
      46
      /* . */
    ) || this.regexp_eatReverseSolidusAtomEscape(state) || this.regexp_eatCharacterClass(state) || this.regexp_eatUncapturingGroup(state) || this.regexp_eatCapturingGroup(state) || this.regexp_eatInvalidBracedQuantifier(state) || this.regexp_eatExtendedPatternCharacter(state);
  };
  pp$1.regexp_eatInvalidBracedQuantifier = function(state) {
    if (this.regexp_eatBracedQuantifier(state, true)) {
      state.raise("Nothing to repeat");
    }
    return false;
  };
  pp$1.regexp_eatSyntaxCharacter = function(state) {
    var ch = state.current();
    if (isSyntaxCharacter(ch)) {
      state.lastIntValue = ch;
      state.advance();
      return true;
    }
    return false;
  };
  function isSyntaxCharacter(ch) {
    return ch === 36 || ch >= 40 && ch <= 43 || ch === 46 || ch === 63 || ch >= 91 && ch <= 94 || ch >= 123 && ch <= 125;
  }
  pp$1.regexp_eatPatternCharacters = function(state) {
    var start = state.pos;
    var ch = 0;
    while ((ch = state.current()) !== -1 && !isSyntaxCharacter(ch)) {
      state.advance();
    }
    return state.pos !== start;
  };
  pp$1.regexp_eatExtendedPatternCharacter = function(state) {
    var ch = state.current();
    if (ch !== -1 && ch !== 36 && !(ch >= 40 && ch <= 43) && ch !== 46 && ch !== 63 && ch !== 91 && ch !== 94 && ch !== 124) {
      state.advance();
      return true;
    }
    return false;
  };
  pp$1.regexp_groupSpecifier = function(state) {
    if (state.eat(
      63
      /* ? */
    )) {
      if (!this.regexp_eatGroupName(state)) {
        state.raise("Invalid group");
      }
      var trackDisjunction = this.options.ecmaVersion >= 16;
      var known = state.groupNames[state.lastStringValue];
      if (known) {
        if (trackDisjunction) {
          for (var i = 0, list = known; i < list.length; i += 1) {
            var altID = list[i];
            if (!altID.separatedFrom(state.branchID)) {
              state.raise("Duplicate capture group name");
            }
          }
        } else {
          state.raise("Duplicate capture group name");
        }
      }
      if (trackDisjunction) {
        (known || (state.groupNames[state.lastStringValue] = [])).push(state.branchID);
      } else {
        state.groupNames[state.lastStringValue] = true;
      }
    }
  };
  pp$1.regexp_eatGroupName = function(state) {
    state.lastStringValue = "";
    if (state.eat(
      60
      /* < */
    )) {
      if (this.regexp_eatRegExpIdentifierName(state) && state.eat(
        62
        /* > */
      )) {
        return true;
      }
      state.raise("Invalid capture group name");
    }
    return false;
  };
  pp$1.regexp_eatRegExpIdentifierName = function(state) {
    state.lastStringValue = "";
    if (this.regexp_eatRegExpIdentifierStart(state)) {
      state.lastStringValue += codePointToString(state.lastIntValue);
      while (this.regexp_eatRegExpIdentifierPart(state)) {
        state.lastStringValue += codePointToString(state.lastIntValue);
      }
      return true;
    }
    return false;
  };
  pp$1.regexp_eatRegExpIdentifierStart = function(state) {
    var start = state.pos;
    var forceU = this.options.ecmaVersion >= 11;
    var ch = state.current(forceU);
    state.advance(forceU);
    if (ch === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) {
      ch = state.lastIntValue;
    }
    if (isRegExpIdentifierStart(ch)) {
      state.lastIntValue = ch;
      return true;
    }
    state.pos = start;
    return false;
  };
  function isRegExpIdentifierStart(ch) {
    return isIdentifierStart(ch, true) || ch === 36 || ch === 95;
  }
  pp$1.regexp_eatRegExpIdentifierPart = function(state) {
    var start = state.pos;
    var forceU = this.options.ecmaVersion >= 11;
    var ch = state.current(forceU);
    state.advance(forceU);
    if (ch === 92 && this.regexp_eatRegExpUnicodeEscapeSequence(state, forceU)) {
      ch = state.lastIntValue;
    }
    if (isRegExpIdentifierPart(ch)) {
      state.lastIntValue = ch;
      return true;
    }
    state.pos = start;
    return false;
  };
  function isRegExpIdentifierPart(ch) {
    return isIdentifierChar(ch, true) || ch === 36 || ch === 95 || ch === 8204 || ch === 8205;
  }
  pp$1.regexp_eatAtomEscape = function(state) {
    if (this.regexp_eatBackReference(state) || this.regexp_eatCharacterClassEscape(state) || this.regexp_eatCharacterEscape(state) || state.switchN && this.regexp_eatKGroupName(state)) {
      return true;
    }
    if (state.switchU) {
      if (state.current() === 99) {
        state.raise("Invalid unicode escape");
      }
      state.raise("Invalid escape");
    }
    return false;
  };
  pp$1.regexp_eatBackReference = function(state) {
    var start = state.pos;
    if (this.regexp_eatDecimalEscape(state)) {
      var n = state.lastIntValue;
      if (state.switchU) {
        if (n > state.maxBackReference) {
          state.maxBackReference = n;
        }
        return true;
      }
      if (n <= state.numCapturingParens) {
        return true;
      }
      state.pos = start;
    }
    return false;
  };
  pp$1.regexp_eatKGroupName = function(state) {
    if (state.eat(
      107
      /* k */
    )) {
      if (this.regexp_eatGroupName(state)) {
        state.backReferenceNames.push(state.lastStringValue);
        return true;
      }
      state.raise("Invalid named reference");
    }
    return false;
  };
  pp$1.regexp_eatCharacterEscape = function(state) {
    return this.regexp_eatControlEscape(state) || this.regexp_eatCControlLetter(state) || this.regexp_eatZero(state) || this.regexp_eatHexEscapeSequence(state) || this.regexp_eatRegExpUnicodeEscapeSequence(state, false) || !state.switchU && this.regexp_eatLegacyOctalEscapeSequence(state) || this.regexp_eatIdentityEscape(state);
  };
  pp$1.regexp_eatCControlLetter = function(state) {
    var start = state.pos;
    if (state.eat(
      99
      /* c */
    )) {
      if (this.regexp_eatControlLetter(state)) {
        return true;
      }
      state.pos = start;
    }
    return false;
  };
  pp$1.regexp_eatZero = function(state) {
    if (state.current() === 48 && !isDecimalDigit(state.lookahead())) {
      state.lastIntValue = 0;
      state.advance();
      return true;
    }
    return false;
  };
  pp$1.regexp_eatControlEscape = function(state) {
    var ch = state.current();
    if (ch === 116) {
      state.lastIntValue = 9;
      state.advance();
      return true;
    }
    if (ch === 110) {
      state.lastIntValue = 10;
      state.advance();
      return true;
    }
    if (ch === 118) {
      state.lastIntValue = 11;
      state.advance();
      return true;
    }
    if (ch === 102) {
      state.lastIntValue = 12;
      state.advance();
      return true;
    }
    if (ch === 114) {
      state.lastIntValue = 13;
      state.advance();
      return true;
    }
    return false;
  };
  pp$1.regexp_eatControlLetter = function(state) {
    var ch = state.current();
    if (isControlLetter(ch)) {
      state.lastIntValue = ch % 32;
      state.advance();
      return true;
    }
    return false;
  };
  function isControlLetter(ch) {
    return ch >= 65 && ch <= 90 || ch >= 97 && ch <= 122;
  }
  pp$1.regexp_eatRegExpUnicodeEscapeSequence = function(state, forceU) {
    if (forceU === void 0) forceU = false;
    var start = state.pos;
    var switchU = forceU || state.switchU;
    if (state.eat(
      117
      /* u */
    )) {
      if (this.regexp_eatFixedHexDigits(state, 4)) {
        var lead = state.lastIntValue;
        if (switchU && lead >= 55296 && lead <= 56319) {
          var leadSurrogateEnd = state.pos;
          if (state.eat(
            92
            /* \ */
          ) && state.eat(
            117
            /* u */
          ) && this.regexp_eatFixedHexDigits(state, 4)) {
            var trail = state.lastIntValue;
            if (trail >= 56320 && trail <= 57343) {
              state.lastIntValue = (lead - 55296) * 1024 + (trail - 56320) + 65536;
              return true;
            }
          }
          state.pos = leadSurrogateEnd;
          state.lastIntValue = lead;
        }
        return true;
      }
      if (switchU && state.eat(
        123
        /* { */
      ) && this.regexp_eatHexDigits(state) && state.eat(
        125
        /* } */
      ) && isValidUnicode(state.lastIntValue)) {
        return true;
      }
      if (switchU) {
        state.raise("Invalid unicode escape");
      }
      state.pos = start;
    }
    return false;
  };
  function isValidUnicode(ch) {
    return ch >= 0 && ch <= 1114111;
  }
  pp$1.regexp_eatIdentityEscape = function(state) {
    if (state.switchU) {
      if (this.regexp_eatSyntaxCharacter(state)) {
        return true;
      }
      if (state.eat(
        47
        /* / */
      )) {
        state.lastIntValue = 47;
        return true;
      }
      return false;
    }
    var ch = state.current();
    if (ch !== 99 && (!state.switchN || ch !== 107)) {
      state.lastIntValue = ch;
      state.advance();
      return true;
    }
    return false;
  };
  pp$1.regexp_eatDecimalEscape = function(state) {
    state.lastIntValue = 0;
    var ch = state.current();
    if (ch >= 49 && ch <= 57) {
      do {
        state.lastIntValue = 10 * state.lastIntValue + (ch - 48);
        state.advance();
      } while ((ch = state.current()) >= 48 && ch <= 57);
      return true;
    }
    return false;
  };
  var CharSetNone = 0;
  var CharSetOk = 1;
  var CharSetString = 2;
  pp$1.regexp_eatCharacterClassEscape = function(state) {
    var ch = state.current();
    if (isCharacterClassEscape(ch)) {
      state.lastIntValue = -1;
      state.advance();
      return CharSetOk;
    }
    var negate = false;
    if (state.switchU && this.options.ecmaVersion >= 9 && ((negate = ch === 80) || ch === 112)) {
      state.lastIntValue = -1;
      state.advance();
      var result;
      if (state.eat(
        123
        /* { */
      ) && (result = this.regexp_eatUnicodePropertyValueExpression(state)) && state.eat(
        125
        /* } */
      )) {
        if (negate && result === CharSetString) {
          state.raise("Invalid property name");
        }
        return result;
      }
      state.raise("Invalid property name");
    }
    return CharSetNone;
  };
  function isCharacterClassEscape(ch) {
    return ch === 100 || ch === 68 || ch === 115 || ch === 83 || ch === 119 || ch === 87;
  }
  pp$1.regexp_eatUnicodePropertyValueExpression = function(state) {
    var start = state.pos;
    if (this.regexp_eatUnicodePropertyName(state) && state.eat(
      61
      /* = */
    )) {
      var name = state.lastStringValue;
      if (this.regexp_eatUnicodePropertyValue(state)) {
        var value = state.lastStringValue;
        this.regexp_validateUnicodePropertyNameAndValue(state, name, value);
        return CharSetOk;
      }
    }
    state.pos = start;
    if (this.regexp_eatLoneUnicodePropertyNameOrValue(state)) {
      var nameOrValue = state.lastStringValue;
      return this.regexp_validateUnicodePropertyNameOrValue(state, nameOrValue);
    }
    return CharSetNone;
  };
  pp$1.regexp_validateUnicodePropertyNameAndValue = function(state, name, value) {
    if (!hasOwn(state.unicodeProperties.nonBinary, name)) {
      state.raise("Invalid property name");
    }
    if (!state.unicodeProperties.nonBinary[name].test(value)) {
      state.raise("Invalid property value");
    }
  };
  pp$1.regexp_validateUnicodePropertyNameOrValue = function(state, nameOrValue) {
    if (state.unicodeProperties.binary.test(nameOrValue)) {
      return CharSetOk;
    }
    if (state.switchV && state.unicodeProperties.binaryOfStrings.test(nameOrValue)) {
      return CharSetString;
    }
    state.raise("Invalid property name");
  };
  pp$1.regexp_eatUnicodePropertyName = function(state) {
    var ch = 0;
    state.lastStringValue = "";
    while (isUnicodePropertyNameCharacter(ch = state.current())) {
      state.lastStringValue += codePointToString(ch);
      state.advance();
    }
    return state.lastStringValue !== "";
  };
  function isUnicodePropertyNameCharacter(ch) {
    return isControlLetter(ch) || ch === 95;
  }
  pp$1.regexp_eatUnicodePropertyValue = function(state) {
    var ch = 0;
    state.lastStringValue = "";
    while (isUnicodePropertyValueCharacter(ch = state.current())) {
      state.lastStringValue += codePointToString(ch);
      state.advance();
    }
    return state.lastStringValue !== "";
  };
  function isUnicodePropertyValueCharacter(ch) {
    return isUnicodePropertyNameCharacter(ch) || isDecimalDigit(ch);
  }
  pp$1.regexp_eatLoneUnicodePropertyNameOrValue = function(state) {
    return this.regexp_eatUnicodePropertyValue(state);
  };
  pp$1.regexp_eatCharacterClass = function(state) {
    if (state.eat(
      91
      /* [ */
    )) {
      var negate = state.eat(
        94
        /* ^ */
      );
      var result = this.regexp_classContents(state);
      if (!state.eat(
        93
        /* ] */
      )) {
        state.raise("Unterminated character class");
      }
      if (negate && result === CharSetString) {
        state.raise("Negated character class may contain strings");
      }
      return true;
    }
    return false;
  };
  pp$1.regexp_classContents = function(state) {
    if (state.current() === 93) {
      return CharSetOk;
    }
    if (state.switchV) {
      return this.regexp_classSetExpression(state);
    }
    this.regexp_nonEmptyClassRanges(state);
    return CharSetOk;
  };
  pp$1.regexp_nonEmptyClassRanges = function(state) {
    while (this.regexp_eatClassAtom(state)) {
      var left = state.lastIntValue;
      if (state.eat(
        45
        /* - */
      ) && this.regexp_eatClassAtom(state)) {
        var right = state.lastIntValue;
        if (state.switchU && (left === -1 || right === -1)) {
          state.raise("Invalid character class");
        }
        if (left !== -1 && right !== -1 && left > right) {
          state.raise("Range out of order in character class");
        }
      }
    }
  };
  pp$1.regexp_eatClassAtom = function(state) {
    var start = state.pos;
    if (state.eat(
      92
      /* \ */
    )) {
      if (this.regexp_eatClassEscape(state)) {
        return true;
      }
      if (state.switchU) {
        var ch$1 = state.current();
        if (ch$1 === 99 || isOctalDigit(ch$1)) {
          state.raise("Invalid class escape");
        }
        state.raise("Invalid escape");
      }
      state.pos = start;
    }
    var ch = state.current();
    if (ch !== 93) {
      state.lastIntValue = ch;
      state.advance();
      return true;
    }
    return false;
  };
  pp$1.regexp_eatClassEscape = function(state) {
    var start = state.pos;
    if (state.eat(
      98
      /* b */
    )) {
      state.lastIntValue = 8;
      return true;
    }
    if (state.switchU && state.eat(
      45
      /* - */
    )) {
      state.lastIntValue = 45;
      return true;
    }
    if (!state.switchU && state.eat(
      99
      /* c */
    )) {
      if (this.regexp_eatClassControlLetter(state)) {
        return true;
      }
      state.pos = start;
    }
    return this.regexp_eatCharacterClassEscape(state) || this.regexp_eatCharacterEscape(state);
  };
  pp$1.regexp_classSetExpression = function(state) {
    var result = CharSetOk, subResult;
    if (this.regexp_eatClassSetRange(state)) ;
    else if (subResult = this.regexp_eatClassSetOperand(state)) {
      if (subResult === CharSetString) {
        result = CharSetString;
      }
      var start = state.pos;
      while (state.eatChars(
        [38, 38]
        /* && */
      )) {
        if (state.current() !== 38 && (subResult = this.regexp_eatClassSetOperand(state))) {
          if (subResult !== CharSetString) {
            result = CharSetOk;
          }
          continue;
        }
        state.raise("Invalid character in character class");
      }
      if (start !== state.pos) {
        return result;
      }
      while (state.eatChars(
        [45, 45]
        /* -- */
      )) {
        if (this.regexp_eatClassSetOperand(state)) {
          continue;
        }
        state.raise("Invalid character in character class");
      }
      if (start !== state.pos) {
        return result;
      }
    } else {
      state.raise("Invalid character in character class");
    }
    for (; ; ) {
      if (this.regexp_eatClassSetRange(state)) {
        continue;
      }
      subResult = this.regexp_eatClassSetOperand(state);
      if (!subResult) {
        return result;
      }
      if (subResult === CharSetString) {
        result = CharSetString;
      }
    }
  };
  pp$1.regexp_eatClassSetRange = function(state) {
    var start = state.pos;
    if (this.regexp_eatClassSetCharacter(state)) {
      var left = state.lastIntValue;
      if (state.eat(
        45
        /* - */
      ) && this.regexp_eatClassSetCharacter(state)) {
        var right = state.lastIntValue;
        if (left !== -1 && right !== -1 && left > right) {
          state.raise("Range out of order in character class");
        }
        return true;
      }
      state.pos = start;
    }
    return false;
  };
  pp$1.regexp_eatClassSetOperand = function(state) {
    if (this.regexp_eatClassSetCharacter(state)) {
      return CharSetOk;
    }
    return this.regexp_eatClassStringDisjunction(state) || this.regexp_eatNestedClass(state);
  };
  pp$1.regexp_eatNestedClass = function(state) {
    var start = state.pos;
    if (state.eat(
      91
      /* [ */
    )) {
      var negate = state.eat(
        94
        /* ^ */
      );
      var result = this.regexp_classContents(state);
      if (state.eat(
        93
        /* ] */
      )) {
        if (negate && result === CharSetString) {
          state.raise("Negated character class may contain strings");
        }
        return result;
      }
      state.pos = start;
    }
    if (state.eat(
      92
      /* \ */
    )) {
      var result$1 = this.regexp_eatCharacterClassEscape(state);
      if (result$1) {
        return result$1;
      }
      state.pos = start;
    }
    return null;
  };
  pp$1.regexp_eatClassStringDisjunction = function(state) {
    var start = state.pos;
    if (state.eatChars(
      [92, 113]
      /* \q */
    )) {
      if (state.eat(
        123
        /* { */
      )) {
        var result = this.regexp_classStringDisjunctionContents(state);
        if (state.eat(
          125
          /* } */
        )) {
          return result;
        }
      } else {
        state.raise("Invalid escape");
      }
      state.pos = start;
    }
    return null;
  };
  pp$1.regexp_classStringDisjunctionContents = function(state) {
    var result = this.regexp_classString(state);
    while (state.eat(
      124
      /* | */
    )) {
      if (this.regexp_classString(state) === CharSetString) {
        result = CharSetString;
      }
    }
    return result;
  };
  pp$1.regexp_classString = function(state) {
    var count = 0;
    while (this.regexp_eatClassSetCharacter(state)) {
      count++;
    }
    return count === 1 ? CharSetOk : CharSetString;
  };
  pp$1.regexp_eatClassSetCharacter = function(state) {
    var start = state.pos;
    if (state.eat(
      92
      /* \ */
    )) {
      if (this.regexp_eatCharacterEscape(state) || this.regexp_eatClassSetReservedPunctuator(state)) {
        return true;
      }
      if (state.eat(
        98
        /* b */
      )) {
        state.lastIntValue = 8;
        return true;
      }
      state.pos = start;
      return false;
    }
    var ch = state.current();
    if (ch < 0 || ch === state.lookahead() && isClassSetReservedDoublePunctuatorCharacter(ch)) {
      return false;
    }
    if (isClassSetSyntaxCharacter(ch)) {
      return false;
    }
    state.advance();
    state.lastIntValue = ch;
    return true;
  };
  function isClassSetReservedDoublePunctuatorCharacter(ch) {
    return ch === 33 || ch >= 35 && ch <= 38 || ch >= 42 && ch <= 44 || ch === 46 || ch >= 58 && ch <= 64 || ch === 94 || ch === 96 || ch === 126;
  }
  function isClassSetSyntaxCharacter(ch) {
    return ch === 40 || ch === 41 || ch === 45 || ch === 47 || ch >= 91 && ch <= 93 || ch >= 123 && ch <= 125;
  }
  pp$1.regexp_eatClassSetReservedPunctuator = function(state) {
    var ch = state.current();
    if (isClassSetReservedPunctuator(ch)) {
      state.lastIntValue = ch;
      state.advance();
      return true;
    }
    return false;
  };
  function isClassSetReservedPunctuator(ch) {
    return ch === 33 || ch === 35 || ch === 37 || ch === 38 || ch === 44 || ch === 45 || ch >= 58 && ch <= 62 || ch === 64 || ch === 96 || ch === 126;
  }
  pp$1.regexp_eatClassControlLetter = function(state) {
    var ch = state.current();
    if (isDecimalDigit(ch) || ch === 95) {
      state.lastIntValue = ch % 32;
      state.advance();
      return true;
    }
    return false;
  };
  pp$1.regexp_eatHexEscapeSequence = function(state) {
    var start = state.pos;
    if (state.eat(
      120
      /* x */
    )) {
      if (this.regexp_eatFixedHexDigits(state, 2)) {
        return true;
      }
      if (state.switchU) {
        state.raise("Invalid escape");
      }
      state.pos = start;
    }
    return false;
  };
  pp$1.regexp_eatDecimalDigits = function(state) {
    var start = state.pos;
    var ch = 0;
    state.lastIntValue = 0;
    while (isDecimalDigit(ch = state.current())) {
      state.lastIntValue = 10 * state.lastIntValue + (ch - 48);
      state.advance();
    }
    return state.pos !== start;
  };
  function isDecimalDigit(ch) {
    return ch >= 48 && ch <= 57;
  }
  pp$1.regexp_eatHexDigits = function(state) {
    var start = state.pos;
    var ch = 0;
    state.lastIntValue = 0;
    while (isHexDigit(ch = state.current())) {
      state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
      state.advance();
    }
    return state.pos !== start;
  };
  function isHexDigit(ch) {
    return ch >= 48 && ch <= 57 || ch >= 65 && ch <= 70 || ch >= 97 && ch <= 102;
  }
  function hexToInt(ch) {
    if (ch >= 65 && ch <= 70) {
      return 10 + (ch - 65);
    }
    if (ch >= 97 && ch <= 102) {
      return 10 + (ch - 97);
    }
    return ch - 48;
  }
  pp$1.regexp_eatLegacyOctalEscapeSequence = function(state) {
    if (this.regexp_eatOctalDigit(state)) {
      var n1 = state.lastIntValue;
      if (this.regexp_eatOctalDigit(state)) {
        var n2 = state.lastIntValue;
        if (n1 <= 3 && this.regexp_eatOctalDigit(state)) {
          state.lastIntValue = n1 * 64 + n2 * 8 + state.lastIntValue;
        } else {
          state.lastIntValue = n1 * 8 + n2;
        }
      } else {
        state.lastIntValue = n1;
      }
      return true;
    }
    return false;
  };
  pp$1.regexp_eatOctalDigit = function(state) {
    var ch = state.current();
    if (isOctalDigit(ch)) {
      state.lastIntValue = ch - 48;
      state.advance();
      return true;
    }
    state.lastIntValue = 0;
    return false;
  };
  function isOctalDigit(ch) {
    return ch >= 48 && ch <= 55;
  }
  pp$1.regexp_eatFixedHexDigits = function(state, length) {
    var start = state.pos;
    state.lastIntValue = 0;
    for (var i = 0; i < length; ++i) {
      var ch = state.current();
      if (!isHexDigit(ch)) {
        state.pos = start;
        return false;
      }
      state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
      state.advance();
    }
    return true;
  };
  var Token = function Token2(p) {
    this.type = p.type;
    this.value = p.value;
    this.start = p.start;
    this.end = p.end;
    if (p.options.locations) {
      this.loc = new SourceLocation(p, p.startLoc, p.endLoc);
    }
    if (p.options.ranges) {
      this.range = [p.start, p.end];
    }
  };
  var pp = Parser.prototype;
  pp.next = function(ignoreEscapeSequenceInKeyword) {
    if (!ignoreEscapeSequenceInKeyword && this.type.keyword && this.containsEsc) {
      this.raiseRecoverable(this.start, "Escape sequence in keyword " + this.type.keyword);
    }
    if (this.options.onToken) {
      this.options.onToken(new Token(this));
    }
    this.lastTokEnd = this.end;
    this.lastTokStart = this.start;
    this.lastTokEndLoc = this.endLoc;
    this.lastTokStartLoc = this.startLoc;
    this.nextToken();
  };
  pp.getToken = function() {
    this.next();
    return new Token(this);
  };
  if (typeof Symbol !== "undefined") {
    pp[Symbol.iterator] = function() {
      var this$1$1 = this;
      return {
        next: function() {
          var token = this$1$1.getToken();
          return {
            done: token.type === types$1.eof,
            value: token
          };
        }
      };
    };
  }
  pp.nextToken = function() {
    var curContext = this.curContext();
    if (!curContext || !curContext.preserveSpace) {
      this.skipSpace();
    }
    this.start = this.pos;
    if (this.options.locations) {
      this.startLoc = this.curPosition();
    }
    if (this.pos >= this.input.length) {
      return this.finishToken(types$1.eof);
    }
    if (curContext.override) {
      return curContext.override(this);
    } else {
      this.readToken(this.fullCharCodeAtPos());
    }
  };
  pp.readToken = function(code) {
    if (isIdentifierStart(code, this.options.ecmaVersion >= 6) || code === 92) {
      return this.readWord();
    }
    return this.getTokenFromCode(code);
  };
  pp.fullCharCodeAt = function(pos) {
    var code = this.input.charCodeAt(pos);
    if (code <= 55295 || code >= 56320) {
      return code;
    }
    var next = this.input.charCodeAt(pos + 1);
    return next <= 56319 || next >= 57344 ? code : (code << 10) + next - 56613888;
  };
  pp.fullCharCodeAtPos = function() {
    return this.fullCharCodeAt(this.pos);
  };
  pp.skipBlockComment = function() {
    var startLoc = this.options.onComment && this.curPosition();
    var start = this.pos, end = this.input.indexOf("*/", this.pos += 2);
    if (end === -1) {
      this.raise(this.pos - 2, "Unterminated comment");
    }
    this.pos = end + 2;
    if (this.options.locations) {
      for (var nextBreak = void 0, pos = start; (nextBreak = nextLineBreak(this.input, pos, this.pos)) > -1; ) {
        ++this.curLine;
        pos = this.lineStart = nextBreak;
      }
    }
    if (this.options.onComment) {
      this.options.onComment(
        true,
        this.input.slice(start + 2, end),
        start,
        this.pos,
        startLoc,
        this.curPosition()
      );
    }
  };
  pp.skipLineComment = function(startSkip) {
    var start = this.pos;
    var startLoc = this.options.onComment && this.curPosition();
    var ch = this.input.charCodeAt(this.pos += startSkip);
    while (this.pos < this.input.length && !isNewLine(ch)) {
      ch = this.input.charCodeAt(++this.pos);
    }
    if (this.options.onComment) {
      this.options.onComment(
        false,
        this.input.slice(start + startSkip, this.pos),
        start,
        this.pos,
        startLoc,
        this.curPosition()
      );
    }
  };
  pp.skipSpace = function() {
    loop: while (this.pos < this.input.length) {
      var ch = this.input.charCodeAt(this.pos);
      switch (ch) {
        case 32:
        case 160:
          ++this.pos;
          break;
        case 13:
          if (this.input.charCodeAt(this.pos + 1) === 10) {
            ++this.pos;
          }
        case 10:
        case 8232:
        case 8233:
          ++this.pos;
          if (this.options.locations) {
            ++this.curLine;
            this.lineStart = this.pos;
          }
          break;
        case 47:
          switch (this.input.charCodeAt(this.pos + 1)) {
            case 42:
              this.skipBlockComment();
              break;
            case 47:
              this.skipLineComment(2);
              break;
            default:
              break loop;
          }
          break;
        default:
          if (ch > 8 && ch < 14 || ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch))) {
            ++this.pos;
          } else {
            break loop;
          }
      }
    }
  };
  pp.finishToken = function(type, val) {
    this.end = this.pos;
    if (this.options.locations) {
      this.endLoc = this.curPosition();
    }
    var prevType = this.type;
    this.type = type;
    this.value = val;
    this.updateContext(prevType);
  };
  pp.readToken_dot = function() {
    var next = this.input.charCodeAt(this.pos + 1);
    if (next >= 48 && next <= 57) {
      return this.readNumber(true);
    }
    var next2 = this.input.charCodeAt(this.pos + 2);
    if (this.options.ecmaVersion >= 6 && next === 46 && next2 === 46) {
      this.pos += 3;
      return this.finishToken(types$1.ellipsis);
    } else {
      ++this.pos;
      return this.finishToken(types$1.dot);
    }
  };
  pp.readToken_slash = function() {
    var next = this.input.charCodeAt(this.pos + 1);
    if (this.exprAllowed) {
      ++this.pos;
      return this.readRegexp();
    }
    if (next === 61) {
      return this.finishOp(types$1.assign, 2);
    }
    return this.finishOp(types$1.slash, 1);
  };
  pp.readToken_mult_modulo_exp = function(code) {
    var next = this.input.charCodeAt(this.pos + 1);
    var size = 1;
    var tokentype = code === 42 ? types$1.star : types$1.modulo;
    if (this.options.ecmaVersion >= 7 && code === 42 && next === 42) {
      ++size;
      tokentype = types$1.starstar;
      next = this.input.charCodeAt(this.pos + 2);
    }
    if (next === 61) {
      return this.finishOp(types$1.assign, size + 1);
    }
    return this.finishOp(tokentype, size);
  };
  pp.readToken_pipe_amp = function(code) {
    var next = this.input.charCodeAt(this.pos + 1);
    if (next === code) {
      if (this.options.ecmaVersion >= 12) {
        var next2 = this.input.charCodeAt(this.pos + 2);
        if (next2 === 61) {
          return this.finishOp(types$1.assign, 3);
        }
      }
      return this.finishOp(code === 124 ? types$1.logicalOR : types$1.logicalAND, 2);
    }
    if (next === 61) {
      return this.finishOp(types$1.assign, 2);
    }
    return this.finishOp(code === 124 ? types$1.bitwiseOR : types$1.bitwiseAND, 1);
  };
  pp.readToken_caret = function() {
    var next = this.input.charCodeAt(this.pos + 1);
    if (next === 61) {
      return this.finishOp(types$1.assign, 2);
    }
    return this.finishOp(types$1.bitwiseXOR, 1);
  };
  pp.readToken_plus_min = function(code) {
    var next = this.input.charCodeAt(this.pos + 1);
    if (next === code) {
      if (next === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 && (this.lastTokEnd === 0 || lineBreak.test(this.input.slice(this.lastTokEnd, this.pos)))) {
        this.skipLineComment(3);
        this.skipSpace();
        return this.nextToken();
      }
      return this.finishOp(types$1.incDec, 2);
    }
    if (next === 61) {
      return this.finishOp(types$1.assign, 2);
    }
    return this.finishOp(types$1.plusMin, 1);
  };
  pp.readToken_lt_gt = function(code) {
    var next = this.input.charCodeAt(this.pos + 1);
    var size = 1;
    if (next === code) {
      size = code === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2;
      if (this.input.charCodeAt(this.pos + size) === 61) {
        return this.finishOp(types$1.assign, size + 1);
      }
      return this.finishOp(types$1.bitShift, size);
    }
    if (next === 33 && code === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 && this.input.charCodeAt(this.pos + 3) === 45) {
      this.skipLineComment(4);
      this.skipSpace();
      return this.nextToken();
    }
    if (next === 61) {
      size = 2;
    }
    return this.finishOp(types$1.relational, size);
  };
  pp.readToken_eq_excl = function(code) {
    var next = this.input.charCodeAt(this.pos + 1);
    if (next === 61) {
      return this.finishOp(types$1.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2);
    }
    if (code === 61 && next === 62 && this.options.ecmaVersion >= 6) {
      this.pos += 2;
      return this.finishToken(types$1.arrow);
    }
    return this.finishOp(code === 61 ? types$1.eq : types$1.prefix, 1);
  };
  pp.readToken_question = function() {
    var ecmaVersion = this.options.ecmaVersion;
    if (ecmaVersion >= 11) {
      var next = this.input.charCodeAt(this.pos + 1);
      if (next === 46) {
        var next2 = this.input.charCodeAt(this.pos + 2);
        if (next2 < 48 || next2 > 57) {
          return this.finishOp(types$1.questionDot, 2);
        }
      }
      if (next === 63) {
        if (ecmaVersion >= 12) {
          var next2$1 = this.input.charCodeAt(this.pos + 2);
          if (next2$1 === 61) {
            return this.finishOp(types$1.assign, 3);
          }
        }
        return this.finishOp(types$1.coalesce, 2);
      }
    }
    return this.finishOp(types$1.question, 1);
  };
  pp.readToken_numberSign = function() {
    var ecmaVersion = this.options.ecmaVersion;
    var code = 35;
    if (ecmaVersion >= 13) {
      ++this.pos;
      code = this.fullCharCodeAtPos();
      if (isIdentifierStart(code, true) || code === 92) {
        return this.finishToken(types$1.privateId, this.readWord1());
      }
    }
    this.raise(this.pos, "Unexpected character '" + codePointToString(code) + "'");
  };
  pp.getTokenFromCode = function(code) {
    switch (code) {
      // The interpretation of a dot depends on whether it is followed
      // by a digit or another two dots.
      case 46:
        return this.readToken_dot();
      // Punctuation tokens.
      case 40:
        ++this.pos;
        return this.finishToken(types$1.parenL);
      case 41:
        ++this.pos;
        return this.finishToken(types$1.parenR);
      case 59:
        ++this.pos;
        return this.finishToken(types$1.semi);
      case 44:
        ++this.pos;
        return this.finishToken(types$1.comma);
      case 91:
        ++this.pos;
        return this.finishToken(types$1.bracketL);
      case 93:
        ++this.pos;
        return this.finishToken(types$1.bracketR);
      case 123:
        ++this.pos;
        return this.finishToken(types$1.braceL);
      case 125:
        ++this.pos;
        return this.finishToken(types$1.braceR);
      case 58:
        ++this.pos;
        return this.finishToken(types$1.colon);
      case 96:
        if (this.options.ecmaVersion < 6) {
          break;
        }
        ++this.pos;
        return this.finishToken(types$1.backQuote);
      case 48:
        var next = this.input.charCodeAt(this.pos + 1);
        if (next === 120 || next === 88) {
          return this.readRadixNumber(16);
        }
        if (this.options.ecmaVersion >= 6) {
          if (next === 111 || next === 79) {
            return this.readRadixNumber(8);
          }
          if (next === 98 || next === 66) {
            return this.readRadixNumber(2);
          }
        }
      // Anything else beginning with a digit is an integer, octal
      // number, or float.
      case 49:
      case 50:
      case 51:
      case 52:
      case 53:
      case 54:
      case 55:
      case 56:
      case 57:
        return this.readNumber(false);
      // Quotes produce strings.
      case 34:
      case 39:
        return this.readString(code);
      // Operators are parsed inline in tiny state machines. '=' (61) is
      // often referred to. `finishOp` simply skips the amount of
      // characters it is given as second argument, and returns a token
      // of the type given by its first argument.
      case 47:
        return this.readToken_slash();
      case 37:
      case 42:
        return this.readToken_mult_modulo_exp(code);
      case 124:
      case 38:
        return this.readToken_pipe_amp(code);
      case 94:
        return this.readToken_caret();
      case 43:
      case 45:
        return this.readToken_plus_min(code);
      case 60:
      case 62:
        return this.readToken_lt_gt(code);
      case 61:
      case 33:
        return this.readToken_eq_excl(code);
      case 63:
        return this.readToken_question();
      case 126:
        return this.finishOp(types$1.prefix, 1);
      case 35:
        return this.readToken_numberSign();
    }
    this.raise(this.pos, "Unexpected character '" + codePointToString(code) + "'");
  };
  pp.finishOp = function(type, size) {
    var str = this.input.slice(this.pos, this.pos + size);
    this.pos += size;
    return this.finishToken(type, str);
  };
  pp.readRegexp = function() {
    var escaped, inClass, start = this.pos;
    for (; ; ) {
      if (this.pos >= this.input.length) {
        this.raise(start, "Unterminated regular expression");
      }
      var ch = this.input.charAt(this.pos);
      if (lineBreak.test(ch)) {
        this.raise(start, "Unterminated regular expression");
      }
      if (!escaped) {
        if (ch === "[") {
          inClass = true;
        } else if (ch === "]" && inClass) {
          inClass = false;
        } else if (ch === "/" && !inClass) {
          break;
        }
        escaped = ch === "\\";
      } else {
        escaped = false;
      }
      ++this.pos;
    }
    var pattern = this.input.slice(start, this.pos);
    ++this.pos;
    var flagsStart = this.pos;
    var flags = this.readWord1();
    if (this.containsEsc) {
      this.unexpected(flagsStart);
    }
    var state = this.regexpState || (this.regexpState = new RegExpValidationState(this));
    state.reset(start, pattern, flags);
    this.validateRegExpFlags(state);
    this.validateRegExpPattern(state);
    var value = null;
    try {
      value = new RegExp(pattern, flags);
    } catch (e) {
    }
    return this.finishToken(types$1.regexp, { pattern, flags, value });
  };
  pp.readInt = function(radix, len, maybeLegacyOctalNumericLiteral) {
    var allowSeparators = this.options.ecmaVersion >= 12 && len === void 0;
    var isLegacyOctalNumericLiteral = maybeLegacyOctalNumericLiteral && this.input.charCodeAt(this.pos) === 48;
    var start = this.pos, total = 0, lastCode = 0;
    for (var i = 0, e = len == null ? Infinity : len; i < e; ++i, ++this.pos) {
      var code = this.input.charCodeAt(this.pos), val = void 0;
      if (allowSeparators && code === 95) {
        if (isLegacyOctalNumericLiteral) {
          this.raiseRecoverable(this.pos, "Numeric separator is not allowed in legacy octal numeric literals");
        }
        if (lastCode === 95) {
          this.raiseRecoverable(this.pos, "Numeric separator must be exactly one underscore");
        }
        if (i === 0) {
          this.raiseRecoverable(this.pos, "Numeric separator is not allowed at the first of digits");
        }
        lastCode = code;
        continue;
      }
      if (code >= 97) {
        val = code - 97 + 10;
      } else if (code >= 65) {
        val = code - 65 + 10;
      } else if (code >= 48 && code <= 57) {
        val = code - 48;
      } else {
        val = Infinity;
      }
      if (val >= radix) {
        break;
      }
      lastCode = code;
      total = total * radix + val;
    }
    if (allowSeparators && lastCode === 95) {
      this.raiseRecoverable(this.pos - 1, "Numeric separator is not allowed at the last of digits");
    }
    if (this.pos === start || len != null && this.pos - start !== len) {
      return null;
    }
    return total;
  };
  function stringToNumber(str, isLegacyOctalNumericLiteral) {
    if (isLegacyOctalNumericLiteral) {
      return parseInt(str, 8);
    }
    return parseFloat(str.replace(/_/g, ""));
  }
  function stringToBigInt(str) {
    if (typeof BigInt !== "function") {
      return null;
    }
    return BigInt(str.replace(/_/g, ""));
  }
  pp.readRadixNumber = function(radix) {
    var start = this.pos;
    this.pos += 2;
    var val = this.readInt(radix);
    if (val == null) {
      this.raise(this.start + 2, "Expected number in radix " + radix);
    }
    if (this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110) {
      val = stringToBigInt(this.input.slice(start, this.pos));
      ++this.pos;
    } else if (isIdentifierStart(this.fullCharCodeAtPos())) {
      this.raise(this.pos, "Identifier directly after number");
    }
    return this.finishToken(types$1.num, val);
  };
  pp.readNumber = function(startsWithDot) {
    var start = this.pos;
    if (!startsWithDot && this.readInt(10, void 0, true) === null) {
      this.raise(start, "Invalid number");
    }
    var octal = this.pos - start >= 2 && this.input.charCodeAt(start) === 48;
    if (octal && this.strict) {
      this.raise(start, "Invalid number");
    }
    var next = this.input.charCodeAt(this.pos);
    if (!octal && !startsWithDot && this.options.ecmaVersion >= 11 && next === 110) {
      var val$1 = stringToBigInt(this.input.slice(start, this.pos));
      ++this.pos;
      if (isIdentifierStart(this.fullCharCodeAtPos())) {
        this.raise(this.pos, "Identifier directly after number");
      }
      return this.finishToken(types$1.num, val$1);
    }
    if (octal && /[89]/.test(this.input.slice(start, this.pos))) {
      octal = false;
    }
    if (next === 46 && !octal) {
      ++this.pos;
      this.readInt(10);
      next = this.input.charCodeAt(this.pos);
    }
    if ((next === 69 || next === 101) && !octal) {
      next = this.input.charCodeAt(++this.pos);
      if (next === 43 || next === 45) {
        ++this.pos;
      }
      if (this.readInt(10) === null) {
        this.raise(start, "Invalid number");
      }
    }
    if (isIdentifierStart(this.fullCharCodeAtPos())) {
      this.raise(this.pos, "Identifier directly after number");
    }
    var val = stringToNumber(this.input.slice(start, this.pos), octal);
    return this.finishToken(types$1.num, val);
  };
  pp.readCodePoint = function() {
    var ch = this.input.charCodeAt(this.pos), code;
    if (ch === 123) {
      if (this.options.ecmaVersion < 6) {
        this.unexpected();
      }
      var codePos = ++this.pos;
      code = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos);
      ++this.pos;
      if (code > 1114111) {
        this.invalidStringToken(codePos, "Code point out of bounds");
      }
    } else {
      code = this.readHexChar(4);
    }
    return code;
  };
  pp.readString = function(quote) {
    var out = "", chunkStart = ++this.pos;
    for (; ; ) {
      if (this.pos >= this.input.length) {
        this.raise(this.start, "Unterminated string constant");
      }
      var ch = this.input.charCodeAt(this.pos);
      if (ch === quote) {
        break;
      }
      if (ch === 92) {
        out += this.input.slice(chunkStart, this.pos);
        out += this.readEscapedChar(false);
        chunkStart = this.pos;
      } else if (ch === 8232 || ch === 8233) {
        if (this.options.ecmaVersion < 10) {
          this.raise(this.start, "Unterminated string constant");
        }
        ++this.pos;
        if (this.options.locations) {
          this.curLine++;
          this.lineStart = this.pos;
        }
      } else {
        if (isNewLine(ch)) {
          this.raise(this.start, "Unterminated string constant");
        }
        ++this.pos;
      }
    }
    out += this.input.slice(chunkStart, this.pos++);
    return this.finishToken(types$1.string, out);
  };
  var INVALID_TEMPLATE_ESCAPE_ERROR = {};
  pp.tryReadTemplateToken = function() {
    this.inTemplateElement = true;
    try {
      this.readTmplToken();
    } catch (err) {
      if (err === INVALID_TEMPLATE_ESCAPE_ERROR) {
        this.readInvalidTemplateToken();
      } else {
        throw err;
      }
    }
    this.inTemplateElement = false;
  };
  pp.invalidStringToken = function(position, message) {
    if (this.inTemplateElement && this.options.ecmaVersion >= 9) {
      throw INVALID_TEMPLATE_ESCAPE_ERROR;
    } else {
      this.raise(position, message);
    }
  };
  pp.readTmplToken = function() {
    var out = "", chunkStart = this.pos;
    for (; ; ) {
      if (this.pos >= this.input.length) {
        this.raise(this.start, "Unterminated template");
      }
      var ch = this.input.charCodeAt(this.pos);
      if (ch === 96 || ch === 36 && this.input.charCodeAt(this.pos + 1) === 123) {
        if (this.pos === this.start && (this.type === types$1.template || this.type === types$1.invalidTemplate)) {
          if (ch === 36) {
            this.pos += 2;
            return this.finishToken(types$1.dollarBraceL);
          } else {
            ++this.pos;
            return this.finishToken(types$1.backQuote);
          }
        }
        out += this.input.slice(chunkStart, this.pos);
        return this.finishToken(types$1.template, out);
      }
      if (ch === 92) {
        out += this.input.slice(chunkStart, this.pos);
        out += this.readEscapedChar(true);
        chunkStart = this.pos;
      } else if (isNewLine(ch)) {
        out += this.input.slice(chunkStart, this.pos);
        ++this.pos;
        switch (ch) {
          case 13:
            if (this.input.charCodeAt(this.pos) === 10) {
              ++this.pos;
            }
          case 10:
            out += "\n";
            break;
          default:
            out += String.fromCharCode(ch);
            break;
        }
        if (this.options.locations) {
          ++this.curLine;
          this.lineStart = this.pos;
        }
        chunkStart = this.pos;
      } else {
        ++this.pos;
      }
    }
  };
  pp.readInvalidTemplateToken = function() {
    for (; this.pos < this.input.length; this.pos++) {
      switch (this.input[this.pos]) {
        case "\\":
          ++this.pos;
          break;
        case "$":
          if (this.input[this.pos + 1] !== "{") {
            break;
          }
        // fall through
        case "`":
          return this.finishToken(types$1.invalidTemplate, this.input.slice(this.start, this.pos));
        case "\r":
          if (this.input[this.pos + 1] === "\n") {
            ++this.pos;
          }
        // fall through
        case "\n":
        case "\u2028":
        case "\u2029":
          ++this.curLine;
          this.lineStart = this.pos + 1;
          break;
      }
    }
    this.raise(this.start, "Unterminated template");
  };
  pp.readEscapedChar = function(inTemplate) {
    var ch = this.input.charCodeAt(++this.pos);
    ++this.pos;
    switch (ch) {
      case 110:
        return "\n";
      // 'n' -> '\n'
      case 114:
        return "\r";
      // 'r' -> '\r'
      case 120:
        return String.fromCharCode(this.readHexChar(2));
      // 'x'
      case 117:
        return codePointToString(this.readCodePoint());
      // 'u'
      case 116:
        return "	";
      // 't' -> '\t'
      case 98:
        return "\b";
      // 'b' -> '\b'
      case 118:
        return "\v";
      // 'v' -> '\u000b'
      case 102:
        return "\f";
      // 'f' -> '\f'
      case 13:
        if (this.input.charCodeAt(this.pos) === 10) {
          ++this.pos;
        }
      // '\r\n'
      case 10:
        if (this.options.locations) {
          this.lineStart = this.pos;
          ++this.curLine;
        }
        return "";
      case 56:
      case 57:
        if (this.strict) {
          this.invalidStringToken(
            this.pos - 1,
            "Invalid escape sequence"
          );
        }
        if (inTemplate) {
          var codePos = this.pos - 1;
          this.invalidStringToken(
            codePos,
            "Invalid escape sequence in template string"
          );
        }
      default:
        if (ch >= 48 && ch <= 55) {
          var octalStr = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0];
          var octal = parseInt(octalStr, 8);
          if (octal > 255) {
            octalStr = octalStr.slice(0, -1);
            octal = parseInt(octalStr, 8);
          }
          this.pos += octalStr.length - 1;
          ch = this.input.charCodeAt(this.pos);
          if ((octalStr !== "0" || ch === 56 || ch === 57) && (this.strict || inTemplate)) {
            this.invalidStringToken(
              this.pos - 1 - octalStr.length,
              inTemplate ? "Octal literal in template string" : "Octal literal in strict mode"
            );
          }
          return String.fromCharCode(octal);
        }
        if (isNewLine(ch)) {
          if (this.options.locations) {
            this.lineStart = this.pos;
            ++this.curLine;
          }
          return "";
        }
        return String.fromCharCode(ch);
    }
  };
  pp.readHexChar = function(len) {
    var codePos = this.pos;
    var n = this.readInt(16, len);
    if (n === null) {
      this.invalidStringToken(codePos, "Bad character escape sequence");
    }
    return n;
  };
  pp.readWord1 = function() {
    this.containsEsc = false;
    var word = "", first = true, chunkStart = this.pos;
    var astral = this.options.ecmaVersion >= 6;
    while (this.pos < this.input.length) {
      var ch = this.fullCharCodeAtPos();
      if (isIdentifierChar(ch, astral)) {
        this.pos += ch <= 65535 ? 1 : 2;
      } else if (ch === 92) {
        this.containsEsc = true;
        word += this.input.slice(chunkStart, this.pos);
        var escStart = this.pos;
        if (this.input.charCodeAt(++this.pos) !== 117) {
          this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX");
        }
        ++this.pos;
        var esc = this.readCodePoint();
        if (!(first ? isIdentifierStart : isIdentifierChar)(esc, astral)) {
          this.invalidStringToken(escStart, "Invalid Unicode escape");
        }
        word += codePointToString(esc);
        chunkStart = this.pos;
      } else {
        break;
      }
      first = false;
    }
    return word + this.input.slice(chunkStart, this.pos);
  };
  pp.readWord = function() {
    var word = this.readWord1();
    var type = types$1.name;
    if (this.keywords.test(word)) {
      type = keywords[word];
    }
    return this.finishToken(type, word);
  };
  var version = "8.16.0";
  Parser.acorn = {
    Parser,
    version,
    defaultOptions,
    Position,
    SourceLocation,
    getLineInfo,
    Node,
    TokenType,
    tokTypes: types$1,
    keywordTypes: keywords,
    TokContext,
    tokContexts: types,
    isIdentifierChar,
    isIdentifierStart,
    Token,
    isNewLine,
    lineBreak,
    lineBreakG,
    nonASCIIwhitespace
  };
  function parse3(input, options) {
    return Parser.parse(input, options);
  }

  // node_modules/acorn-walk/dist/walk.mjs
  function simple(node, visitors, baseVisitor, state, override) {
    if (!baseVisitor) {
      baseVisitor = base;
    }
    (function c(node2, st, override2) {
      var type = override2 || node2.type;
      visitNode(baseVisitor, type, node2, st, c);
      if (visitors[type]) {
        visitors[type](node2, st);
      }
    })(node, state, override);
  }
  function skipThrough(node, st, c) {
    c(node, st);
  }
  function ignore(_node, _st, _c) {
  }
  function visitNode(baseVisitor, type, node, st, c) {
    if (baseVisitor[type] == null) {
      throw new Error("No walker function defined for node type " + type);
    }
    baseVisitor[type](node, st, c);
  }
  var base = {};
  base.Program = base.BlockStatement = base.StaticBlock = function(node, st, c) {
    for (var i = 0, list = node.body; i < list.length; i += 1) {
      var stmt = list[i];
      c(stmt, st, "Statement");
    }
  };
  base.Statement = skipThrough;
  base.EmptyStatement = ignore;
  base.ExpressionStatement = base.ParenthesizedExpression = base.ChainExpression = function(node, st, c) {
    return c(node.expression, st, "Expression");
  };
  base.IfStatement = function(node, st, c) {
    c(node.test, st, "Expression");
    c(node.consequent, st, "Statement");
    if (node.alternate) {
      c(node.alternate, st, "Statement");
    }
  };
  base.LabeledStatement = function(node, st, c) {
    return c(node.body, st, "Statement");
  };
  base.BreakStatement = base.ContinueStatement = ignore;
  base.WithStatement = function(node, st, c) {
    c(node.object, st, "Expression");
    c(node.body, st, "Statement");
  };
  base.SwitchStatement = function(node, st, c) {
    c(node.discriminant, st, "Expression");
    for (var i = 0, list = node.cases; i < list.length; i += 1) {
      var cs = list[i];
      c(cs, st);
    }
  };
  base.SwitchCase = function(node, st, c) {
    if (node.test) {
      c(node.test, st, "Expression");
    }
    for (var i = 0, list = node.consequent; i < list.length; i += 1) {
      var cons = list[i];
      c(cons, st, "Statement");
    }
  };
  base.ReturnStatement = base.YieldExpression = base.AwaitExpression = function(node, st, c) {
    if (node.argument) {
      c(node.argument, st, "Expression");
    }
  };
  base.ThrowStatement = base.SpreadElement = function(node, st, c) {
    return c(node.argument, st, "Expression");
  };
  base.TryStatement = function(node, st, c) {
    c(node.block, st, "Statement");
    if (node.handler) {
      c(node.handler, st);
    }
    if (node.finalizer) {
      c(node.finalizer, st, "Statement");
    }
  };
  base.CatchClause = function(node, st, c) {
    if (node.param) {
      c(node.param, st, "Pattern");
    }
    c(node.body, st, "Statement");
  };
  base.WhileStatement = base.DoWhileStatement = function(node, st, c) {
    c(node.test, st, "Expression");
    c(node.body, st, "Statement");
  };
  base.ForStatement = function(node, st, c) {
    if (node.init) {
      c(node.init, st, "ForInit");
    }
    if (node.test) {
      c(node.test, st, "Expression");
    }
    if (node.update) {
      c(node.update, st, "Expression");
    }
    c(node.body, st, "Statement");
  };
  base.ForInStatement = base.ForOfStatement = function(node, st, c) {
    c(node.left, st, "ForInit");
    c(node.right, st, "Expression");
    c(node.body, st, "Statement");
  };
  base.ForInit = function(node, st, c) {
    if (node.type === "VariableDeclaration") {
      c(node, st);
    } else {
      c(node, st, "Expression");
    }
  };
  base.DebuggerStatement = ignore;
  base.FunctionDeclaration = function(node, st, c) {
    return c(node, st, "Function");
  };
  base.VariableDeclaration = function(node, st, c) {
    for (var i = 0, list = node.declarations; i < list.length; i += 1) {
      var decl = list[i];
      c(decl, st);
    }
  };
  base.VariableDeclarator = function(node, st, c) {
    c(node.id, st, "Pattern");
    if (node.init) {
      c(node.init, st, "Expression");
    }
  };
  base.Function = function(node, st, c) {
    if (node.id) {
      c(node.id, st, "Pattern");
    }
    for (var i = 0, list = node.params; i < list.length; i += 1) {
      var param = list[i];
      c(param, st, "Pattern");
    }
    c(node.body, st, node.expression ? "Expression" : "Statement");
  };
  base.Pattern = function(node, st, c) {
    if (node.type === "Identifier") {
      c(node, st, "VariablePattern");
    } else if (node.type === "MemberExpression") {
      c(node, st, "MemberPattern");
    } else {
      c(node, st);
    }
  };
  base.VariablePattern = ignore;
  base.MemberPattern = skipThrough;
  base.RestElement = function(node, st, c) {
    return c(node.argument, st, "Pattern");
  };
  base.ArrayPattern = function(node, st, c) {
    for (var i = 0, list = node.elements; i < list.length; i += 1) {
      var elt = list[i];
      if (elt) {
        c(elt, st, "Pattern");
      }
    }
  };
  base.ObjectPattern = function(node, st, c) {
    for (var i = 0, list = node.properties; i < list.length; i += 1) {
      var prop = list[i];
      if (prop.type === "Property") {
        if (prop.computed) {
          c(prop.key, st, "Expression");
        }
        c(prop.value, st, "Pattern");
      } else if (prop.type === "RestElement") {
        c(prop.argument, st, "Pattern");
      }
    }
  };
  base.Expression = skipThrough;
  base.ThisExpression = base.Super = base.MetaProperty = ignore;
  base.ArrayExpression = function(node, st, c) {
    for (var i = 0, list = node.elements; i < list.length; i += 1) {
      var elt = list[i];
      if (elt) {
        c(elt, st, "Expression");
      }
    }
  };
  base.ObjectExpression = function(node, st, c) {
    for (var i = 0, list = node.properties; i < list.length; i += 1) {
      var prop = list[i];
      c(prop, st);
    }
  };
  base.FunctionExpression = base.ArrowFunctionExpression = base.FunctionDeclaration;
  base.SequenceExpression = function(node, st, c) {
    for (var i = 0, list = node.expressions; i < list.length; i += 1) {
      var expr = list[i];
      c(expr, st, "Expression");
    }
  };
  base.TemplateLiteral = function(node, st, c) {
    for (var i = 0, list = node.quasis; i < list.length; i += 1) {
      var quasi = list[i];
      c(quasi, st);
    }
    for (var i$1 = 0, list$1 = node.expressions; i$1 < list$1.length; i$1 += 1) {
      var expr = list$1[i$1];
      c(expr, st, "Expression");
    }
  };
  base.TemplateElement = ignore;
  base.UnaryExpression = base.UpdateExpression = function(node, st, c) {
    c(node.argument, st, "Expression");
  };
  base.BinaryExpression = base.LogicalExpression = function(node, st, c) {
    c(node.left, st, "Expression");
    c(node.right, st, "Expression");
  };
  base.AssignmentExpression = base.AssignmentPattern = function(node, st, c) {
    c(node.left, st, "Pattern");
    c(node.right, st, "Expression");
  };
  base.ConditionalExpression = function(node, st, c) {
    c(node.test, st, "Expression");
    c(node.consequent, st, "Expression");
    c(node.alternate, st, "Expression");
  };
  base.NewExpression = base.CallExpression = function(node, st, c) {
    c(node.callee, st, "Expression");
    if (node.arguments) {
      for (var i = 0, list = node.arguments; i < list.length; i += 1) {
        var arg = list[i];
        c(arg, st, "Expression");
      }
    }
  };
  base.MemberExpression = function(node, st, c) {
    c(node.object, st, "Expression");
    if (node.computed) {
      c(node.property, st, "Expression");
    }
  };
  base.ExportNamedDeclaration = base.ExportDefaultDeclaration = function(node, st, c) {
    if (node.declaration) {
      c(node.declaration, st, node.type === "ExportNamedDeclaration" || node.declaration.id ? "Statement" : "Expression");
    }
    if (node.source) {
      c(node.source, st, "Expression");
    }
    if (node.attributes) {
      for (var i = 0, list = node.attributes; i < list.length; i += 1) {
        var attr = list[i];
        c(attr, st);
      }
    }
  };
  base.ExportAllDeclaration = function(node, st, c) {
    if (node.exported) {
      c(node.exported, st);
    }
    c(node.source, st, "Expression");
    if (node.attributes) {
      for (var i = 0, list = node.attributes; i < list.length; i += 1) {
        var attr = list[i];
        c(attr, st);
      }
    }
  };
  base.ImportAttribute = function(node, st, c) {
    c(node.value, st, "Expression");
  };
  base.ImportDeclaration = function(node, st, c) {
    for (var i = 0, list = node.specifiers; i < list.length; i += 1) {
      var spec = list[i];
      c(spec, st);
    }
    c(node.source, st, "Expression");
    if (node.attributes) {
      for (var i$1 = 0, list$1 = node.attributes; i$1 < list$1.length; i$1 += 1) {
        var attr = list$1[i$1];
        c(attr, st);
      }
    }
  };
  base.ImportExpression = function(node, st, c) {
    c(node.source, st, "Expression");
    if (node.options) {
      c(node.options, st, "Expression");
    }
  };
  base.ImportSpecifier = base.ImportDefaultSpecifier = base.ImportNamespaceSpecifier = base.Identifier = base.PrivateIdentifier = base.Literal = ignore;
  base.TaggedTemplateExpression = function(node, st, c) {
    c(node.tag, st, "Expression");
    c(node.quasi, st, "Expression");
  };
  base.ClassDeclaration = base.ClassExpression = function(node, st, c) {
    return c(node, st, "Class");
  };
  base.Class = function(node, st, c) {
    if (node.id) {
      c(node.id, st, "Pattern");
    }
    if (node.superClass) {
      c(node.superClass, st, "Expression");
    }
    c(node.body, st);
  };
  base.ClassBody = function(node, st, c) {
    for (var i = 0, list = node.body; i < list.length; i += 1) {
      var elt = list[i];
      c(elt, st);
    }
  };
  base.MethodDefinition = base.PropertyDefinition = base.Property = function(node, st, c) {
    if (node.computed) {
      c(node.key, st, "Expression");
    }
    if (node.value) {
      c(node.value, st, "Expression");
    }
  };

  // node_modules/astring/dist/astring.mjs
  var { stringify } = JSON;
  if (!String.prototype.repeat) {
    throw new Error(
      "String.prototype.repeat is undefined, see https://github.com/davidbonnet/astring#installation"
    );
  }
  if (!String.prototype.endsWith) {
    throw new Error(
      "String.prototype.endsWith is undefined, see https://github.com/davidbonnet/astring#installation"
    );
  }
  var OPERATOR_PRECEDENCE = {
    "||": 2,
    "??": 3,
    "&&": 4,
    "|": 5,
    "^": 6,
    "&": 7,
    "==": 8,
    "!=": 8,
    "===": 8,
    "!==": 8,
    "<": 9,
    ">": 9,
    "<=": 9,
    ">=": 9,
    in: 9,
    instanceof: 9,
    "<<": 10,
    ">>": 10,
    ">>>": 10,
    "+": 11,
    "-": 11,
    "*": 12,
    "%": 12,
    "/": 12,
    "**": 13
  };
  var NEEDS_PARENTHESES = 17;
  var EXPRESSIONS_PRECEDENCE = {
    // Definitions
    ArrayExpression: 20,
    TaggedTemplateExpression: 20,
    ThisExpression: 20,
    Identifier: 20,
    PrivateIdentifier: 20,
    Literal: 18,
    TemplateLiteral: 20,
    Super: 20,
    SequenceExpression: 20,
    // Operations
    MemberExpression: 19,
    ChainExpression: 19,
    CallExpression: 19,
    NewExpression: 19,
    // Other definitions
    ArrowFunctionExpression: NEEDS_PARENTHESES,
    ClassExpression: NEEDS_PARENTHESES,
    FunctionExpression: NEEDS_PARENTHESES,
    ObjectExpression: NEEDS_PARENTHESES,
    // Other operations
    UpdateExpression: 16,
    UnaryExpression: 15,
    AwaitExpression: 15,
    BinaryExpression: 14,
    LogicalExpression: 13,
    ConditionalExpression: 4,
    AssignmentExpression: 3,
    YieldExpression: 2,
    RestElement: 1
  };
  function formatSequence(state, nodes) {
    const { generator } = state;
    state.write("(");
    if (nodes != null && nodes.length > 0) {
      generator[nodes[0].type](nodes[0], state);
      const { length } = nodes;
      for (let i = 1; i < length; i++) {
        const param = nodes[i];
        state.write(", ");
        generator[param.type](param, state);
      }
    }
    state.write(")");
  }
  function expressionNeedsParenthesis(state, node, parentNode, isRightHand) {
    const nodePrecedence = state.expressionsPrecedence[node.type];
    if (nodePrecedence === NEEDS_PARENTHESES) {
      return true;
    }
    const parentNodePrecedence = state.expressionsPrecedence[parentNode.type];
    if (nodePrecedence !== parentNodePrecedence) {
      return !isRightHand && nodePrecedence === 15 && parentNodePrecedence === 14 && parentNode.operator === "**" || nodePrecedence < parentNodePrecedence;
    }
    if (nodePrecedence !== 13 && nodePrecedence !== 14) {
      return false;
    }
    if (node.operator === "**" && parentNode.operator === "**") {
      return !isRightHand;
    }
    if (nodePrecedence === 13 && parentNodePrecedence === 13 && (node.operator === "??" || parentNode.operator === "??")) {
      return true;
    }
    if (isRightHand) {
      return OPERATOR_PRECEDENCE[node.operator] <= OPERATOR_PRECEDENCE[parentNode.operator];
    }
    return OPERATOR_PRECEDENCE[node.operator] < OPERATOR_PRECEDENCE[parentNode.operator];
  }
  function formatExpression(state, node, parentNode, isRightHand) {
    const { generator } = state;
    if (expressionNeedsParenthesis(state, node, parentNode, isRightHand)) {
      state.write("(");
      generator[node.type](node, state);
      state.write(")");
    } else {
      generator[node.type](node, state);
    }
  }
  function reindent(state, text, indent, lineEnd) {
    const lines = text.split("\n");
    const end = lines.length - 1;
    state.write(lines[0].trim());
    if (end > 0) {
      state.write(lineEnd);
      for (let i = 1; i < end; i++) {
        state.write(indent + lines[i].trim() + lineEnd);
      }
      state.write(indent + lines[end].trim());
    }
  }
  function formatComments(state, comments, indent, lineEnd) {
    const { length } = comments;
    for (let i = 0; i < length; i++) {
      const comment = comments[i];
      state.write(indent);
      if (comment.type[0] === "L") {
        state.write("// " + comment.value.trim() + "\n", comment);
      } else {
        state.write("/*");
        reindent(state, comment.value, indent, lineEnd);
        state.write("*/" + lineEnd);
      }
    }
  }
  function hasCallExpression(node) {
    let currentNode = node;
    while (currentNode != null) {
      const { type } = currentNode;
      if (type[0] === "C" && type[1] === "a") {
        return true;
      } else if (type[0] === "M" && type[1] === "e" && type[2] === "m") {
        currentNode = currentNode.object;
      } else {
        return false;
      }
    }
  }
  function formatVariableDeclaration(state, node) {
    const { generator } = state;
    const { declarations } = node;
    state.write(node.kind + " ");
    const { length } = declarations;
    if (length > 0) {
      generator.VariableDeclarator(declarations[0], state);
      for (let i = 1; i < length; i++) {
        state.write(", ");
        generator.VariableDeclarator(declarations[i], state);
      }
    }
  }
  var ForInStatement;
  var FunctionDeclaration;
  var RestElement;
  var BinaryExpression;
  var ArrayExpression;
  var BlockStatement;
  var GENERATOR = {
    /*
    Default generator.
    */
    Program(node, state) {
      const indent = state.indent.repeat(state.indentLevel);
      const { lineEnd, writeComments } = state;
      if (writeComments && node.comments != null) {
        formatComments(state, node.comments, indent, lineEnd);
      }
      const statements = node.body;
      const { length } = statements;
      for (let i = 0; i < length; i++) {
        const statement = statements[i];
        if (writeComments && statement.comments != null) {
          formatComments(state, statement.comments, indent, lineEnd);
        }
        state.write(indent);
        this[statement.type](statement, state);
        state.write(lineEnd);
      }
      if (writeComments && node.trailingComments != null) {
        formatComments(state, node.trailingComments, indent, lineEnd);
      }
    },
    BlockStatement: BlockStatement = function(node, state) {
      const indent = state.indent.repeat(state.indentLevel++);
      const { lineEnd, writeComments } = state;
      const statementIndent = indent + state.indent;
      state.write("{");
      const statements = node.body;
      if (statements != null && statements.length > 0) {
        state.write(lineEnd);
        if (writeComments && node.comments != null) {
          formatComments(state, node.comments, statementIndent, lineEnd);
        }
        const { length } = statements;
        for (let i = 0; i < length; i++) {
          const statement = statements[i];
          if (writeComments && statement.comments != null) {
            formatComments(state, statement.comments, statementIndent, lineEnd);
          }
          state.write(statementIndent);
          this[statement.type](statement, state);
          state.write(lineEnd);
        }
        state.write(indent);
      } else {
        if (writeComments && node.comments != null) {
          state.write(lineEnd);
          formatComments(state, node.comments, statementIndent, lineEnd);
          state.write(indent);
        }
      }
      if (writeComments && node.trailingComments != null) {
        formatComments(state, node.trailingComments, statementIndent, lineEnd);
      }
      state.write("}");
      state.indentLevel--;
    },
    ClassBody: BlockStatement,
    StaticBlock(node, state) {
      state.write("static ");
      this.BlockStatement(node, state);
    },
    EmptyStatement(node, state) {
      state.write(";");
    },
    ExpressionStatement(node, state) {
      const precedence = state.expressionsPrecedence[node.expression.type];
      if (precedence === NEEDS_PARENTHESES || precedence === 3 && node.expression.left.type[0] === "O") {
        state.write("(");
        this[node.expression.type](node.expression, state);
        state.write(")");
      } else {
        this[node.expression.type](node.expression, state);
      }
      state.write(";");
    },
    IfStatement(node, state) {
      state.write("if (");
      this[node.test.type](node.test, state);
      state.write(") ");
      this[node.consequent.type](node.consequent, state);
      if (node.alternate != null) {
        state.write(" else ");
        this[node.alternate.type](node.alternate, state);
      }
    },
    LabeledStatement(node, state) {
      this[node.label.type](node.label, state);
      state.write(": ");
      this[node.body.type](node.body, state);
    },
    BreakStatement(node, state) {
      state.write("break");
      if (node.label != null) {
        state.write(" ");
        this[node.label.type](node.label, state);
      }
      state.write(";");
    },
    ContinueStatement(node, state) {
      state.write("continue");
      if (node.label != null) {
        state.write(" ");
        this[node.label.type](node.label, state);
      }
      state.write(";");
    },
    WithStatement(node, state) {
      state.write("with (");
      this[node.object.type](node.object, state);
      state.write(") ");
      this[node.body.type](node.body, state);
    },
    SwitchStatement(node, state) {
      const indent = state.indent.repeat(state.indentLevel++);
      const { lineEnd, writeComments } = state;
      state.indentLevel++;
      const caseIndent = indent + state.indent;
      const statementIndent = caseIndent + state.indent;
      state.write("switch (");
      this[node.discriminant.type](node.discriminant, state);
      state.write(") {" + lineEnd);
      const { cases: occurences } = node;
      const { length: occurencesCount } = occurences;
      for (let i = 0; i < occurencesCount; i++) {
        const occurence = occurences[i];
        if (writeComments && occurence.comments != null) {
          formatComments(state, occurence.comments, caseIndent, lineEnd);
        }
        if (occurence.test) {
          state.write(caseIndent + "case ");
          this[occurence.test.type](occurence.test, state);
          state.write(":" + lineEnd);
        } else {
          state.write(caseIndent + "default:" + lineEnd);
        }
        const { consequent } = occurence;
        const { length: consequentCount } = consequent;
        for (let i2 = 0; i2 < consequentCount; i2++) {
          const statement = consequent[i2];
          if (writeComments && statement.comments != null) {
            formatComments(state, statement.comments, statementIndent, lineEnd);
          }
          state.write(statementIndent);
          this[statement.type](statement, state);
          state.write(lineEnd);
        }
      }
      state.indentLevel -= 2;
      state.write(indent + "}");
    },
    ReturnStatement(node, state) {
      state.write("return");
      if (node.argument) {
        state.write(" ");
        this[node.argument.type](node.argument, state);
      }
      state.write(";");
    },
    ThrowStatement(node, state) {
      state.write("throw ");
      this[node.argument.type](node.argument, state);
      state.write(";");
    },
    TryStatement(node, state) {
      state.write("try ");
      this[node.block.type](node.block, state);
      if (node.handler) {
        const { handler } = node;
        if (handler.param == null) {
          state.write(" catch ");
        } else {
          state.write(" catch (");
          this[handler.param.type](handler.param, state);
          state.write(") ");
        }
        this[handler.body.type](handler.body, state);
      }
      if (node.finalizer) {
        state.write(" finally ");
        this[node.finalizer.type](node.finalizer, state);
      }
    },
    WhileStatement(node, state) {
      state.write("while (");
      this[node.test.type](node.test, state);
      state.write(") ");
      this[node.body.type](node.body, state);
    },
    DoWhileStatement(node, state) {
      state.write("do ");
      this[node.body.type](node.body, state);
      state.write(" while (");
      this[node.test.type](node.test, state);
      state.write(");");
    },
    ForStatement(node, state) {
      state.write("for (");
      if (node.init != null) {
        const { init } = node;
        if (init.type[0] === "V") {
          formatVariableDeclaration(state, init);
        } else {
          this[init.type](init, state);
        }
      }
      state.write("; ");
      if (node.test) {
        this[node.test.type](node.test, state);
      }
      state.write("; ");
      if (node.update) {
        this[node.update.type](node.update, state);
      }
      state.write(") ");
      this[node.body.type](node.body, state);
    },
    ForInStatement: ForInStatement = function(node, state) {
      state.write(`for ${node.await ? "await " : ""}(`);
      const { left } = node;
      if (left.type[0] === "V") {
        formatVariableDeclaration(state, left);
      } else {
        this[left.type](left, state);
      }
      state.write(node.type[3] === "I" ? " in " : " of ");
      this[node.right.type](node.right, state);
      state.write(") ");
      this[node.body.type](node.body, state);
    },
    ForOfStatement: ForInStatement,
    DebuggerStatement(node, state) {
      state.write("debugger;", node);
    },
    FunctionDeclaration: FunctionDeclaration = function(node, state) {
      state.write(
        (node.async ? "async " : "") + (node.generator ? "function* " : "function ") + (node.id ? node.id.name : ""),
        node
      );
      formatSequence(state, node.params);
      state.write(" ");
      this[node.body.type](node.body, state);
    },
    FunctionExpression: FunctionDeclaration,
    VariableDeclaration(node, state) {
      formatVariableDeclaration(state, node);
      state.write(";");
    },
    VariableDeclarator(node, state) {
      this[node.id.type](node.id, state);
      if (node.init != null) {
        state.write(" = ");
        this[node.init.type](node.init, state);
      }
    },
    ClassDeclaration(node, state) {
      state.write("class " + (node.id ? `${node.id.name} ` : ""), node);
      if (node.superClass) {
        state.write("extends ");
        const { superClass } = node;
        const { type } = superClass;
        const precedence = state.expressionsPrecedence[type];
        if ((type[0] !== "C" || type[1] !== "l" || type[5] !== "E") && (precedence === NEEDS_PARENTHESES || precedence < state.expressionsPrecedence.ClassExpression)) {
          state.write("(");
          this[node.superClass.type](superClass, state);
          state.write(")");
        } else {
          this[superClass.type](superClass, state);
        }
        state.write(" ");
      }
      this.ClassBody(node.body, state);
    },
    ImportDeclaration(node, state) {
      state.write("import ");
      const { specifiers, attributes } = node;
      const { length } = specifiers;
      let i = 0;
      if (length > 0) {
        for (; i < length; ) {
          if (i > 0) {
            state.write(", ");
          }
          const specifier = specifiers[i];
          const type = specifier.type[6];
          if (type === "D") {
            state.write(specifier.local.name, specifier);
            i++;
          } else if (type === "N") {
            state.write("* as " + specifier.local.name, specifier);
            i++;
          } else {
            break;
          }
        }
        if (i < length) {
          state.write("{");
          for (; ; ) {
            const specifier = specifiers[i];
            const { name } = specifier.imported;
            state.write(name, specifier);
            if (name !== specifier.local.name) {
              state.write(" as " + specifier.local.name);
            }
            if (++i < length) {
              state.write(", ");
            } else {
              break;
            }
          }
          state.write("}");
        }
        state.write(" from ");
      }
      this.Literal(node.source, state);
      if (attributes && attributes.length > 0) {
        state.write(" with { ");
        for (let i2 = 0; i2 < attributes.length; i2++) {
          this.ImportAttribute(attributes[i2], state);
          if (i2 < attributes.length - 1) state.write(", ");
        }
        state.write(" }");
      }
      state.write(";");
    },
    ImportAttribute(node, state) {
      this.Identifier(node.key, state);
      state.write(": ");
      this.Literal(node.value, state);
    },
    ImportExpression(node, state) {
      state.write("import(");
      this[node.source.type](node.source, state);
      state.write(")");
    },
    ExportDefaultDeclaration(node, state) {
      state.write("export default ");
      this[node.declaration.type](node.declaration, state);
      if (state.expressionsPrecedence[node.declaration.type] != null && node.declaration.type[0] !== "F") {
        state.write(";");
      }
    },
    ExportNamedDeclaration(node, state) {
      state.write("export ");
      if (node.declaration) {
        this[node.declaration.type](node.declaration, state);
      } else {
        state.write("{");
        const { specifiers } = node, { length } = specifiers;
        if (length > 0) {
          for (let i = 0; ; ) {
            const specifier = specifiers[i];
            const { name } = specifier.local;
            state.write(name, specifier);
            if (name !== specifier.exported.name) {
              state.write(" as " + specifier.exported.name);
            }
            if (++i < length) {
              state.write(", ");
            } else {
              break;
            }
          }
        }
        state.write("}");
        if (node.source) {
          state.write(" from ");
          this.Literal(node.source, state);
        }
        if (node.attributes && node.attributes.length > 0) {
          state.write(" with { ");
          for (let i = 0; i < node.attributes.length; i++) {
            this.ImportAttribute(node.attributes[i], state);
            if (i < node.attributes.length - 1) state.write(", ");
          }
          state.write(" }");
        }
        state.write(";");
      }
    },
    ExportAllDeclaration(node, state) {
      if (node.exported != null) {
        state.write("export * as " + node.exported.name + " from ");
      } else {
        state.write("export * from ");
      }
      this.Literal(node.source, state);
      if (node.attributes && node.attributes.length > 0) {
        state.write(" with { ");
        for (let i = 0; i < node.attributes.length; i++) {
          this.ImportAttribute(node.attributes[i], state);
          if (i < node.attributes.length - 1) state.write(", ");
        }
        state.write(" }");
      }
      state.write(";");
    },
    MethodDefinition(node, state) {
      if (node.static) {
        state.write("static ");
      }
      const kind = node.kind[0];
      if (kind === "g" || kind === "s") {
        state.write(node.kind + " ");
      }
      if (node.value.async) {
        state.write("async ");
      }
      if (node.value.generator) {
        state.write("*");
      }
      if (node.computed) {
        state.write("[");
        this[node.key.type](node.key, state);
        state.write("]");
      } else {
        this[node.key.type](node.key, state);
      }
      formatSequence(state, node.value.params);
      state.write(" ");
      this[node.value.body.type](node.value.body, state);
    },
    ClassExpression(node, state) {
      this.ClassDeclaration(node, state);
    },
    ArrowFunctionExpression(node, state) {
      state.write(node.async ? "async " : "", node);
      const { params } = node;
      if (params != null) {
        if (params.length === 1 && params[0].type[0] === "I") {
          state.write(params[0].name, params[0]);
        } else {
          formatSequence(state, node.params);
        }
      }
      state.write(" => ");
      if (node.body.type[0] === "O") {
        state.write("(");
        this.ObjectExpression(node.body, state);
        state.write(")");
      } else {
        this[node.body.type](node.body, state);
      }
    },
    ThisExpression(node, state) {
      state.write("this", node);
    },
    Super(node, state) {
      state.write("super", node);
    },
    RestElement: RestElement = function(node, state) {
      state.write("...");
      this[node.argument.type](node.argument, state);
    },
    SpreadElement: RestElement,
    YieldExpression(node, state) {
      state.write(node.delegate ? "yield*" : "yield");
      if (node.argument) {
        state.write(" ");
        this[node.argument.type](node.argument, state);
      }
    },
    AwaitExpression(node, state) {
      state.write("await ", node);
      formatExpression(state, node.argument, node);
    },
    TemplateLiteral(node, state) {
      const { quasis, expressions } = node;
      state.write("`");
      const { length } = expressions;
      for (let i = 0; i < length; i++) {
        const expression = expressions[i];
        const quasi2 = quasis[i];
        state.write(quasi2.value.raw, quasi2);
        state.write("${");
        this[expression.type](expression, state);
        state.write("}");
      }
      const quasi = quasis[quasis.length - 1];
      state.write(quasi.value.raw, quasi);
      state.write("`");
    },
    TemplateElement(node, state) {
      state.write(node.value.raw, node);
    },
    TaggedTemplateExpression(node, state) {
      formatExpression(state, node.tag, node);
      this[node.quasi.type](node.quasi, state);
    },
    ArrayExpression: ArrayExpression = function(node, state) {
      state.write("[");
      if (node.elements.length > 0) {
        const { elements } = node, { length } = elements;
        for (let i = 0; ; ) {
          const element = elements[i];
          if (element != null) {
            this[element.type](element, state);
          }
          if (++i < length) {
            state.write(", ");
          } else {
            if (element == null) {
              state.write(", ");
            }
            break;
          }
        }
      }
      state.write("]");
    },
    ArrayPattern: ArrayExpression,
    ObjectExpression(node, state) {
      const indent = state.indent.repeat(state.indentLevel++);
      const { lineEnd, writeComments } = state;
      const propertyIndent = indent + state.indent;
      state.write("{");
      if (node.properties.length > 0) {
        state.write(lineEnd);
        if (writeComments && node.comments != null) {
          formatComments(state, node.comments, propertyIndent, lineEnd);
        }
        const comma = "," + lineEnd;
        const { properties } = node, { length } = properties;
        for (let i = 0; ; ) {
          const property = properties[i];
          if (writeComments && property.comments != null) {
            formatComments(state, property.comments, propertyIndent, lineEnd);
          }
          state.write(propertyIndent);
          this[property.type](property, state);
          if (++i < length) {
            state.write(comma);
          } else {
            break;
          }
        }
        state.write(lineEnd);
        if (writeComments && node.trailingComments != null) {
          formatComments(state, node.trailingComments, propertyIndent, lineEnd);
        }
        state.write(indent + "}");
      } else if (writeComments) {
        if (node.comments != null) {
          state.write(lineEnd);
          formatComments(state, node.comments, propertyIndent, lineEnd);
          if (node.trailingComments != null) {
            formatComments(state, node.trailingComments, propertyIndent, lineEnd);
          }
          state.write(indent + "}");
        } else if (node.trailingComments != null) {
          state.write(lineEnd);
          formatComments(state, node.trailingComments, propertyIndent, lineEnd);
          state.write(indent + "}");
        } else {
          state.write("}");
        }
      } else {
        state.write("}");
      }
      state.indentLevel--;
    },
    Property(node, state) {
      if (node.method || node.kind[0] !== "i") {
        this.MethodDefinition(node, state);
      } else {
        if (!node.shorthand) {
          if (node.computed) {
            state.write("[");
            this[node.key.type](node.key, state);
            state.write("]");
          } else {
            this[node.key.type](node.key, state);
          }
          state.write(": ");
        }
        this[node.value.type](node.value, state);
      }
    },
    PropertyDefinition(node, state) {
      if (node.static) {
        state.write("static ");
      }
      if (node.computed) {
        state.write("[");
      }
      this[node.key.type](node.key, state);
      if (node.computed) {
        state.write("]");
      }
      if (node.value == null) {
        if (node.key.type[0] !== "F") {
          state.write(";");
        }
        return;
      }
      state.write(" = ");
      this[node.value.type](node.value, state);
      state.write(";");
    },
    ObjectPattern(node, state) {
      state.write("{");
      if (node.properties.length > 0) {
        const { properties } = node, { length } = properties;
        for (let i = 0; ; ) {
          this[properties[i].type](properties[i], state);
          if (++i < length) {
            state.write(", ");
          } else {
            break;
          }
        }
      }
      state.write("}");
    },
    SequenceExpression(node, state) {
      formatSequence(state, node.expressions);
    },
    UnaryExpression(node, state) {
      if (node.prefix) {
        const {
          operator,
          argument,
          argument: { type }
        } = node;
        state.write(operator);
        const needsParentheses = expressionNeedsParenthesis(state, argument, node);
        if (!needsParentheses && (operator.length > 1 || type[0] === "U" && (type[1] === "n" || type[1] === "p") && argument.prefix && argument.operator[0] === operator && (operator === "+" || operator === "-"))) {
          state.write(" ");
        }
        if (needsParentheses) {
          state.write(operator.length > 1 ? " (" : "(");
          this[type](argument, state);
          state.write(")");
        } else {
          this[type](argument, state);
        }
      } else {
        this[node.argument.type](node.argument, state);
        state.write(node.operator);
      }
    },
    UpdateExpression(node, state) {
      if (node.prefix) {
        state.write(node.operator);
        this[node.argument.type](node.argument, state);
      } else {
        this[node.argument.type](node.argument, state);
        state.write(node.operator);
      }
    },
    AssignmentExpression(node, state) {
      this[node.left.type](node.left, state);
      state.write(" " + node.operator + " ");
      this[node.right.type](node.right, state);
    },
    AssignmentPattern(node, state) {
      this[node.left.type](node.left, state);
      state.write(" = ");
      this[node.right.type](node.right, state);
    },
    BinaryExpression: BinaryExpression = function(node, state) {
      const isIn = node.operator === "in";
      if (isIn) {
        state.write("(");
      }
      formatExpression(state, node.left, node, false);
      state.write(" " + node.operator + " ");
      formatExpression(state, node.right, node, true);
      if (isIn) {
        state.write(")");
      }
    },
    LogicalExpression: BinaryExpression,
    ConditionalExpression(node, state) {
      const { test } = node;
      const precedence = state.expressionsPrecedence[test.type];
      if (precedence === NEEDS_PARENTHESES || precedence <= state.expressionsPrecedence.ConditionalExpression) {
        state.write("(");
        this[test.type](test, state);
        state.write(")");
      } else {
        this[test.type](test, state);
      }
      state.write(" ? ");
      this[node.consequent.type](node.consequent, state);
      state.write(" : ");
      this[node.alternate.type](node.alternate, state);
    },
    NewExpression(node, state) {
      state.write("new ");
      const precedence = state.expressionsPrecedence[node.callee.type];
      if (precedence === NEEDS_PARENTHESES || precedence < state.expressionsPrecedence.CallExpression || hasCallExpression(node.callee)) {
        state.write("(");
        this[node.callee.type](node.callee, state);
        state.write(")");
      } else {
        this[node.callee.type](node.callee, state);
      }
      formatSequence(state, node["arguments"]);
    },
    CallExpression(node, state) {
      const precedence = state.expressionsPrecedence[node.callee.type];
      if (precedence === NEEDS_PARENTHESES || precedence < state.expressionsPrecedence.CallExpression) {
        state.write("(");
        this[node.callee.type](node.callee, state);
        state.write(")");
      } else {
        this[node.callee.type](node.callee, state);
      }
      if (node.optional) {
        state.write("?.");
      }
      formatSequence(state, node["arguments"]);
    },
    ChainExpression(node, state) {
      this[node.expression.type](node.expression, state);
    },
    MemberExpression(node, state) {
      const precedence = state.expressionsPrecedence[node.object.type];
      if (precedence === NEEDS_PARENTHESES || precedence < state.expressionsPrecedence.MemberExpression) {
        state.write("(");
        this[node.object.type](node.object, state);
        state.write(")");
      } else {
        this[node.object.type](node.object, state);
      }
      if (node.computed) {
        if (node.optional) {
          state.write("?.");
        }
        state.write("[");
        this[node.property.type](node.property, state);
        state.write("]");
      } else {
        if (node.optional) {
          state.write("?.");
        } else {
          state.write(".");
        }
        this[node.property.type](node.property, state);
      }
    },
    MetaProperty(node, state) {
      state.write(node.meta.name + "." + node.property.name, node);
    },
    Identifier(node, state) {
      state.write(node.name, node);
    },
    PrivateIdentifier(node, state) {
      state.write(`#${node.name}`, node);
    },
    Literal(node, state) {
      if (node.raw != null) {
        state.write(node.raw, node);
      } else if (node.regex != null) {
        this.RegExpLiteral(node, state);
      } else if (node.bigint != null) {
        state.write(node.bigint + "n", node);
      } else {
        state.write(stringify(node.value), node);
      }
    },
    RegExpLiteral(node, state) {
      const { regex } = node;
      state.write(`/${regex.pattern}/${regex.flags}`, node);
    }
  };
  var EMPTY_OBJECT = {};
  var State = class {
    constructor(options) {
      const setup = options == null ? EMPTY_OBJECT : options;
      this.output = "";
      if (setup.output != null) {
        this.output = setup.output;
        this.write = this.writeToStream;
      } else {
        this.output = "";
      }
      this.generator = setup.generator != null ? setup.generator : GENERATOR;
      this.expressionsPrecedence = setup.expressionsPrecedence != null ? setup.expressionsPrecedence : EXPRESSIONS_PRECEDENCE;
      this.indent = setup.indent != null ? setup.indent : "  ";
      this.lineEnd = setup.lineEnd != null ? setup.lineEnd : "\n";
      this.indentLevel = setup.startingIndentLevel != null ? setup.startingIndentLevel : 0;
      this.writeComments = setup.comments ? setup.comments : false;
      if (setup.sourceMap != null) {
        this.write = setup.output == null ? this.writeAndMap : this.writeToStreamAndMap;
        this.sourceMap = setup.sourceMap;
        this.line = 1;
        this.column = 0;
        this.lineEndSize = this.lineEnd.split("\n").length - 1;
        this.mapping = {
          original: null,
          // Uses the entire state to avoid generating ephemeral objects
          generated: this,
          name: void 0,
          source: setup.sourceMap.file || setup.sourceMap._file
        };
      }
    }
    write(code) {
      this.output += code;
    }
    writeToStream(code) {
      this.output.write(code);
    }
    writeAndMap(code, node) {
      this.output += code;
      this.map(code, node);
    }
    writeToStreamAndMap(code, node) {
      this.output.write(code);
      this.map(code, node);
    }
    map(code, node) {
      if (node != null) {
        const { type } = node;
        if (type[0] === "L" && type[2] === "n") {
          this.column = 0;
          this.line++;
          return;
        }
        if (node.loc != null) {
          const { mapping } = this;
          mapping.original = node.loc.start;
          mapping.name = node.name;
          this.sourceMap.addMapping(mapping);
        }
        if (type[0] === "T" && type[8] === "E" || type[0] === "L" && type[1] === "i" && typeof node.value === "string") {
          const { length: length2 } = code;
          let { column, line } = this;
          for (let i = 0; i < length2; i++) {
            if (code[i] === "\n") {
              column = 0;
              line++;
            } else {
              column++;
            }
          }
          this.column = column;
          this.line = line;
          return;
        }
      }
      const { length } = code;
      const { lineEnd } = this;
      if (length > 0) {
        if (this.lineEndSize > 0 && (lineEnd.length === 1 ? code[length - 1] === lineEnd : code.endsWith(lineEnd))) {
          this.line += this.lineEndSize;
          this.column = 0;
        } else {
          this.column += length;
        }
      }
    }
    toString() {
      return this.output;
    }
  };
  function generate(node, options) {
    const state = new State(options);
    state.generator[node.type](node, state);
    return state.output;
  }

  // src/compiler/Opcode.ts
  var OP_GROUPS = {
    HALT: { variants: [0, 1, 2], name: "HALT" },
    PUSH_CONST: { variants: [3, 4, 5, 6], name: "PUSH_CONST" },
    PUSH_VAR: { variants: [7, 8, 9], name: "PUSH_VAR" },
    STORE_VAR: { variants: [10, 11, 12], name: "STORE_VAR" },
    DECLARE_VAR: { variants: [13, 14, 15], name: "DECLARE_VAR" },
    POP: { variants: [16, 17, 18], name: "POP" },
    DUP: { variants: [19, 20, 21], name: "DUP" },
    ADD: { variants: [22, 23, 24, 25], name: "ADD" },
    SUB: { variants: [26, 27, 28, 29], name: "SUB" },
    MUL: { variants: [30, 31, 32, 33], name: "MUL" },
    DIV: { variants: [34, 35, 36, 37], name: "DIV" },
    MOD: { variants: [38, 39, 40, 41], name: "MOD" },
    EXP: { variants: [42, 43, 44], name: "EXP" },
    EQ: { variants: [45, 46, 47], name: "EQ" },
    NEQ: { variants: [48, 49, 50], name: "NEQ" },
    STRICT_EQ: { variants: [51, 52, 53], name: "STRICT_EQ" },
    STRICT_NEQ: { variants: [54, 55, 56], name: "STRICT_NEQ" },
    LT: { variants: [57, 58, 59], name: "LT" },
    LTE: { variants: [60, 61, 62], name: "LTE" },
    GT: { variants: [63, 64, 65], name: "GT" },
    GTE: { variants: [66, 67, 68], name: "GTE" },
    AND: { variants: [69, 70, 71], name: "AND" },
    OR: { variants: [72, 73, 74], name: "OR" },
    NOT: { variants: [75, 76, 77], name: "NOT" },
    NULLISH: { variants: [78, 79, 80], name: "NULLISH" },
    BIT_AND: { variants: [81, 82, 83], name: "BIT_AND" },
    BIT_OR: { variants: [84, 85, 86], name: "BIT_OR" },
    BIT_XOR: { variants: [87, 88, 89], name: "BIT_XOR" },
    BIT_NOT: { variants: [90, 91, 92], name: "BIT_NOT" },
    LSHIFT: { variants: [93, 94, 95], name: "LSHIFT" },
    RSHIFT: { variants: [96, 97, 98], name: "RSHIFT" },
    URSHIFT: { variants: [99, 100, 101], name: "URSHIFT" },
    JMP: { variants: [102, 103, 104], name: "JMP" },
    JMP_IF_FALSE: { variants: [105, 106, 107], name: "JMP_IF_FALSE" },
    JMP_IF_TRUE: { variants: [108, 109, 110], name: "JMP_IF_TRUE" },
    CALL: { variants: [111, 112, 113, 114], name: "CALL" },
    CALL_METHOD: { variants: [115, 116, 117, 118], name: "CALL_METHOD" },
    NEW: { variants: [119, 120, 121, 122], name: "NEW" },
    RETURN: { variants: [123, 124, 125, 126], name: "RETURN" },
    TYPEOF: { variants: [127, 128, 129], name: "TYPEOF" },
    INSTANCEOF: { variants: [130, 131, 132], name: "INSTANCEOF" },
    IN: { variants: [133, 134, 135], name: "IN" },
    DELETE: { variants: [136, 137, 138], name: "DELETE" },
    GET_PROP: { variants: [139, 140, 141], name: "GET_PROP" },
    SET_PROP: { variants: [142, 143, 144], name: "SET_PROP" },
    GET_INDEX: { variants: [145, 146, 147], name: "GET_INDEX" },
    SET_INDEX: { variants: [148, 149, 150], name: "SET_INDEX" },
    NEW_OBJ: { variants: [151, 152, 153], name: "NEW_OBJ" },
    NEW_ARR: { variants: [154, 155, 156], name: "NEW_ARR" },
    PUSH_FUNC: { variants: [157, 158, 159], name: "PUSH_FUNC" },
    OPTIONAL_CHAIN: { variants: [160, 161], name: "OPTIONAL_CHAIN" },
    ENTER_SCOPE: { variants: [162, 163, 164], name: "ENTER_SCOPE" },
    EXIT_SCOPE: { variants: [165, 166, 167], name: "EXIT_SCOPE" },
    TRY: { variants: [168, 169, 170], name: "TRY" },
    THROW: { variants: [171, 172, 173], name: "THROW" },
    CATCH: { variants: [222, 223], name: "CATCH" },
    FINALLY: { variants: [224, 225], name: "FINALLY" },
    END_TRY: { variants: [226, 227], name: "END_TRY" },
    INC_PRE: { variants: [174, 175], name: "INC_PRE" },
    INC_POST: { variants: [176, 177], name: "INC_POST" },
    DEC_PRE: { variants: [178, 179], name: "DEC_PRE" },
    DEC_POST: { variants: [180, 181], name: "DEC_POST" },
    NEG: { variants: [182, 183], name: "NEG" },
    POS: { variants: [184, 185], name: "POS" },
    SET_PROP_OBJ: { variants: [186, 187], name: "SET_PROP_OBJ" },
    SET_PROP_OBJ_COMPUTED: { variants: [188, 189], name: "SET_PROP_OBJ_COMPUTED" },
    TERNARY: { variants: [190, 191], name: "TERNARY" },
    THIS: { variants: [192, 193], name: "THIS" },
    SUPER: { variants: [228, 229], name: "SUPER" },
    REST_ARGS: { variants: [194, 195], name: "REST_ARGS" },
    ARRAY_SPREAD: { variants: [196, 197], name: "ARRAY_SPREAD" },
    OBJ_SPREAD: { variants: [198, 199], name: "OBJ_SPREAD" },
    FOR_OF_ITER: { variants: [200, 201], name: "FOR_OF_ITER" },
    FOR_IN_ITER: { variants: [202, 203], name: "FOR_IN_ITER" },
    AWAIT: { variants: [204, 205], name: "AWAIT" },
    YIELD: { variants: [230, 231], name: "YIELD" },
    CLASS_BODY: { variants: [206, 207], name: "CLASS_BODY" },
    SUPER_CALL: { variants: [208, 209], name: "SUPER_CALL" },
    SUPER_METHOD: { variants: [210, 211], name: "SUPER_METHOD" },
    IMPORT: { variants: [232, 233], name: "IMPORT" },
    EXPORT: { variants: [234, 235], name: "EXPORT" },
    DEAD_CODE: { variants: [212, 213], name: "DEAD_CODE" },
    ANTI_DEBUG: { variants: [214], name: "ANTI_DEBUG" },
    DEBUG_BREAK: { variants: [215], name: "DEBUG_BREAK" },
    SEGMENT_SWITCH: { variants: [216, 217], name: "SEGMENT_SWITCH" },
    FAKE_ADD: { variants: [218, 219], name: "FAKE_ADD" },
    FAKE_CALL: { variants: [220, 221], name: "FAKE_CALL" },
    DESTRUCTURE_ARR: { variants: [236, 237, 238], name: "DESTRUCTURE_ARR" },
    DESTRUCTURE_OBJ: { variants: [239, 240, 241], name: "DESTRUCTURE_OBJ" },
    ARRAY_PUSH: { variants: [242, 243], name: "ARRAY_PUSH" }
  };
  var VARIANT_TO_GROUP = {};
  for (const [groupName, group] of Object.entries(OP_GROUPS)) {
    for (const v of group.variants) {
      if (VARIANT_TO_GROUP[v] !== void 0) {
        throw new Error("Variant collision at 0x" + v.toString(16) + ": " + VARIANT_TO_GROUP[v] + " vs " + groupName);
      }
      VARIANT_TO_GROUP[v] = groupName;
    }
  }
  var OP = {};
  for (const [groupName, group] of Object.entries(OP_GROUPS)) {
    OP[groupName] = group.variants[0];
  }
  function pickVariant(groupName) {
    const group = OP_GROUPS[groupName];
    if (!group) throw new Error("Unknown op group: " + groupName);
    return group.variants[Math.floor(Math.random() * group.variants.length)];
  }

  // src/compiler/nodes/statements.ts
  function compileIf(compiler, node) {
    const endLabel = "if_end_" + compiler.currentAddr();
    const elseLabel = node.alternate ? "else_" + compiler.currentAddr() : endLabel;
    compiler.compileNode(node.test);
    compiler.emitJumpPoly("JMP_IF_FALSE", elseLabel);
    var _prevBlock = compiler._currentBlockBody;
    compiler._currentBlockBody = [node.consequent];
    compiler.compileNode(node.consequent);
    if (node.alternate) {
      compiler.emitJumpPoly("JMP", endLabel);
      compiler.setLabel(elseLabel);
      compiler._currentBlockBody = [node.alternate];
      compiler.compileNode(node.alternate);
    }
    compiler._currentBlockBody = _prevBlock;
    compiler.setLabel(endLabel);
  }
  function compileSwitch(compiler, node) {
    const endLabel = "switch_end_" + compiler.currentAddr();
    compiler.loopStack.push({ breakLabel: endLabel, continueLabel: null });
    const caseLabels = node.cases.map((_, i) => "switch_case_" + i + "_" + compiler.currentAddr());
    const defaultIdx = node.cases.findIndex((c) => c.test === null);
    for (let i = 0; i < node.cases.length; i++) {
      if (node.cases[i].test) {
        compiler.compileNode(node.discriminant);
        compiler.compileNode(node.cases[i].test);
        compiler.emitPoly("STRICT_EQ");
        compiler.emitJumpPoly("JMP_IF_TRUE", caseLabels[i]);
      }
    }
    if (defaultIdx !== -1) compiler.emitJumpPoly("JMP", caseLabels[defaultIdx]);
    else compiler.emitJumpPoly("JMP", endLabel);
    for (let i = 0; i < node.cases.length; i++) {
      compiler.setLabel(caseLabels[i]);
      for (const stmt of node.cases[i].consequent) compiler.compileNode(stmt);
    }
    compiler.setLabel(endLabel);
    compiler.loopStack.pop();
  }
  function compileFor(compiler, node) {
    const testLabel = "for_test_" + compiler.currentAddr();
    const updateLabel = "for_update_" + compiler.currentAddr();
    const endLabel = "for_end_" + compiler.currentAddr();
    compiler.loopStack.push({ breakLabel: endLabel, continueLabel: updateLabel });
    if (node.init) {
      compiler.compileNode(node.init);
      if (node.init.type !== "VariableDeclaration") compiler.emitPoly("POP");
    }
    compiler.setLabel(testLabel);
    if (node.test) {
      compiler.compileNode(node.test);
      compiler.emitJumpPoly("JMP_IF_FALSE", endLabel);
    }
    compiler.compileNode(node.body);
    compiler.setLabel(updateLabel);
    if (node.update) {
      compiler.compileNode(node.update);
      compiler.emitPoly("POP");
    }
    compiler.emitJumpPoly("JMP", testLabel);
    compiler.setLabel(endLabel);
    compiler.loopStack.pop();
  }
  function compileWhile(compiler, node) {
    const testLabel = "while_test_" + compiler.currentAddr();
    const endLabel = "while_end_" + compiler.currentAddr();
    compiler.loopStack.push({ breakLabel: endLabel, continueLabel: testLabel });
    compiler.setLabel(testLabel);
    compiler.compileNode(node.test);
    compiler.emitJumpPoly("JMP_IF_FALSE", endLabel);
    compiler.compileNode(node.body);
    compiler.emitJumpPoly("JMP", testLabel);
    compiler.setLabel(endLabel);
    compiler.loopStack.pop();
  }
  function compileDoWhile(compiler, node) {
    const startLabel = "do_start_" + compiler.currentAddr();
    const testLabel = "do_test_" + compiler.currentAddr();
    const endLabel = "do_end_" + compiler.currentAddr();
    compiler.loopStack.push({ breakLabel: endLabel, continueLabel: testLabel });
    compiler.setLabel(startLabel);
    compiler.compileNode(node.body);
    compiler.setLabel(testLabel);
    compiler.compileNode(node.test);
    compiler.emitJumpPoly("JMP_IF_TRUE", startLabel);
    compiler.setLabel(endLabel);
    compiler.loopStack.pop();
  }
  function compileForOf(compiler, node) {
    const iterLabel = "forof_iter_" + compiler.currentAddr();
    const endLabel = "forof_end_" + compiler.currentAddr();
    compiler.loopStack.push({ breakLabel: endLabel, continueLabel: iterLabel });
    compiler.compileNode(node.right);
    compiler.emitPoly("FOR_OF_ITER");
    const tmpIter = "__iter_" + compiler.funcCounter++;
    const tmpResult = "__res_" + compiler.funcCounter++;
    compiler.emitPoly("DECLARE_VAR", compiler.addConstant(tmpIter));
    compiler.setLabel(iterLabel);
    compiler.emitPoly("PUSH_VAR", compiler.addConstant(tmpIter));
    compiler.emitPoly("CALL_METHOD", 0, compiler.addConstant("next"));
    compiler.emitPoly("DECLARE_VAR", compiler.addConstant(tmpResult));
    compiler.emitPoly("PUSH_VAR", compiler.addConstant(tmpResult));
    compiler.emitPoly("GET_PROP", compiler.addConstant("done"));
    compiler.emitPoly("NOT");
    compiler.emitJumpPoly("JMP_IF_FALSE", endLabel);
    compiler.emitPoly("PUSH_VAR", compiler.addConstant(tmpResult));
    compiler.emitPoly("GET_PROP", compiler.addConstant("value"));
    if (node.left.type === "VariableDeclaration") {
      for (const decl of node.left.declarations) compiler.emitPoly("DECLARE_VAR", compiler.addConstant(decl.id.name));
    } else if (node.left.type === "Identifier") {
      compiler.emitPoly("STORE_VAR", compiler.addConstant(node.left.name));
    }
    compiler.compileNode(node.body);
    compiler.emitJumpPoly("JMP", iterLabel);
    compiler.setLabel(endLabel);
    compiler.loopStack.pop();
  }
  function compileForIn(compiler, node) {
    const iterLabel = "forin_iter_" + compiler.currentAddr();
    const endLabel = "forin_end_" + compiler.currentAddr();
    compiler.loopStack.push({ breakLabel: endLabel, continueLabel: iterLabel });
    compiler.compileNode(node.right);
    compiler.emitPoly("FOR_IN_ITER");
    const tmpKeys = "__keys_" + compiler.funcCounter++;
    const tmpIdx = "__idx_" + compiler.funcCounter++;
    const tmpLen = "__len_" + compiler.funcCounter++;
    compiler.emitPoly("DECLARE_VAR", compiler.addConstant(tmpKeys));
    compiler.emitPoly("PUSH_VAR", compiler.addConstant(tmpKeys));
    compiler.emitPoly("GET_PROP", compiler.addConstant("length"));
    compiler.emitPoly("DECLARE_VAR", compiler.addConstant(tmpLen));
    compiler.emitPoly("PUSH_CONST", compiler.addConstant(0));
    compiler.emitPoly("DECLARE_VAR", compiler.addConstant(tmpIdx));
    compiler.setLabel(iterLabel);
    compiler.emitPoly("PUSH_VAR", compiler.addConstant(tmpIdx));
    compiler.emitPoly("PUSH_VAR", compiler.addConstant(tmpLen));
    compiler.emitPoly("LT");
    compiler.emitJumpPoly("JMP_IF_FALSE", endLabel);
    compiler.emitPoly("PUSH_VAR", compiler.addConstant(tmpKeys));
    compiler.emitPoly("PUSH_VAR", compiler.addConstant(tmpIdx));
    compiler.emitPoly("GET_INDEX");
    if (node.left.type === "VariableDeclaration") {
      for (const decl of node.left.declarations) compiler.emitPoly("DECLARE_VAR", compiler.addConstant(decl.id.name));
    } else if (node.left.type === "Identifier") {
      compiler.emitPoly("STORE_VAR", compiler.addConstant(node.left.name));
    }
    compiler.compileNode(node.body);
    compiler.emitPoly("PUSH_VAR", compiler.addConstant(tmpIdx));
    compiler.emitPoly("PUSH_CONST", compiler.addConstant(1));
    compiler.emitPoly("ADD");
    compiler.emitPoly("STORE_VAR", compiler.addConstant(tmpIdx));
    compiler.emitPoly("POP");
    compiler.emitJumpPoly("JMP", iterLabel);
    compiler.setLabel(endLabel);
    compiler.loopStack.pop();
  }
  function compileBreak(compiler, node) {
    let target = null;
    if (node.label) target = compiler.labels.get(node.label.name) ?? null;
    else if (compiler.loopStack.length > 0) target = compiler.loopStack[compiler.loopStack.length - 1].breakLabel;
    if (target !== null) {
      if (typeof target === "number") compiler.emitPoly("JMP", target);
      else compiler.emitJumpPoly("JMP", target);
    } else compiler.warnings.push("break outside loop");
  }
  function compileContinue(compiler, node) {
    let target = null;
    if (node.label) target = compiler.labels.get(node.label.name) ?? null;
    else if (compiler.loopStack.length > 0) target = compiler.loopStack[compiler.loopStack.length - 1].continueLabel;
    if (target !== null) {
      if (typeof target === "number") compiler.emitPoly("JMP", target);
      else compiler.emitJumpPoly("JMP", target);
    } else compiler.warnings.push("continue outside loop");
  }
  function compileLabeled(compiler, node) {
    const endLabel = "labeled_" + node.label.name + "_" + compiler.currentAddr();
    compiler.labels.set(node.label.name, endLabel);
    compiler.compileNode(node.body);
    compiler.setLabel(endLabel);
  }
  function compileTry(compiler, node) {
    const catchStart = node.handler ? "catch_" + compiler.currentAddr() : null;
    const finallyStart = node.finalizer ? "finally_" + compiler.currentAddr() : null;
    const endTry = "endtry_" + compiler.currentAddr();
    const placeholderIdx = compiler.addConstant({ catchAddr: -1, finallyAddr: -1, __tryId: compiler.currentAddr() });
    compiler.emitPoly("TRY", placeholderIdx);
    compiler.compileNode(node.block);
    compiler.emitJumpPoly("JMP", node.finalizer ? finallyStart : endTry);
    if (node.handler) {
      compiler.setLabel(catchStart);
      if (node.handler.param) compiler.emitPoly("DECLARE_VAR", compiler.addConstant(node.handler.param.name));
      else compiler.emitPoly("POP");
      compiler.compileNode(node.handler.body);
      compiler.emitJumpPoly("JMP", node.finalizer ? finallyStart : endTry);
    }
    if (node.finalizer) {
      compiler.setLabel(finallyStart);
      compiler.compileNode(node.finalizer);
    }
    compiler.setLabel(endTry);
    compiler.emitPoly("END_TRY");
    compiler.constants[placeholderIdx] = {
      catchAddr: node.handler ? compiler.labels.get(catchStart) : -1,
      finallyAddr: node.finalizer ? compiler.labels.get(finallyStart) : -1
    };
  }

  // src/compiler/PreObfuscator.ts
  var MANGLE_POOL = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "_",
    "$"
  ];
  function randomMangle(existing) {
    var len = 3 + Math.floor(Math.random() * 8);
    var name = "";
    for (var i = 0; i < len; i++) {
      name += MANGLE_POOL[Math.floor(Math.random() * MANGLE_POOL.length)];
    }
    if (existing.has(name)) return randomMangle(existing);
    existing.add(name);
    return name;
  }
  var RESERVED = /* @__PURE__ */ new Set([
    "Object",
    "Array",
    "String",
    "Number",
    "Boolean",
    "Function",
    "RegExp",
    "Date",
    "Error",
    "Math",
    "JSON",
    "Promise",
    "Map",
    "Set",
    "Symbol",
    "console",
    "window",
    "global",
    "globalThis",
    "this",
    "prompt",
    "alert",
    "confirm",
    "document",
    "undefined",
    "null",
    "true",
    "false",
    "Infinity",
    "NaN",
    "eval",
    "arguments",
    "parseInt",
    "parseFloat",
    "isNaN",
    "isFinite",
    "setTimeout",
    "clearTimeout",
    "setInterval",
    "clearInterval",
    "require",
    "module",
    "exports",
    "__dirname",
    "__filename",
    "ArrayBuffer",
    "Uint8Array",
    "Int32Array",
    "DataView",
    "TextEncoder",
    "TextDecoder",
    "Reflect",
    "Proxy",
    "WeakMap",
    "WeakSet",
    "BigInt",
    "Symbol",
    "async",
    "await",
    "yield",
    "return",
    "if",
    "else",
    "for",
    "while",
    "do",
    "switch",
    "case",
    "break",
    "continue",
    "try",
    "catch",
    "finally",
    "throw",
    "new",
    "delete",
    "typeof",
    "instanceof",
    "in",
    "of",
    "class",
    "extends",
    "super",
    "import",
    "export",
    "default",
    "let",
    "const",
    "var",
    "function",
    "void",
    "debugger"
  ]);
  var RESERVED_PROPS = /* @__PURE__ */ new Set([
    "log",
    "warn",
    "error",
    "info",
    "debug",
    "trace",
    "dir",
    "table",
    "assert",
    "clear",
    "count",
    "group",
    "groupEnd",
    "time",
    "timeEnd",
    "profile",
    "profileEnd",
    "length",
    "name",
    "prototype",
    "constructor",
    "call",
    "apply",
    "bind",
    "toString",
    "valueOf",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "push",
    "pop",
    "shift",
    "unshift",
    "splice",
    "slice",
    "join",
    "concat",
    "reverse",
    "sort",
    "indexOf",
    "lastIndexOf",
    "includes",
    "find",
    "findIndex",
    "filter",
    "map",
    "reduce",
    "forEach",
    "some",
    "every",
    "flat",
    "flatMap",
    "keys",
    "values",
    "entries",
    "then",
    "catch",
    "finally",
    "next",
    "done",
    "value",
    "get",
    "set",
    "has",
    "delete",
    "clear",
    "random",
    "floor",
    "ceil",
    "round",
    "abs",
    "max",
    "min",
    "pow",
    "sqrt",
    "sin",
    "cos",
    "tan",
    "now",
    "parse",
    "stringify",
    "split",
    "replace",
    "match",
    "search",
    "toUpperCase",
    "toLowerCase",
    "charAt",
    "charCodeAt",
    "substring",
    "substr",
    "trim",
    "startsWith",
    "endsWith",
    "repeat",
    "padStart",
    "padEnd"
  ]);
  function preObfuscateAST(ast, options) {
    if (options.preserve) {
      for (var _pn of options.preserve) RESERVED.add(_pn);
    }
    var mangleMap = /* @__PURE__ */ new Map();
    var mangleUsed = /* @__PURE__ */ new Set();
    var scopeStack = [new Set(RESERVED)];
    function currentScope() {
      return scopeStack[scopeStack.length - 1];
    }
    function pushScope() {
      scopeStack.push(new Set(currentScope()));
    }
    function popScope() {
      scopeStack.pop();
    }
    function getMangled(name) {
      if (RESERVED.has(name) || RESERVED_PROPS.has(name)) return name;
      if (mangleMap.has(name)) return mangleMap.get(name);
      var mangled = randomMangle(mangleUsed);
      mangleMap.set(name, mangled);
      currentScope().add(mangled);
      return mangled;
    }
    function walk(node, parent, key) {
      if (!node || typeof node !== "object") return;
      if (Array.isArray(node)) {
        for (var i = 0; i < node.length; i++) walk(node[i], node, String(i));
        return;
      }
      switch (node.type) {
        case "Program":
          pushScope();
          for (var i = 0; i < node.body.length; i++) walk(node.body[i], node, "body");
          popScope();
          return;
        case "FunctionDeclaration":
        case "FunctionExpression":
        case "ArrowFunctionExpression":
          pushScope();
          if (node.id && options.mangleIdentifiers) {
            node.id.name = getMangled(node.id.name);
          }
          if (node.params) {
            for (var i = 0; i < node.params.length; i++) {
              var p = node.params[i];
              if (p.type === "Identifier" && options.mangleIdentifiers) {
                var pName = getMangled(p.name);
                currentScope().add(pName);
                p.name = pName;
              } else {
                walk(p, node, "params");
              }
            }
          }
          if (node.body) walk(node.body, node, "body");
          popScope();
          return;
        case "BlockStatement":
          pushScope();
          for (var i = 0; i < node.body.length; i++) walk(node.body[i], node, "body");
          popScope();
          return;
        case "VariableDeclaration":
          for (var i = 0; i < node.declarations.length; i++) {
            var decl = node.declarations[i];
            if (decl.id && decl.id.type === "Identifier" && options.mangleIdentifiers) {
              var declName = getMangled(decl.id.name);
              currentScope().add(declName);
              decl.id.name = declName;
            } else if (decl.id) {
              walk(decl.id, decl, "id");
            }
            if (decl.init) walk(decl.init, decl, "init");
          }
          return;
        case "Identifier":
          if (options.mangleIdentifiers && node.name && !RESERVED.has(node.name)) {
            if (!parent || parent.type !== "MemberExpression" || parent.computed || parent.property !== node) {
              if (!parent || parent.type !== "Property" || parent.computed || parent.key !== node) {
                node.name = getMangled(node.name);
              }
            }
          }
          break;
        case "MemberExpression":
          walk(node.object, node, "object");
          if (node.computed) {
            walk(node.property, node, "property");
          }
          return;
        case "Property":
          if (node.computed) {
            walk(node.key, node, "key");
          }
          walk(node.value, node, "value");
          return;
        case "MethodDefinition":
          walk(node.value, node, "value");
          if (node.computed) {
            walk(node.key, node, "key");
          }
          return;
        case "ClassDeclaration":
        case "ClassExpression":
          pushScope();
          if (node.id && options.mangleIdentifiers) {
            node.id.name = getMangled(node.id.name);
          }
          if (node.superClass) walk(node.superClass, node, "superClass");
          if (node.body && node.body.body) {
            for (var i = 0; i < node.body.body.length; i++) {
              walk(node.body.body[i], node.body, "body");
            }
          }
          popScope();
          return;
        case "CatchClause":
          pushScope();
          if (node.param && node.param.type === "Identifier" && options.mangleIdentifiers) {
            var catchName = getMangled(node.param.name);
            currentScope().add(catchName);
            node.param.name = catchName;
          }
          if (node.body) walk(node.body, node, "body");
          popScope();
          return;
      }
      for (var k of Object.keys(node)) {
        if (k === "type" || k === "start" || k === "end" || k === "loc" || k === "range") continue;
        var child = node[k];
        if (child && typeof child === "object") {
          walk(child, node, k);
        }
      }
    }
    function injectOpaquePredicates(body) {
      if (!options.injectOpaquePredicates) return body;
      var newBody = [];
      var counter = 0;
      for (var i = 0; i < body.length; i++) {
        if (counter > 1 + Math.floor(Math.random() * 3) && body[i].type !== "ImportDeclaration" && body[i].type !== "ExportDeclaration") {
          counter = 0;
          var opaque = {
            type: "IfStatement",
            test: {
              type: "BinaryExpression",
              left: {
                type: "CallExpression",
                callee: { type: "MemberExpression", object: { type: "Identifier", name: "Math" }, property: { type: "Identifier", name: "random" }, computed: false },
                arguments: []
              },
              operator: "<",
              right: { type: "Literal", value: 0, raw: "0" }
            },
            consequent: {
              type: "BlockStatement",
              body: [
                { type: "ExpressionStatement", expression: { type: "CallExpression", callee: { type: "Identifier", name: "console" }, arguments: [{ type: "Literal", value: "never", raw: "'never'" }] } }
              ]
            },
            alternate: null
          };
          newBody.push(opaque);
        }
        newBody.push(body[i]);
        counter++;
      }
      return newBody;
    }
    function injectJunkExpressions(body) {
      if (!options.injectJunkExpressions) return body;
      var newBody = [];
      for (var i = 0; i < body.length; i++) {
        if (i > 0 && i % (3 + Math.floor(Math.random() * 4)) === 0 && body[i].type !== "ImportDeclaration") {
          var junkName = "_j" + randomMangle(mangleUsed);
          newBody.push({
            type: "VariableDeclaration",
            kind: "var",
            declarations: [{
              type: "VariableDeclarator",
              id: { type: "Identifier", name: junkName },
              init: {
                type: "BinaryExpression",
                left: { type: "Literal", value: Math.floor(Math.random() * 99999), raw: String(Math.floor(Math.random() * 99999)) },
                operator: ">>",
                right: { type: "Literal", value: 1 + Math.floor(Math.random() * 8), raw: String(1 + Math.floor(Math.random() * 8)) }
              }
            }]
          });
        }
        newBody.push(body[i]);
      }
      return newBody;
    }
    if (options.mangleIdentifiers) {
      walk(ast);
    }
    if (options.injectOpaquePredicates || options.injectJunkExpressions) {
      if (ast.type === "Program" && ast.body) {
        ast.body = injectOpaquePredicates(ast.body);
        ast.body = injectJunkExpressions(ast.body);
      }
    }
  }

  // src/compiler/BytecodeCompiler.ts
  var BytecodeCompiler = class {
    code = [];
    constants = [];
    constMap = /* @__PURE__ */ new Map();
    labels = /* @__PURE__ */ new Map();
    patches = [];
    loopStack = [];
    currentSuperClass = null;
    funcCounter = 0;
    externalAPIs = /* @__PURE__ */ new Set();
    warnings = [];
    fakeCallCounter = 0;
    segmentCounter = 0;
    opsSinceLastSegment = 0;
    static SEGMENT_INTERVAL = 40 + Math.floor(Math.random() * 30);
    _currentBlockBody = null;
    _inBlockScope = false;
    getPropName(node) {
      if (node.type === "PrivateIdentifier") return "_" + node.name;
      return node.name || node.value;
    }
    addConstant(value) {
      const t = typeof value;
      let key;
      if (value === null) key = "null:";
      else if (value === void 0) key = "undefined:";
      else if (t === "object") key = "obj:" + JSON.stringify(value);
      else if (t === "symbol") key = "sym:" + value.toString();
      else key = t + ":" + String(value);
      if (this.constMap.has(key)) return this.constMap.get(key);
      const idx = this.constants.length;
      this.constants.push(value);
      this.constMap.set(key, idx);
      return idx;
    }
    currentAddr() {
      return this.code.length;
    }
    _opcodePos = [];
    emit(opcode, ...operands) {
      this._opcodePos.push(this.code.length);
      this.code.push(opcode ^ this.code.length & 255);
      for (const op of operands) {
        this.code.push(op >>> 24 & 255, op >>> 16 & 255, op >>> 8 & 255, op & 255);
      }
      this.opsSinceLastSegment++;
      this.maybeInjectSegmentSwitch();
      this.maybeInjectFakeOps();
    }
    emitPoly(groupName, ...operands) {
      var variant = pickVariant(groupName);
      this.emit(variant, ...operands);
    }
    setLabel(name) {
      this.labels.set(name, this.currentAddr());
    }
    emitJump(opcode, label) {
      const addr = this.currentAddr();
      this.emit(opcode, 0);
      this.patches.push({ addr: addr + 1, label });
    }
    emitJumpPoly(groupName, label) {
      var variant = pickVariant(groupName);
      this.emitJump(variant, label);
    }
    maybeInjectSegmentSwitch() {
    }
    maybeInjectFakeOps() {
    }
    patch() {
      for (const { addr, label } of this.patches) {
        const target = this.labels.get(label);
        if (target === void 0) throw new Error(`Undefined label: ${label}`);
        this.code[addr] = target >>> 24 & 255;
        this.code[addr + 1] = target >>> 16 & 255;
        this.code[addr + 2] = target >>> 8 & 255;
        this.code[addr + 3] = target & 255;
      }
    }
    Compile(source, preserve) {
      var ast = parse3(source, { ecmaVersion: 2022, sourceType: "module", locations: true });
      preObfuscateAST(ast, {
        mangleIdentifiers: true,
        injectOpaquePredicates: false,
        injectJunkExpressions: false,
        preserve
      });
      this.compileNode(ast);
      this.emitPoly("HALT");
      this.emitPoly("HALT");
      this.patch();
      for (var _ji = 0; _ji < 10; _ji++) {
        this.constants.push({ __junk: Math.random().toString(36) });
      }
      return { bytecode: this.code, constants: this.constants, externalAPIs: this.externalAPIs, warnings: this.warnings };
    }
    compileNode(node) {
      if (!node) return;
      switch (node.type) {
        case "Program":
          this._currentBlockBody = node.body;
          this._hoistVarDeclarations(node.body);
          for (const stmt of node.body) {
            if (stmt.type === "FunctionDeclaration" || stmt.type === "ClassDeclaration") this.compileNode(stmt);
          }
          for (const stmt of node.body) {
            if (stmt.type !== "FunctionDeclaration" && stmt.type !== "ClassDeclaration") this.compileNode(stmt);
          }
          this._currentBlockBody = null;
          break;
        case "Literal":
          if (node.regex) this.emitPoly("PUSH_CONST", this.addConstant({ __regex: true, pattern: node.regex.pattern, flags: node.regex.flags }));
          else if (typeof node.value === "bigint") this.emitPoly("PUSH_CONST", this.addConstant({ __bigint: true, value: String(node.value) }));
          else if (typeof node.value === "string") {
            this.emitPoly("PUSH_CONST", this.addConstant(node.value));
          } else this.emitPoly("PUSH_CONST", this.addConstant(node.value));
          break;
        case "Identifier":
          if (node.name.startsWith("GM_")) this.externalAPIs.add(node.name);
          this.emitPoly("PUSH_VAR", this.addConstant(node.name));
          break;
        case "BlockStatement":
          var _prevBlock = this._currentBlockBody;
          this._currentBlockBody = node.body;
          var _hasLetConst = false;
          for (const stmt of node.body) {
            if (stmt.type === "VariableDeclaration" && (stmt.kind === "let" || stmt.kind === "const")) {
              _hasLetConst = true;
              break;
            }
          }
          if (_hasLetConst) this._hoistVarDeclarations(node.body);
          if (_hasLetConst) this.emitPoly("ENTER_SCOPE");
          var _prevBlockScope = this._inBlockScope;
          if (_hasLetConst) this._inBlockScope = true;
          for (const stmt of node.body) {
            if (stmt.type === "FunctionDeclaration") this.compileNode(stmt);
          }
          for (const stmt of node.body) {
            if (stmt.type !== "FunctionDeclaration") this.compileNode(stmt);
          }
          if (_hasLetConst) this.emitPoly("EXIT_SCOPE");
          this._inBlockScope = _prevBlockScope;
          this._currentBlockBody = _prevBlock;
          break;
        case "ExpressionStatement":
          this.compileNode(node.expression);
          if (this._currentBlockBody) {
            var _idx = this._currentBlockBody.indexOf(node);
            if (_idx === -1 || _idx !== this._currentBlockBody.length - 1) this.emitPoly("POP");
          } else this.emitPoly("POP");
          break;
        case "EmptyStatement":
          break;
        case "DebuggerStatement":
          this.emitPoly("DEBUG_BREAK");
          break;
        case "VariableDeclaration":
          if (node.kind === "let" || node.kind === "const") this.warnings.push(node.kind + " is compiled as var (no block scoping)");
          for (const decl of node.declarations) {
            if (node.kind === "var" && !decl.init) continue;
            if (node.kind === "var" && decl.init && this._inBlockScope && decl.id.type === "Identifier") {
              this.compileNode(decl.init);
              this.emitPoly("STORE_VAR", this.addConstant(decl.id.name));
              this.emitPoly("POP");
            } else {
              this.compileDeclaration(decl);
            }
          }
          break;
        case "AssignmentExpression":
          this.compileAssignment(node);
          break;
        case "UpdateExpression":
          this.compileUpdate(node);
          break;
        case "BinaryExpression":
          this.compileNode(node.left);
          this.compileNode(node.right);
          this.emitBinaryOp(node.operator);
          break;
        case "LogicalExpression":
          if (node.operator === "??") {
            const skipLabel = "nullish_skip_" + this.currentAddr();
            this.compileNode(node.left);
            this.emitPoly("DUP");
            this.emitPoly("PUSH_CONST", this.addConstant(null));
            this.emitPoly("EQ");
            this.emitPoly("NOT");
            this.emitJumpPoly("JMP_IF_TRUE", skipLabel);
            this.emitPoly("POP");
            this.compileNode(node.right);
            this.setLabel(skipLabel);
          } else {
            const skipLabel = "logical_skip_" + this.currentAddr();
            this.compileNode(node.left);
            this.emitPoly("DUP");
            this.emitJumpPoly(node.operator === "&&" ? "JMP_IF_FALSE" : "JMP_IF_TRUE", skipLabel);
            this.emitPoly("POP");
            this.compileNode(node.right);
            this.setLabel(skipLabel);
          }
          break;
        case "UnaryExpression":
          if (node.operator === "delete" && node.argument.type === "MemberExpression") {
            this.compileNode(node.argument.object);
            if (node.argument.computed) this.compileNode(node.argument.property);
            else this.emitPoly("PUSH_CONST", this.addConstant(node.argument.property.name));
            this.emitPoly("DELETE");
          } else {
            this.compileNode(node.argument);
            this.emitUnaryOp(node.operator);
          }
          break;
        case "FunctionDeclaration":
          this.compileFunction(node);
          this.emitPoly("STORE_VAR", this.addConstant(node.id.name));
          break;
        case "FunctionExpression":
        case "ArrowFunctionExpression":
          this.compileFunction(node);
          break;
        case "ReturnStatement":
          if (node.argument) this.compileNode(node.argument);
          else this.emitPoly("PUSH_CONST", this.addConstant(void 0));
          this.emitPoly("RETURN");
          break;
        case "ThisExpression":
          this.emitPoly("THIS");
          break;
        case "CallExpression":
          this.compileCall(node);
          break;
        case "NewExpression":
          this.compileNode(node.callee);
          for (const arg of node.arguments) this.compileNode(arg);
          this.emitPoly("NEW", node.arguments.length);
          break;
        case "MemberExpression":
          this.compileNode(node.object);
          if (node.computed) {
            this.compileNode(node.property);
            this.emitPoly(node.optional ? "OPTIONAL_CHAIN" : "GET_INDEX");
          } else this.emitPoly(node.optional ? "OPTIONAL_CHAIN" : "GET_PROP", this.addConstant(this.getPropName(node.property)));
          break;
        case "ChainExpression":
          this.compileNode(node.expression);
          break;
        case "ObjectExpression":
          this.emitPoly("NEW_OBJ");
          for (const prop of node.properties) {
            if (prop.type === "SpreadElement") {
              this.compileNode(prop.argument);
              this.emitPoly("OBJ_SPREAD");
            } else if (prop.type === "Property") {
              if (prop.kind === "get" || prop.kind === "set") {
                var _gsKey = prop.key.name || prop.key.value;
                this.emitPoly("DUP");
                this.emitPoly("PUSH_CONST", this.addConstant(_gsKey));
                this.compileNode(prop.value);
                this.emitPoly("CALL_METHOD", 2, this.addConstant(prop.kind === "get" ? "__defineGetter__" : "__defineSetter__"));
                this.emitPoly("POP");
              } else {
                this.compileNode(prop.value);
                if (prop.computed) {
                  this.compileNode(prop.key);
                  this.emitPoly("SET_PROP_OBJ_COMPUTED");
                } else {
                  const key = prop.key.name || prop.key.value;
                  this.emitPoly("SET_PROP_OBJ", this.addConstant(key));
                }
              }
            }
          }
          break;
        case "ArrayExpression":
          this.emitPoly("NEW_ARR", 0);
          var _holeCount = 0;
          for (const el of node.elements) {
            if (el) {
              if (el.type === "SpreadElement") {
                this.compileNode(el.argument);
                this.emitPoly("ARRAY_SPREAD");
              } else {
                this.compileNode(el);
                this.emitPoly("ARRAY_PUSH");
              }
            } else {
              _holeCount++;
              this.emitPoly("PUSH_CONST", this.addConstant(void 0));
              this.emitPoly("ARRAY_PUSH");
            }
          }
          if (_holeCount > 0) {
            this.emitPoly("DUP");
            this.emitPoly("PUSH_CONST", this.addConstant(node.elements.length));
            this.emitPoly("SET_PROP", this.addConstant("length"));
            this.emitPoly("POP");
            var _hIdx = 0;
            for (const el of node.elements) {
              if (!el) {
                this.emitPoly("DUP");
                this.emitPoly("PUSH_CONST", this.addConstant(_hIdx));
                this.emitPoly("DELETE");
                this.emitPoly("POP");
              }
              _hIdx++;
            }
          }
          break;
        case "SpreadElement":
          this.compileNode(node.argument);
          break;
        case "IfStatement":
          compileIf(this, node);
          break;
        case "ConditionalExpression":
          this.compileNode(node.test);
          this.compileNode(node.consequent);
          this.compileNode(node.alternate);
          this.emitPoly("TERNARY");
          break;
        case "SwitchStatement":
          compileSwitch(this, node);
          break;
        case "ForStatement":
          compileFor(this, node);
          break;
        case "WhileStatement":
          compileWhile(this, node);
          break;
        case "DoWhileStatement":
          compileDoWhile(this, node);
          break;
        case "ForOfStatement":
          compileForOf(this, node);
          break;
        case "ForInStatement":
          compileForIn(this, node);
          break;
        case "BreakStatement":
          compileBreak(this, node);
          break;
        case "ContinueStatement":
          compileContinue(this, node);
          break;
        case "LabeledStatement":
          compileLabeled(this, node);
          break;
        case "TryStatement":
          compileTry(this, node);
          break;
        case "ThrowStatement":
          this.compileNode(node.argument);
          this.emitPoly("THROW");
          break;
        case "TemplateLiteral":
          this.compileTemplate(node);
          break;
        case "TaggedTemplateExpression":
          throw new Error("Obfuscation refused: tagged template literals are not supported. Refactor to regular function calls before obfuscating.");
        case "ClassDeclaration":
          this.compileClass(node, true);
          break;
        case "ClassExpression":
          this.compileClass(node, false);
          break;
        case "ImportDeclaration":
          this.warnings.push(`Import from '${node.source.value}' compiled as no-op`);
          break;
        case "ExportNamedDeclaration":
        case "ExportDefaultDeclaration":
        case "ExportAllDeclaration":
          if (node.declaration) this.compileNode(node.declaration);
          break;
        case "SequenceExpression":
          for (let i = 0; i < node.expressions.length; i++) {
            this.compileNode(node.expressions[i]);
            if (i < node.expressions.length - 1) this.emitPoly("POP");
          }
          break;
        case "AwaitExpression":
          this.compileNode(node.argument);
          this.emitPoly("AWAIT");
          break;
        case "YieldExpression":
          throw new Error("Obfuscation refused: yield/generators are not supported. Remove generator functions before obfuscating.");
        case "ArrayPattern":
        case "ObjectPattern":
        case "RestElement":
          break;
        case "MetaProperty":
          this.emitPoly("PUSH_CONST", this.addConstant(void 0));
          break;
        case "Super":
          this.emitPoly("THIS");
          break;
        default:
          this.warnings.push(`Unhandled node type: ${node.type}`);
      }
    }
    compileDeclaration(decl) {
      if (decl.id.type === "Identifier") {
        if (decl.init) {
          this.compileNode(decl.init);
          this.emitPoly("DECLARE_VAR", this.addConstant(decl.id.name));
        } else {
          this.emitPoly("PUSH_CONST", this.addConstant(void 0));
          this.emitPoly("DECLARE_VAR", this.addConstant(decl.id.name));
        }
      } else if (decl.id.type === "ArrayPattern") {
        if (!decl.init) {
          this.emitPoly("PUSH_CONST", this.addConstant([]));
        } else {
          this.compileNode(decl.init);
        }
        var _tmpArr = "__dest_arr_" + this.funcCounter++;
        this.emitPoly("DECLARE_VAR", this.addConstant(_tmpArr));
        for (var _ei = 0; _ei < decl.id.elements.length; _ei++) {
          var _el = decl.id.elements[_ei];
          if (!_el) continue;
          if (_el.type === "Identifier") {
            this.emitPoly("PUSH_VAR", this.addConstant(_tmpArr));
            this.emitPoly("PUSH_CONST", this.addConstant(_ei));
            this.emitPoly("GET_INDEX");
            this.emitPoly("DECLARE_VAR", this.addConstant(_el.name));
          } else if (_el.type === "AssignmentPattern") {
            this.emitPoly("PUSH_VAR", this.addConstant(_tmpArr));
            this.emitPoly("PUSH_CONST", this.addConstant(_ei));
            this.emitPoly("GET_INDEX");
            this.emitPoly("PUSH_CONST", this.addConstant(void 0));
            this.emitPoly("STRICT_EQ");
            var _skipLabel = "__def_skip_" + this.currentAddr();
            this.emitJumpPoly("JMP_IF_FALSE", _skipLabel);
            this.emitPoly("POP");
            this.compileNode(_el.right);
            this.setLabel(_skipLabel);
            if (_el.left && _el.left.type === "Identifier") {
              this.emitPoly("DECLARE_VAR", this.addConstant(_el.left.name));
            }
          } else if (_el.type === "RestElement" && _el.argument.type === "Identifier") {
            this.emitPoly("PUSH_VAR", this.addConstant(_tmpArr));
            this.emitPoly("PUSH_CONST", this.addConstant(_ei));
            this.emitPoly("CALL_METHOD", 1, this.addConstant("slice"));
            this.emitPoly("DECLARE_VAR", this.addConstant(_el.argument.name));
          }
        }
      } else if (decl.id.type === "ObjectPattern") {
        if (!decl.init) {
          this.emitPoly("PUSH_CONST", this.addConstant({}));
        } else {
          this.compileNode(decl.init);
        }
        var _tmpObj = "__dest_obj_" + this.funcCounter++;
        this.emitPoly("DECLARE_VAR", this.addConstant(_tmpObj));
        for (var _pi = 0; _pi < decl.id.properties.length; _pi++) {
          var _prop = decl.id.properties[_pi];
          if (_prop.type === "RestElement") continue;
          var _keyName = _prop.key.name || _prop.key.value;
          if (_prop.value.type === "Identifier") {
            this.emitPoly("PUSH_VAR", this.addConstant(_tmpObj));
            this.emitPoly("GET_PROP", this.addConstant(_keyName));
            this.emitPoly("DECLARE_VAR", this.addConstant(_prop.value.name));
          } else if (_prop.value.type === "AssignmentPattern" && _prop.value.left.type === "Identifier") {
            this.emitPoly("PUSH_VAR", this.addConstant(_tmpObj));
            this.emitPoly("GET_PROP", this.addConstant(_keyName));
            this.emitPoly("PUSH_CONST", this.addConstant(void 0));
            this.emitPoly("STRICT_EQ");
            var _oskipLabel = "__odef_skip_" + this.currentAddr();
            this.emitJumpPoly("JMP_IF_FALSE", _oskipLabel);
            this.emitPoly("POP");
            this.compileNode(_prop.value.right);
            this.setLabel(_oskipLabel);
            this.emitPoly("DECLARE_VAR", this.addConstant(_prop.value.left.name));
          }
        }
      }
    }
    compileAssignment(node) {
      const op = node.operator;
      if (op === "=") {
        this.compileSetTarget(node.left, () => this.compileNode(node.right));
        return;
      }
      if (node.left.type === "Identifier") {
        this.compileNode(node.left);
        this.compileNode(node.right);
        this.emitBinaryOp(op.slice(0, -1));
        this.emitPoly("STORE_VAR", this.addConstant(node.left.name));
      } else if (node.left.type === "MemberExpression") {
        const isComputed = node.left.computed;
        const tmpObj = "__co_" + this.funcCounter++, tmpIdx = isComputed ? "__ci_" + this.funcCounter++ : null, tmpVal = "__cv_" + this.funcCounter++;
        this.compileNode(node.left.object);
        this.emitPoly("DECLARE_VAR", this.addConstant(tmpObj));
        if (isComputed) {
          this.compileNode(node.left.property);
          this.emitPoly("DECLARE_VAR", this.addConstant(tmpIdx));
        }
        this.emitPoly("PUSH_VAR", this.addConstant(tmpObj));
        if (isComputed) {
          this.emitPoly("PUSH_VAR", this.addConstant(tmpIdx));
          this.emitPoly("GET_INDEX");
        } else this.emitPoly("GET_PROP", this.addConstant(node.left.property.name));
        this.compileNode(node.right);
        this.emitBinaryOp(op.slice(0, -1));
        this.emitPoly("DECLARE_VAR", this.addConstant(tmpVal));
        this.emitPoly("PUSH_VAR", this.addConstant(tmpObj));
        if (isComputed) {
          this.emitPoly("PUSH_VAR", this.addConstant(tmpIdx));
          this.emitPoly("PUSH_VAR", this.addConstant(tmpVal));
          this.emitPoly("SET_INDEX");
        } else {
          this.emitPoly("PUSH_VAR", this.addConstant(tmpVal));
          this.emitPoly("SET_PROP", this.addConstant(node.left.property.name));
        }
      }
    }
    compileSetTarget(left, compileValue) {
      if (left.type === "Identifier") {
        compileValue();
        this.emitPoly("STORE_VAR", this.addConstant(left.name));
      } else if (left.type === "MemberExpression") {
        this.compileNode(left.object);
        if (left.computed) {
          this.compileNode(left.property);
          compileValue();
          this.emitPoly("SET_INDEX");
        } else {
          compileValue();
          this.emitPoly("SET_PROP", this.addConstant(this.getPropName(left.property)));
        }
      }
    }
    compileUpdate(node) {
      if (node.argument.type === "Identifier") {
        const nameIdx = this.addConstant(node.argument.name);
        if (node.prefix) this.emitPoly(node.operator === "++" ? "INC_PRE" : "DEC_PRE", nameIdx);
        else this.emitPoly(node.operator === "++" ? "INC_POST" : "DEC_POST", nameIdx);
      } else if (node.argument.type === "MemberExpression") {
        var isPost = !node.prefix;
        var delta = node.operator === "++" ? 1 : -1;
        var tmpObj = "__uo_" + this.funcCounter++;
        var tmpVal = "__uv_" + this.funcCounter++;
        this.compileNode(node.argument.object);
        this.emitPoly("DECLARE_VAR", this.addConstant(tmpObj));
        this.emitPoly("PUSH_VAR", this.addConstant(tmpObj));
        if (node.argument.computed) {
          this.compileNode(node.argument.property);
          this.emitPoly("GET_INDEX");
        } else {
          this.emitPoly("GET_PROP", this.addConstant(this.getPropName(node.argument.property)));
        }
        if (isPost) this.emitPoly("DUP");
        this.emitPoly("PUSH_CONST", this.addConstant(delta));
        this.emitPoly("ADD");
        this.emitPoly("DECLARE_VAR", this.addConstant(tmpVal));
        this.emitPoly("PUSH_VAR", this.addConstant(tmpObj));
        this.emitPoly("PUSH_VAR", this.addConstant(tmpVal));
        if (node.argument.computed) {
          this.emitPoly("SET_INDEX");
        } else {
          this.emitPoly("SET_PROP", this.addConstant(this.getPropName(node.argument.property)));
        }
        this.emitPoly("POP");
      }
    }
    compileCall(node) {
      if (node.callee.type === "MemberExpression") {
        if (node.callee.object.type === "Super") {
          this.emitPoly("THIS");
          for (const arg of node.arguments) this.compileNode(arg);
          this.emitPoly("SUPER_METHOD", node.arguments.length, this.addConstant(node.callee.property.name));
        } else {
          this.compileNode(node.callee.object);
          if (node.callee.computed) {
            this.compileNode(node.callee.property);
            this.emitPoly("GET_INDEX");
            for (const arg of node.arguments) this.compileNode(arg);
            this.emitPoly("CALL", node.arguments.length);
          } else {
            for (const arg of node.arguments) this.compileNode(arg);
            this.emitPoly("CALL_METHOD", node.arguments.length, this.addConstant(this.getPropName(node.callee.property)));
          }
        }
      } else if (node.callee.type === "Super") {
        if (this.currentSuperClass !== null) this.emitPoly("PUSH_VAR", this.currentSuperClass);
        for (const arg of node.arguments) this.compileNode(arg);
        this.emitPoly("SUPER_CALL", node.arguments.length);
      } else {
        this.compileNode(node.callee);
        for (const arg of node.arguments) this.compileNode(arg);
        this.emitPoly("CALL", node.arguments.length);
      }
    }
    emitBinaryOp(op) {
      const map = { "+": "ADD", "-": "SUB", "*": "MUL", "/": "DIV", "%": "MOD", "**": "EXP", "==": "EQ", "!=": "NEQ", "===": "STRICT_EQ", "!==": "STRICT_NEQ", "<": "LT", "<=": "LTE", ">": "GT", ">=": "GTE", "&": "BIT_AND", "|": "BIT_OR", "^": "BIT_XOR", "<<": "LSHIFT", ">>": "RSHIFT", ">>>": "URSHIFT", "??": "NULLISH" };
      if (map[op]) this.emitPoly(map[op]);
      else if (op === "instanceof") this.emitPoly("INSTANCEOF");
      else if (op === "in") this.emitPoly("IN");
      else this.warnings.push(`Unknown binary operator: ${op}`);
    }
    emitUnaryOp(op) {
      if (op === "void") {
        this.emitPoly("POP");
        this.emitPoly("PUSH_CONST", this.addConstant(void 0));
      } else {
        const map = { "!": "NOT", "~": "BIT_NOT", "-": "NEG", "+": "POS", "typeof": "TYPEOF", "delete": "DELETE" };
        if (map[op]) this.emitPoly(map[op]);
      }
    }
    compileFunction(node) {
      if (node.generator) throw new Error("Obfuscation refused: generator functions (function*) are not supported. Remove or convert before obfuscating.");
      const funcEnd = "func_end_" + this.currentAddr();
      this.emitJumpPoly("JMP", funcEnd);
      const funcStart = this.currentAddr();
      if (node.body.type === "BlockStatement") {
        this.emitPoly("ENTER_SCOPE");
        if (node.params) {
          for (var _dpi = 0; _dpi < node.params.length; _dpi++) {
            var _dp = node.params[_dpi];
            if (_dp.type === "ArrayPattern") {
              this.emitPoly("PUSH_VAR", this.addConstant("_p" + _dpi));
              for (var _ei = 0; _ei < _dp.elements.length; _ei++) {
                var _el = _dp.elements[_ei];
                if (_el && _el.type === "Identifier") {
                  this.emitPoly("DUP");
                  this.emitPoly("PUSH_CONST", this.addConstant(_ei));
                  this.emitPoly("GET_INDEX");
                  this.emitPoly("DECLARE_VAR", this.addConstant(_el.name));
                }
              }
              this.emitPoly("POP");
            } else if (_dp.type === "ObjectPattern") {
              this.emitPoly("PUSH_VAR", this.addConstant("_p" + _dpi));
              for (var _pi = 0; _pi < _dp.properties.length; _pi++) {
                var _prop = _dp.properties[_pi];
                if (_prop.value && _prop.value.type === "Identifier") {
                  var _kn = _prop.key.name || _prop.key.value;
                  this.emitPoly("DUP");
                  this.emitPoly("GET_PROP", this.addConstant(_kn));
                  this.emitPoly("DECLARE_VAR", this.addConstant(_prop.value.name));
                }
              }
              this.emitPoly("POP");
            }
          }
        }
        if (node.params) {
          for (var _dpi = 0; _dpi < node.params.length; _dpi++) {
            var _dp = node.params[_dpi];
            if (_dp.type === "AssignmentPattern" && _dp.left.type === "Identifier") {
              this.emitPoly("PUSH_VAR", this.addConstant(_dp.left.name));
              this.emitPoly("PUSH_CONST", this.addConstant(void 0));
              this.emitPoly("STRICT_EQ");
              var _dpSkip = "__dp_skip_" + this.currentAddr();
              this.emitJumpPoly("JMP_IF_FALSE", _dpSkip);
              this.emitPoly("POP");
              this.compileNode(_dp.right);
              this.emitPoly("STORE_VAR", this.addConstant(_dp.left.name));
              this.emitPoly("POP");
              this.setLabel(_dpSkip);
            }
          }
        }
        this._hoistVarDeclarations(node.body.body);
        for (const stmt of node.body.body) {
          if (stmt.type === "FunctionDeclaration") this.compileNode(stmt);
        }
        for (const stmt of node.body.body) {
          if (stmt.type !== "FunctionDeclaration") this.compileNode(stmt);
        }
        this.emitPoly("EXIT_SCOPE");
        this.emitPoly("PUSH_CONST", this.addConstant(void 0));
        this.emitPoly("RETURN");
      } else {
        this.compileNode(node.body);
        this.emitPoly("RETURN");
      }
      this.setLabel(funcEnd);
      const params = [];
      if (node.params) {
        for (const param of node.params) {
          if (param.type === "Identifier") params.push(param.name);
          else if (param.type === "AssignmentPattern") {
            params.push(param.left.name);
          } else if (param.type === "RestElement") params.push("..." + param.argument.name);
          else params.push("_p" + params.length);
        }
      }
      const isAsync = node.async === true;
      const isArrow = node.type === "ArrowFunctionExpression";
      this.emitPoly("PUSH_FUNC", this.addConstant({ addr: funcStart, params, name: node.id ? node.id.name : null, async: isAsync, isArrow }));
    }
    _hoistVarDeclarations(body) {
      for (const stmt of body) {
        if (stmt.type === "VariableDeclaration" && stmt.kind === "var") {
          for (const decl of stmt.declarations) {
            if (decl.id && decl.id.type === "Identifier") {
              this.emitPoly("PUSH_CONST", this.addConstant(void 0));
              this.emitPoly("DECLARE_VAR", this.addConstant(decl.id.name));
            }
          }
        } else if (stmt.type === "BlockStatement") {
          this._hoistVarDeclarations(stmt.body);
        } else if (stmt.type === "IfStatement") {
          if (stmt.consequent) this._hoistVarDeclarations(stmt.consequent.body || [stmt.consequent]);
          if (stmt.alternate) this._hoistVarDeclarations(stmt.alternate.body || [stmt.alternate]);
        } else if (stmt.type === "ForStatement" && stmt.body) {
          this._hoistVarDeclarations(stmt.body.body || [stmt.body]);
        } else if (stmt.type === "WhileStatement" && stmt.body) {
          this._hoistVarDeclarations(stmt.body.body || [stmt.body]);
        }
      }
    }
    compileTemplate(node) {
      this.emitPoly("PUSH_CONST", this.addConstant(""));
      for (let i = 0; i < node.quasis.length; i++) {
        if (node.quasis[i].value.cooked) {
          this.emitPoly("PUSH_CONST", this.addConstant(node.quasis[i].value.cooked));
          this.emitPoly("ADD");
        }
        if (node.expressions[i]) {
          this.compileNode(node.expressions[i]);
          this.emitPoly("ADD");
        }
      }
    }
    compileTaggedTemplate(node) {
      this.compileNode(node.tag);
      const cooked = node.quasi.quasis.map((q) => q.value.cooked);
      const raw = node.quasi.quasis.map((q) => q.value.raw);
      this.emitPoly("PUSH_CONST", this.addConstant({ __taggedTemplate: true, strings: cooked, raw }));
      for (const expr of node.quasi.expressions) this.compileNode(expr);
      this.emitPoly("CALL", node.quasi.expressions.length + 1);
    }
    compileClass(node, isDeclaration) {
      const className = node.id ? node.id.name : "__class_" + this.funcCounter++;
      let constructorFunc = null;
      const methods = [];
      const privateFields = [];
      for (const member of node.body.body) {
        if (member.kind === "constructor") constructorFunc = member.value;
        else if (member.type === "MethodDefinition") methods.push(member);
        else if (member.type === "PropertyDefinition" && member.key.type === "PrivateIdentifier") {
          privateFields.push(member);
        }
      }
      if (constructorFunc) {
        if (node.superClass) {
          this.currentSuperClass = this.addConstant(node.superClass.name);
        }
        if (privateFields.length > 0 && constructorFunc.body.type === "BlockStatement") {
          var _pfStmts = [];
          for (var _pfi = 0; _pfi < privateFields.length; _pfi++) {
            var _pf = privateFields[_pfi];
            if (_pf.value) {
              _pfStmts.push({
                type: "ExpressionStatement",
                expression: {
                  type: "AssignmentExpression",
                  operator: "=",
                  left: {
                    type: "MemberExpression",
                    object: { type: "ThisExpression" },
                    property: { type: "PrivateIdentifier", name: _pf.key.name },
                    computed: false,
                    optional: false
                  },
                  right: _pf.value
                }
              });
            }
          }
          constructorFunc.body.body = _pfStmts.concat(constructorFunc.body.body);
        }
        this.compileFunction(constructorFunc);
        this.currentSuperClass = null;
      } else {
        var hasSuper = !!node.superClass;
        var funcEnd = "func_end_" + this.currentAddr();
        this.emitJumpPoly("JMP", funcEnd);
        var funcStart = this.currentAddr();
        if (hasSuper) {
          this.currentSuperClass = this.addConstant(node.superClass.name);
          var maxArgs = 10;
          for (var ai = 0; ai < maxArgs; ai++) {
            this.emitPoly("PUSH_VAR", this.addConstant("arguments"));
            this.emitPoly("PUSH_CONST", this.addConstant(ai));
            this.emitPoly("GET_INDEX");
          }
          this.emitPoly("SUPER_CALL", maxArgs);
          this.emitPoly("POP");
          this.currentSuperClass = null;
        }
        for (var _pfi = 0; _pfi < privateFields.length; _pfi++) {
          var _pf = privateFields[_pfi];
          if (_pf.value) {
            this.emitPoly("THIS");
            this.compileNode(_pf.value);
            this.emitPoly("SET_PROP", this.addConstant("_" + _pf.key.name));
            this.emitPoly("POP");
          }
        }
        this.emitPoly("PUSH_CONST", this.addConstant(void 0));
        this.emitPoly("RETURN");
        this.setLabel(funcEnd);
        var params = [];
        this.emitPoly("PUSH_FUNC", this.addConstant({ addr: funcStart, params, name: null, async: false, isArrow: false }));
      }
      if (node.superClass) {
        this.compileNode(node.superClass);
        this.emitPoly("CLASS_BODY");
      }
      for (const method of methods) {
        this.emitPoly("DUP");
        if (method.static) {
          this.compileFunction(method.value);
          this.emitPoly("SET_PROP", this.addConstant(method.key.name));
        } else {
          this.emitPoly("GET_PROP", this.addConstant("prototype"));
          this.compileFunction(method.value);
          this.emitPoly("SET_PROP", this.addConstant(method.key.name));
        }
        this.emitPoly("POP");
      }
      if (isDeclaration) this.emitPoly("DECLARE_VAR", this.addConstant(className));
    }
  };

  // src/runtime/Builder.ts
  function RandomName(len) {
    var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var res = "";
    for (var i = 0; i < len; i++) res += chars[Math.floor(Math.random() * chars.length)];
    return res;
  }
  function GenerateNames() {
    return {
      V: "p" + RandomName(4) + "_" + RandomName(3),
      L: "p" + RandomName(5) + "_" + RandomName(2),
      S: "p" + RandomName(3) + "_" + RandomName(4),
      SU: "p" + RandomName(4) + "_" + RandomName(2),
      R: "p" + RandomName(4) + "_" + RandomName(4),
      XE: "p" + RandomName(3) + "_" + RandomName(3),
      W: "p" + RandomName(5) + "_" + RandomName(3),
      F: "p" + RandomName(2) + "_" + RandomName(5),
      GC: "p" + RandomName(4) + "_" + RandomName(2),
      ST: "p" + RandomName(3) + "_" + RandomName(5),
      D: "p" + RandomName(4) + "_" + RandomName(3),
      SP: "p" + RandomName(3) + "_" + RandomName(2),
      SK: "p" + RandomName(2) + "_" + RandomName(4),
      VM: "p" + RandomName(3) + "_" + RandomName(4),
      gS: "p" + RandomName(5) + "_" + RandomName(4),
      bI: "p" + RandomName(3) + "_" + RandomName(3),
      G: "p" + RandomName(4) + "_" + RandomName(5),
      XS: "p" + RandomName(3) + "_" + RandomName(3)
    };
  }
  function deriveKey(seed, len) {
    var key = [];
    for (var i = 0; i < len; i++) {
      var h = seed[i % seed.length] ^ i * 157 + 63 & 255;
      for (var j = 0; j < seed.length; j++) h = (h << 3) - h + seed[j] | 0;
      key.push(h & 255);
    }
    return key;
  }
  function xorEncrypt(data2, key) {
    var out = [];
    for (var i = 0; i < data2.length; i++) out.push(data2[i] ^ key[i % key.length]);
    return out;
  }
  function obfuscateConstants(constants) {
    var out = [];
    for (var i = 0; i < constants.length; i++) {
      var c = constants[i];
      if (c && typeof c === "object" && c.addr !== void 0) {
        var obf = { a: c.addr };
        if (c.params) obf.p = c.params;
        if (c.async) obf.as = true;
        if (c.isArrow) obf.ia = true;
        if (c.name) obf.nm = c.name;
        out.push(obf);
      } else if (c === void 0) {
        out.push({ __undef: true });
      } else if (c === null) {
        out.push({ __null: true });
      } else if (typeof c === "number" && isNaN(c)) {
        out.push({ __nan: true });
      } else if (c === Infinity) {
        out.push({ __inf: true });
      } else if (c === -Infinity) {
        out.push({ __inf: false });
      } else {
        out.push(c);
      }
    }
    return out;
  }
  function buildGroupIndexMap() {
    var groupNames = Object.keys(OP_GROUPS);
    var variantToGroupIdx = {};
    for (var gi = 0; gi < groupNames.length; gi++) {
      var group = OP_GROUPS[groupNames[gi]];
      for (var vi = 0; vi < group.variants.length; vi++) {
        variantToGroupIdx[group.variants[vi]] = gi;
      }
    }
    return variantToGroupIdx;
  }
  var generateDispatch = function(G, R, L, S, SU, W, F, XE, gS, SP, SK, groupNames) {
    var lines = [];
    var body;
    for (var gi = 0; gi < groupNames.length; gi++) {
      var gn = groupNames[gi];
      switch (gn) {
        case "HALT":
          body = "return st.s.length?st.s[st.s.length-1]:undefined;";
          break;
        case "PUSH_CONST":
          body = "st.s.push(" + G + "(" + R + "(st)));";
          break;
        case "PUSH_VAR":
          body = "st.s.push(" + L + "(st," + G + "(" + R + "(st))));";
          break;
        case "STORE_VAR":
          body = SU + "(st," + G + "(" + R + "(st)),st.s[st.s.length-1]);";
          break;
        case "DECLARE_VAR":
          body = "{var _dn=" + G + "(" + R + "(st));st.c.set(_dn,st.s.pop());}";
          break;
        case "POP":
          body = "st.s.pop();";
          break;
        case "DUP":
          body = "st.s.push(st.s[st.s.length-1]);";
          break;
        case "ADD":
          body = "{var r=st.s.pop();var l=st.s.pop();st.s.push(l+r);}";
          break;
        case "SUB":
          body = "{var r=st.s.pop();var l=st.s.pop();st.s.push(l-r);}";
          break;
        case "MUL":
          body = "{var r=st.s.pop();var l=st.s.pop();st.s.push(l*r);}";
          break;
        case "DIV":
          body = "{var r=st.s.pop();var l=st.s.pop();st.s.push(l/r);}";
          break;
        case "MOD":
          body = "{var r=st.s.pop();var l=st.s.pop();st.s.push(l%r);}";
          break;
        case "EXP":
          body = "{var r=st.s.pop();var l=st.s.pop();st.s.push(Math.pow(l,r));}";
          break;
        case "EQ":
          body = "{var r=st.s.pop();var l=st.s.pop();st.s.push(l==r);}";
          break;
        case "NEQ":
          body = "{var r=st.s.pop();var l=st.s.pop();st.s.push(l!=r);}";
          break;
        case "STRICT_EQ":
          body = "{var r=st.s.pop();var l=st.s.pop();st.s.push(l===r);}";
          break;
        case "STRICT_NEQ":
          body = "{var r=st.s.pop();var l=st.s.pop();st.s.push(l!==r);}";
          break;
        case "LT":
          body = "{var r=st.s.pop();var l=st.s.pop();st.s.push(l<r);}";
          break;
        case "LTE":
          body = "{var r=st.s.pop();var l=st.s.pop();st.s.push(l<=r);}";
          break;
        case "GT":
          body = "{var r=st.s.pop();var l=st.s.pop();st.s.push(l>r);}";
          break;
        case "GTE":
          body = "{var r=st.s.pop();var l=st.s.pop();st.s.push(l>=r);}";
          break;
        case "AND":
          body = "{var r=st.s.pop();var l=st.s.pop();st.s.push(l&&r);}";
          break;
        case "OR":
          body = "{var r=st.s.pop();var l=st.s.pop();st.s.push(l||r);}";
          break;
        case "NOT":
          body = "st.s.push(!st.s.pop());";
          break;
        case "NULLISH":
          body = "{var r=st.s.pop();var l=st.s.pop();st.s.push(l!=null?l:r);}";
          break;
        case "BIT_AND":
          body = "{var r=st.s.pop();var l=st.s.pop();st.s.push(l&r);}";
          break;
        case "BIT_OR":
          body = "{var r=st.s.pop();var l=st.s.pop();st.s.push(l|r);}";
          break;
        case "BIT_XOR":
          body = "{var r=st.s.pop();var l=st.s.pop();st.s.push(l^r);}";
          break;
        case "BIT_NOT":
          body = "st.s.push(~st.s.pop());";
          break;
        case "LSHIFT":
          body = "{var r=st.s.pop();var l=st.s.pop();st.s.push(l<<r);}";
          break;
        case "RSHIFT":
          body = "{var r=st.s.pop();var l=st.s.pop();st.s.push(l>>r);}";
          break;
        case "URSHIFT":
          body = "{var r=st.s.pop();var l=st.s.pop();st.s.push(l>>>r);}";
          break;
        case "JMP":
          body = "st.i=" + R + "(st);";
          break;
        case "JMP_IF_FALSE":
          body = "if(!st.s.pop())st.i=" + R + "(st);else st.i+=4;";
          break;
        case "JMP_IF_TRUE":
          body = "if(st.s.pop())st.i=" + R + "(st);else st.i+=4;";
          break;
        case "CALL":
          body = "{var ac=" + R + "(st),a=[];for(var i=0;i<ac;i++)a.unshift(st.s.pop());var f=st.s.pop();if(f&&f._v){var __fd__=f._o||f;var __rp__=" + F + '(__fd__,a,f._s||st.c,undefined,st.t);st.s.push(__fd__.async?__rp__:await __rp__);}else if(typeof f==="function"){st.s.push(f.apply(st.t,a));}else{throw new TypeError("Cannot call "+typeof f);}}';
          break;
        case "CALL_METHOD":
          body = "{var ac=" + R + "(st),mn=" + G + "(" + R + "(st)),a=[];for(var i=0;i<ac;i++)a.unshift(st.s.pop());var o=st.s.pop();if(o===null||o===undefined){st.s.push(undefined);}else{var m=o[mn];if(m&&m._v){var __fd2__=m._o||m;var __rp2__=" + F + '(__fd2__,a,m._s||st.c,undefined,o);st.s.push(__fd2__.async?__rp2__:await __rp2__);}else if(typeof m==="function"){st.s.push(m.apply(o,a));}else{st.s.push(undefined);}}}';
          break;
        case "NEW":
          body = "{var ac=" + R + '(st),a=[];for(var i=0;i<ac;i++)a.unshift(st.s.pop());var ctor=st.s.pop();if(ctor&&ctor._v){var inst=Object.create(ctor.prototype);var r=ctor.apply(inst,a);if(r&&typeof r.then==="function")await r;st.s.push(inst);}else if(typeof ctor==="function"){try{var inst=Reflect.construct(ctor,a);st.s.push(inst);}catch(e){var inst=Object.create(ctor.prototype);var r=ctor.apply(inst,a);st.s.push(r&&typeof r==="object"?r:inst);}}else{st.s.push({});}}';
          break;
        case "RETURN":
          body = "{var rv=st.s.length?st.s.pop():undefined;if(st.y.length>0){var ti=st.y[st.y.length-1];if(ti.finallyAddr>=0){st._retv=rv;st.i=ti.finallyAddr;break;}}while(st.l.length>0){var fr=st.l.pop();st.c=fr.c;st.t=fr.t;}return rv;}";
          break;
        case "TYPEOF":
          body = '{var v=st.s.pop();st.s.push(v&&v._v?"function":typeof v);}';
          break;
        case "INSTANCEOF":
          body = "{var c=st.s.pop(),o=st.s.pop();if(c&&c._v)c=c._o;st.s.push(o instanceof c);}";
          break;
        case "IN":
          body = "{var o=st.s.pop(),p=st.s.pop();st.s.push(p in o);}";
          break;
        case "DELETE":
          body = "{var p=st.s.pop(),o=st.s.pop();st.s.push(o!=null?delete o[p]:true);}";
          break;
        case "GET_PROP":
          body = "{var pn=" + G + "(" + R + "(st)),o=st.s.pop();st.s.push(o!=null?o[pn]:undefined);}";
          break;
        case "SET_PROP":
          body = "{var pn=" + G + "(" + R + "(st)),v=st.s.pop(),o=st.s.pop();if(o!=null)o[pn]=v;st.s.push(v);}";
          break;
        case "GET_INDEX":
          body = "{var idx=st.s.pop(),o=st.s.pop();st.s.push(o!=null?o[idx]:undefined);}";
          break;
        case "SET_INDEX":
          body = "{var v=st.s.pop(),idx=st.s.pop(),o=st.s.pop();if(o!=null)o[idx]=v;st.s.push(v);}";
          break;
        case "NEW_OBJ":
          body = "st.s.push({});";
          break;
        case "NEW_ARR":
          body = "{var len=" + R + "(st),a=[];for(var i=0;i<len;i++)a.unshift(st.s.pop());st.s.push(a);}";
          break;
        case "PUSH_FUNC":
          body = "{var fd=" + G + "(" + R + "(st)),vf=" + W + "(fd,st);st.s.push(vf);}";
          break;
        case "OPTIONAL_CHAIN":
          body = "{var _ocpn=" + G + "(" + R + "(st));if(st.s[st.s.length-1]==null){st.s.pop();st.s.push(undefined);}else{var _oco=st.s.pop();st.s.push(_oco!=null?_oco[_ocpn]:undefined);}}";
          break;
        case "ENTER_SCOPE":
          body = "{st.l.push({i:st.i,c:st.c,t:st.t,s:st.s.slice()});var ns=new Map();ns.__p=st.c;st.c=ns;}";
          break;
        case "EXIT_SCOPE":
          body = "{if(st.l.length>0){var fr=st.l.pop();st.c=fr.c;st.t=fr.t;}}";
          break;
        case "TRY":
          body = "{var inf=" + G + "(" + R + "(st));st.y.push({catchAddr:inf.catchAddr,finallyAddr:inf.finallyAddr});}";
          break;
        case "THROW":
          body = "{var err=st.s.pop();if(st.y.length===0)throw err;var ti=st.y[st.y.length-1];if(ti.catchAddr>=0){st.y.pop();st.s.push(err);st.i=ti.catchAddr;}else if(ti.finallyAddr>=0){st._throwing=true;st.s.push(err);st.i=ti.finallyAddr;}else{st.y.pop();throw err;}}";
          break;
        case "CATCH":
          body = "{}";
          break;
        case "FINALLY":
          body = "{}";
          break;
        case "END_TRY":
          body = "{if(st.y.length>0){var _tr=st.y.pop();if(st._throwing){st._throwing=false;var _err=st.s.pop();throw _err;}}if(st._retv!==undefined){var _rv=st._retv;st._retv=undefined;while(st.l.length>0){var fr=st.l.pop();st.c=fr.c;st.t=fr.t;}return _rv;}}";
          break;
        case "INC_PRE":
          body = "{var n=" + G + "(" + R + "(st)),cur=" + L + "(st,n)||0;" + SU + "(st,n,cur+1);st.s.push(cur+1);}";
          break;
        case "INC_POST":
          body = "{var n=" + G + "(" + R + "(st)),cur=" + L + "(st,n)||0;st.s.push(cur);" + SU + "(st,n,cur+1);}";
          break;
        case "DEC_PRE":
          body = "{var n=" + G + "(" + R + "(st)),cur=" + L + "(st,n)||0;" + SU + "(st,n,cur-1);st.s.push(cur-1);}";
          break;
        case "DEC_POST":
          body = "{var n=" + G + "(" + R + "(st)),cur=" + L + "(st,n)||0;st.s.push(cur);" + SU + "(st,n,cur-1);}";
          break;
        case "NEG":
          body = "st.s.push(-st.s.pop());";
          break;
        case "POS":
          body = "st.s.push(+st.s.pop());";
          break;
        case "SET_PROP_OBJ":
          body = "{var pn=" + G + "(" + R + "(st)),v=st.s.pop(),o=st.s[st.s.length-1];if(o!=null)o[pn]=v;}";
          break;
        case "SET_PROP_OBJ_COMPUTED":
          body = "{var k=st.s.pop(),v=st.s.pop(),o=st.s[st.s.length-1];if(o!=null)o[k]=v;}";
          break;
        case "TERNARY":
          body = "{var alt=st.s.pop(),cons=st.s.pop(),tst=st.s.pop();st.s.push(tst?cons:alt);}";
          break;
        case "THIS":
          body = "st.s.push(st.t);";
          break;
        case "SUPER":
          body = "st.s.push(st.t);";
          break;
        case "REST_ARGS":
          body = '{var a=st.s.pop();if(Array.isArray(a)){for(var i=0;i<a.length;i++)st.s.push(a[i]);}else if(a&&typeof a[Symbol.iterator]==="function"){var it=a[Symbol.iterator]();var nx;while(!(nx=it.next()).done)st.s.push(nx.value);}}';
          break;
        case "ARRAY_PUSH":
          body = "{var _av=st.s.pop();var _aa=st.s[st.s.length-1];if(Array.isArray(_aa))_aa.push(_av);}";
          break;
        case "ARRAY_SPREAD":
          body = '{var _sp=st.s.pop();var _arr=st.s[st.s.length-1];if(_sp&&typeof _sp[Symbol.iterator]==="function"){var _it=_sp[Symbol.iterator]();var _nx;while(!(_nx=_it.next()).done)_arr.push(_nx.value);}else if(Array.isArray(_sp)){for(var _si=0;_si<_sp.length;_si++)_arr.push(_sp[_si]);}}';
          break;
        case "OBJ_SPREAD":
          body = '{var src=st.s.pop(),dst=st.s[st.s.length-1];if(src&&typeof src==="object"){for(var k in src){if(src.hasOwnProperty(k))dst[k]=src[k];}}}';
          break;
        case "FOR_OF_ITER":
          body = "{var itb=st.s.pop(),it=itb&&itb[Symbol.iterator]?itb[Symbol.iterator]():null;st.s.push(it||{next:function(){return{done:true};}});}";
          break;
        case "FOR_IN_ITER":
          body = "{var o=st.s.pop(),ks=[];if(o!=null){for(var k in o)ks.push(k);}st.s.push(ks);}";
          break;
        case "AWAIT":
          body = '{var p=st.s.pop();if(p&&typeof p.then==="function"){st.s.push(await p);}else{st.s.push(p);}}';
          break;
        case "YIELD":
          body = "st.s.push(st.s.pop());";
          break;
        case "CLASS_BODY":
          body = '{var sc=st.s.pop(),cls=st.s[st.s.length-1];if(sc&&cls&&typeof sc==="function"){var pr=Object.create(sc.prototype);pr.constructor=cls;cls.prototype=pr;cls.__s=sc;}}';
          break;
        case "SUPER_CALL":
          body = "{var ac=" + R + "(st),a=[];for(var i=0;i<ac;i++)a.unshift(st.s.pop());var sC=st.s.pop();if(sC&&sC._v){var __sc_fd__=sC._o||sC;var __sc_r__=" + F + '(__sc_fd__,a,sC._s||st.c,undefined,st.t);if(__sc_fd__.async)await __sc_r__;st.s.push(st.t);}else if(typeof sC==="function"){var r=sC.apply(st.t,a);if(r&&typeof r.then==="function"){st.s.push(await r);}else{st.s.push(r);}}else{st.s.push(st.t);}}';
          break;
        case "SUPER_METHOD":
          body = "{var ac=" + R + "(st),mn=" + G + "(" + R + '(st)),a=[];for(var i=0;i<ac;i++)a.unshift(st.s.pop());var sl=st.s.pop();var sp=sl&&sl.constructor&&sl.constructor.__s&&sl.constructor.__s.prototype;var m=sp?sp[mn]:undefined;if(typeof m==="function"){var r=m.apply(sl,a);if(r&&typeof r.then==="function"){st.s.push(await r);}else{st.s.push(r);}}else{st.s.push(undefined);}}';
          break;
        case "IMPORT":
          body = "{}";
          break;
        case "EXPORT":
          body = "{}";
          break;
        case "DEAD_CODE":
          body = R + "(st);";
          break;
        case "ANTI_DEBUG":
          body = '{var start=Date.now(),j=0;for(var i=0;i<500000;i++)j+=i&1;if(Date.now()-start>50){__B__=new Uint8Array(0);__DC__=[];throw new Error("Anti-debug");}}';
          break;
        case "DEBUG_BREAK":
          body = "if(__D__)debugger;";
          break;
        case "SEGMENT_SWITCH":
          body = "{var segId=__B__[st.i++]%__NUM_SEG__;if(segId!==__OT_CUR__&&segId<__NUM_SEG__){__OT_CUR__=segId;__OT__=__OT_ALL__[segId];}}";
          break;
        case "FAKE_ADD":
          body = "{var fv=" + R + "(st);st.fakeStack.push(fv);}";
          break;
        case "FAKE_CALL":
          body = "{" + R + "(st);st.fakeStack.push(Math.random());}";
          break;
        case "DESTRUCTURE_ARR":
          body = "{var _dc=" + R + "(st);var _arr=st.s.pop();for(var _di=_dc-1;_di>=0;_di--){var _dn=" + SK + "(st);var _dv=_arr!=null?_arr[_di]:undefined;st.c.set(_dn,_dv);}}";
          break;
        case "DESTRUCTURE_OBJ":
          body = "{var _dc=" + R + "(st);var _obj=st.s.pop();for(var _di=_dc-1;_di>=0;_di--){var _kn=" + SK + "(st);var _dn=" + SK + "(st);var _dv=_obj!=null?_obj[_kn]:undefined;st.c.set(_dn,_dv);}}";
          break;
        default:
          body = "{}";
          break;
      }
      lines.push("        case " + gi + ":" + body + " break;");
    }
    var asyncBody = lines.join("\n");
    var syncBody = asyncBody.replace(/await /g, "");
    return { async: asyncBody, sync: syncBody };
  };
  function BuildVM(input) {
    var template = '(async function() {\n  var __D__ = {{DEBUG_FLAG}};\n  var __E__ = {{BYTECODE}};\n  var __S__ = {{BC_SEED}};\n  var __C__ = {{CONSTANTS}};\n  var __X__ = {{EXTERNAL_APIS}};\n\n  {{DEAD_CODE}}\n\n  var {{VM_VAR_G}} = typeof global !== "undefined" ? global : (typeof window !== "undefined" ? window : this);\n  var {{VM_FN_ST}} = {{VM_VAR_G}}.setTimeout;\n\n  var __BNC__ = {{BN_CHUNKS}};\n  var __BNK__ = {{BN_KEY}};\n  var __BN__ = [];\n  var __BNI__ = 0;\n  for (var __BNJ__ = 0; __BNJ__ < __BNC__.length; ) {\n    var __BNL__ = __BNC__[__BNJ__++];\n    var __BNS__ = "";\n    for (var __BNK2__ = 0; __BNK2__ < __BNL__; __BNK2__++) __BNS__ += String.fromCharCode(__BNC__[__BNJ__++] ^ ((__BNK__ + __BNI__ * 7 + __BNK2__ * 13) & 255));\n    __BN__.push(__BNS__);\n    __BNI__++;\n  }\n\n  var {{VM_VAR_GS}} = new Map();\n  var {{VM_VAR_BI}} = new Map();\n  for (var i = 0; i < __BN__.length; i++) {\n    var n = __BN__[i];\n    if (typeof {{VM_VAR_G}}[n] !== "undefined") { {{VM_VAR_BI}}.set(n, {{VM_VAR_G}}[n]); {{VM_VAR_GS}}.set(n, {{VM_VAR_G}}[n]); }\n  }\n  var __EK__ = Object.keys(__X__);\n  for (var i = 0; i < __EK__.length; i++) {\n    var k = __EK__[i], v = __X__[k];\n    if (typeof v !== "undefined") { {{VM_VAR_BI}}.set(k, v); {{VM_VAR_GS}}.set(k, v); }\n  }\n\n  var {{VM_FN_D}} = function(s, l) {\n    var k = [];\n    for (var i = 0; i < l; i++) {\n      var h = s[i % s.length] ^ ((i * 157 + 63) & 255);\n      for (var j = 0; j < s.length; j++) h = ((h << 3) - h + s[j]) | 0;\n      k.push(h & 255);\n    }\n    return k;\n  };\n\n  var __K__ = {{VM_FN_D}}(__S__, Math.max(__E__.length, 40));\n  var __B__ = new Uint8Array(__E__.length);\n  for (var i = 0; i < __E__.length; i++) __B__[i] = __E__[i] ^ __K__[i % __K__.length];\n\n\n  var __OP__ = {{OP_XOR_KEY}};\n  for (var i = 0; i < __B__.length; i++) __B__[i] ^= __OP__;\n\n  var __DC__ = [];\n  for (var i = 0; i < __C__.length; i++) {\n    var c = __C__[i];\n    if (c && typeof c.l === "number" && c.c) {\n      __DC__[i] = { _e: true, _l: c.l, _c: c.c, _i: i };\n    } else if (c && typeof c.a === "number") {\n      var fd = { addr: c.a, params: c.p || [], async: c.as || false, isArrow: c.ia || false };\n      if (c.nm) fd.name = c.nm;\n      __DC__[i] = fd;\n    } else {\n      __DC__[i] = c;\n    }\n  }\n\n  function {{VM_FN_GC}}(idx) {\n    var v = __DC__[idx];\n    if (v && v._e) {\n      var s = "";\n      var __SK__ = {{STR_XOR_OFFSET}};\n      for (var j = 0; j < v._l; j++) s += String.fromCharCode(v._c[j] ^ ((__SK__ + v._i * 17 + j * 31 + 73) & 255));\n      return s;\n    }\n    if (v && typeof v === "object") {\n      if (v.__regex) return new RegExp(v.pattern, v.flags);\n      if (v.__bigint) return BigInt(v.value);\n      if (v.__undef) return undefined;\n      if (v.__null) return null;\n      if (v.__nan) return NaN;\n      if (v.__inf !== undefined) return v.__inf ? Infinity : -Infinity;\n      if (v.__taggedTemplate) { var arr = v.strings.slice(); arr.raw = v.raw; return arr; }\n    }\n    return v;\n  }\n\n  var __OT_ALL__ = {{OPCODE_TABLES}};\n  var __OT_CUR__ = 0;\n  var __OT__ = __OT_ALL__[0];\n  var __NUM_SEG__ = {{NUM_SEGMENTS}};\n  var __SEG_KEYS__ = {{SEGMENT_KEYS}};\n\n  var __V2G__ = {{VARIANT_TO_GROUP}};\n\n  var {{VM_VAR_VM}} = [];\n\n  function {{VM_FN_V}}(pScope) {\n    this.s = []; this.i = 0; this.c = new Map();\n    if (pScope) this.c.__p = pScope;\n    this.l = []; this.t = {{VM_VAR_GS}}; this.y = []; this._retv = undefined; this._throwing = false;\n    this.fakeStack = []; this._sk = 0;\n  }\n  {{VM_VAR_VM}}.push({{VM_FN_V}});\n\n  var __SK__ = {{STACK_KEY}};\n  function {{VM_FN_SP}}(st, v) {\n    st.s.push(v);\n  }\n  function {{VM_FN_SK}}(st) {\n    var v = st.s.pop();\n    if (typeof v === "number" && !isNaN(v) && isFinite(v)) {\n      st._sk = Math.max(0, (st._sk || 1) - 1);\n      var kb = __SK__[(st._sk || 0) % __SK__.length];\n      if (Number.isInteger(v) && v >= -2147483648 && v <= 2147483647) {\n        return v ^ ((kb << 24) | (kb << 16) | (kb << 8) | kb);\n      } else {\n        return v - kb * 0.000001;\n      }\n    } else if (typeof v === "string") {\n      st._sk = Math.max(0, (st._sk || 1) - 1);\n      var kb = __SK__[(st._sk || 0) % __SK__.length];\n      var ds = ""; for (var i = 0; i < v.length; i++) ds += String.fromCharCode(v.charCodeAt(i) ^ kb);\n      return ds;\n    }\n    return v;\n  }\n  {{VM_VAR_VM}}.push({{VM_FN_SP}}); {{VM_VAR_VM}}.push({{VM_FN_SK}});\n  function {{VM_FN_L}}(st, name) {\n    var s = st.c;\n    while (s) { if (s.has(name)) return s.get(name); s = s.__p; }\n    if ({{VM_VAR_GS}}.has(name)) return {{VM_VAR_GS}}.get(name);\n    if ({{VM_VAR_BI}}.has(name)) return {{VM_VAR_BI}}.get(name);\n    if (typeof {{VM_VAR_G}}[name] !== "undefined") return {{VM_VAR_G}}[name];\n    return undefined;\n  }\n  {{VM_VAR_VM}}.push({{VM_FN_L}});\n\n  function {{VM_FN_S}}(st, name, value) {\n    var s = st.c;\n    while (s) { if (s.has(name)) { s.set(name, value); return; } s = s.__p; }\n    st.c.set(name, value);\n  }\n  {{VM_VAR_VM}}.push({{VM_FN_S}});\n\n  function {{VM_FN_SU}}(st, name, value) {\n    var s = st.c;\n    while (s) { if (s.has(name)) { s.set(name, value); return; } s = s.__p; }\n    st.c.set(name, value);\n  }\n  {{VM_VAR_VM}}.push({{VM_FN_SU}});\n\n  function {{VM_FN_R}}(st) {\n    var v = (__B__[st.i] << 24) | (__B__[st.i + 1] << 16) | (__B__[st.i + 2] << 8) | __B__[st.i + 3];\n    st.i += 4; return v;\n  }\n  {{VM_VAR_VM}}.push({{VM_FN_R}});\n\n  async function {{VM_FN_XE}}(st) {\n    var M = 50000000, steps = 0;\n    while (st.i < __B__.length) {\n      try {\n      if (++steps > M) throw new Error("VM:max steps");\n      var opByte = __B__[st.i++] ^ ((st.i - 1) & 0xFF);\n      var gidx = __V2G__[opByte];\n      if (gidx === undefined) { __B__ = new Uint8Array(0); __DC__ = []; throw new Error("Unknown op:" + opByte); }\n\n      switch (gidx) {\n{{SWITCH_BODY}}\n        default:\n          __B__ = new Uint8Array(0); __DC__ = [];\n          throw new Error("Unknown op:" + opByte);\n      }\n      } catch (__vmErr__) {\n        if (st.y.length === 0) throw __vmErr__;\n        var __ti__ = st.y.pop();\n        st.s.push(__vmErr__);\n        if (__ti__.catchAddr >= 0) { st.i = __ti__.catchAddr; continue; }\n        if (__ti__.finallyAddr >= 0) { st.i = __ti__.finallyAddr; continue; }\n        throw __vmErr__;\n      }\n    }\n    return st.s.length ? st.s[st.s.length - 1] : undefined;\n  }\n  function {{VM_FN_XS}}(st) {\n    var M = 10000000, steps = 0;\n    while (st.i < __B__.length) {\n      try {\n      if (++steps > M) throw new Error("VM:max steps");\n      var opByte = __B__[st.i++] ^ ((st.i - 1) & 0xFF);\n      var gidx = __V2G__[opByte];\n      if (gidx === undefined) { __B__ = new Uint8Array(0); __DC__ = []; throw new Error("Unknown op:" + opByte); }\n\n      switch (gidx) {\n{{SWITCH_BODY_SYNC}}\n        default:\n          __B__ = new Uint8Array(0); __DC__ = [];\n          throw new Error("Unknown op:" + opByte);\n      }\n      } catch (__vmErr__) {\n        if (st.y.length === 0) throw __vmErr__;\n        var __ti__ = st.y.pop();\n        st.s.push(__vmErr__);\n        if (__ti__.catchAddr >= 0) { st.i = __ti__.catchAddr; continue; }\n        if (__ti__.finallyAddr >= 0) { st.i = __ti__.finallyAddr; continue; }\n        throw __vmErr__;\n      }\n    }\n    return st.s.length ? st.s[st.s.length - 1] : undefined;\n  }\n\n  {{VM_VAR_VM}}.push({{VM_FN_XE}});\n  {{VM_VAR_VM}}.push({{VM_FN_XS}});\n\n  function {{VM_FN_W}}(fd, ps) {\n    var cs = ps ? ps.c : {{VM_VAR_GS}};\n    var ct = ps ? ps.t : undefined;\n    var vf = function() {\n      var a = Array.prototype.slice.call(arguments);\n      return {{VM_FN_F}}(fd, a, cs, ct, this);\n    };\n    vf._v = true; vf._o = fd;\n    vf.prototype = fd.prototype || {}; vf._s = cs;\n    return vf;\n  }\n  {{VM_VAR_VM}}.push({{VM_FN_W}});\n\n  function {{VM_FN_F}}(fd, a, cs, ct, cl) {\n    var st = new {{VM_FN_V}}(cs || {{VM_VAR_GS}});\n    st._cs = cs || null;\n    var params = fd.params || [];\n    for (var i = 0; i < params.length; i++) {\n      var p = params[i];\n      if (p.charAt(0) === "." && p.charAt(1) === "." && p.charAt(2) === ".") {\n        var rest = []; for (var j = i; j < a.length; j++) rest.push(a[j]);\n        st.c.set(p.slice(3), rest); break;\n      } else { st.c.set(p, i < a.length ? a[i] : undefined); }\n    }\n    st.c.set("arguments", a);\n    if (fd._this !== undefined) { st.t = fd._this; }\n    else if (fd.isArrow) { st.t = ct || {{VM_VAR_GS}}; }\n    else { st.t = cl || {{VM_VAR_GS}}; }\n    st.i = fd.addr;\n    if (fd.async) return {{VM_FN_XE}}(st); return {{VM_FN_XS}}(st);\n  }\n  {{VM_VAR_VM}}.push({{VM_FN_F}});\n\n  var eF = { addr: 0, params: [], _scope: {{VM_VAR_GS}} };\n  var __result__ = await {{VM_FN_F}}(eF, [], {{VM_VAR_GS}}, undefined, {{VM_VAR_GS}});\n  await new Promise(function(r) { {{VM_FN_ST}}(r, {{KEEPALIVE_MS}}); });\n  return __result__;\n})();';
    var opts = {
      mangleIdentifiers: true,
      xorEncryptBytecode: true,
      minifyOutput: true,
      ...input.options || {}
    };
    var names = GenerateNames();
    var seed = new Uint8Array(32);
    if (typeof crypto !== "undefined" && crypto.getRandomValues) {
      crypto.getRandomValues(seed);
    } else {
      for (var _si = 0; _si < 32; _si++) seed[_si] = Math.floor(Math.random() * 256);
    }
    var finalBytecode = input.bytecode.slice();
    if (opts.xorEncryptBytecode) {
      var key = deriveKey(seed, Math.max(input.bytecode.length, 40));
      finalBytecode = xorEncrypt(input.bytecode, key);
    }
    var finalConstants = obfuscateConstants(input.constants);
    var builtinNames = ["Object", "Array", "String", "Number", "Boolean", "Function", "RegExp", "Date", "Error", "Math", "JSON", "Promise", "Map", "Set", "Symbol", "Infinity", "NaN", "undefined", "eval", "isFinite", "isNaN", "parseFloat", "parseInt", "decodeURI", "decodeURIComponent", "encodeURI", "encodeURIComponent", "console", "setTimeout", "clearTimeout", "setInterval", "clearInterval"];
    var bnKey = seed[3] ^ seed[11] ^ seed[19] ^ seed[27];
    var bnChunks = [];
    for (var bi = 0; bi < builtinNames.length; bi++) {
      var bn = builtinNames[bi];
      bnChunks.push(bn.length);
      for (var bj = 0; bj < bn.length; bj++) bnChunks.push(bn.charCodeAt(bj) ^ bnKey + bi * 7 + bj * 13 & 255);
    }
    var numSegments = 1;
    var segmentTables = [[0]];
    var variantToGroupIdx = buildGroupIndexMap();
    var variantToGroupEntries = [];
    for (var vb = 0; vb < 256; vb++) {
      if (variantToGroupIdx[vb] !== void 0) {
        variantToGroupEntries.push(vb + ":" + variantToGroupIdx[vb]);
      }
    }
    var variantToGroupObj = "{" + variantToGroupEntries.join(",") + "}";
    var segmentKeys = [0];
    var switchBodies = generateDispatch(names.GC, names.R, names.L, names.S, names.SU, names.W, names.F, names.XE, names.gS, names.SP, names.SK, Object.keys(OP_GROUPS));
    var opTableJSON = JSON.stringify(segmentTables);
    var stackKey = [];
    for (var ski = 0; ski < 16; ski++) stackKey.push(0);
    var templateVars = {
      "{{DEBUG_FLAG}}": "false",
      "{{BYTECODE}}": JSON.stringify(finalBytecode),
      "{{BC_SEED}}": JSON.stringify(Array.from(seed)),
      "{{CONSTANTS}}": JSON.stringify(finalConstants),
      "{{VM_FN_V}}": names.V,
      "{{VM_FN_L}}": names.L,
      "{{VM_FN_S}}": names.S,
      "{{VM_FN_SU}}": names.SU,
      "{{VM_FN_R}}": names.R,
      "{{VM_FN_XE}}": names.XE,
      "{{VM_FN_XS}}": names.XS,
      "{{VM_FN_W}}": names.W,
      "{{VM_FN_F}}": names.F,
      "{{VM_FN_GC}}": names.GC,
      "{{VM_FN_ST}}": names.ST,
      "{{VM_FN_D}}": names.D,
      "{{VM_FN_SP}}": names.SP,
      "{{VM_FN_SK}}": names.SK,
      "{{VM_VAR_VM}}": names.VM,
      "{{VM_VAR_GS}}": names.gS,
      "{{VM_VAR_BI}}": names.bI,
      "{{VM_VAR_G}}": names.G,
      "{{BN_CHUNKS}}": JSON.stringify(bnChunks),
      "{{BN_KEY}}": String(bnKey),
      "{{KEEPALIVE_MS}}": String(30 + Math.floor(Math.random() * 51)),
      "{{STR_XOR_OFFSET}}": "0",
      "{{BC_INTEGRITY}}": "0",
      "{{DEAD_CODE}}": "",
      "{{SWITCH_BODY}}": switchBodies.async,
      "{{SWITCH_BODY_SYNC}}": switchBodies.sync,
      "{{OPCODE_TABLES}}": opTableJSON,
      "{{VARIANT_TO_GROUP}}": variantToGroupObj,
      "{{NUM_SEGMENTS}}": String(numSegments),
      "{{SEGMENT_KEYS}}": JSON.stringify(segmentKeys),
      "{{OP_XOR_KEY}}": "0",
      "{{STACK_KEY}}": JSON.stringify(stackKey)
    };
    var apiList = Array.from(input.externalAPIs);
    var apiObjStr = "{}";
    if (apiList.length > 0) {
      apiObjStr = "{" + apiList.map(function(a) {
        return JSON.stringify(a) + ":typeof " + a + '!=="undefined"?' + a + ":undefined";
      }).join(",") + "}";
    }
    templateVars["{{EXTERNAL_APIS}}"] = apiObjStr;
    for (var k in templateVars) {
      template = template.split(k).join(templateVars[k]);
    }
    return template;
  }

  // src/config.ts
  function defaultOptions2() {
    return {
      mangleIdentifiers: true,
      xorEncryptBytecode: true,
      minifyOutput: true
    };
  }

  // src/core.ts
  function Minify(code) {
    code = code.replace(/\/\/.*$/gm, "");
    return code.replace(/\s+/g, " ").replace(/ ([{}();,:])/g, "$1").replace(/([{}();,:]) /g, "$1").trim();
  }
  function findFunctionsToExclude(ast) {
    var excludeSet = /* @__PURE__ */ new Set();
    var comments = ast.comments || [];
    var functions = [];
    simple(ast, { FunctionDeclaration: function(node) {
      functions.push(node);
    } });
    comments.sort(function(a, b) {
      return a.start - b.start;
    });
    var lastUsed = -1;
    for (var ci = 0; ci < comments.length; ci++) {
      var comment = comments[ci];
      if (comment.type === "Line" && comment.value.trim() === "@no-vm") {
        for (var fi = 0; fi < functions.length; fi++) {
          if (functions[fi].start > comment.end && functions[fi].start > lastUsed) {
            excludeSet.add(functions[fi]);
            lastUsed = functions[fi].end;
            break;
          }
        }
      }
    }
    return excludeSet;
  }
  function cloneASTWithoutExcluded(ast, excludeSet) {
    if (!ast || typeof ast !== "object") return ast;
    if (Array.isArray(ast)) {
      var newArr = [];
      for (var i = 0; i < ast.length; i++) {
        var cloned = cloneASTWithoutExcluded(ast[i], excludeSet);
        if (cloned !== void 0) newArr.push(cloned);
      }
      return newArr;
    }
    if (excludeSet.has(ast)) return void 0;
    var newObj = {};
    for (var key in ast) {
      if (key === "start" || key === "end" || key === "loc" || key === "range" || key === "comments") continue;
      var val = cloneASTWithoutExcluded(ast[key], excludeSet);
      if (val !== void 0) newObj[key] = val;
    }
    return newObj;
  }
  function ObfuscateSource(source, options) {
    var opts = { ...defaultOptions2(), ...options };
    var warnings = [];
    var comments = [];
    var ast = parse3(source, {
      ecmaVersion: 2022,
      sourceType: "module",
      locations: true,
      onComment: comments
    });
    ast.comments = comments;
    var excludeSet = findFunctionsToExclude(ast);
    var plainFunctionsCode = [];
    var functionNames = [];
    excludeSet.forEach(function(fn) {
      var name = fn.id ? fn.id.name : null;
      var code = generate(fn);
      if (name) {
        plainFunctionsCode.push("globalThis." + name + " = " + code);
        functionNames.push(name);
      } else {
        plainFunctionsCode.push(code);
      }
    });
    var filteredAst = cloneASTWithoutExcluded(ast, excludeSet);
    var filteredSource = generate(filteredAst);
    var compiler = new BytecodeCompiler();
    var preserveSet = new Set(functionNames);
    var compileResult = compiler.Compile(filteredSource, preserveSet);
    var bytecode = compileResult.bytecode;
    var constants = compileResult.constants;
    var externalAPIs = compileResult.externalAPIs;
    var compileWarnings = compileResult.warnings;
    for (var ni = 0; ni < functionNames.length; ni++) externalAPIs.add(functionNames[ni]);
    for (var wi = 0; wi < compileWarnings.length; wi++) warnings.push(compileWarnings[wi]);
    var vmCode = BuildVM({
      bytecode,
      constants,
      externalAPIs,
      debugMode: false,
      options: opts
    });
    var combined = "";
    if (plainFunctionsCode.length > 0) {
      combined = plainFunctionsCode.join(";\n") + ";\n";
    }
    combined += vmCode;
    var outputCode = combined;
    if (opts.minifyOutput) {
      outputCode = Minify(combined);
    }
    return {
      code: outputCode,
      stats: {
        sourceSize: source.length,
        bytecodeSize: bytecode.length,
        constantCount: constants.length,
        outputSize: outputCode.length,
        excludedFunctions: functionNames,
        warnings
      }
    };
  }
  return __toCommonJS(browser_exports);
})();
