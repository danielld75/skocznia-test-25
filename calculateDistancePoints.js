const calculateDistancePoints = (distance, hillSize, kPoint) => {

  const pointDifference = function(kPoint, distance, basePoint){
      return (distance - kPoint) * basePoint;
  };

  switch (hillSize) {
    case 'normal':
      return 60 + pointDifference(kPoint, distance, 2);
    case 'big':
      return 60 + pointDifference(kPoint, distance, 1.8);
    case 'mammoth':
      return 120 + pointDifference(kPoint, distance, 1.2);
    default:
      return "You write wrong kind of ski jump. Only: 'normal', 'big' or 'mammoth'";
  }
};

module.exports = calculateDistancePoints;
