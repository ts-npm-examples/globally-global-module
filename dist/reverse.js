"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function reverse(str) {
    if (typeof str === 'number')
        str = '' + str;
    return [...str].reverse().join('');
}
exports.reverse = reverse;
//# sourceMappingURL=reverse.js.map