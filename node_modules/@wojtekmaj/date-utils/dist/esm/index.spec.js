import { getYear, getMonth, getMonthHuman, getDate, getHours, getMinutes, getSeconds, getCenturyStart, getPreviousCenturyStart, getNextCenturyStart, getCenturyEnd, getPreviousCenturyEnd, getNextCenturyEnd, getCenturyRange, getDecadeStart, getPreviousDecadeStart, getNextDecadeStart, getDecadeEnd, getPreviousDecadeEnd, getNextDecadeEnd, getDecadeRange, getYearStart, getPreviousYearStart, getNextYearStart, getYearEnd, getPreviousYearEnd, getNextYearEnd, getYearRange, getMonthStart, getPreviousMonthStart, getNextMonthStart, getMonthEnd, getPreviousMonthEnd, getNextMonthEnd, getMonthRange, getDayStart, getPreviousDayStart, getNextDayStart, getDayEnd, getPreviousDayEnd, getNextDayEnd, getDayRange, getDaysInMonth, getHoursMinutes, getHoursMinutesSeconds, getISOLocalMonth, getISOLocalDate, getISOLocalDateTime } from './index';

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
    var year = getYear(date);
    expect(year).toBe(2019);
  });
  it('returns proper year for a given number', function () {
    var date = 2019;
    var year = getYear(date);
    expect(year).toBe(2019);
  });
  it('returns proper year for a given string', function () {
    var date = '2019';
    var year = getYear(date);
    expect(year).toBe(2019);
  });
  testThrow(getYear);
});
describe('getMonth()', function () {
  it('returns proper month', function () {
    var date = new Date(2019, 0, 1);
    var result = getMonth(date);
    expect(result).toBe(0);
  });
  testThrow(getMonth);
});
describe('getMonthHuman()', function () {
  it('returns proper human-readable month', function () {
    var date = new Date(2019, 0, 1);
    var result = getMonthHuman(date);
    expect(result).toBe(1);
  });
  testThrow(getMonthHuman);
});
describe('getDate()', function () {
  it('returns proper date', function () {
    var date = new Date(2019, 0, 1);
    var result = getDate(date);
    expect(result).toBe(1);
  });
  testThrow(getDate);
});
describe('getHours()', function () {
  it('returns proper hours from Date', function () {
    var date = new Date(2019, 0, 1, 22, 41, 56);
    var result = getHours(date);
    expect(result).toBe(22);
  });
  it('returns proper hours from string', function () {
    var date = '22:41:56';
    var result = getHours(date);
    expect(result).toBe(22);
  });
  testThrow(getHours);
});
describe('getMinutes()', function () {
  it('returns proper minutes from Date', function () {
    var date = new Date(2019, 0, 1, 22, 41, 56);
    var result = getMinutes(date);
    expect(result).toBe(41);
  });
  it('returns proper minutes from string', function () {
    var date = '22:41:56';
    var result = getMinutes(date);
    expect(result).toBe(41);
  });
  testThrow(getMinutes);
});
describe('getSeconds()', function () {
  it('returns proper seconds from Date', function () {
    var date = new Date(2019, 0, 1, 22, 41, 56);
    var result = getSeconds(date);
    expect(result).toBe(56);
  });
  it('returns proper seconds from string', function () {
    var date = '22:41:56';
    var result = getSeconds(date);
    expect(result).toBe(56);
  });
  it('returns proper seconds from string without seconds', function () {
    var date = '22:41';
    var result = getSeconds(date);
    expect(result).toBe(0);
  });
  it('returns proper seconds from string with milliseconds', function () {
    var date = '22:41:56.321';
    var result = getSeconds(date);
    expect(result).toBe(56);
  });
  testThrow(getSeconds);
});
/**
 * Century
 */

describe('getCenturyStart()', function () {
  it('returns proper start of the century', function () {
    var date = new Date(2019, 0, 1);
    var centuryStartDate = new Date(2001, 0, 1);
    var result = getCenturyStart(date);
    expect(result).toEqual(centuryStartDate);
  });
  it('returns proper start of the century for year < 100', function () {
    var date = new Date();
    date.setFullYear(19, 0, 1);
    date.setHours(0, 0, 0, 0);
    var centuryStartDate = new Date();
    centuryStartDate.setFullYear(1, 0, 1);
    centuryStartDate.setHours(0, 0, 0, 0);
    var result = getCenturyStart(date);
    expect(result).toEqual(centuryStartDate);
  });
  testThrow(getCenturyStart);
});
describe('getPreviousCenturyStart()', function () {
  it('returns proper start of the previous century', function () {
    var date = new Date(2019, 0, 1);
    var previousCenturyStartDate = new Date(1901, 0, 1);
    var result = getPreviousCenturyStart(date);
    expect(result).toEqual(previousCenturyStartDate);
  });
  testThrow(getPreviousCenturyStart);
});
describe('getNextCenturyStart()', function () {
  it('returns proper start of the next century', function () {
    var date = new Date(2019, 0, 1);
    var nextCenturyStartDate = new Date(2101, 0, 1);
    var result = getNextCenturyStart(date);
    expect(result).toEqual(nextCenturyStartDate);
  });
  testThrow(getNextCenturyStart);
});
describe('getCenturyEnd()', function () {
  it('returns proper end of the century', function () {
    var date = new Date(2019, 0, 1);
    var centuryEndDate = new Date(2100, 11, 31, 23, 59, 59, 999);
    var result = getCenturyEnd(date);
    expect(result).toEqual(centuryEndDate);
  });
  it('returns proper end of the century for year < 100', function () {
    var date = new Date();
    date.setFullYear(19, 0, 1);
    date.setHours(0, 0, 0, 0);
    var centuryEndDate = new Date();
    centuryEndDate.setFullYear(100, 11, 31);
    centuryEndDate.setHours(23, 59, 59, 999);
    var result = getCenturyEnd(date);
    expect(result).toEqual(centuryEndDate);
  });
  testThrow(getCenturyEnd);
});
describe('getPreviousCenturyEnd()', function () {
  it('returns proper end of the previous century', function () {
    var date = new Date(2019, 0, 1);
    var previousCenturyEndDate = new Date(2000, 11, 31, 23, 59, 59, 999);
    var result = getPreviousCenturyEnd(date);
    expect(result).toEqual(previousCenturyEndDate);
  });
  testThrow(getPreviousCenturyEnd);
});
describe('getNextCenturyEnd()', function () {
  it('returns proper end of the next century', function () {
    var date = new Date(2019, 0, 1);
    var nextCenturyEndDate = new Date(2200, 11, 31, 23, 59, 59, 999);
    var result = getNextCenturyEnd(date);
    expect(result).toEqual(nextCenturyEndDate);
  });
  testThrow(getNextCenturyEnd);
});
describe('getCenturyRange()', function () {
  it('returns proper century date range', function () {
    var date = new Date(2019, 0, 1);
    var centuryStartDate = new Date(2001, 0, 1);
    var centuryEndDate = new Date(2100, 11, 31, 23, 59, 59, 999);
    var result = getCenturyRange(date);
    expect(result).toHaveLength(2);
    expect(result).toEqual([centuryStartDate, centuryEndDate]);
  });
  testThrow(getCenturyRange);
});
/**
 * Decade
 */

describe('getDecadeStart()', function () {
  it('returns proper start of the decade', function () {
    var date = new Date(2019, 0, 1);
    var decadeStartDate = new Date(2011, 0, 1);
    var result = getDecadeStart(date);
    expect(result).toEqual(decadeStartDate);
  });
  it('returns proper start of the decade for year < 100', function () {
    var date = new Date();
    date.setFullYear(19, 0, 1);
    date.setHours(0, 0, 0, 0);
    var decadeStartDate = new Date();
    decadeStartDate.setFullYear(11, 0, 1);
    decadeStartDate.setHours(0, 0, 0, 0);
    var result = getDecadeStart(date);
    expect(result).toEqual(decadeStartDate);
  });
  testThrow(getDecadeStart);
});
describe('getPreviousDecadeStart()', function () {
  it('returns proper start of the previous decade', function () {
    var date = new Date(2019, 0, 1);
    var previousDecadeStartDate = new Date(2001, 0, 1);
    var result = getPreviousDecadeStart(date);
    expect(result).toEqual(previousDecadeStartDate);
  });
  testThrow(getPreviousDecadeStart);
});
describe('getNextDecadeStart()', function () {
  it('returns proper start of the next decade', function () {
    var date = new Date(2019, 0, 1);
    var nextDecadeStartDate = new Date(2021, 0, 1);
    var result = getNextDecadeStart(date);
    expect(result).toEqual(nextDecadeStartDate);
  });
  testThrow(getNextDecadeStart);
});
describe('getDecadeEnd()', function () {
  it('returns proper end of the decade', function () {
    var date = new Date(2019, 0, 1);
    var decadeEndDate = new Date(2020, 11, 31, 23, 59, 59, 999);
    var result = getDecadeEnd(date);
    expect(result).toEqual(decadeEndDate);
  });
  it('returns proper end of the decade for year < 100', function () {
    var date = new Date();
    date.setFullYear(19, 0, 1);
    date.setHours(0, 0, 0, 0);
    var decadeEndDate = new Date();
    decadeEndDate.setFullYear(20, 11, 31);
    decadeEndDate.setHours(23, 59, 59, 999);
    var result = getDecadeEnd(date);
    expect(result).toEqual(decadeEndDate);
  });
  testThrow(getDecadeEnd);
});
describe('getPreviousDecadeEnd()', function () {
  it('returns proper end of the previous decade', function () {
    var date = new Date(2019, 0, 1);
    var previousDecadeEndDate = new Date(2010, 11, 31, 23, 59, 59, 999);
    var result = getPreviousDecadeEnd(date);
    expect(result).toEqual(previousDecadeEndDate);
  });
  testThrow(getPreviousDecadeEnd);
});
describe('getNextDecadeEnd()', function () {
  it('returns proper end of the next decade', function () {
    var date = new Date(2019, 0, 1);
    var nextDecadeEndDate = new Date(2030, 11, 31, 23, 59, 59, 999);
    var result = getNextDecadeEnd(date);
    expect(result).toEqual(nextDecadeEndDate);
  });
  testThrow(getNextDecadeEnd);
});
describe('getDecadeRange()', function () {
  it('returns proper decade date range', function () {
    var date = new Date(2019, 0, 1);
    var decadeStartDate = new Date(2011, 0, 1);
    var decadeEndDate = new Date(2020, 11, 31, 23, 59, 59, 999);
    var result = getDecadeRange(date);
    expect(result).toHaveLength(2);
    expect(result).toEqual([decadeStartDate, decadeEndDate]);
  });
  testThrow(getDecadeRange);
});
/**
 * Year
 */

describe('getYearStart()', function () {
  it('returns proper start of the year', function () {
    var date = new Date(2019, 6, 1);
    var yearStartDate = new Date(2019, 0, 1);
    var result = getYearStart(date);
    expect(result).toEqual(yearStartDate);
  });
  it('returns proper start of the year for year < 100', function () {
    var date = new Date();
    date.setFullYear(19, 6, 1);
    date.setHours(0, 0, 0, 0);
    var yearStartDate = new Date();
    yearStartDate.setFullYear(19, 0, 1);
    yearStartDate.setHours(0, 0, 0, 0);
    var result = getYearStart(date);
    expect(result).toEqual(yearStartDate);
  });
  testThrow(getYearStart);
});
describe('getPreviousYearStart()', function () {
  it('returns proper start of the previous year', function () {
    var date = new Date(2019, 6, 1);
    var previousYearStartDate = new Date(2018, 0, 1);
    var result = getPreviousYearStart(date);
    expect(result).toEqual(previousYearStartDate);
  });
  testThrow(getPreviousYearStart);
});
describe('getNextYearStart()', function () {
  it('returns proper start of the next year', function () {
    var date = new Date(2019, 6, 1);
    var nextYearStartDate = new Date(2020, 0, 1);
    var result = getNextYearStart(date);
    expect(result).toEqual(nextYearStartDate);
  });
  testThrow(getNextYearStart);
});
describe('getYearEnd()', function () {
  it('returns proper end of the year', function () {
    var date = new Date(2019, 6, 1);
    var yearEndDate = new Date(2019, 11, 31, 23, 59, 59, 999);
    var result = getYearEnd(date);
    expect(result).toEqual(yearEndDate);
  });
  it('returns proper end of the year for year < 100', function () {
    var date = new Date();
    date.setFullYear(19, 0, 1);
    date.setHours(0, 0, 0, 0);
    var yearEndDate = new Date();
    yearEndDate.setFullYear(19, 11, 31);
    yearEndDate.setHours(23, 59, 59, 999);
    var result = getYearEnd(date);
    expect(result).toEqual(yearEndDate);
  });
  testThrow(getYearEnd);
});
describe('getPreviousYearEnd()', function () {
  it('returns proper end of the previous year', function () {
    var date = new Date(2019, 6, 1);
    var previousYearEndDate = new Date(2018, 11, 31, 23, 59, 59, 999);
    var result = getPreviousYearEnd(date);
    expect(result).toEqual(previousYearEndDate);
  });
  testThrow(getPreviousYearEnd);
});
describe('getNextYearEnd()', function () {
  it('returns proper end of the next year', function () {
    var date = new Date(2019, 6, 1);
    var nextYearEndDate = new Date(2020, 11, 31, 23, 59, 59, 999);
    var result = getNextYearEnd(date);
    expect(result).toEqual(nextYearEndDate);
  });
  testThrow(getNextYearEnd);
});
describe('getYearRange()', function () {
  it('returns proper year date range', function () {
    var date = new Date(2019, 6, 1);
    var yearStartDate = new Date(2019, 0, 1);
    var yearEndDate = new Date(2019, 11, 31, 23, 59, 59, 999);
    var result = getYearRange(date);
    expect(result).toHaveLength(2);
    expect(result).toEqual([yearStartDate, yearEndDate]);
  });
  testThrow(getYearRange);
});
/**
 * Month
 */

describe('getMonthStart()', function () {
  it('returns proper start of the month', function () {
    var date = new Date(2019, 6, 15);
    var monthStartDate = new Date(2019, 6, 1);
    var result = getMonthStart(date);
    expect(result).toEqual(monthStartDate);
  });
  it('returns proper start of the month for year < 100', function () {
    var date = new Date();
    date.setFullYear(19, 6, 15);
    date.setHours(0, 0, 0, 0);
    var monthStartDate = new Date();
    monthStartDate.setFullYear(19, 6, 1);
    monthStartDate.setHours(0, 0, 0, 0);
    var result = getMonthStart(date);
    expect(result).toEqual(monthStartDate);
  });
  testThrow(getMonthStart);
});
describe('getPreviousMonthStart()', function () {
  it('returns proper start of the previous month', function () {
    var date = new Date(2019, 6, 15);
    var previousMonthStartDate = new Date(2019, 5, 1);
    var result = getPreviousMonthStart(date);
    expect(result).toEqual(previousMonthStartDate);
  });
  testThrow(getPreviousMonthStart);
});
describe('getNextMonthStart()', function () {
  it('returns proper start of the next month', function () {
    var date = new Date(2019, 6, 15);
    var nextMonthStartDate = new Date(2019, 7, 1);
    var result = getNextMonthStart(date);
    expect(result).toEqual(nextMonthStartDate);
  });
  testThrow(getNextMonthStart);
});
describe('getMonthEnd()', function () {
  it('returns proper end of the month', function () {
    var date = new Date(2019, 6, 15);
    var monthEndDate = new Date(2019, 6, 31, 23, 59, 59, 999);
    var result = getMonthEnd(date);
    expect(result).toEqual(monthEndDate);
  });
  it('returns proper end of the month for year < 100', function () {
    var date = new Date();
    date.setFullYear(19, 6, 15);
    date.setHours(0, 0, 0, 0);
    var monthEndDate = new Date();
    monthEndDate.setFullYear(19, 6, 31);
    monthEndDate.setHours(23, 59, 59, 999);
    var result = getMonthEnd(date);
    expect(result).toEqual(monthEndDate);
  });
  testThrow(getMonthEnd);
});
describe('getPreviousMonthEnd()', function () {
  it('returns proper end of the previous month', function () {
    var date = new Date(2019, 6, 15);
    var previousMonthEndDate = new Date(2019, 5, 30, 23, 59, 59, 999);
    var result = getPreviousMonthEnd(date);
    expect(result).toEqual(previousMonthEndDate);
  });
  testThrow(getPreviousMonthEnd);
});
describe('getNextMonthEnd()', function () {
  it('returns proper end of the next month', function () {
    var date = new Date(2019, 6, 15);
    var nextMonthEndDate = new Date(2019, 7, 31, 23, 59, 59, 999);
    var result = getNextMonthEnd(date);
    expect(result).toEqual(nextMonthEndDate);
  });
  testThrow(getNextMonthEnd);
});
describe('getMonthRange()', function () {
  it('returns proper month date range', function () {
    var date = new Date(2019, 6, 15);
    var monthStartDate = new Date(2019, 6, 1);
    var monthEndDate = new Date(2019, 6, 31, 23, 59, 59, 999);
    var result = getMonthRange(date);
    expect(result).toHaveLength(2);
    expect(result).toEqual([monthStartDate, monthEndDate]);
  });
  testThrow(getMonthRange);
});
/**
 * Day
 */

describe('getDayStart()', function () {
  it('returns proper beginning of the day', function () {
    var date = new Date(2019, 6, 15, 12);
    var dayStartDate = new Date(2019, 6, 15);
    var result = getDayStart(date);
    expect(result).toEqual(dayStartDate);
  });
  it('returns proper beginning of the day for year < 100', function () {
    var date = new Date();
    date.setFullYear(19, 6, 15, 12);
    date.setHours(0, 0, 0, 0);
    var dayStartDate = new Date();
    dayStartDate.setFullYear(19, 6, 15);
    dayStartDate.setHours(0, 0, 0, 0);
    var result = getDayStart(date);
    expect(result).toEqual(dayStartDate);
  });
  testThrow(getDayStart);
});
describe('getPreviousDayStart()', function () {
  it('returns proper start of the previous day', function () {
    var date = new Date(2019, 6, 15, 12);
    var previousDayStartDate = new Date(2019, 6, 14);
    var result = getPreviousDayStart(date);
    expect(result).toEqual(previousDayStartDate);
  });
  testThrow(getPreviousDayStart);
});
describe('getNextDayStart()', function () {
  it('returns proper start of the next day', function () {
    var date = new Date(2019, 6, 15, 12);
    var nextDayStartDate = new Date(2019, 6, 16);
    var result = getNextDayStart(date);
    expect(result).toEqual(nextDayStartDate);
  });
  testThrow(getNextDayStart);
});
describe('getDayEnd()', function () {
  it('returns proper end of the day', function () {
    var date = new Date(2019, 6, 15, 12);
    var dayEndDate = new Date(2019, 6, 15, 23, 59, 59, 999);
    var result = getDayEnd(date);
    expect(result).toEqual(dayEndDate);
  });
  it('returns proper end of the day for year < 100', function () {
    var date = new Date();
    date.setFullYear(19, 6, 15);
    date.setHours(0, 0, 0, 0);
    var dayEndDate = new Date();
    dayEndDate.setFullYear(19, 6, 15);
    dayEndDate.setHours(23, 59, 59, 999);
    var result = getDayEnd(date);
    expect(result).toEqual(dayEndDate);
  });
  testThrow(getDayEnd);
});
describe('getPreviousDayEnd()', function () {
  it('returns proper end of the previous day', function () {
    var date = new Date(2019, 6, 15, 12);
    var previousDayEndDate = new Date(2019, 6, 14, 23, 59, 59, 999);
    var result = getPreviousDayEnd(date);
    expect(result).toEqual(previousDayEndDate);
  });
  testThrow(getPreviousDayEnd);
});
describe('getNextDayEnd()', function () {
  it('returns proper end of the next day', function () {
    var date = new Date(2019, 6, 15, 12);
    var nextDayEndDate = new Date(2019, 6, 16, 23, 59, 59, 999);
    var result = getNextDayEnd(date);
    expect(result).toEqual(nextDayEndDate);
  });
  testThrow(getNextDayEnd);
});
describe('getDayRange', function () {
  it('returns proper day date range', function () {
    var date = new Date(2019, 6, 15, 12);
    var dayStartDate = new Date(2019, 6, 15);
    var dayEndDate = new Date(2019, 6, 15, 23, 59, 59, 999);
    var result = getDayRange(date);
    expect(result).toHaveLength(2);
    expect(result).toEqual([dayStartDate, dayEndDate]);
  });
  testThrow(getDayRange);
});
/**
 * Other
 */

describe('getDaysInMonth()', function () {
  it('returns proper number of days in a month', function () {
    var date1 = new Date(2019, 0, 1);
    var date2 = new Date(2019, 1, 1);
    var date3 = new Date(2019, 2, 1);
    var result1 = getDaysInMonth(date1);
    var result2 = getDaysInMonth(date2);
    var result3 = getDaysInMonth(date3);
    expect(result1).toBe(31);
    expect(result2).toBe(28);
    expect(result3).toBe(31);
  });
  testThrow(getDaysInMonth);
});
describe('getHoursMinutes', function () {
  it('returns proper hour and minute for a given date', function () {
    var date = new Date(2017, 0, 1, 16, 4);
    var hoursMinutes = getHoursMinutes(date);
    expect(hoursMinutes).toBe('16:04');
  });
  it('returns proper hour and minute for a given string of hour and minute', function () {
    var date = '16:04';
    var hoursMinutes = getHoursMinutes(date);
    expect(hoursMinutes).toBe('16:04');
  });
  it('returns proper hour and minute for a given string of hour, minute and second', function () {
    var date = '16:04:08';
    var hoursMinutes = getHoursMinutes(date);
    expect(hoursMinutes).toBe('16:04');
  });
  it('throws an error when given nonsense data', function () {
    var text = 'wololo';
    var flag = true;
    expect(function () {
      return getHoursMinutes(text);
    }).toThrow();
    expect(function () {
      return getHoursMinutes(flag);
    }).toThrow();
  });
});
describe('getHoursMinutesSeconds', function () {
  it('returns proper hour, minute and second for a given date', function () {
    var date = new Date(2017, 0, 1, 16, 4, 41);
    var hoursMinutesSeconds = getHoursMinutesSeconds(date);
    expect(hoursMinutesSeconds).toBe('16:04:41');
  });
  it('returns proper hour, minute and second for a given string of hour and minute', function () {
    var date = '16:04';
    var hoursMinutesSeconds = getHoursMinutesSeconds(date);
    expect(hoursMinutesSeconds).toBe('16:04:00');
  });
  it('returns proper hour, minute and second for a given string of hour, minute and second', function () {
    var date = '16:04:08';
    var hoursMinutesSeconds = getHoursMinutesSeconds(date);
    expect(hoursMinutesSeconds).toBe('16:04:08');
  });
  it('throws an error when given nonsense data', function () {
    var text = 'wololo';
    var flag = true;
    expect(function () {
      return getHoursMinutesSeconds(text);
    }).toThrow();
    expect(function () {
      return getHoursMinutesSeconds(flag);
    }).toThrow();
  });
});
describe('getISOLocalMonth()', function () {
  it('returns proper ISO month', function () {
    var date = new Date(2019, 0, 1);
    var ISOMonth = getISOLocalMonth(date);
    expect(ISOMonth).toBe('2019-01');
  });
  it('returns proper ISO date for year < 100', function () {
    var date = new Date();
    date.setFullYear(19, 0, 1);
    date.setHours(0, 0, 0, 0);
    var ISODate = getISOLocalMonth(date);
    expect(ISODate).toBe('0019-01');
  });
  it('returns proper ISO date for year > 9999', function () {
    var date = new Date();
    date.setFullYear(12345, 0, 1);
    date.setHours(0, 0, 0, 0);
    var ISODate = getISOLocalMonth(date);
    expect(ISODate).toBe('12345-01');
  });
  testThrow(getISOLocalMonth);
});
describe('getISOLocalDate()', function () {
  it('returns proper ISO date', function () {
    var date = new Date(2019, 0, 1);
    var ISODate = getISOLocalDate(date);
    expect(ISODate).toBe('2019-01-01');
  });
  it('returns proper ISO date for year < 100', function () {
    var date = new Date();
    date.setFullYear(19, 0, 1);
    date.setHours(0, 0, 0, 0);
    var ISODate = getISOLocalDate(date);
    expect(ISODate).toBe('0019-01-01');
  });
  it('returns proper ISO date for year > 9999', function () {
    var date = new Date();
    date.setFullYear(12345, 0, 1);
    date.setHours(0, 0, 0, 0);
    var ISODate = getISOLocalDate(date);
    expect(ISODate).toBe('12345-01-01');
  });
  testThrow(getISOLocalDate);
});
describe('getISOLocalDateTime()', function () {
  it('returns proper ISO date and time', function () {
    var date = new Date(2017, 0, 1, 16, 4, 41);
    var ISODate = getISOLocalDateTime(date);
    expect(ISODate).toBe('2017-01-01T16:04:41');
  });
  it('returns proper ISO date for year < 100', function () {
    var date = new Date();
    date.setFullYear(19, 0, 1);
    date.setHours(16, 4, 41, 0);
    var ISODate = getISOLocalDateTime(date);
    expect(ISODate).toBe('0019-01-01T16:04:41');
  });
  it('returns proper ISO date for year > 9999', function () {
    var date = new Date();
    date.setFullYear(12345, 0, 1);
    date.setHours(16, 4, 41, 0);
    var ISODate = getISOLocalDateTime(date);
    expect(ISODate).toBe('12345-01-01T16:04:41');
  });
  testThrow(getISOLocalDateTime);
});