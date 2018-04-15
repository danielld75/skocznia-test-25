const assert = require('assert');
const calculateDistancePoints = require('./calculateDistancePoints');

describe('calculateDistancePoints', () => {
  describe('calculatePoints', () => {
    it('should return 153 points', () => {
      const actual = calculateDistancePoints(227.5,'mammoth',200);
      const expected = '153';
      assert.equal(actual, expected);
    });

    it('should return 52.8 points', () => {
      const actual = calculateDistancePoints(144,'mammoth',200);
      const expected = '52.8';
      assert.equal(actual, expected);
    });

    it('should return 114 points', () => {
      const actual = calculateDistancePoints(195,'mammoth',200);
      const expected = '114';
      assert.equal(actual, expected);
    });

    it('should return 69 points', () => {
      const actual = calculateDistancePoints(125,'big',120);
      const expected = '69';
      assert.equal(actual, expected);
    });

    it('should return 37.5 points', () => {
      const actual = calculateDistancePoints(107.5,'big',120);
      const expected = '37.5';
      assert.equal(actual, expected);
    });

    it('should return 59.1 points', () => {
      const actual = calculateDistancePoints(119.5,'big',120);
      const expected = '59.1';
      assert.equal(actual, expected);
    });

    it('should return 86 points', () => {
      const actual = calculateDistancePoints(111,'normal',98);
      const expected = '86';
      assert.equal(actual, expected);
    });


    it('should return 60 points', () => {
      const actual = calculateDistancePoints(98,'normal',98);
      const expected = '60';
      assert.equal(actual, expected);
    });

    it('should return 30 points', () => {
      const actual = calculateDistancePoints(83,'normal',98);
      const expected = '30';
      assert.equal(actual, expected);
    });

  });
});
