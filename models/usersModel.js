var mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true

    },
    name: {
        type: String,
        required: true

    },
    mobile: {
        type: String,
        
    },
    password: {
        type: String,
        select: false,
        required: true
    },
    image: {
        type: String,
       
    },
    room: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
    }],
    fav: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room',
        unique: false
       
    }]


}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;