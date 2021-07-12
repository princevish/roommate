const User = require("../models/usersModel");
const Room = require("../models/roomModel");
const { validationResult } = require("express-validator");
const fs = require("fs");

module.exports.getRoom = async (req, res) => {
  const roomuser = await Room.find({}).sort({'updatedAt':-1}).limit(Number(req.params.id)).populate("users");
  res.status(200).json({
    data: roomuser,
  });
};

module.exports.roomfav = async (req, res) => {
  const user = await User.findOne({ _id: req.userID });

  let listeoom = user.fav.map((e) => e);
  if (listeoom.includes(req.params.id)) {
    user.fav.pull(req.params.id);
    await user.save();
    res.status(201).json({
      data: user,
    });
  } else {
    user.fav.push(req.params.id);
    await user.save();
    res.status(200).json({
      data: user,
    });
  }
};

async function deletephoto(photos) {
  await fs.unlinkSync(photos);
  return;
}

module.exports.addRoom = async (req, res) => {
  try {
    /// validation check result
    const messages = [];
    if (!validationResult(req).isEmpty()) {
      // remove profile image
      const photo = req.files;

      if (photo.length != 0) {
        photo.map((item) => {
          const photos = `upload/room/${item.filename}`;
          deletephoto(photos);
        });
      }
      const errors = validationResult(req).array();
      for (const i of errors) {
        messages.push(i);
      }

      return res.status(303).json({
        message: messages,
      });
    }

    const { name, price, address, facility, description, details } = req.body;

    const createroom = await Room.create({
      name,
      price,
      address,
      facility,
      description,
      details,
    });
    const user = await User.findOne({ _id: req.userID });

    user.room.push(createroom._id);
    await user.save();

    createroom.users = req.userID;

    const image = req.files;
    image.map((item) => {
      
      createroom.images.push(`upload/room/${item.filename}`);
    });
    createroom.save();
    res.status(201).json({
      message: createroom,
    });
  } catch (err) {
    res.status(403).json({
      messages: err,
    });
    s;
  }
};

module.exports.roomview = async (req, res) => {
  try {
    const user = await Room.findOne({ _id: req.params.id }).populate("users");
    if(user==null){
       return res.status(404).json({
      data: "room not found"
    });
    }
    return res.status(200).json({
      data: user
    });
  } catch (e) {
    return res.status(404).json({
      data: e
    });
  }
};

module.exports.city = async (req, res) => {
  try {
    const user = await Room.find({
      "address.state": req.params.state,
      "address.city": req.params.city,
    }).sort({'updatedAt':-1}).populate("users");

    return res.status(200).json({
      data: user,
    });
  } catch (e) {
    return res.status(404).json({
      data: e,
    });
  }
};

module.exports.state = async (req, res) => {
  try {
    const user = await Room.find({
      "address.state": req.params.state,
    }).sort({'updatedAt':-1}).populate("users");

    return res.status(200).json({
      data: user,
    });
  } catch (e) {
    return res.status(404).json({
      data: e,
    });
  }
};

module.exports.roomdelete=async(req,res)=>{
  try {
    const room = await Room.findOne({
      _id: req.params.id
    });
 
    if(room.users == req.userID){
   
     await User.updateOne({ _id: req.userID },{"$pull": { "room": room._id}})
     room.remove();
      room.images.map((item) => {
          
          deletephoto(item);
        });
   return res.status(200).json({
      data: "delele room"
    });

    }
    

    return res.status(403).json({
      data: "user not allow to delele",
    });
  } catch (e) {
    return res.status(404).json({
      data: e,
    });
  }
}