const express =require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const port = 8000
const cookieParser = require('cookie-parser');
const {mongoose} =require('mongoose')
const app =express();
const userModel = require('./models/user')
const uri = process.env.DATABASE;
const bcrypt = require('bcrypt');
const Book = require('./models/book')
const AdminModel = require('./models/admin');
mongoose.connect(uri,{ useNewUrlParser:true ,useUnifiedTopology: true, })
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Error connecting to MongoDB:', error));


app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:false}));

app.use('/',require('./routes/authRoutes'))

// app.get ('/', async (req,res)=>{
//   try{
//     const username = "admin";
//     const password = "admin123"
//     const saltRounds = 10;
//     const hashPassword = await bcrypt.hash(password, saltRounds);

//     const admin = new AdminModel({
//       username: username,
//       password: hashPassword, 
//     });
//     await admin.save(); 

//     res.status(200).json({ message: 'create successful', admin: admin });
// }

// catch(err){
//     console.log(err);
// }
// })
  


app.get('/getData', (req, res) => {
    userModel.find()
        .then(users => res.json(users))
        .catch(err => res.status(500).json({ error: err.message }));
});

app.get('/getbook', (req, res) => {
  Book.find()
      .then(users => res.json(users))
      .catch(err => res.status(500).json({ error: err.message }));
});

app.get('/adminget',(req,res)=>{
  AdminModel.find()
  .then(users => res.json(users))
  .catch(err => res.status(500).json({ error: err.message }));
})


app.listen(port,()=>{
    console.log(`server started at ${port}`);
})