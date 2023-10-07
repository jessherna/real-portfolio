/*
 * File name: users.js 
 * Student name: Jessica Marie Hernandez
 * Student id: 301250315
 * Date: 10/03/2023
 */

var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
