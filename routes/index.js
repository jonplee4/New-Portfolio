/*
  Name: Jonathan Lee #822937603
  File Name: index.js
  Website Name: https://jonathanleeportfolio.herokuapp.com/
  Description: index routing for the views
*/

let express = require('express');
let router = express.Router();

// Global Route Variables
let currentDate = new Date();
  currentDate = currentDate.toLocaleTimeString();

/* GET home page. wildcard */
router.get('/', (req, res, next) => {
  res.render('content/index', {
    title: 'Home'
   });
});

/* GET about page. */
router.get('/about', (req, res, next) => {
  res.render('content/about', {
    title: 'About'
   });
});

/* GET products page. */
router.get('/projects', (req, res, next) => {
  res.render('content/projects', {
    title: 'Projects'
   });
});

/* GET services page. */
router.get('/services', (req, res, next) => {
  res.render('content/services', {
    title: 'Services'
   });
});

/* GET contact page. */
router.get('/contact', (req, res, next) => {
  res.render('content/contact', {
    title: 'Contact'
   });
});

/* GET devilsCauseway page. */
router.get('/devilsCauseway', (req, res, next) => {
  res.render('content/devilsCauseway', {
    title: 'Devils Causeway Demo'
   });
});

router.get('/IWantTheBoomBoom', (req, res, next) => {
  res.render('content/IWantTheBoomBoom', {
    title: 'I Want The BoomBoom Demo'
   });
});

router.get('/WebProjects', (req, res, next) => {
  res.render('content/webProjects', {
    title: 'Web Projects'
   });
});

router.get('/freeCodeCampProjects', (req, res, next) => {
  res.render('content/freeCodeCampProjects', {
    title: 'Free Code Camp Projects'
   });
});

router.get('/tributePage', (req, res, next) => {
  res.render('content/tributePage', {
    title: 'Jane McGonigal Tribute Page'
   });
});

router.get('/surveyPage', (req, res, next) => {
  res.render('content/surveyPage', {
    title: 'Game Development Survey Page'
   });
});


module.exports = router;
