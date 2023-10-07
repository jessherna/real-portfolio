/*
 * File name: index.js 
 * Student name: Jessica Marie Hernandez
 * Student id: 301250315
 * Date: 10/03/2023
 */

var express = require('express');
var router = express.Router();

// Home Page
router.get('/', (req, res) => {
  res.render('home');
});

// About Me Page
router.get('/about', (req, res) => {
  res.render('about');
});

// Projects Page
router.get('/projects', (req, res) => {
  res.render('projects');
});

// Services Page
router.get('/services', (req, res) => {
  res.render('services');
});

// Contact Page
router.get('/contact', (req, res) => {
  res.render('contact');
});

module.exports = router;
