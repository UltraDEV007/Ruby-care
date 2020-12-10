"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getYear = getYear;
exports.getMonth = getMonth;
exports.getMonthHuman = getMonthHuman;
exports.getDate = getDate;
exports.getHours = getHours;
exports.getMinutes = getMinutes;
exports.getSeconds = getSeconds;
exports.getCenturyStart = getCenturyStart;
exports.getDecadeStart = getDecadeStart;
exports.getYearStart = getYearStart;
exports.getMonthStart = getMonthStart;
exports.getDayStart = getDayStart;
exports.getDaysInMonth = getDaysInMonth;
exports.getHoursMinutes = getHoursMinutes;
exports.getHoursMinutesSeconds = getHoursMinutesSeconds;
exports.getISOLocalMonth = getISOLocalMonth;
exports.getISOLocalDate = getISOLocalDate;
exports.getISOLocalDateTime = getISOLocalDateTime;
exports.getDayRange = exports.getNextDayEnd = exports.getPreviousDayEnd = exports.getDayEnd = exports.getNextDayStart = exports.getPreviousDayStart = exports.getMonthRange = exports.getNextMonthEnd = exports.getPreviousMonthEnd = exports.getMonthEnd = exports.getNextMonthStart = exports.getPreviousMonthStart = exports.getYearRange = exports.getNextYearEnd = exports.getPreviousYearEnd = exports.getYearEnd = exports.getNextYearStart = exports.getPreviousYearStart = exports.getDecadeRange = exports.getNextDecadeEnd = exports.getPreviousDecadeEnd = exports.getDecadeEnd = exports.getNextDecadeStart = exports.getPreviousDecadeStart = exports.getCenturyRange = exports.getNextCenturyEnd = exports.getPreviousCenturyEnd = exports.getCenturyEnd = exports.getNextCenturyStart = exports.getPreviousCenturyStart = void 0;

/**
 * Utils
 */
function makeGetEdgeOfNeighbor(getPeriod, getEdgeOfPeriod, defaultOffset) {
  return function makeGetEdgeOfNeighborInternal(date) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOffset;
    var previousPeriod = getPeriod(date) + offset;
    return getEdgeOfPeriod(previousPeriod);
  };
}

function makeGetEnd(getBeginOfNextPeriod) {
  return function makeGetEndInternal(date) {
    return new Date(getBeginOfNextPeriod(date).getTime() - 1);
  };
}

function makeGetRange(functions) {
  return function makeGetRangeInternal(date) {
    return functions.map(function (fn) {
      return fn(date);
    });
  };
}
/**
 * Simple getters - getting a property of a given point in time
 */

/**
 * Gets year from date.
 *
 * @param {Date|number|string} date Date to get year from.
 */


function getYear(date) {
  if (date instanceof Date) {
    return date.getFullYear();
  }

  if (typeof date === 'number') {
    return date;
  }

  var year = parseInt(date, 10);

  if (typeof date === 'string' && !isNaN(year)) {
    return year;
  }

  throw new Error("Failed to get year from date: ".concat(date, "."));
}
/**
 * Gets month from date.
 *
 * @param {Date} date Date to get month from.
 */


function getMonth(date) {
  if (date instanceof Date) {
    return date.getMonth();
  }

  throw new Error("Failed to get month from date: ".concat(date, "."));
}
/**
 * Gets human-readable month from date.
 *
 * @param {Date} date Date to get human-readable month from.
 */


function getMonthHuman(date) {
  if (date instanceof Date) {
    return date.getMonth() + 1;
  }

  throw new Error("Failed to get human-readable month from date: ".concat(date, "."));
}
/**
 * Gets human-readable day of the month from date.
 *
 * @param {Date} date Date to get day of the month from.
 */


function getDate(date) {
  if (date instanceof Date) {
    return date.getDate();
  }

  throw new Error("Failed to get year from date: ".concat(date, "."));
}
/**
 * Gets hours from date.
 *
 * @param {Date|string} date Date to get hours from.
 */


function getHours(date) {
  if (date instanceof Date) {
    return date.getHours();
  }

  if (typeof date === 'string') {
    var datePieces = date.split(':');

    if (datePieces.length >= 2) {
      var hoursString = datePieces[0];
      var hours = parseInt(hoursString, 10);

      if (!isNaN(hours)) {
        return hours;
      }
    }
  }

  throw new Error("Failed to get hours from date: ".concat(date, "."));
}
/**
 * Gets minutes from date.
 *
 * @param {Date|string} date Date to get minutes from.
 */


function getMinutes(date) {
  if (date instanceof Date) {
    return date.getMinutes();
  }

  if (typeof date === 'string') {
    var datePieces = date.split(':');

    if (datePieces.length >= 2) {
      var minutesString = datePieces[1] || 0;
      var minutes = parseInt(minutesString, 10);

      if (!isNaN(minutes)) {
        return minutes;
      }
    }
  }

  throw new Error("Failed to get minutes from date: ".concat(date, "."));
}
/**
 * Gets seconds from date.
 *
 * @param {Date|string} date Date to get seconds from.
 */


function getSeconds(date) {
  if (date instanceof Date) {
    return date.getSeconds();
  }

  if (typeof date === 'string') {
    var datePieces = date.split(':');

    if (datePieces.length >= 2) {
      var secondsString = datePieces[2] || 0;
      var seconds = parseInt(secondsString, 10);

      if (!isNaN(seconds)) {
        return seconds;
      }
    }
  }

  throw new Error("Failed to get seconds from date: ".concat(date, "."));
}
/**
 * Century
 */


function getCenturyStart(date) {
  var year = getYear(date);
  var centuryStartYear = year + (-year + 1) % 100;
  var centuryStartDate = new Date();
  centuryStartDate.setFullYear(centuryStartYear, 0, 1);
  centuryStartDate.setHours(0, 0, 0, 0);
  return centuryStartDate;
}

var getPreviousCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, -100);
exports.getPreviousCenturyStart = getPreviousCenturyStart;
var getNextCenturyStart = makeGetEdgeOfNeighbor(getYear, getCenturyStart, 100);
exports.getNextCenturyStart = getNextCenturyStart;
var getCenturyEnd = makeGetEnd(getNextCenturyStart);
exports.getCenturyEnd = getCenturyEnd;
var getPreviousCenturyEnd = makeGetEdgeOfNeighbor(getYear, getCenturyEnd, -100);
exports.getPreviousCenturyEnd = getPreviousCenturyEnd;
var getNextCenturyEnd = makeGetEdgeOfNeighbor(getYear, getCenturyEnd, 100);
exports.getNextCenturyEnd = getNextCenturyEnd;
var getCenturyRange = makeGetRange([getCenturyStart, getCenturyEnd]);
/**
 * Decade
 */

exports.getCenturyRange = getCenturyRange;

function getDecadeStart(date) {
  var year = getYear(date);
  var decadeStartYear = year + (-year + 1) % 10;
  var decadeStartDate = new Date();
  decadeStartDate.setFullYear(decadeStartYear, 0, 1);
  decadeStartDate.setHours(0, 0, 0, 0);
  return decadeStartDate;
}

var getPreviousDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, -10);
exports.getPreviousDecadeStart = getPreviousDecadeStart;
var getNextDecadeStart = makeGetEdgeOfNeighbor(getYear, getDecadeStart, 10);
exports.getNextDecadeStart = getNextDecadeStart;
var getDecadeEnd = makeGetEnd(getNextDecadeStart);
exports.getDecadeEnd = getDecadeEnd;
var getPreviousDecadeEnd = makeGetEdgeOfNeighbor(getYear, getDecadeEnd, -10);
exports.getPreviousDecadeEnd = getPreviousDecadeEnd;
var getNextDecadeEnd = makeGetEdgeOfNeighbor(getYear, getDecadeEnd, 10);
exports.getNextDecadeEnd = getNextDecadeEnd;
var getDecadeRange = makeGetRange([getDecadeStart, getDecadeEnd]);
/**
 * Year
 */

exports.getDecadeRange = getDecadeRange;

function getYearStart(date) {
  var year = getYear(date);
  var yearStartDate = new Date();
  yearStartDate.setFullYear(year, 0, 1);
  yearStartDate.setHours(0, 0, 0, 0);
  return yearStartDate;
}

var getPreviousYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, -1);
exports.getPreviousYearStart = getPreviousYearStart;
var getNextYearStart = makeGetEdgeOfNeighbor(getYear, getYearStart, 1);
exports.getNextYearStart = getNextYearStart;
var getYearEnd = makeGetEnd(getNextYearStart);
exports.getYearEnd = getYearEnd;
var getPreviousYearEnd = makeGetEdgeOfNeighbor(getYear, getYearEnd, -1);
exports.getPreviousYearEnd = getPreviousYearEnd;
var getNextYearEnd = makeGetEdgeOfNeighbor(getYear, getYearEnd, 1);
exports.getNextYearEnd = getNextYearEnd;
var getYearRange = makeGetRange([getYearStart, getYearEnd]);
/**
 * Month
 */

exports.getYearRange = getYearRange;

function makeGetEdgeOfNeighborMonth(getEdgeOfPeriod, defaultOffset) {
  return function makeGetEdgeOfNeighborMonthInternal(date) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOffset;
    var year = getYear(date);
    var month = getMonth(date) + offset;
    var previousPeriod = new Date();
    previousPeriod.setFullYear(year, month, 1);
    previousPeriod.setHours(0, 0, 0, 0);
    return getEdgeOfPeriod(previousPeriod);
  };
}

function getMonthStart(date) {
  var year = getYear(date);
  var month = getMonth(date);
  var monthStartDate = new Date();
  monthStartDate.setFullYear(year, month, 1);
  monthStartDate.setHours(0, 0, 0, 0);
  return monthStartDate;
}

var getPreviousMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, -1);
exports.getPreviousMonthStart = getPreviousMonthStart;
var getNextMonthStart = makeGetEdgeOfNeighborMonth(getMonthStart, 1);
exports.getNextMonthStart = getNextMonthStart;
var getMonthEnd = makeGetEnd(getNextMonthStart);
exports.getMonthEnd = getMonthEnd;
var getPreviousMonthEnd = makeGetEdgeOfNeighborMonth(getMonthEnd, -1);
exports.getPreviousMonthEnd = getPreviousMonthEnd;
var getNextMonthEnd = makeGetEdgeOfNeighborMonth(getMonthEnd, 1);
exports.getNextMonthEnd = getNextMonthEnd;
var getMonthRange = makeGetRange([getMonthStart, getMonthEnd]);
/**
 * Day
 */

exports.getMonthRange = getMonthRange;

function makeGetEdgeOfNeighborDay(getEdgeOfPeriod, defaultOffset) {
  return function makeGetEdgeOfNeighborDayInternal(date) {
    var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultOffset;
    var year = getYear(date);
    var month = getMonth(date);
    var day = getDate(date) + offset;
    var previousPeriod = new Date();
    previousPeriod.setFullYear(year, month, day);
    previousPeriod.setHours(0, 0, 0, 0);
    return getEdgeOfPeriod(previousPeriod);
  };
}

function getDayStart(date) {
  var year = getYear(date);
  var month = getMonth(date);
  var day = getDate(date);
  var dayStartDate = new Date();
  dayStartDate.setFullYear(year, month, day);
  dayStartDate.setHours(0, 0, 0, 0);
  return dayStartDate;
}

var getPreviousDayStart = makeGetEdgeOfNeighborDay(getDayStart, -1);
exports.getPreviousDayStart = getPreviousDayStart;
var getNextDayStart = makeGetEdgeOfNeighborDay(getDayStart, 1);
exports.getNextDayStart = getNextDayStart;
var getDayEnd = makeGetEnd(getNextDayStart);
exports.getDayEnd = getDayEnd;
var getPreviousDayEnd = makeGetEdgeOfNeighborDay(getDayEnd, -1);
exports.getPreviousDayEnd = getPreviousDayEnd;
var getNextDayEnd = makeGetEdgeOfNeighborDay(getDayEnd, 1);
exports.getNextDayEnd = getNextDayEnd;
var getDayRange = makeGetRange([getDayStart, getDayEnd]);
/**
 * Other
 */

/**
 * Returns a number of days in a month of a given date.
 *
 * @param {Date} date Date.
 */

exports.getDayRange = getDayRange;

function getDaysInMonth(date) {
  return getDate(getMonthEnd(date));
}

function padStart(num) {
  var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
  var numStr = "".concat(num);

  if (numStr.length >= val) {
    return num;
  }

  return "0000".concat(numStr).slice(-val);
}
/**
 * Returns local hours and minutes (hh:mm).
 */


function getHoursMinutes(date) {
  var hours = padStart(getHours(date));
  var minutes = padStart(getMinutes(date));
  return "".concat(hours, ":").concat(minutes);
}
/**
 * Returns local hours, minutes and seconds (hh:mm:ss).
 */


function getHoursMinutesSeconds(date) {
  var hours = padStart(getHours(date));
  var minutes = padStart(getMinutes(date));
  var seconds = padStart(getSeconds(date));
  return "".concat(hours, ":").concat(minutes, ":").concat(seconds);
}
/**
 * Returns local month in ISO-like format (YYYY-MM).
 */


function getISOLocalMonth(date) {
  var year = padStart(getYear(date), 4);
  var month = padStart(getMonthHuman(date));
  return "".concat(year, "-").concat(month);
}
/**
 * Returns local date in ISO-like format (YYYY-MM-DD).
 */


function getISOLocalDate(date) {
  var year = padStart(getYear(date), 4);
  var month = padStart(getMonthHuman(date));
  var day = padStart(getDate(date));
  return "".concat(year, "-").concat(month, "-").concat(day);
}
/**
 * Returns local date & time in ISO-like format (YYYY-MM-DDThh:mm:ss).
 */


function getISOLocalDateTime(date) {
  return "".concat(getISOLocalDate(date), "T").concat(getHoursMinutesSeconds(date));
}