"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.isDefined = void 0;

/* eslint-disable import/prefer-default-export */

/**
 * Checks whether a variable is defined.
 *
 * @param {*} variable Variable to check
 */
var isDefined = function isDefined(variable) {
  return typeof variable !== 'undefined';
};

exports.isDefined = isDefined;