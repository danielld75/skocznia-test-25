const calculateDistancePoints = (distance, hillSize, kPoint) => {

  let pointDifference = function(kPoint, distance, basePoint){
    if (distance >= kPoint) {
      return (distance - kPoint) * basePoint;
    } else if (distance < kPoint) {
      return (distance - kPoint) * basePoint;
    }
  };

  switch (hillSize) {
    case 'normal':
      return 60 + pointDifference(kPoint, distance, 2);
    case 'big':
      return 60 + pointDifference(kPoint, distance, 1.8);
    case 'mammoth':
      return 120 + pointDifference(kPoint, distance, 1.2);
    default:
      break;
  }
};

module.exports = calculateDistancePoints;
