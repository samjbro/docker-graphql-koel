"use strict";

require("@babel/polyfill");

var _server = _interopRequireDefault(require("./server.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PORT = 4000;

_server.default.listen(PORT, function () {
  console.log("API listening on port ".concat(4000));
});