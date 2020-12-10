"use strict";

var _index = require("./index");

function testThrow(fn) {
  it('throws an error when given nonsense data', function () {
    var text = 'wololo';
    var flag = true;
    expect(function () {
      return fn(text);
    }).toThrow();
    expect(function () {
      return fn(flag);
    }).toThrow();
    expect(function () {
      return fn();
    }).toThrow();
  });
}
/**
 * Simple getters
 */


describe('getYear()', function () {
  it('returns proper year for a given date', function () {
    var date = new Date(2019, 0, 1);
    var year = (0, _index.getYear)(date);
    expect(year).toBe(2019);
  });
  it('returns proper year for a given number', function () {
    var date = 2019;
    var year = (0, _index.getYear)(date);
    expect(year).toBe(2019);
  });
  it('returns proper year for a given string', function () {
    var date = '2019';
    var year = (0, _index.getYear)(date);
    expect(year).toBe(2019);
  });
  testThrow(_index.getYear);
});
describe('getMonth()', function () {
  it('returns proper month', function () {
    var date = new Date(2019, 0, 1);
    var result = (0, _index.getMonth)(date);
    expect(result).toBe(0);
  });
  testThrow(_index.getMonth);
});
describe('getMonthHuman()', function () {
  it('returns proper human-readable month', function () {
    var date = new Date(2019, 0, 1);
    var result = (0, _index.getMonthHuman)(date);
    expect(result).toBe(1);
  });
  testThrow(_index.getMonthHuman);
});
describe('getDate()', function () {
  it('returns proper date', function () {
    var date = new Date(2019, 0, 1);
    var result = (0, _index.getDate)(date);
    expect(result).toBe(1);
  });
  testThrow(_index.getDate);
});
describe('getHours()', function () {
  it('returns proper hours from Date', function () {
    var date = new Date(2019, 0, 1, 22, 41, 56);
    var result = (0, _index.getHours)(date);
    expect(result).toBe(22);
  });
  it('returns proper hours from string', function () {
    var date = '22:41:56';
    var result = (0, _index.getHours)(date);
    expect(result).toBe(22);
  });
  testThrow(_index.getHours);
});
describe('getMinutes()', function () {
  it('returns proper minutes from Date', function () {
    var date = new Date(2019, 0, 1, 22, 41, 56);
    var result = (0, _index.getMinutes)(date);
    expect(result).toBe(41);
  });
  it('returns proper minutes from string', function () {
    var date = '22:41:56';
    var result = (0, _index.getMinutes)(date);
    expect(result).toBe(41);
  });
  testThrow(_index.getMinutes);
});
describe('getSeconds()', function () {
  it('returns proper seconds from Date', function () {
    var date = new Date(2019, 0, 1, 22, 41, 56);
    var result = (0, _index.getSeconds)(date);
    expect(result).toBe(56);
  });
  it('returns proper seconds from string', function () {
    var date = '22:41:56';
    var result = (0, _index.getSeconds)(date);
    expect(result).toBe(56);
  });
  it('returns proper seconds from string without seconds', function () {
    var date = '22:41';
    var result = (0, _index.getSeconds)(date);
    expect(result).toBe(0);
  });
  it('returns proper seconds from string with milliseconds', function () {
    var date = '22:41:56.321';
    var result = (0, _index.getSeconds)(date);
    expect(result).toBe(56);
  });
  testThrow(_index.getSeconds);
});
/**
 * Century
 */

describe('getCenturyStart()', function () {
  it('returns proper start of the century', function () {
    var date = new Date(2019, 0, 1);
    var centuryStartDate = new Date(2001, 0, 1);
    var result = (0, _index.getCenturyStart)(date);
    expect(result).toEqual(centuryStartDate);
  });
  it('returns proper start of the century for year < 100', function () {
    var date = new Date();
    date.setFullYear(19, 0, 1);
    date.setHours(0, 0, 0, 0);
    var centuryStartDate = new Date();
    centuryStartDate.setFullYear(1, 0, 1);
    centuryStartDate.setHours(0, 0, 0, 0);
    var result = (0, _index.getCenturyStart)(date);
    expect(result).toEqual(centuryStartDate);
  });
  testThrow(_index.getCenturyStart);
});
describe('getPreviousCenturyStart()', function () {
  it('returns proper start of the previous century', function () {
    var date = new Date(2019, 0, 1);
    var previousCenturyStartDate = new Date(1901, 0, 1);
    var result = (0, _index.getPreviousCenturyStart)(date);
    expect(result).toEqual(previousCenturyStartDate);
  });
  testThrow(_index.getPreviousCenturyStart);
});
describe('getNextCenturyStart()', function () {
  it('returns proper start of the next century', function () {
    var date = new Date(2019, 0, 1);
    var nextCenturyStartDate = new Date(2101, 0, 1);
    var result = (0, _index.getNextCenturyStart)(date);
    expect(result).toEqual(nextCenturyStartDate);
  });
  testThrow(_index.getNextCenturyStart);
});
describe('getCenturyEnd()', function () {
  it('returns proper end of the century', function () {
    var date = new Date(2019, 0, 1);
    var centuryEndDate = new Date(2100, 11, 31, 23, 59, 59, 999);
    var result = (0, _index.getCenturyEnd)(date);
    expect(result).toEqual(centuryEndDate);
  });
  it('returns proper end of the century for year < 100', function () {
    var date = new Date();
    date.setFullYear(19, 0, 1);
    date.setHours(0, 0, 0, 0);
    var centuryEndDate = new Date();
    centuryEndDate.setFullYear(100, 11, 31);
    centuryEndDate.setHours(23, 59, 59, 999);
    var result = (0, _index.getCenturyEnd)(date);
    expect(result).toEqual(centuryEndDate);
  });
  testThrow(_index.getCenturyEnd);
});
describe('getPreviousCenturyEnd()', function () {
  it('returns proper end of the previous century', function () {
    var date = new Date(2019, 0, 1);
    var previousCenturyEndDate = new Date(2000, 11, 31, 23, 59, 59, 999);
    var result = (0, _index.getPreviousCenturyEnd)(date);
    expect(result).toEqual(previousCenturyEndDate);
  });
  testThrow(_index.getPreviousCenturyEnd);
});
describe('getNextCenturyEnd()', function () {
  it('returns proper end of the next century', function () {
    var date = new Date(2019, 0, 1);
    var nextCenturyEndDate = new Date(2200, 11, 31, 23, 59, 59, 999);
    var result = (0, _index.getNextCenturyEnd)(date);
    expect(result).toEqual(nextCenturyEndDate);
  });
  testThrow(_index.getNextCenturyEnd);
});
describe('getCenturyRange()', function () {
  it('returns proper century date range', function () {
    var date = new Date(2019, 0, 1);
    var centuryStartDate = new Date(2001, 0, 1);
    var centuryEndDate = new Date(2100, 11, 31, 23, 59, 59, 999);
    var result = (0, _index.getCenturyRange)(date);
    expect(result).toHaveLength(2);
    expect(result).toEqual([centuryStartDate, centuryEndDate]);
  });
  testThrow(_index.getCenturyRange);
});
/**
 * Decade
 */

describe('getDecadeStart()', function () {
  it('returns proper start of the decade', function () {
    var date = new Date(2019, 0, 1);
    var decadeStartDate = new Date(2011, 0, 1);
    var result = (0, _index.getDecadeStart)(date);
    expect(result).toEqual(decadeStartDate);
  });
  it('returns proper start of the decade for year < 100', function () {
    var date = new Date();
    date.setFullYear(19, 0, 1);
    date.setHours(0, 0, 0, 0);
    var decadeStartDate = new Date();
    decadeStartDate.setFullYear(11, 0, 1);
    decadeStartDate.setHours(0, 0, 0, 0);
    var result = (0, _index.getDecadeStart)(date);
    expect(result).toEqual(decadeStartDate);
  });
  testThrow(_index.getDecadeStart);
});
describe('getPreviousDecadeStart()', function () {
  it('returns proper start of the previous decade', function () {
    var date = new Date(2019, 0, 1);
    var previousDecadeStartDate = new Date(2001, 0, 1);
    var result = (0, _index.getPreviousDecadeStart)(date);
    expect(result).toEqual(previousDecadeStartDate);
  });
  testThrow(_index.getPreviousDecadeStart);
});
describe('getNextDecadeStart()', function () {
  it('returns proper start of the next decade', function () {
    var date = new Date(2019, 0, 1);
    var nextDecadeStartDate = new Date(2021, 0, 1);
    var result = (0, _index.getNextDecadeStart)(date);
    expect(result).toEqual(nextDecadeStartDate);
  });
  testThrow(_index.getNextDecadeStart);
});
describe('getDecadeEnd()', function () {
  it('returns proper end of the decade', function () {
    var date = new Date(2019, 0, 1);
    var decadeEndDate = new Date(2020, 11, 31, 23, 59, 59, 999);
    var result = (0, _index.getDecadeEnd)(date);
    expect(result).toEqual(decadeEndDate);
  });
  it('returns proper end of the decade for year < 100', function () {
    var date = new Date();
    date.setFullYear(19, 0, 1);
    date.setHours(0, 0, 0, 0);
    var decadeEndDate = new Date();
    decadeEndDate.setFullYear(20, 11, 31);
    decadeEndDate.setHours(23, 59, 59, 999);
    var result = (0, _index.getDecadeEnd)(date);
    expect(result).toEqual(decadeEndDate);
  });
  testThrow(_index.getDecadeEnd);
});
describe('getPreviousDecadeEnd()', function () {
  it('returns proper end of the previous decade', function () {
    var date = new Date(2019, 0, 1);
    var previousDecadeEndDate = new Date(2010, 11, 31, 23, 59, 59, 999);
    var result = (0, _index.getPreviousDecadeEnd)(date);
    expect(result).toEqual(previousDecadeEndDate);
  });
  testThrow(_index.getPreviousDecadeEnd);
});
describe('getNextDecadeEnd()', function () {
  it('returns proper end of the next decade', function () {
    var date = new Date(2019, 0, 1);
    var nextDecadeEndDate = new Date(2030, 11, 31, 23, 59, 59, 999);
    var result = (0, _index.getNextDecadeEnd)(date);
    expect(result).toEqual(nextDecadeEndDate);
  });
  testThrow(_index.getNextDecadeEnd);
});
describe('getDecadeRange()', function () {
  it('returns proper decade date range', function () {
    var date = new Date(2019, 0, 1);
    var decadeStartDate = new Date(2011, 0, 1);
    var decadeEndDate = new Date(2020, 11, 31, 23, 59, 59, 999);
    var result = (0, _index.getDecadeRange)(date);
    expect(result).toHaveLength(2);
    expect(result).toEqual([decadeStartDate, decadeEndDate]);
  });
  testThrow(_index.getDecadeRange);
});
/**
 * Year
 */

describe('getYearStart()', function () {
  it('returns proper start of the year', function () {
    var date = new Date(2019, 6, 1);
    var yearStartDate = new Date(2019, 0, 1);
    var result = (0, _index.getYearStart)(date);
    expect(result).toEqual(yearStartDate);
  });
  it('returns proper start of the year for year < 100', function () {
    var date = new Date();
    date.setFullYear(19, 6, 1);
    date.setHours(0, 0, 0, 0);
    var yearStartDate = new Date();
    yearStartDate.setFullYear(19, 0, 1);
    yearStartDate.setHours(0, 0, 0, 0);
    var result = (0, _index.getYearStart)(date);
    expect(result).toEqual(yearStartDate);
  });
  testThrow(_index.getYearStart);
});
describe('getPreviousYearStart()', function () {
  it('returns proper start of the previous year', function () {
    var date = new Date(2019, 6, 1);
    var previousYearStartDate = new Date(2018, 0, 1);
    var result = (0, _index.getPreviousYearStart)(date);
    expect(result).toEqual(previousYearStartDate);
  });
  testThrow(_index.getPreviousYearStart);
});
describe('getNextYearStart()', function () {
  it('returns proper start of the next year', function () {
    var date = new Date(2019, 6, 1);
    var nextYearStartDate = new Date(2020, 0, 1);
    var result = (0, _index.getNextYearStart)(date);
    expect(result).toEqual(nextYearStartDate);
  });
  testThrow(_index.getNextYearStart);
});
describe('getYearEnd()', function () {
  it('returns proper end of the year', function () {
    var date = new Date(2019, 6, 1);
    var yearEndDate = new Date(2019, 11, 31, 23, 59, 59, 999);
    var result = (0, _index.getYearEnd)(date);
    expect(result).toEqual(yearEndDate);
  });
  it('returns proper end of the year for year < 100', function () {
    var date = new Date();
    date.setFullYear(19, 0, 1);
    date.setHours(0, 0, 0, 0);
    var yearEndDate = new Date();
    yearEndDate.setFullYear(19, 11, 31);
    yearEndDate.setHours(23, 59, 59, 999);
    var result = (0, _index.getYearEnd)(date);
    expect(result).toEqual(yearEndDate);
  });
  testThrow(_index.getYearEnd);
});
describe('getPreviousYearEnd()', function () {
  it('returns proper end of the previous year', function () {
    var date = new Date(2019, 6, 1);
    var previousYearEndDate = new Date(2018, 11, 31, 23, 59, 59, 999);
    var result = (0, _index.getPreviousYearEnd)(date);
    expect(result).toEqual(previousYearEndDate);
  });
  testThrow(_index.getPreviousYearEnd);
});
describe('getNextYearEnd()', function () {
  it('returns proper end of the next year', function () {
    var date = new Date(2019, 6, 1);
    var nextYearEndDate = new Date(2020, 11, 31, 23, 59, 59, 999);
    var result = (0, _index.getNextYearEnd)(date);
    expect(result).toEqual(nextYearEndDate);
  });
  testThrow(_index.getNextYearEnd);
});
describe('getYearRange()', function () {
  it('returns proper year date range', function () {
    var date = new Date(2019, 6, 1);
    var yearStartDate = new Date(2019, 0, 1);
    var yearEndDate = new Date(2019, 11, 31, 23, 59, 59, 999);
    var result = (0, _index.getYearRange)(date);
    expect(result).toHaveLength(2);
    expect(result).toEqual([yearStartDate, yearEndDate]);
  });
  testThrow(_index.getYearRange);
});
/**
 * Month
 */

describe('getMonthStart()', function () {
  it('returns proper start of the month', function () {
    var date = new Date(2019, 6, 15);
    var monthStartDate = new Date(2019, 6, 1);
    var result = (0, _index.getMonthStart)(date);
    expect(result).toEqual(monthStartDate);
  });
  it('returns proper start of the month for year < 100', function () {
    var date = new Date();
    date.setFullYear(19, 6, 15);
    date.setHours(0, 0, 0, 0);
    var monthStartDate = new Date();
    monthStartDate.setFullYear(19, 6, 1);
    monthStartDate.setHours(0, 0, 0, 0);
    var result = (0, _index.getMonthStart)(date);
    expect(result).toEqual(monthStartDate);
  });
  testThrow(_index.getMonthStart);
});
describe('getPreviousMonthStart()', function () {
  it('returns proper start of the previous month', function () {
    var date = new Date(2019, 6, 15);
    var previousMonthStartDate = new Date(2019, 5, 1);
    var result = (0, _index.getPreviousMonthStart)(date);
    expect(result).toEqual(previousMonthStartDate);
  });
  testThrow(_index.getPreviousMonthStart);
});
describe('getNextMonthStart()', function () {
  it('returns proper start of the next month', function () {
    var date = new Date(2019, 6, 15);
    var nextMonthStartDate = new Date(2019, 7, 1);
    var result = (0, _index.getNextMonthStart)(date);
    expect(result).toEqual(nextMonthStartDate);
  });
  testThrow(_index.getNextMonthStart);
});
describe('getMonthEnd()', function () {
  it('returns proper end of the month', function () {
    var date = new Date(2019, 6, 15);
    var monthEndDate = new Date(2019, 6, 31, 23, 59, 59, 999);
    var result = (0, _index.getMonthEnd)(date);
    expect(result).toEqual(monthEndDate);
  });
  it('returns proper end of the month for year < 100', function () {
    var date = new Date();
    date.setFullYear(19, 6, 15);
    date.setHours(0, 0, 0, 0);
    var monthEndDate = new Date();
    monthEndDate.setFullYear(19, 6, 31);
    monthEndDate.setHours(23, 59, 59, 999);
    var result = (0, _index.getMonthEnd)(date);
    expect(result).toEqual(monthEndDate);
  });
  testThrow(_index.getMonthEnd);
});
describe('getPreviousMonthEnd()', function () {
  it('returns proper end of the previous month', function () {
    var date = new Date(2019, 6, 15);
    var previousMonthEndDate = new Date(2019, 5, 30, 23, 59, 59, 999);
    var result = (0, _index.getPreviousMonthEnd)(date);
    expect(result).toEqual(previousMonthEndDate);
  });
  testThrow(_index.getPreviousMonthEnd);
});
describe('getNextMonthEnd()', function () {
  it('returns proper end of the next month', function () {
    var date = new Date(2019, 6, 15);
    var nextMonthEndDate = new Date(2019, 7, 31, 23, 59, 59, 999);
    var result = (0, _index.getNextMonthEnd)(date);
    expect(result).toEqual(nextMonthEndDate);
  });
  testThrow(_index.getNextMonthEnd);
});
describe('getMonthRange()', function () {
  it('returns proper month date range', function () {
    var date = new Date(2019, 6, 15);
    var monthStartDate = new Date(2019, 6, 1);
    var monthEndDate = new Date(2019, 6, 31, 23, 59, 59, 999);
    var result = (0, _index.getMonthRange)(date);
    expect(result).toHaveLength(2);
    expect(result).toEqual([monthStartDate, monthEndDate]);
  });
  testThrow(_index.getMonthRange);
});
/**
 * Day
 */

describe('getDayStart()', function () {
  it('returns proper beginning of the day', function () {
    var date = new Date(2019, 6, 15, 12);
    var dayStartDate = new Date(2019, 6, 15);
    var result = (0, _index.getDayStart)(date);
    expect(result).toEqual(dayStartDate);
  });
  it('returns proper beginning of the day for year < 100', function () {
    var date = new Date();
    date.setFullYear(19, 6, 15, 12);
    date.setHours(0, 0, 0, 0);
    var dayStartDate = new Date();
    dayStartDate.setFullYear(19, 6, 15);
    dayStartDate.setHours(0, 0, 0, 0);
    var result = (0, _index.getDayStart)(date);
    expect(result).toEqual(dayStartDate);
  });
  testThrow(_index.getDayStart);
});
describe('getPreviousDayStart()', function () {
  it('returns proper start of the previous day', function () {
    var date = new Date(2019, 6, 15, 12);
    var previousDayStartDate = new Date(2019, 6, 14);
    var result = (0, _index.getPreviousDayStart)(date);
    expect(result).toEqual(previousDayStartDate);
  });
  testThrow(_index.getPreviousDayStart);
});
describe('getNextDayStart()', function () {
  it('returns proper start of the next day', function () {
    var date = new Date(2019, 6, 15, 12);
    var nextDayStartDate = new Date(2019, 6, 16);
    var result = (0, _index.getNextDayStart)(date);
    expect(result).toEqual(nextDayStartDate);
  });
  testThrow(_index.getNextDayStart);
});
describe('getDayEnd()', function () {
  it('returns proper end of the day', function () {
    var date = new Date(2019, 6, 15, 12);
    var dayEndDate = new Date(2019, 6, 15, 23, 59, 59, 999);
    var result = (0, _index.getDayEnd)(date);
    expect(result).toEqual(dayEndDate);
  });
  it('returns proper end of the day for year < 100', function () {
    var date = new Date();
    date.setFullYear(19, 6, 15);
    date.setHours(0, 0, 0, 0);
    var dayEndDate = new Date();
    dayEndDate.setFullYear(19, 6, 15);
    dayEndDate.setHours(23, 59, 59, 999);
    var result = (0, _index.getDayEnd)(date);
    expect(result).toEqual(dayEndDate);
  });
  testThrow(_index.getDayEnd);
});
describe('getPreviousDayEnd()', function () {
  it('returns proper end of the previous day', function () {
    var date = new Date(2019, 6, 15, 12);
    var previousDayEndDate = new Date(2019, 6, 14, 23, 59, 59, 999);
    var result = (0, _index.getPreviousDayEnd)(date);
    expect(result).toEqual(previousDayEndDate);
  });
  testThrow(_index.getPreviousDayEnd);
});
describe('getNextDayEnd()', function () {
  it('returns proper end of the next day', function () {
    var date = new Date(2019, 6, 15, 12);
    var nextDayEndDate = new Date(2019, 6, 16, 23, 59, 59, 999);
    var result = (0, _index.getNextDayEnd)(date);
    expect(result).toEqual(nextDayEndDate);
  });
  testThrow(_index.getNextDayEnd);
});
describe('getDayRange', function () {
  it('returns proper day date range', function () {
    var date = new Date(2019, 6, 15, 12);
    var dayStartDate = new Date(2019, 6, 15);
    var dayEndDate = new Date(2019, 6, 15, 23, 59, 59, 999);
    var result = (0, _index.getDayRange)(date);
    expect(result).toHaveLength(2);
    expect(result).toEqual([dayStartDate, dayEndDate]);
  });
  testThrow(_index.getDayRange);
});
/**
 * Other
 */

describe('getDaysInMonth()', function () {
  it('returns proper number of days in a month', function () {
    var date1 = new Date(2019, 0, 1);
    var date2 = new Date(2019, 1, 1);
    var date3 = new Date(2019, 2, 1);
    var result1 = (0, _index.getDaysInMonth)(date1);
    var result2 = (0, _index.getDaysInMonth)(date2);
    var result3 = (0, _index.getDaysInMonth)(date3);
    expect(result1).toBe(31);
    expect(result2).toBe(28);
    expect(result3).toBe(31);
  });
  testThrow(_index.getDaysInMonth);
});
describe('getHoursMinutes', function () {
  it('returns proper hour and minute for a given date', function () {
    var date = new Date(2017, 0, 1, 16, 4);
    var hoursMinutes = (0, _index.getHoursMinutes)(date);
    expect(hoursMinutes).toBe('16:04');
  });
  it('returns proper hour and minute for a given string of hour and minute', function () {
    var date = '16:04';
    var hoursMinutes = (0, _index.getHoursMinutes)(date);
    expect(hoursMinutes).toBe('16:04');
  });
  it('returns proper hour and minute for a given string of hour, minute and second', function () {
    var date = '16:04:08';
    var hoursMinutes = (0, _index.getHoursMinutes)(date);
    expect(hoursMinutes).toBe('16:04');
  });
  it('throws an error when given nonsense data', function () {
    var text = 'wololo';
    var flag = true;
    expect(function () {
      return (0, _index.getHoursMinutes)(text);
    }).toThrow();
    expect(function () {
      return (0, _index.getHoursMinutes)(flag);
    }).toThrow();
  });
});
describe('getHoursMinutesSeconds', function () {
  it('returns proper hour, minute and second for a given date', function () {
    var date = new Date(2017, 0, 1, 16, 4, 41);
    var hoursMinutesSeconds = (0, _index.getHoursMinutesSeconds)(date);
    expect(hoursMinutesSeconds).toBe('16:04:41');
  });
  it('returns proper hour, minute and second for a given string of hour and minute', function () {
    var date = '16:04';
    var hoursMinutesSeconds = (0, _index.getHoursMinutesSeconds)(date);
    expect(hoursMinutesSeconds).toBe('16:04:00');
  });
  it('returns proper hour, minute and second for a given string of hour, minute and second', function () {
    var date = '16:04:08';
    var hoursMinutesSeconds = (0, _index.getHoursMinutesSeconds)(date);
    expect(hoursMinutesSeconds).toBe('16:04:08');
  });
  it('throws an error when given nonsense data', function () {
    var text = 'wololo';
    var flag = true;
    expect(function () {
      return (0, _index.getHoursMinutesSeconds)(text);
    }).toThrow();
    expect(function () {
      return (0, _index.getHoursMinutesSeconds)(flag);
    }).toThrow();
  });
});
describe('getISOLocalMonth()', function () {
  it('returns proper ISO month', function () {
    var date = new Date(2019, 0, 1);
    var ISOMonth = (0, _index.getISOLocalMonth)(date);
    expect(ISOMonth).toBe('2019-01');
  });
  it('returns proper ISO date for year < 100', function () {
    var date = new Date();
    date.setFullYear(19, 0, 1);
    date.setHours(0, 0, 0, 0);
    var ISODate = (0, _index.getISOLocalMonth)(date);
    expect(ISODate).toBe('0019-01');
  });
  it('returns proper ISO date for year > 9999', function () {
    var date = new Date();
    date.setFullYear(12345, 0, 1);
    date.setHours(0, 0, 0, 0);
    var ISODate = (0, _index.getISOLocalMonth)(date);
    expect(ISODate).toBe('12345-01');
  });
  testThrow(_index.getISOLocalMonth);
});
describe('getISOLocalDate()', function () {
  it('returns proper ISO date', function () {
    var date = new Date(2019, 0, 1);
    var ISODate = (0, _index.getISOLocalDate)(date);
    expect(ISODate).toBe('2019-01-01');
  });
  it('returns proper ISO date for year < 100', function () {
    var date = new Date();
    date.setFullYear(19, 0, 1);
    date.setHours(0, 0, 0, 0);
    var ISODate = (0, _index.getISOLocalDate)(date);
    expect(ISODate).toBe('0019-01-01');
  });
  it('returns proper ISO date for year > 9999', function () {
    var date = new Date();
    date.setFullYear(12345, 0, 1);
    date.setHours(0, 0, 0, 0);
    var ISODate = (0, _index.getISOLocalDate)(date);
    expect(ISODate).toBe('12345-01-01');
  });
  testThrow(_index.getISOLocalDate);
});
describe('getISOLocalDateTime()', function () {
  it('returns proper ISO date and time', function () {
    var date = new Date(2017, 0, 1, 16, 4, 41);
    var ISODate = (0, _index.getISOLocalDateTime)(date);
    expect(ISODate).toBe('2017-01-01T16:04:41');
  });
  it('returns proper ISO date for year < 100', function () {
    var date = new Date();
    date.setFullYear(19, 0, 1);
    date.setHours(16, 4, 41, 0);
    var ISODate = (0, _index.getISOLocalDateTime)(date);
    expect(ISODate).toBe('0019-01-01T16:04:41');
  });
  it('returns proper ISO date for year > 9999', function () {
    var date = new Date();
    date.setFullYear(12345, 0, 1);
    date.setHours(16, 4, 41, 0);
    var ISODate = (0, _index.getISOLocalDateTime)(date);
    expect(ISODate).toBe('12345-01-01T16:04:41');
  });
  testThrow(_index.getISOLocalDateTime);
});