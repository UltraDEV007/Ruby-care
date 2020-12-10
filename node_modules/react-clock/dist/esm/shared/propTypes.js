function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

import { isDefined } from './utils';

var isNumberBetween = function isNumberBetween(min, max) {
  return function (props, propName, componentName) {
    var value = props[propName];

    if (isDefined(value)) {
      if (typeof value !== 'number') {
        return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(value), "` supplied to `").concat(componentName, "`, expected `number`."));
      }

      if (value < min || value > max) {
        return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(value), "` supplied to `").concat(componentName, "`, length must be between ").concat(min, " and ").concat(max, "."));
      }
    } // Everything is fine


    return null;
  };
};

export var isHandLength = isNumberBetween(0, 100);
export var isOppositeHandLength = isNumberBetween(-100, 100);
export var isHandWidth = function isHandWidth(props, propName, componentName) {
  var width = props[propName];

  if (isDefined(width)) {
    if (typeof width !== 'number') {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(width), "` supplied to `").concat(componentName, "`, expected `number`."));
    }

    if (width < 0) {
      return new Error("Invalid prop `".concat(propName, "` of type `").concat(_typeof(width), "` supplied to `").concat(componentName, "`, width must be greater or equal to 0."));
    }
  } // Everything is fine


  return null;
};
export var isMarkLength = isHandLength;
export var isMarkWidth = isHandWidth;