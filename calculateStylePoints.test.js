const assert = require('assert');
const calculateStylePoints = require('./calculateStylePoints');
describe('calculateStylePoints', () => {
  describe('StylePoints', () => {
    it('should return 58', () => {
      const actual = calculateStylePoints([19, 19, 19.5, 19.5, 19.5]);
      const expected = '58';
      assert.equal(actual, expected);
    });
    it('should return 49.5', () => {
      const actual = calculateStylePoints([16.5, 16.5, 16.5, 16.5, 17]);
      const expected = '49.5';
      assert.equal(actual, expected);
    });
    it('should return 51', () => {
      const actual = calculateStylePoints([17, 17, 17, 17, 17]);
      const expected = '51';
      assert.equal(actual, expected);
    });
  });
});
