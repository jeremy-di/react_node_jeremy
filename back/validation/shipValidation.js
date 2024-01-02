const joi = require('joi');

const shipValidation = (body) => {
    const shipLaw = joi.object({
        name : joi.string().min(2).max(30).trim().required(),
        shipCode : joi.string().min(5).max(5).trim().required(),
        type : joi.string().min(2).max(30).trim().required(),
        colony : joi.string().min(2).max(30).trim().required(),
        commander : joi.string().min(2).max(30).trim().required(),
        description : joi.string().min(2).max(500).required(),
    })

    return {shipLaw : shipLaw.validate(body)}
}

module.exports = shipValidation