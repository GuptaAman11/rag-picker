const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Token = require('../models/token')
const crypto = require('crypto');
const sendEmail = require('../utils/sendEmail');



const register = async (req, res) => {
    const { email, name, password,location,image, mobile, typeOfUser} = req.body;
     try {
        if (!image || !email || !password || !name || !typeOfUser) {
            return res.json({ msg: "all fields are required" })
        }

        const existingUser = await User.findOne({ email: email })
        if (existingUser) {
           return res.json({ msg: "user already exists" })
        }

        const salt = await bcrypt.genSalt(Number(12));
		const hashPassword = await bcrypt.hash(req.body.password, salt); 
           const newUser = new User(
            {
                name: name,
                email: email,
                location:location,
                image:image,
                password: hashPassword,
                mobile:mobile,
                verified : false ,
                typeOfUser : typeOfUser 
            }

        )  
        await newUser.save();

        const token = await new Token({
            userId: newUser._id,
            token:crypto.randomBytes(32).toString("hex"),
        }).save();
        const url = `${process.env.BASE_URL}users/${newUser._id}/verify/${token.token}`;
        await sendEmail(newUser.email,"Verify Email",url);



        return res.json({ msg: "An Email is sent to your account, please verify" ,token:token , userId: newUser._id })
    } catch (error) {
        console.log(error)
       return res.json({ msg: error })
    }
}

const login = async (req, res) => {
    const { email, password,  typeOfUser } = req.body;
    try {
        if (!email || !password ||!typeOfUser) {
            return res.json({ mssg: "all fileds are required" })
        }

        const user = await User.findOne({ email: email, verified: true , typeOfUser : typeOfUser});
        if (!user) {
            return res.status(401).json({msg:"user not found"})
        }
        const comparepassword = await bcrypt.compare(password, user.password)
        if (comparepassword) {
            const token = jwt.sign({ user : user }, 'secret_key', { expiresIn: '1h' })
            console.log(token)
            return res.json({ mssg: "user logged in succesfully", user: user, token: token })
        }
        if (!user.verified){
                const token = await new Token({
                    userId: user._id,
                    token:crypto.randomBytes(32).toString("hex"),
                }).save();
                const url = `${process.env.BASE_URL}users/${user._id}/verify/${token.token}`;
                await sendEmail(user.email,"Verify Email",url);
                
                return res.status(400).send({message:"An email sent t your account please verify"});
        }

    } catch (error) {
        return res.json(error);
    }
}

const getAllUsers = async(req ,res) => {
    const user = req.user ;
    const keyword = req.querry.search 
    ? {
        $or : [
            {name : {$regrex : req.querry.search , $options : 'i'}} ,
            {email : {$regrex : req.querry.search , $options : 'i'}}
        ]
    } : {}
    const allUsers = await User.find(keyword).findIndex({_id : {$ne : user._id}})
    return res.json(allUsers) ;
}

module.exports = {
    register,
    login,
    getAllUsers
}
