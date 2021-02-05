const User = require('../models/User.model')
const crateError = require('http-errors')

module.exports = {
  getUsers: async (req, res, next) => {
		try {
			const users = await User.find()
			
			res.send(users)

		} catch (error) {
			next(error)
		}
	},
	createUser: async (req, res, next) => {
		try {
			const user = req.body
			console.log(user)
			const newUser = new User(user)

			const savedUser = await newUser.save()
			res.send(savedUser)
		} catch (error) {
			next(error)
		}
	}
};
