//let express = require('express');
import Model from './models/Model.js'
import TestExamen from './models/TestExamen.js';
import express from 'express';

let app = express();
app.use(express.static('public'));
app.use(express.urlencoded());

app.get('/', async function (request, response) {
    const testExamen = await TestExamen.loadMany();
    response.render('home.ejs', { TestExamen: testExamen });
});

app.listen(3000, function () {
    console.log('Server is running on port 3000')
});