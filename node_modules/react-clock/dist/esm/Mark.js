import React from 'react';
import PropTypes from 'prop-types';
import { isMarkLength, isMarkWidth } from './shared/propTypes';
export default function Mark(_ref) {
  var _ref$angle = _ref.angle,
      angle = _ref$angle === void 0 ? 0 : _ref$angle,
      _ref$length = _ref.length,
      length = _ref$length === void 0 ? 10 : _ref$length,
      name = _ref.name,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 1 : _ref$width,
      number = _ref.number;
  return /*#__PURE__*/React.createElement("div", {
    className: "react-clock__mark react-clock__".concat(name, "-mark"),
    style: {
      transform: "rotate(".concat(angle, "deg)")
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "react-clock__mark__body react-clock__".concat(name, "-mark__body"),
    style: {
      width: "".concat(width, "px"),
      top: 0,
      bottom: "".concat(100 - length / 2, "%")
    }
  }), number && /*#__PURE__*/React.createElement("div", {
    className: "react-clock__mark__number",
    style: {
      transform: "rotate(-".concat(angle, "deg)"),
      top: "".concat(length / 2, "%")
    }
  }, number));
}
Mark.propTypes = {
  angle: PropTypes.number,
  length: isMarkLength,
  name: PropTypes.string.isRequired,
  number: PropTypes.number,
  width: isMarkWidth
};