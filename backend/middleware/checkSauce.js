//vérifier la saisie des champs du formulaire sauce

const checkFormulaire = require('mongoose-validator');

exports.nameValidator = [
checkFormulaire({
    validator: 'isLength',
    arguments: [3, 30], 
    message: 'Le nom de votre Sauce doit contenir entre 3 and 30 caractères',
  }),
  checkFormulaire({
    validator: 'matches',
    arguments: /^[a-z\d\-_\s]+$/i,
    message: "Vous ne pouvez utiliser que des chiffres et des lettres pour nommer votre sauce",
  }),
];

exports.manufacturerValidator = [ 
    checkFormulaire({
    validator: 'isLength',
    arguments: [3, 30],
    message: 'Le nom du fabricant doit contenir entre 3 et 30 caractères',
  }),
  checkFormulaire({
    validator: 'matches',
    arguments: /^[a-z\d\-_\s]+$/i,
    message: "Vous ne pouvez utiliser que des chiffres et des lettres pour nommer le fabricant",
  }),
];

exports.descriptionValidator = [ 
    checkFormulaire({
    validator: 'isLength',
    arguments: [10, 150],
    message: 'La description de la sauce doit contenir entre 10 et 150 caractères',
  }),
  checkFormulaire({
    validator: 'matches',
    arguments: /^[a-z\d\-_\s]+$/i,
    message: "Vous ne pouvez utiliser que des chiffres et des lettres pour la description de la sauce",
  }),
];

exports.pepperValidator = [ 
    checkFormulaire({
    validator: 'isLength',
    arguments: [3, 20], 
    message: 'Le principal ingrédient doit contenir entre 3 et 20 caractères',
  }),
  checkFormulaire({
    validator: 'isAlphanumeric',
    message: "Ne peut contenir que des caractères alphanumériques entre 3 et 20 caractères",
  }),
];