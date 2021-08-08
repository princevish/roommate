const mongoose = require("mongoose");

const reviewsSchema = new mongoose.Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    room:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
    },
    comment:{
        type:String
    }
    

}, {
    timestamps: true
});

const Review = mongoose.model('Review', reviewsSchema);

module.exports = Review;