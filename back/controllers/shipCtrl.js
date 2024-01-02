const Ship = require('../model/modelShips')
const shipValidation = require('../validation/shipValidation')

exports.getAll = (req, res) => {
    Ship.find()
    .then(ship => {
        res.status(200).json(ship)
    })
    .catch(error => res.status(500).json(error))
}

exports.getOne = (req, res) => {
    const _id = req.params.id
    Ship.findById(_id)
    .then(ship => {
        if (!ship) {
            return res.status(404).json({msg : "Non trouvé"})
        }
        res.status(200).json(ship)
    })
    .catch(error => res.status(500).json(error))
}

// exports.createOne = (req, res) => {
//     const { body } = req
//     const { error } = shipValidation(body).shipLaw
//     if (error) {
//         return res.status(401).json(error.details[0].message)
//     }
//     Ship.create({...body})
//     .then(() => {
//         res.status(201).json({msg : "Vaisseau crée"})
//     })
//     .catch(error => res.status(500).json(error))
// }