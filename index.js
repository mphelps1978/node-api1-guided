// import express from 'express'; // ES2015 modules

const express = require('express'); // common JS Modules
const server = express();
const port = 5000;

server.use(express.json()) // needed for POST/PUT - It teaches Express to read JSON

const hubs = require('./data/hubs-model')

server.get('/', (req, res) => {
  res.json({hello: 'Web 26'})

})

// view list of hubs

server.get ('/api/hubs', (req, res) => {
  // get the hubs from the database
  hubs.find()
  .then(hubs => {
    // return a status of 200 to the user, and also return the requested info
    res.status(200).json(hubs)
  })
  // handle any unknown errors
  .catch(err => {
    console.log(err)
    res.status(500).json({errorMessage: 'There was a problem'})
    })
})

// add a hub

server.post('/api/hubs', (req, res) => {
  // data to add will be in the body of the request
  const hubinfo = req.body;
  //validate the data and if valid, save it
  hubs.add(hubinfo)
  .then(hub => {
    res.status(201).json(hub);
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({errorMessage: 'There was a problem'})
    })
})




server.listen(port, () => console.log(`\n** Server is running on ${port}`));