const createError = require("http-errors");
const Category = require("../models/Category.model");

module.exports = {
  getCategories: async (req, res, next) => {
    try {
      const allCategories = await Category.find();

      res.send(allCategories);
    } catch (error) {
      next(error);
    }
  },
  createCategory: async (req, res, next) => {
    try {
      const newCategory = new Category(req.body);

      const savedCategory = await newCategory.save();
      res.send({
        message: "Category saved!",
        category: savedCategory,
      });
    } catch (error) {
      next(error);
    }
  },
  updateCategory: async (req, res, next) => {
    try {
      const updatedCategory = await Category.findByIdAndUpdate({_id: req.params.categoryId}, req.body, { new: true })
      
      res.json({
        message: 'Category updated',
        updatedCategory: updatedCategory
      })
    } catch (error) {
      next(error);
    }
  },
  deleteCategory: async (req, res, next) => {
    try {
      const deletedCategory = await Category.findByIdAndDelete({ _id: req.params.categoryId })
      
      res.send({
        message: 'Category deleted',
        deletedCategory: deletedCategory
      })
    } catch (error) {
      next(error)
    }
  }
};
