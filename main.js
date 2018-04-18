/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const express = require('express');

const hbs = require('hbs');

const fs = require('fs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials');

app.set('view engine', 'hbs');



app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;
  console.log(`${now}: ${req.method} ${req.url}`);
  fs.appendFile('server.log', log + '\n', (err) => {
    if (err) {
      console.log("Unable to write into log!");
    }
  });
  next();
});

app.use((req, res, next) => {
  res.render('maintenance.hbs');
});

app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
    res.render('homepage.hbs', {
        pageTitle : "Explore future",
        currentYear : new Date().getFullYear()
    });
});

app.get('/login', (req, res) => {
    res.render('login_verification.hbs', {
        pageTitle : "Explore future",
        currentYear : new Date().getFullYear()
    });
});

app.get('/connectDB', (req, res) => {
    res.render('connectDB.js', {
        pageTitle : "Explore future",
        currentYear : new Date().getFullYear()
    });
});

app.get('/register_guide', (req, res) => {
    res.render('register_guide.hbs', {
        pageTitle : "Explore future",
        currentYear : new Date().getFullYear()
    });
});

app.get('/student', (req, res) => {
    res.render('student.hbs', {
        pageTitle : "Welcome student",
        currentYear : new Date().getFullYear()
    });
});

app.get('/about', (req, res) => {
    res.render('about.hbs', {
        pageTitle : "About page",
        currentYear : new Date().getFullYear()
    });
})

app.listen(3000);
