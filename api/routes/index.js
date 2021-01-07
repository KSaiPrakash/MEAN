var express = require('express');
const { ObjectID } = require('mongodb');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
const ObjectId = require('mongodb').ObjectID;

/** GET call */
router.get('/profiles', (req, res, next)=> {
  req.collection.find({})
  .toArray()
  .then(results => res.json(results))
  .catch(error => res.send(error));
});

/** POST call */
router.post('/profiles', (req, res, next) => {
  const { firstName, lastName } = req.body;
  if( !firstName || !lastName ) {
    return res.status(400).json({
      message: 'First name , last name are required'
    })
  }
  /** Creating payload */
  const payload = { firstName, lastName }
  /** Insertion into db */
  req.collection.insertOne(payload)
  .then( result => res.json(result))
  .catch(error => res.send(error));
})

/** Delete call */
router.delete('/profiles', (req, res, next)=> {
  const { id } = req.params;
  const _id = ObjectID(id);
  req.collection.deleteOne({_id})
  .then(result => res.json(result))
  .catch(error => res.send(error));
});


module.exports = router;
