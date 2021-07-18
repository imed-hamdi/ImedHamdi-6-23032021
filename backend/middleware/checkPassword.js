const passwordSchema = require('../models/password');


module.exports = (req, res, next) => {
    //Si différent du cshéma
    if (!passwordSchema.validate(req.body.password)) {
        res.writeHead(400, '{"message":"Mot de passe  minimun : 8 caractères, 1 Majuscule, 1 minuscule}', {
            'content-type': 'application/json'
        });
        res.end('Format de mot de passe incorrect');
    } else {
        next();
    }
}