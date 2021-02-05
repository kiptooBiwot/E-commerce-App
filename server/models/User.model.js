const { Schema, model } = require('mongoose')

const UserSchema = new Schema({
    name: String,
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address: {type: Schema.Types.ObjectId, ref: 'Address'}
})

module.exports = model('User', UserSchema)