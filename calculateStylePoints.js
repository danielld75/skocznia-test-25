const Math = require('mathjs');

const calculateStylePoints = (styleNotes) => {
  let [A, B, C, D, E] = styleNotes;
  let notes = [A, B, C, D, E];
  let notesMin = notes.indexOf(Math.min(notes));
  notes.splice(notesMin, 1);
  let notesMax = notes.indexOf(Math.max(notes));
  notes.splice(notesMax,1);

  return (Math.sum(notes));
};

module.exports = calculateStylePoints;
