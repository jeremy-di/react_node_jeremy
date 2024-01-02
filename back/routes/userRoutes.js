const { Router } = require('express');

const { connexion, inscription } = require('../controllers/userCtrl')
const router = Router();

router.post('/register', inscription)
router.post('/login', connexion)

module.exports = router