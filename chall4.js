function saluerClient(nom, titre = "Client"){
    let salutation = `Bonjour ${titre} ${nom}`
    return salutation;
}
console.log(saluerClient("ahmed"));
