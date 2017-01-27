module.exports = function(app, db) {
  app.get('/notes/:id', function(req, res) {
    const details = { '_id': "<ID GOES HERE>" };
    db.collection('notes').findOne(details, (err, item) => {
      if (err) {
        res.send({'error':'An error has occurred'});
      } else {
        res.send(item);
      }
    });
  });

  app.post('/notes', (req, res) => {
    const note = { text: req.body.body, title: req.body.title};
    db.collection('notes').insert(note, (err, results) => {
      if (err) { 
        res.send({ 'error': 'An error has occurred' }); 
      } else {
        res.send(results.ops[0]);
      }
    });
  });
};