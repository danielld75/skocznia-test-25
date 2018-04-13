const assert = require('assert');
const counterPoints = require('./calculateTotalPoints');

describe('counterPoints', () => {
  describe('normal', () => {
    it('should return points (mammoth)', () => {
      const actual = counterPoints(227.5, 'mammoth', 200, [18.0, 18.5, 17.5, 18.5, 18.5], 8.7, -8.4); //distance, hillSize, kPoint, styleNotes, windFactor, gateFactor
      const expected = 208.3;
      assert.equal(actual, expected);
    });
  });
});
