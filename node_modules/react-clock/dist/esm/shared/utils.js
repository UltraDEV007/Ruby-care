/* eslint-disable import/prefer-default-export */

/**
 * Checks whether a variable is defined.
 *
 * @param {*} variable Variable to check
 */
export var isDefined = function isDefined(variable) {
  return typeof variable !== 'undefined';
};