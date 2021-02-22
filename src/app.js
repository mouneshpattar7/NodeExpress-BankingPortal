const express = require('express');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 4000;



const app = new express();

const { accounts, users, writeJSON } = require('./data.js');

const accountRoutes = require('./routes/accounts');
const servicesRoutes = require('./routes/services');


app.use('/account', accountRoutes);
app.use('/services', servicesRoutes);

app.set('views',path.join(__dirname, '/views'));
app.set('view engine','ejs');


app.use(express.static(path.join(__dirname, '/public')));
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) =>  {
    res.render('index', {   title: 'Account Summary', accounts });
}); 


app.get('/profile', (req, res) =>  res.render('profile', { user: users[0] }));


app.listen(3000,() => {console.log(`Server is up and running on port :${port}`)});