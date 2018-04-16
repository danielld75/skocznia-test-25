const calculateDistancePoints = require('./calculateDistancePoints');
const calculateStylePoints = require('./calculateStylePoints');

const calculateTotalPoints = (distance, hillSize, kPoint, styleNotes, windFactor, gateFactor) => {
  const distancePointsOrError = calculateDistancePoints(distance, hillSize, kPoint);
  if (isFinite(distancePointsOrError)) {
    const distancePoints = distancePointsOrError;
    const stylePoints = calculateStylePoints(styleNotes);
    return (distancePoints + stylePoints + windFactor + gateFactor).toFixed(1);
  } else {
    const error = distancePointsOrError;
    return error;
  }
};

module.exports = calculateTotalPoints;
