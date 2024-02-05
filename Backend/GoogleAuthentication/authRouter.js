const passport = require('passport');
const googleUserModel=require('../Models/googleUserModel');
require('./auth');
const express = require('express');
const ejs = require('ejs');
const jwt = require('jsonwebtoken');
// Import your User model or database schema

const authRouter = express.Router();


const GOOGLE_CALLBACK_URL = process.env.GOOGLE_CALLBACK_URL;
const JWT_SECRET = process.env.JWT_PASSCODE; // Replace with a strong and secure secret key

function isLogedIn(req, res, next) {
  req.user ? next() : res.sendStatus(401);
}

authRouter.get(
  '/google',
  passport.authenticate('google', { scope: ['email', 'profile'] })
);

authRouter.get('/google/callback', (req, res, next) => {
  passport.authenticate('google', async(err, user) => {
    if (err || !user) {
      return res.redirect('/auth/googlegnot'); // Redirect on failure
    }

    req.logIn(user, async (err) => {
      if (err) {
        return res.redirect('/auth/googlegnot'); // Redirect on login failure
      }

      // Generate a JWT token
      const token = jwt.sign({ userId: user.id,type:'google' }, JWT_SECRET);
      const check=await googleUserModel.findOne({userID:user.id});
      if(!check){
        const data= await googleUserModel({
          userName:user.displayName,email:user.email,userID:user.id,cart:[]
        })
        await data.save();
      }
     
      // Attach the token to the response
      res.cookie('sweton-token-authentication-user', token);

      // Send user details and token as JSON response
      res.json({ user: 'authenticated' });
    });
  })(req, res, next);
});

authRouter.get('/googleg', isLogedIn, (req, res) => {
  res.render('userDetails', { displayName: req.user.displayName });
});

// Set the view engine to EJS


authRouter.get('/googlegnot', (req, res) => {
  console.log('goognot');
  res.send('googlenot');
});


authRouter.get('/auth/userDetails', (req, res) => {
  // Check if the user is authenticated
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: 'Not authenticated' });
  }

  // Return user details
  res.json({ user: req.user });
});
module.exports = authRouter;