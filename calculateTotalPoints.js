const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
  if (isNaN(calculateDistancePoints)) {
    const distancePoints = calculateDistancePoints(distance, hillSize, kPoint);
    const stylePoints = calculateStylePoints(styleNotes);
    return (distancePoints + stylePoints + windFactor + gateFactor).toFixed(1);
  }
};

module.exports = calculateTotalPoints;
