// import express from 'express'; // ES2015 modules

const express = require('express'); // common JS Modules

const server = express();

const port = 5000;

server.get('/', (req, res) => {
  res.json({hello: 'Web 26'})

})

server.listen(port, () => console.log(`\n** Server is running on ${port}`));