const express = require("express");
const dotenv = require('dotenv');
const cors = require('cors');
const register = require('./Modules/Register');
const login = require('./Modules/Login')
const app = express();
const authenticate = require('./Modules/Authenticate');
const forgotpassword = require("./Modules/Forgotpassword");
const resetpassword = require("./Modules/Resetpassword");
const changepassword = require("./Modules/Changepassword");
const getUser = require("./Modules/Getuser");

dotenv.config();
app.use(express.json());
app.use(cors({
    origin: '*'
}));

const PORT = process.env.PORT
app.get("/",(req,res)=>{
res.send("hello manish")})
//Create User
app.post('/register', register)
//Login
app.post('/login', login)
//Homepage
app.get('/user', authenticate, getUser)
//Forgotpassword
app.post('/forgotpassword', forgotpassword);
//reset password
app.post('/resetpassword', resetpassword)
//Change password
app.post('/changepassword', changepassword)

app.listen(PORT, () => console.log(`App is running in ${PORT}`))


// var arr=[56,73,12,31,7,17];
// console.log(arr.filter(e => e<=18));
// var arr=[12,31,7];
// sum=0;
// console.log(arr.reduce((sum,e) => sum+=e));
