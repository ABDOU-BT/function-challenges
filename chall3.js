function genererEmail(input, input2) {
    let nom = input.toLowerCase();
    let prenom = input2.toLowerCase();
    let email = `${nom}.${prenom}@entreprise.com`;
    return email;

console.log(genererEmail("yassin", "robot"));

