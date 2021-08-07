const express = require("express");
const router = express.Router();
const auth = require("../config/auth");
//passport auth for header token verification
//const passport = require('passport');
//passport.authenticate('jwt', { session: false})
const User = require("../models/usersModel");
const Chat = require("../models/chatModel");
router.use("/room", require("./roomRoutes"));

router.get("/auth", auth, async (req, res, next) => {
  return res.status(200).json({
    id: req.userID,
  });
});

router.use("/users", require("./usersRoutes"));


router.get('/chataddlist',auth,async(req,res)=>{
  
  try{
    const user = await User.findById({ _id: req.userID }).populate({
      path: "chat",
      populate: "userlist",
    });
    return res.status(200).json({
      data: user.chat
    });
  }catch(e){
    console.log(e);
  }
})


router.get('/chatuser/:id',auth,async(req,res)=>{
  
  try{
    const user = await User.findById({ _id: req.params.id })
    return res.status(200).json({
      name:user.name,image:user.image
    });
  }catch(e){
    console.log(e);
  }
})

router.get('/chatadd/:id/:rid',auth,async(req,res)=>{

  try{
  const user = await User.findOne({ _id: req.userID });
  const finduser =await Chat.findOne({roomid:req.params.rid});
  if(req.userID === req.params.id){
    return res.status(200).json({
      data: "not posible self chat"
    });
  }
  if(!finduser){
    const userowner=await User.findOne({ _id: req.params.id});
    const chat2 = await Chat.create({roomid:req.params.rid})
    chat2.userlist.push(user);
    chat2.userlist.push(userowner);
    await chat2.save();
    user.chat.push(chat2);
    await user.save();
    userowner.chat.push(chat2);
    await userowner.save();
    return res.status(200).json({
      data: "ok"
    });
  }
  return res.status(201).json({
    data: "all ready chat"
  });
}catch(e){
  console.log(e);
}
});

router.get('/chat/:id',auth,async(req,res)=>{
  try{
    const user = await User.findById({ _id: req.userID }).populate({
      path: "chat",
      populate: "msg",
    });
    const user2 = await User.findById({ _id: req.params.id }).populate({
      path: "chat",
      populate: "msg",
    });
   
   const owner =user.chat.map(item=>item._id);
   const buyer = user2.chat.map(item=>item._id);
   const found = buyer.find( val => owner.includes(val) )
   const chatdata = await Chat.findById({ _id: found })
   return res.status(200).json({
     data: chatdata.msg
       });
 }catch(err){
   console.log(err)
   }
 
});

router.post('/chat/:id',auth,async(req,res)=>{
  try{
    const user = await User.findById({ _id: req.userID }).populate({
      path: "chat",
      populate: "msg",
    });
    const user2 = await User.findById({ _id: req.params.id }).populate({
      path: "chat",
      populate: "msg",
    });
   
   const datamsg =req.body
   const owner =user.chat.map(item=>item._id);
   const buyer = user2.chat.map(item=>item._id);
   const found = buyer.find( val => owner.includes(val) )
   const chatdata = await Chat.findById({ _id: found })
   chatdata.msg.push( datamsg.data);
   await chatdata.save();
   return res.status(200).json({
     data: chatdata.msg
       });
 }catch(err){
   console.log(err)
   }
 
});
  

router.use((req, res, next) => {
  res.status(404).json({ error: "url not found" });
});

module.exports = router;
