const express = require('express')
const app = express()
const path = require('path')

app.use('/css', express.static(__dirname + '/css'))

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'))
})

app.listen(process.env.port || 3000, () => {
  console.log('running on port 3000')
})
