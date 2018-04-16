const assert = require('assert');
const calculateTotalPoints = require('./calculateTotalPoints');

describe('calculateTotalPoints', () => {
  describe('totalPoints', () => {
    it('should return 171.2', () => {
      const actual = calculateTotalPoints(202.5, 'mammoth', 200, [17, 17.5, 17.5, 17, 17], 0, -3.3);
      const expected = '171.2';
      assert.equal(actual, expected);
    });

    it('should return 206.5', () => {
      const actual = calculateTotalPoints(226, 'mammoth', 200, [18.5, 18.5, 18.5, 18.5, 18], 8.7, -8.9);
      const expected = '206.5';
      assert.equal(actual, expected);
    });

    it('should return 95.2', () => {
      const actual = calculateTotalPoints(145.5, 'mammoth', 200, [14.5, 14.5, 14, 15, 14], 0, -2.4);
      const expected = '95.2';
      assert.equal(actual, expected);
    });

    it('should return 137.3', () => {
      const actual = calculateTotalPoints(134, 'big', 120, [19, 20, 19.5, 19, 18.5], 0, -5.4);
      const expected = '137.3';
      assert.equal(actual, expected);
    });

    it('should return 104.2', () => {
      const actual = calculateTotalPoints(117.5, 'big', 120, [17.5, 17.5, 17, 17, 17.5], 0, -3.3);
      const expected = '104.2';
      assert.equal(actual, expected);
    });

    it('should return 131.8', () => {
      const actual = calculateTotalPoints(111, 'normal', 98, [19, 19, 19.5, 19, 19], 3.2, -14.4);
      const expected = '131.8';
      assert.equal(actual, expected);
    });

    it('should return 83.9', () => {
      const actual = calculateTotalPoints(93.5, 'normal', 98, [17, 16, 16.5, 17, 17], 0, -17.6);
      const expected = '83.9';
      assert.equal(actual, expected);
    });

  });
});
