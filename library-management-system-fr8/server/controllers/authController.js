const User = require('../models/user')
const AdminModel = require('../models/admin')
const Book = require('../models/book')
const {hashPassword,comparePassword} =require('../helpers/auth')
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const test = (req,res)=>{
    res.json('test is working')
}

const registerUser = async(req,res)=>{
    try{
        const {name,email,password} = req.body;
        if(!name){
            return res.json({
                error: 'name is required'
            })
        }
        if(!password || password.length < 8){
            return res.json({
                error: 'password is required and should at least 6 characters'
            })
        }
        const exist = await User.findOne({email});
        if(exist){
            return res.json({
                error:'email is taken already'
            })
        }

        const hashPass= await hashPassword(password)
        const user = await User.create({
            name,
            email,
            password: hashPass,
        })
        return res.json(user)
    }
    catch(err){
        console.log(err);
    }
}


const loginUser = async (req,res)=>{
    try{
        const {email,password} =req.body;

        const user = await User.findOne({email});
        if(!user){
            return res.json({
                error: 'no user found'
            })
        }
        const match = await comparePassword(password,user.password)
        if(match){
            jwt.sign({email: user.email,id: user._id,name: user.name},process.env.JWT_SECRET,{},(err,token)=>{
                if(err) throw err;
                res.cookie('token',token).json(user);
            })
        }
        if(!match){
            res.json({
                error: 'password do not match'
            })
        }
    }
    catch(err){
        console.log(err)
    }
}



const Adminlogin = async (req,res)=>{
    const { username, password } = req.body;

    try {
      const user = await UserModel.findOne({ username });
  
      if (!user) {
        return res.status(401).json({ message: 'Authentication failed' });
      }
  
      const passwordMatch = await bcrypt.compare(password, user.password);
  
      if (!passwordMatch) {
        return res.status(401).json({ message: 'Authentication failed' });
      }
  
     
      res.status(200).json({ message: 'Authentication successful' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
}

const bookcreate = async (req,res)=>{
    try {
        const { title, author, description ,imageUrl} = req.body;
        const book = new Book({ title, author, description,imageUrl });
        await book.save();
        res.status(201).json(book);
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
      }
}

const getProfile =(req,res)=>{
const {token } = req.cookies
if(token){
    jwt.verify(token,process.env.JWT_SECRET,{},(err,user)=>{
        if(err) throw err;
        res.json(user)
    })
}
else{
    res.json(null)
}
}

module.exports ={test,registerUser,loginUser,getProfile,Adminlogin,bookcreate};