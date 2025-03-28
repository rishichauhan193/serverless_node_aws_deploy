const express = require('express');

const app = express();

app.get('/api/get', (req,res) => {
    res.send({message : 'Nodejs AWS Deployment'});
})

app.get('/api/get/user', (req,res) => {
    res.send({name : 'Rishi', email: 'rbchauhan111@gmail.com', 'role': 'Devops'});
})

app.listen(7000, (req,res) => {
    console.log('server running on port 7000')
})