"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Hand;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _propTypes2 = require("./shared/propTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Hand(_ref) {
  var _ref$angle = _ref.angle,
      angle = _ref$angle === void 0 ? 0 : _ref$angle,
      name = _ref.name,
      _ref$length = _ref.length,
      length = _ref$length === void 0 ? 100 : _ref$length,
      _ref$oppositeLength = _ref.oppositeLength,
      oppositeLength = _ref$oppositeLength === void 0 ? 10 : _ref$oppositeLength,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 1 : _ref$width;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "react-clock__hand react-clock__".concat(name, "-hand"),
    style: {
      transform: "rotate(".concat(angle, "deg)")
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "react-clock__hand__body react-clock__".concat(name, "-hand__body"),
    style: {
      width: "".concat(width, "px"),
      top: "".concat(50 - length / 2, "%"),
      bottom: "".concat(50 - oppositeLength / 2, "%")
    }
  }));
}

Hand.propTypes = {
  angle: _propTypes["default"].number,
  length: _propTypes2.isHandLength,
  name: _propTypes["default"].string.isRequired,
  oppositeLength: _propTypes2.isHandLength,
  width: _propTypes["default"].number
};