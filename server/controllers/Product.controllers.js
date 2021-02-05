const Product = require("../models/Product.model");
const createError = require("http-errors");

module.exports = {
  getProducts: async (req, res, next) => {
    try {
      const products = await Product.find();
      res.send(products);
    } catch (error) {
      next(error);
    }
  },
  postProduct: async (req, res, next) => {
    try {
      const file = req.file;
      if (!file) throw createError("Please upload an image");

      // const photo = file.path
      console.log(req.file);

      const product = {
        title: req.body.title,
        decription: req.body.description,
        price: req.body.price,
        stock_quantity: req.body.stock_quantity,
        photo: req.file.filename,
      };

      const newProduct = new Product({
        ...product,
      });
      const savedProduct = await newProduct.save();

      res.send(savedProduct);
    } catch (error) {
      next(error);
    }
  },
  getOneProduct: async (req, res, next) => {
    try {
      const id = req.params.productId;
      const oneProduct = await Product.findById({ _id: id });
      res.send({
        message: "Here's a single product",
        Product: oneProduct,
      });
    } catch (error) {
      next(error);
    }
  },
  updateProduct: async (req, res, next) => {
    try {
      const id = req.params.productId;
      const product = req.body;
      const options = { new: true };
      const updatedProduct = await Product.findByIdAndUpdate(
        { _id: id },
        product,
        options
      );

      res.send({
        message: "Product updated successfully",
        updatedProduct: updatedProduct,
      });
    } catch (error) {
      next(error);
    }
  },
  deleteProduct: async (req, res, next) => {
    try {
      const id = req.params.productId
      await Product.findByIdAndDelete({ _id: id })
      res.send({
        message: 'Product deleted!'
      })
    } catch (error) {
      next(error);
    }
  },
};
