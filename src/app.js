const express = require('express');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 4000;



const app = new express();


const { accounts, users, writeJSON } = require('./data.js');

app.set('views',path.join(__dirname, '/views'));
app.set('view engine','ejs');


app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));




app.listen(port,() => {console.log(`Server is up and running on port :${port}`)});