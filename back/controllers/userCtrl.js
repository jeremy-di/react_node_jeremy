const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../model/modelAuth')
const userValidation = require('../validation/userValidation')

// INSCRIPTION
exports.inscription = (req, res) => {
    const { body } = req
    const { error } = userValidation(body).userLawRegister
    if (error) {
        return res.status(401).json(error.details[0].message)
    }
    bcrypt.hash(body.password, 10)
    .then(hash => {
        if (!hash) {
            return res.status(500).json({msg : "Erreur du serveur"})
        }
        delete body.password
        new User({...body, password : hash})
        .save()
        .then((user) => {
            console.log(user)
            res.status(201).json({msg : "Votre compte à bien été crée"})
        })
        .catch((error) => res.status(500).json(error))
    })
    .catch((error) => res.status(500).json(error))
}

// CONNEXION
exports.connexion = (req, res) => {
    const { email, password } = req.body
    const { error } = userValidation(req.body).userLawLogin
    if (error) {
        return res.status(401).json(error.details[0].message)
    }
    User.findOne({email : email})
    .then(user => {
        if (!user) {
            return res.status(404).json({msg : "Utilisateur non trouvé"})
        }
        bcrypt.compare(password, user.password)
        .then(match => {
            if (!match) {
                return res.status(500).json({msg : "Erreur du serveur"})
            }
            res.status(200).json({
                email : user.email,
                name : user.name,
                firstName : user.firstName,
                id : user._id,
                token : jwt.sign({id : user._id}, "SECRET_KEY", {expiresIn : "12h"})
            })
        })
        .catch(error => res.status(500).json(error))
    })
    .catch(error => res.status(500).json(error))
}