"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = Clock;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _mergeClassNames = _interopRequireDefault(require("merge-class-names"));

var _dateUtils = require("@wojtekmaj/date-utils");

var _Hand = _interopRequireDefault(require("./Hand"));

var _Mark = _interopRequireDefault(require("./Mark"));

var _propTypes2 = require("./shared/propTypes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function Clock(_ref) {
  var className = _ref.className,
      _ref$hourHandLength = _ref.hourHandLength,
      hourHandLength = _ref$hourHandLength === void 0 ? 50 : _ref$hourHandLength,
      hourHandOppositeLength = _ref.hourHandOppositeLength,
      _ref$hourHandWidth = _ref.hourHandWidth,
      hourHandWidth = _ref$hourHandWidth === void 0 ? 4 : _ref$hourHandWidth,
      _ref$hourMarksLength = _ref.hourMarksLength,
      hourMarksLength = _ref$hourMarksLength === void 0 ? 10 : _ref$hourMarksLength,
      _ref$hourMarksWidth = _ref.hourMarksWidth,
      hourMarksWidth = _ref$hourMarksWidth === void 0 ? 3 : _ref$hourMarksWidth,
      _ref$minuteHandLength = _ref.minuteHandLength,
      minuteHandLength = _ref$minuteHandLength === void 0 ? 70 : _ref$minuteHandLength,
      minuteHandOppositeLength = _ref.minuteHandOppositeLength,
      _ref$minuteHandWidth = _ref.minuteHandWidth,
      minuteHandWidth = _ref$minuteHandWidth === void 0 ? 2 : _ref$minuteHandWidth,
      _ref$minuteMarksLengt = _ref.minuteMarksLength,
      minuteMarksLength = _ref$minuteMarksLengt === void 0 ? 6 : _ref$minuteMarksLengt,
      _ref$minuteMarksWidth = _ref.minuteMarksWidth,
      minuteMarksWidth = _ref$minuteMarksWidth === void 0 ? 1 : _ref$minuteMarksWidth,
      _ref$renderHourMarks = _ref.renderHourMarks,
      renderHourMarks = _ref$renderHourMarks === void 0 ? true : _ref$renderHourMarks,
      _ref$renderMinuteHand = _ref.renderMinuteHand,
      renderMinuteHand = _ref$renderMinuteHand === void 0 ? true : _ref$renderMinuteHand,
      _ref$renderMinuteMark = _ref.renderMinuteMarks,
      renderMinuteMarks = _ref$renderMinuteMark === void 0 ? true : _ref$renderMinuteMark,
      renderNumbers = _ref.renderNumbers,
      _ref$renderSecondHand = _ref.renderSecondHand,
      renderSecondHand = _ref$renderSecondHand === void 0 ? true : _ref$renderSecondHand,
      _ref$secondHandLength = _ref.secondHandLength,
      secondHandLength = _ref$secondHandLength === void 0 ? 90 : _ref$secondHandLength,
      secondHandOppositeLength = _ref.secondHandOppositeLength,
      _ref$secondHandWidth = _ref.secondHandWidth,
      secondHandWidth = _ref$secondHandWidth === void 0 ? 1 : _ref$secondHandWidth,
      _ref$size = _ref.size,
      size = _ref$size === void 0 ? 150 : _ref$size,
      value = _ref.value;

  function renderMinuteMarksFn() {
    if (!renderMinuteMarks) {
      return null;
    }

    var minuteMarks = [];

    for (var i = 1; i <= 60; i += 1) {
      var isHourMark = renderHourMarks && !(i % 5);

      if (!isHourMark) {
        minuteMarks.push( /*#__PURE__*/_react["default"].createElement(_Mark["default"], {
          key: "minute_".concat(i),
          angle: i * 6,
          length: minuteMarksLength,
          name: "minute",
          width: minuteMarksWidth
        }));
      }
    }

    return minuteMarks;
  }

  function renderHourMarksFn() {
    if (!renderHourMarks) {
      return null;
    }

    var hourMarks = [];

    for (var i = 1; i <= 12; i += 1) {
      hourMarks.push( /*#__PURE__*/_react["default"].createElement(_Mark["default"], {
        key: "hour_".concat(i),
        angle: i * 30,
        length: hourMarksLength,
        name: "hour",
        number: renderNumbers ? i : null,
        width: hourMarksWidth
      }));
    }

    return hourMarks;
  }

  function renderFace() {
    return /*#__PURE__*/_react["default"].createElement("div", {
      className: "react-clock__face"
    }, renderMinuteMarksFn(), renderHourMarksFn());
  }

  function renderHourHandFn() {
    var angle = value ? (0, _dateUtils.getHours)(value) * 30 + (0, _dateUtils.getMinutes)(value) / 2 + (0, _dateUtils.getSeconds)(value) / 600 : 0;
    return /*#__PURE__*/_react["default"].createElement(_Hand["default"], {
      angle: angle,
      length: hourHandLength,
      name: "hour",
      oppositeLength: hourHandOppositeLength,
      width: hourHandWidth
    });
  }

  function renderMinuteHandFn() {
    if (!renderMinuteHand) {
      return null;
    }

    var angle = value ? (0, _dateUtils.getHours)(value) * 360 + (0, _dateUtils.getMinutes)(value) * 6 + (0, _dateUtils.getSeconds)(value) / 10 : 0;
    return /*#__PURE__*/_react["default"].createElement(_Hand["default"], {
      angle: angle,
      length: minuteHandLength,
      name: "minute",
      oppositeLength: minuteHandOppositeLength,
      width: minuteHandWidth
    });
  }

  function renderSecondHandFn() {
    if (!renderSecondHand) {
      return null;
    }

    var angle = value ? (0, _dateUtils.getMinutes)(value) * 360 + (0, _dateUtils.getSeconds)(value) * 6 : 0;
    return /*#__PURE__*/_react["default"].createElement(_Hand["default"], {
      angle: angle,
      length: secondHandLength,
      name: "second",
      oppositeLength: secondHandOppositeLength,
      width: secondHandWidth
    });
  }

  return /*#__PURE__*/_react["default"].createElement("time", {
    className: (0, _mergeClassNames["default"])('react-clock', className),
    dateTime: value instanceof Date ? value.toISOString() : value,
    style: {
      width: "".concat(size, "px"),
      height: "".concat(size, "px")
    }
  }, renderFace(), renderHourHandFn(), renderMinuteHandFn(), renderSecondHandFn());
}

Clock.propTypes = {
  className: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].arrayOf(_propTypes["default"].string)]),
  hourHandLength: _propTypes2.isHandLength,
  hourHandOppositeLength: _propTypes2.isOppositeHandLength,
  hourHandWidth: _propTypes2.isHandWidth,
  hourMarksLength: _propTypes2.isMarkLength,
  hourMarksWidth: _propTypes2.isMarkWidth,
  minuteHandLength: _propTypes2.isHandLength,
  minuteHandOppositeLength: _propTypes2.isOppositeHandLength,
  minuteHandWidth: _propTypes2.isHandWidth,
  minuteMarksLength: _propTypes2.isMarkLength,
  minuteMarksWidth: _propTypes2.isMarkWidth,
  renderHourMarks: _propTypes["default"].bool,
  renderMinuteHand: _propTypes["default"].bool,
  renderMinuteMarks: _propTypes["default"].bool,
  renderNumbers: _propTypes["default"].bool,
  renderSecondHand: _propTypes["default"].bool,
  secondHandLength: _propTypes2.isHandLength,
  secondHandOppositeLength: _propTypes2.isOppositeHandLength,
  secondHandWidth: _propTypes2.isHandWidth,
  size: _propTypes["default"].number,
  value: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].instanceOf(Date)])
};