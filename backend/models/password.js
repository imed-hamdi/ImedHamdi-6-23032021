const passwordValidator = require('password-validator');

// Création d'un shéma pour obliger un mot de passe fort
const passwordSchema = new passwordValidator();

// Contraintes du mot de passe 
// Dans passwordSchema vérifier si au moins :
passwordSchema
    .is().min(8)                                    // 8 caractères
    .has().uppercase()                              // 1 majuscule
    .has().lowercase()                              // 1 minuscule
    .has().digits()                                 // 1 chiffre
    .is().not().oneOf(['Passw0rd', 'Password123']); // non autorisé

module.exports = passwordSchema;

