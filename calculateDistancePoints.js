const calculateDistancePoints = (distance, hillSize, kPoint) => {
  this.distanceDiffer = distance;
  this.hillSizeDiffer = hillSize;
  this.kPointDiffer = kPoint;

  let pointDifference = function(kPointDiffer, distanceDiffer, point){
    if (distanceDiffer >= kPointDiffer) {
      return Math.floor((distanceDiffer - kPointDiffer) * point) + kPointDiffer;
    } else {
      return kPointDiffer + (Math.floor((distanceDiffer - kPointDiffer) * point));
    }
  };

  switch (this.hillSizeDiffer) {
    case 'normal':
      return 60 + pointDifference(this.kPointDiffer, this.distanceDiffer, 2);
    case 'big':
      return 60 + pointDifference(this.kPointDiffer, this.distanceDiffer, 1.8);
    case 'mammoth':
      return 120 + pointDifference(this.kPointDiffer, this.distanceDiffer, 1.2);
    default:
      break;
  }
};

module.exports = calculateDistancePoints;
