const router = require('express').Router()
const OwnerController = require('../controllers/Owner.controllers')

router.route('/')
    .get(OwnerController.getOwners)
    .post(OwnerController.createOwner)
router.route('/:ownerId')
    // .get(OwnerController)
    .patch(OwnerController.updateOwner)
    .delete(OwnerController.deleteOwner)


module.exports = router