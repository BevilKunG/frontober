const express = require('express')
const app = express()
const path = require('path')

app.use('/css', express.static(__dirname + '/css'))
app.use('/js', express.static(__dirname + '/js'))
app.use('/assets', express.static(__dirname + '/assets'))
app.use('/contribute', express.static(__dirname + '/contribute'))

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
  res.redirect('/')
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
