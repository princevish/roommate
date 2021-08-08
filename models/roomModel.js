const mongoose = require("mongoose");

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
    type: {
        type: String,

    },
    onlyfor: {
        type: String,

    },
    images: [{
        type: String
    }],
    reviews: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Review'
    }]


}, {
    timestamps: true
});

const roomModel = mongoose.model('Room', roomSchema);

module.exports = roomModel;