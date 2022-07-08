const express = require('express');
var axios = require('axios');
var bodyParser = require('body-parser');
const dotenv = require('dotenv');
const app = express();
const port = 3001;
dotenv.config();

const servicioPrueba = axios.create({
    baseURL: process.env.SERVICE_TEST,
    headers: {'Accept': 'application/json'}
});

app.get('/', (req, res) => {
    //res.send('Hello World!');    
    servicioPrueba.get(`/`).then(response => {
        res.send(response.data);
    })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
