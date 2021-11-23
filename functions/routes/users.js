var express = require('express');
var router = express.Router();
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

/* GET users listing. */
router.post('/',  async function(req, res, next) {

  initializeApp();

const db = getFirestore();
const docRef = db.collection('Locations').doc('ids');

await docRef.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815
});


  res.json({message:'This data is new'});
});

module.exports = router;
