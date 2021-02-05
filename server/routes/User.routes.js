const router = require('express').Router()
const UserController = require('../controllers/User.controllers')

router.get('/', (req, res) => {
    res.send('This works')
})
router.route('/')
    .get(UserController.getUsers)
    .post(UserController.createUser)

module.exports = router
