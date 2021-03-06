const express = require('express');
const bodyParser = require('body-parser'); // analyse les données codées JSON, chaîne et URL soumises à l'aide de la requête HTTP POST
const mongoose = require('mongoose'); // Permet de définir des objets avec un schéma
const path = require('path');
const sauceRoutes = require('./routes/sauce');
const userRoutes = require('./routes/user');
const helmet = require("helmet");
const Data_Base= require('./DB_pass');
mongoose.connect(`${Data_Base}`,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();
app.use(helmet());

//Eviter les erreurs CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/api/sauces', sauceRoutes);
app.use('/api/auth', userRoutes);
module.exports = app;