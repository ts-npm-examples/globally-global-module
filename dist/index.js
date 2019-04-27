"use strict";
/// <reference path="types.ts" />
// the above line makes sure that global types get loaded
// even when the project is used as a module
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const left_pad_1 = __importDefault(require("left-pad"));
const reverse_1 = require("./reverse");
function padRight(str, len, ch) {
    return reverse_1.reverse(left_pad_1.default(reverse_1.reverse(str), len, ch));
}
exports.padRight = padRight;
function merge(...args) {
    return args.reduce((a, b) => (Object.assign({}, a, b)));
}
exports.merge = merge;
//# sourceMappingURL=index.js.map