<<<<<<< HEAD
const express = require('express');
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
=======
const express = require("express");
const gravatar = require("gravatar");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
>>>>>>> 757de0d151d16936cea8f09960f76fa9d77fdcf6
const router = express.Router();
const User = require("../../models/User");
const keys = require('../../config/keys');
const passport = require('passport');

// @route   POST api/users/signup
// @desc    Register user
// @access  Public
<<<<<<< HEAD
router.post('/signup', (req, res) => {
  User.findOne({ email: req.body.email })
    .then(user => {
      if (user) {
        return res.status(400).json({ email: 'Email already exists' });
      } else {
        const avatar = gravatar.url(req.body.email, {
          s: '200',
          r: 'pg',
          d: 'mm'
        });

        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          avatar,
          password: req.body.password
        });

=======
router.post("/signup", (req, res) => {
  User.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        return res.status(400).json({ email: "Email already exists" });
      } else {
        const avatar = gravatar.url(req.body.email, {
          s: "200",
          r: "pg",
          d: "mm",
        });

        const newUser = new User({
          name: req.body.name,
          email: req.body.email,
          avatar,
          password: req.body.password,
        });

>>>>>>> 757de0d151d16936cea8f09960f76fa9d77fdcf6
        bcrypt.genSalt(10, (err, salt) => {
          if (err) throw err;

          bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;

            newUser.password = hash;
            newUser
              .save()
              .then((user) => res.json(user))
              .catch((err) => console.log(err));
          });
        });
      }
    })
<<<<<<< HEAD
    .catch(err => console.log(err));
})
=======
    .catch((err) => console.log(err));
});
>>>>>>> 757de0d151d16936cea8f09960f76fa9d77fdcf6

// @route   POST api/users/login
// @desc    Login user
// @access  Public

router.post('/login', (req,res) => {
  const email = req.body.email;
  const password = req.body.password;
  
  User.findOne({email})
    .then(user => {
      if(!user){
        return res.status(404).json({email: 'User not found'});
      }
      //check password
      bcrypt.compare(password, user.password)
        .then(isMatch => {
          if(isMatch){
           //Payload
           const payload = {id: user.id, name: user.name, avatar: user.avatar};
           //sign token
           jwt.sign(
             payload, 
             keys.secretOrKey, 
             {expiresIn: 3600}, 
             (err, token) => {
               return res.json({
                 token: 'Bearer ' + token
               });
             })

         } else {
           return res.status(400).json({password: 'Password incorrect'});
         }
       })
       
   })
   .catch();
})
// @route   GET api/users/current
// @desc    Return current user
// @access  Private
router.get('/current',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    return res.json({ msg: 'Success' });
  })

module.exports = router;