const User = require("../models/usersModel");
const Room = require("../models/roomModel");
const { validationResult } = require("express-validator");
const cloudinary =require("../config/cloudinary");
const fs = require("fs");

module.exports.getRoom = async (req, res) => {
  try{
  const roomuser = await Room.find({}).sort({'updatedAt':-1}).limit(Number(req.params.id)).populate("users");
  res.status(200).json({
    data: roomuser,
  });}catch(e){
    res.status(404).json({
      data:e,
    });
  }
};

module.exports.gettype = async (req, res) => {
  try{
  const roomuser = await Room.find({type:req.params.type}).sort({'updatedAt':-1}).limit(Number(req.params.id)).populate("users");
  res.status(200).json({
    data: roomuser,
  });}catch(e){
    res.status(404).json({
      data:e,
    });
  }
};

module.exports.roomfav = async (req, res) => {
  try{
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
  }}catch(e) {
    res.status(404).json({
      data:e,
    });
  }
};

async function deletephoto(photos) {
  try{
  await fs.unlinkSync(photos);
  return;}
  catch(e) {
    res.status(404).json({
      data:e,
    });
  }
}

module.exports.addRoom = async (req, res) => {
  try {
    /// validation check result
    const messages = [];
    if (!validationResult(req).isEmpty()) {
      const errors = validationResult(req).array();
      for (const i of errors) {
        messages.push(i);
      }

      return res.status(303).json({
        message: messages,
      });
    }

    const { name, price, address, facility, description, details,type } = req.body;

    const createroom = await Room.create({
      name,
      price,
      address,
      facility,
      description,
      details,
      type
    });
    const user = await User.findOne({ _id: req.userID });

    user.room.push(createroom._id);
    await user.save();

    createroom.users = req.userID;
    const image = req.files;
    for(let file of image){
      const {path}= file
      let result = await cloudinary.uploader.upload(path);
      createroom.images.push(result.secure_url);
    }

    
   await createroom.save();
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