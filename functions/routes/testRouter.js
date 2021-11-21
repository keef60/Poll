

var express = require('express');
var router = express.Router();

const fetch = require('cross-fetch');




let id="AKfycbxYQ5t5JjgUlRR7ZY1_9-gDbN4kncokzQ43rhg1G7p87kiHNT3HF14Mc5FzGm9fj80" , 
storeId="ba772cce35",d =null, url =(`https://script.google.com/macros/s/${id}/exec?id=${storeId}`)




router.get('/', function async(req, res, next) {
 

  fetch(url)
  .then(res => {
    if (res.status >= 400) {
      throw new Error("Bad response from server");
    }
    return res.json();
  })
  .then(user => {
    res.json({data:user});
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600');

  })
  .catch(err => {
    res.send(err);
  });



});

module.exports = router;