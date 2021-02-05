const createError = require('http-errors')
const Owner = require('../models/Owner.model')

module.exports = {
  getOwners: async (req, res, next) => {
    try {
      const allOwners = await Owner.find()

      res.send({
        Owners: allOwners
      })
  } catch (error) {
    next(error)
  }
  },
  createOwner: async (req, res, next) => {
    try {
      const newOwner = new Owner(req.body)

      const savedOwner = await newOwner.save()
      res.send({
        message: 'Owner saved successfully',
        Owner: savedOwner
      })
    } catch (error) {
      next(error)
    }
  },
  updateOwner: async (req, res, next) => {
    try {
      const id = req.params.ownerId
      const updatedOwner = await Owner.findByIdAndUpdate({ _id: id }, req.body, { new: true })
      
      res.send({
        message: 'Owner updated successfully',
        Owner: updatedOwner
      })
    } catch (error) {
      next(error)
    }
  },
  deleteOwner: async (req, res, next) => {
    try {
      const id = req.params.ownerId
      await Owner.findByIdAndDelete({ _id: id })
      res.send({message: 'Owner deleted!'})
    } catch (error) {
      next(error)
    }
  }
}