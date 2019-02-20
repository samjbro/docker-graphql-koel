"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getUserId = void 0;

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getUserId = function getUserId(request) {
  var requireAuth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
  // const header = request.req ?
  // request.req.headers.authorization :
  // request.connection.context.Authorization
  var header = request.req.headers.authorization;

  if (header) {
    var token = header.replace('Bearer ', '');

    var decoded = _jsonwebtoken.default.verify(token, process.env.JWT_SECRET);

    return decoded.userId;
  }

  if (requireAuth) {
    throw new Error('Authentication required.');
  }

  return null;
};

exports.getUserId = getUserId;