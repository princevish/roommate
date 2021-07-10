const mongoose = require("mongoose");
const User = require('../models/usersModel');
const roomSchema = new mongoose.Schema({
    name: {
        type: String,

    },
    price: {
        type: String,

    },
    address: {
        add: {
            type: String,

        },
        city: {
            type: String,

        },
        state: {
            type: String,

        },

    },
    facility:{
        wifi:{
            type:Boolean,
            default: false
        },
        food:{
            type:Boolean,
            default: false

        },
        water:{
            type:Boolean,
            default: false
        },
        electric:{
            type:Boolean,
            default: false
        }
    },
     details: {
        bathrooms: {
            type: Number,
        },
        rooms: {
            type: Number,
        },
        kitchen:{
            type: Number,
        },
        parking: {
            type: Number,

        },

    },
    users: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    description: {
        type: String,

    },
    images: [{
        type: String
    }]

}, {
    timestamps: true
});

const roomModel = mongoose.model('Room', roomSchema);

module.exports = roomModel;