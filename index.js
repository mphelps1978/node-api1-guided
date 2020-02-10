// import express from 'express'; // ES2015 modules

const express = require('express'); // common JS Modules
const server = express();
const port = 5000;

const hubs = require('./data/hubs-model')

server.get('/', (req, res) => {
  res.json({hello: 'Web 26'})

})

// view list of hubs

server.get ('/api/hubs', (req, res) => {
  // get the hubs from the database
  hubs.find()
  .then(hubs => {
    res.status(200).json(hubs)
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({errorMessage: 'There was a problem'})
    })
})

server.listen(port, () => console.log(`\n** Server is running on ${port}`));