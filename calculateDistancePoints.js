class Hill {
  constructor(basePoints, factor) {
    this.basePoints = basePoints;
    this.factor = factor;
  }
}

const hills = {
  "normal": new Hill(60, 2),
  "big": new Hill(60, 1.8),
  "mammoth": new Hill(120, 1.2)
};

const calculateDistancePoints = (distance, hillSize, kPoint) => {
  if (!hills[hillSize]) {
    return "You write wrong kind of ski jump. Only: 'normal', 'big' or 'mammoth'";
  }
  const hill = hills[hillSize];
  return hill.basePoints + (distance - kPoint) * hill.factor;
};

module.exports = calculateDistancePoints;
