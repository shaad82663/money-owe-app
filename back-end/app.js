const express = require('express');
const app = express();

const connectDB = require('./config/database');


app.use(express.json());

//Import all routes
const user = require('./routes/user');

//Connect to DB
connectDB();

app.use('/api/v1', user);//root url : localhost:4000/api/v1/... for al routes of student e.g. localhost:4000/api/v1/test

module.exports = app;