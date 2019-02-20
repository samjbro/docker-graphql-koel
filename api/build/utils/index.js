"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _generateToken = require("./generateToken");

Object.keys(_generateToken).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _generateToken[key];
    }
  });
});

var _getUserId = require("./getUserId");

Object.keys(_getUserId).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function get() {
      return _getUserId[key];
    }
  });
});