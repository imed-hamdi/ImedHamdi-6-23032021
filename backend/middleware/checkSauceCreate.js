// middleware pour la validité du formulaire sauce à la création

module.exports = (req, res, next) => {

    if (req.file) {
        req.body.sauce = JSON.parse(req.body.sauce)
    }

    const regexName = /[a-zA-Z áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ-]{3,20}/; // a utilisé pour le nom de la sauce et le créateur
    let testName = regexName.test(req.body.sauce.name)
    if (!testName) return res.status(400).json('test Name failed') //si ca va pas en stope le script et on return une erreur 

    let testManufacturer = regexName.test(req.body.sauce.manufacturer)
    if (!testManufacturer) return res.status(400).json('test Manufacturer failed') //si ca va pas en stope le script et on return une erreur 

    const regexDescription = /[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ_!$_\s-]{10,200}/;
    let testDescription = regexDescription.test(req.body.sauce.description)
    if (!testDescription) return res.status(400).json('test Name failed')


    next() // si tout va bien on passe au prochain middleware 

};

