const router = require('express').Router()
const ProductControllers = require('../controllers/Product.controllers')
const multer = require("multer");
const config = require("../middleware/upload-photo");

// const config = multerConfig.multerConfig;
// console.log(config)

router.route('/')
    .get(ProductControllers.getProducts)
    .post(multer(config).single('photo'), ProductControllers.postProduct)
router.route("/:productId")
    .get(ProductControllers.getOneProduct)
    .patch(ProductControllers.updateProduct)
    .delete(ProductControllers.deleteProduct)

module.exports = router