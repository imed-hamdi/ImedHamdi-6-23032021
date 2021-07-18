const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const CryptoJS = require('crypto-js');

const User = require('../models/User');

exports.signup = (req, res, next) => {

  //Cryptage de l'email
  var key = CryptoJS.enc.Hex.parse("000102030405060708090a0b0c0d0e0f");
  var iv = CryptoJS.enc.Hex.parse("101112131415161718191a1b1c1d1e1f");
  var encrypted = CryptoJS.AES.encrypt(req.body.email, key, { iv: iv }).toString();

  //chiffrage du mot de passe
  bcrypt.hash(req.body.password, 10)
    .then(hash => {
      const user = new User({
        email: encrypted,
        password: hash
      });
      //ajout de l'utilisateur à la base de données
      user.save()
        .then(() => res.status(201).json({ message: 'Utilisateur créé !' }))
        .catch(error => {
          res.status(400).json({ error });
        });
    })
    .catch(error => res.status(500).json({ error }));
};

exports.login = (req, res, next) => {
  var key = CryptoJS.enc.Hex.parse("000102030405060708090a0b0c0d0e0f");
  var iv = CryptoJS.enc.Hex.parse("101112131415161718191a1b1c1d1e1f");
  var encrypted = CryptoJS.AES.encrypt(req.body.email, key, { iv: iv }).toString();

  User.findOne({ email: encrypted })
    .then(user => {
      if (!user) {
        return res.status(401).json({ error: 'Utilisateur non trouvé !' });
      }
      bcrypt.compare(req.body.password, user.password)
        .then(valid => {
          if (!valid) {
            return res.status(401).json({ error: 'Mot de passe incorrect !' });
          }
          res.status(200).json({
            userId: user._id,
            token: jwt.sign(
              { userId: user._id },
              'RANDOM_TOKEN_SECRET',
              { expiresIn: '24h' }
            )
          });
        })
        .catch(error => res.status(500).json({ error }));
    })
    .catch(error => res.status(500).json({ error }));
};