"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _bcryptjs = _interopRequireDefault(require("bcryptjs"));

var _utils = require("../utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var Query = {
  me: function me(parent, args, _ref, info) {
    var prisma = _ref.prisma,
        request = _ref.request;
    var userId = (0, _utils.getUserId)(request);
    return prisma.query.user({
      where: {
        id: userId
      }
    });
  },
  users: function users(parent, args, _ref2, info) {
    var prisma = _ref2.prisma,
        request = _ref2.request;
    var userId = (0, _utils.getUserId)(request);
    return prisma.query.users();
  }
};
var Mutation = {
  login: function () {
    var _login = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee(parent, _ref3, _ref4, info) {
      var data, prisma, user, isMatch;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              data = _ref3.data;
              prisma = _ref4.prisma;
              _context.next = 4;
              return prisma.query.user({
                where: {
                  email: data.email
                }
              });

            case 4:
              user = _context.sent;

              if (user) {
                _context.next = 7;
                break;
              }

              throw new Error('Unable to login.');

            case 7:
              _context.next = 9;
              return _bcryptjs.default.compare(data.password, user.password);

            case 9:
              isMatch = _context.sent;

              if (isMatch) {
                _context.next = 12;
                break;
              }

              throw new Error('Unable to login.');

            case 12:
              return _context.abrupt("return", {
                user: user,
                token: (0, _utils.generateToken)(user.id)
              });

            case 13:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function login(_x, _x2, _x3, _x4) {
      return _login.apply(this, arguments);
    }

    return login;
  }()
};
var User = {};
var resolvers = {
  Query: Query,
  Mutation: Mutation,
  User: User
};
exports.default = resolvers;