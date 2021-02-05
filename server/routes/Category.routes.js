const router = require('express').Router()
const CategoryControllers = require('../controllers/Category.controllers.js')

router.route('/')
    .get(CategoryControllers.getCategories)
    .post(CategoryControllers.createCategory)

router.route('/:categoryId')
    .patch(CategoryControllers.updateCategory)
    .delete(CategoryControllers.deleteCategory)

module.exports = router