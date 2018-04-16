const calculateStylePoints = (styleNotes) => {
  return styleNotes.reduce((acc, note) => acc + note, 0) - Math.min(...styleNotes) - Math.max(...styleNotes);
};

module.exports = calculateStylePoints;
