// fonction pour encoder l'email

function checkmail(sentence) {
  if (typeof sentence === "string") {
    let headMail = sentence.slice(0, 1);
    let bodyMail = sentence.slice(1, sentence.length - 4);
    let bottomMail = sentence.slice(sentence.length - 4, sentence.length);
    let final = [];
    var masked = bodyMail.split('');
    var maskedMail = [];
    for (let i in masked) {
      masked[i] = '*';
      maskedMail += masked[i];
    }
    final += headMail + maskedMail + bottomMail
    return final;
  }
  console.log(sentence + " is not a mail");
  return false
}