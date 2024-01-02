const passport = require('passport')
const { Router } = require('express');
const { getAll, getOne, createOne, updateOne, deleteOne } = require ("../controllers/shipCtrl")


const router = Router();
router.use(passport.authenticate("jwt", {session : false}))
router.get('/all_ships', getAll)
router.get('/One_ship/:id', getOne)
// router.post('/create_one', createOne)



module.exports = router