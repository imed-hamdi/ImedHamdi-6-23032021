// middleware pour la validité du formulaire sauce

module.exports = (req, res, next)=>{

    if (req.file) {
        req.body.sauce = JSON.parse(req.body.sauce)
        } 

    const regexName =/[a-zA-Z áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ-]{3,20}/; // a utilisé pour le nom de la sauce et le créateur
    let testName = regexName.test(req.body.sauce.name)
    if( !testName ) return res.status(400).json('test Name failed') //si ca va pas en stope le script et on return une erreur 

    let testManufacturer = regexName.test(req.body.sauce.manufacturer)
    if( !testManufacturer ) return res.status(400).json('test Manufacturer failed') //si ca va pas en stope le script et on return une erreur 

    const regexDescription =/[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ_!$_\s-]{10,200}/; 
    let testDescription = regexDescription.test(req.body.sauce.description)
    if( !testDescription ) return res.status(400).json('test Name failed')
  

    next() // si tout va bien on passe au prochain middleware 
  
  };

// module.exports = (req,res,next) => {

// const regexName = /[a-zA-Z áàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ-]{3,20}/; // a utilisé pour le nom de la sauce et le créateur
// const regexDescription = /[a-zA-ZáàâäãåçéèêëíìîïñóòôöõúùûüýÿæœÁÀÂÄÃÅÇÉÈÊËÍÌÎÏÑÓÒÔÖÕÚÙÛÜÝŸÆŒ_!$_\s-]{10,200}/;
// const regexMainPepper = /[A-za-z -&_!$_\s]{3,20}/;

// req.body.sauce = JSON.parse(req.body.sauce)

// const testName= regexName.test(req.body.sauce.name);
// const testManufacturer = regexName.test(req.body.sauce.manufacturer);
// const testDescription = regexDescription.test(req.body.sauce.description);
// const testMainPepper = regexMainPepper.test(req.body.sauce.mainPepper);



// let testFormTrue = () => {
//     if(testName && testManufacturer && testDescription && testMainPepper){
//     next()
//     }else{
//         res.status(500).json({ message: "Erreur server"});
//     }
// }

// //le nom de la sauce
// if(!testName) {
//     res.status(400).json({ message: "Le nom doit contenir au moins 3 caractères"});
//     next()   
// } else {
//     testFormTrue;
// }

// //le nom du créateur de la sauce
// if ( !testManufacturer) {
//     res.status(400).json({ message: "Le créateur doit contenir au moins 3 caractères"});
//     next() 
// } else {
//      testFormTrue;
// }

// //la descrption de la sauce
// if(!testDescription) {
//     res.status(400).json({ message: "La description doit contenir entre 10 et 150 caractères"});
//     next()
// } else {
//      testFormTrue;
// }

// //ingrédient principal de la sauce
// if(!testMainPepper ) {
//     res.status(400).json({ message: "L'ingrédient principal doit contenir entre 3 et 20 caractères, uniquement des lettres"});
//     next()
// } else {
//      testFormTrue;
// }


// }



 