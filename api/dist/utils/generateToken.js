"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.generateToken = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _process$env = process.env,
    JWT_SECRET = _process$env.JWT_SECRET,
    JWT_LIFESPAN = _process$env.JWT_LIFESPAN;

var generateToken = function generateToken(userId) {
  return _jsonwebtoken.default.sign({
    userId: userId
  }, JWT_SECRET, {
    expiresIn: JWT_LIFESPAN
  });
};

exports.generateToken = generateToken;