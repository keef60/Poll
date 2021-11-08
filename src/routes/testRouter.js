

var express = require('express');
var router = express.Router();

const fetch = require('cross-fetch');




let id="AKfycbxYQ5t5JjgUlRR7ZY1_9-gDbN4kncokzQ43rhg1G7p87kiHNT3HF14Mc5FzGm9fj80" , 
storeId="ba772cce35",d =null, url =(`https://script.google.com/macros/s/${id}/exec?id=${storeId}`)

fetch(url)
  .then(res => {
    if (res.status >= 400) {
      throw new Error("Bad response from server");
    }
    return res.json();
  })
  .then(user => {
    d=(user);
  })
  .catch(err => {
    console.error(err);
  });


router.get('/', function(req, res, next) {
 
console.log(req.query.id)


    res.json({data:d});
});

module.exports = router;