import React from 'react';
import PropTypes from 'prop-types';
import { isHandLength } from './shared/propTypes';
export default function Hand(_ref) {
  var _ref$angle = _ref.angle,
      angle = _ref$angle === void 0 ? 0 : _ref$angle,
      name = _ref.name,
      _ref$length = _ref.length,
      length = _ref$length === void 0 ? 100 : _ref$length,
      _ref$oppositeLength = _ref.oppositeLength,
      oppositeLength = _ref$oppositeLength === void 0 ? 10 : _ref$oppositeLength,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 1 : _ref$width;
  return /*#__PURE__*/React.createElement("div", {
    className: "react-clock__hand react-clock__".concat(name, "-hand"),
    style: {
      transform: "rotate(".concat(angle, "deg)")
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "react-clock__hand__body react-clock__".concat(name, "-hand__body"),
    style: {
      width: "".concat(width, "px"),
      top: "".concat(50 - length / 2, "%"),
      bottom: "".concat(50 - oppositeLength / 2, "%")
    }
  }));
}
Hand.propTypes = {
  angle: PropTypes.number,
  length: isHandLength,
  name: PropTypes.string.isRequired,
  oppositeLength: isHandLength,
  width: PropTypes.number
};