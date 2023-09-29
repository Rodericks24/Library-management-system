const express = require('express');
const router = express.Router();
const cors  = require('cors');
const {test,registerUser,loginUser,getProfile ,Adminlogin,bookcreate} = require('../controllers/authController')
router.use(
    cors({
    credentials:true,
    origin: 'http://localhost:3000'
})
)

router.get('/',test)
router.get('/profile',getProfile);
router.post('/register',registerUser)
router.post('/login',loginUser)
router.post ('/adminlogin',Adminlogin);
router.post('/createbook',bookcreate);
module.exports = router