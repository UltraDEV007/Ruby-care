"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Mark;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _propTypes2 = require("./shared/propTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Mark(_ref) {
  var _ref$angle = _ref.angle,
      angle = _ref$angle === void 0 ? 0 : _ref$angle,
      _ref$length = _ref.length,
      length = _ref$length === void 0 ? 10 : _ref$length,
      name = _ref.name,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 1 : _ref$width,
      number = _ref.number;
  return /*#__PURE__*/_react["default"].createElement("div", {
    className: "react-clock__mark react-clock__".concat(name, "-mark"),
    style: {
      transform: "rotate(".concat(angle, "deg)")
    }
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "react-clock__mark__body react-clock__".concat(name, "-mark__body"),
    style: {
      width: "".concat(width, "px"),
      top: 0,
      bottom: "".concat(100 - length / 2, "%")
    }
  }), number && /*#__PURE__*/_react["default"].createElement("div", {
    className: "react-clock__mark__number",
    style: {
      transform: "rotate(-".concat(angle, "deg)"),
      top: "".concat(length / 2, "%")
    }
  }, number));
}

Mark.propTypes = {
  angle: _propTypes["default"].number,
  length: _propTypes2.isMarkLength,
  name: _propTypes["default"].string.isRequired,
  number: _propTypes["default"].number,
  width: _propTypes2.isMarkWidth
};