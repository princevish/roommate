var mongoose = require('mongoose');
const chatSchema = new mongoose.Schema({
    msg: [{
          to:{
              type:String
          },
          msg:{
              type:String
          },
          time:{
              type:String
          }
        }],
    userlist:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }],
    roomid:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Room'
    }
}, {
    timestamps: true
});

const Chat = mongoose.model('Chat', chatSchema);

module.exports = Chat;