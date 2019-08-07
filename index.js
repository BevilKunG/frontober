const express = require('express')
const app = express()
const path = require('path')
const bodyParser = require('body-parser')
const firebase = require('firebase')

app.use('/css', express.static(__dirname + '/css'))
app.use('/js', express.static(__dirname + '/js'))
app.use('/assets', express.static(__dirname + '/assets'))
app.use('/contribute', express.static(__dirname + '/contribute'))
app.use(bodyParser.urlencoded({ extended: true }))

const config = {
    apiKey: "AIzaSyDkBKfrmHqmkC-Bt9toyeDyw4HcL21dViM",
    authDomain: "frontober.firebaseapp.com",
    databaseURL: "https://frontober.firebaseio.com/",
    storageBucket: "bucket.appspot.com"
  };
firebase.initializeApp(config);


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.get('/rules', (req, res) => {
  res.sendFile(path.join(__dirname + '/html/rules.html'))
})

app.get('/tutorials', (req, res) => {
  res.sendFile(path.join(__dirname + '/html/tutorials.html'))
})

app.get('/tutorials/html', (req, res) => {
  res.sendFile(path.join(__dirname + '/html/tutorialHTML.html'))
})

app.get('/tutorials/css', (req, res) => {
  res.sendFile(path.join(__dirname + '/html/tutorialCSS.html'))
})

app.get('/tutorials/nodejs', (req, res) => {
  res.sendFile(path.join(__dirname + '/html/tutorialNodeJS.html'))
})

app.get('/tutorials/git', (req, res) => {
  res.sendFile(path.join(__dirname + '/html/tutorialGit.html'))
})

app.get('/feedback', (req, res) => {
  res.sendFile(path.join(__dirname + '/html/feedback.html'))
})

app.post('/feedback', (req, res) => {
  firebase.database().ref('/feedbacks').push().set( req.body )
  res.redirect('/feedback/thanks')
})

app.get('/feedback/thanks', (req, res) => {
  res.sendFile(path.join(__dirname + '/html/feedbackThanks.html'))
})

// API
const contributors = require('./contribute/contributors')

app.get('/api/contributors', (req, res) => {
  res.json({ contributors })
})

// Let's Code

app.get('/example', (req, res) => {
  res.sendFile(path.join(__dirname + '/contribute/example/index.html'))
})

//

app.listen(process.env.PORT || 3000, process.env.IP)
