var express = require('express');
var router = express.Router();

/* GET My data. */
router.get('/', function(req, res, next) {
  res.render('mydata', { title: 'Shruthi Patkur' });
});

module.exports = router;