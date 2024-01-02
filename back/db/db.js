const { connect } = require('mongoose')

function frenchConnexion() {
    connect("mongodb+srv://enricca:Stargate2235@cluster0.kiqy70o.mongodb.net/battlestar")
    .then(() => console.log("Connexion à la bdd établie"))
    .catch(error => console.log(error))
}

module.exports = frenchConnexion