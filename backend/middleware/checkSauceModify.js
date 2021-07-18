// middleware pour la validité du formulaire sauce à la modification

module.exports = (req, res, next) => {

  //Quel objet sauce à utilisé 
  const sauceObjectModify = req.file ?
    {
      //si l'image est modifiée
      ...JSON.parse(req.body.sauce),
      imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
    }

    //si l'image n'est pas modifiée'
    : { ...req.body };

  //Vérification champs formulaire

  const regexName = /[a-zA-Z áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ-]{3,20}/; // a utilisé pour le nom de la sauce et le créateur
  let testName = regexName.test(sauceObjectModify.name)
  if (!testName) return res.status(400).json('test Name failed') //si ca va pas en stope le script et on return une erreur 

  let testManufacturer = regexName.test(sauceObjectModify.manufacturer)
  if (!testManufacturer) return res.status(400).json('test Manufacturer failed') //si ca va pas en stope le script et on return une erreur 

  const regexDescription = /[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ_!$_\s-]{10,200}/;
  let testDescription = regexDescription.test(sauceObjectModify.description)
  if (!testDescription) return res.status(400).json('test Name failed')

  next(); // si tout va bien on passe au prochain middleware 
};
