const User = require("../models/users")
const bcrypt = require("bcryptjs")
const localStrategy = require("passport-local").Strategy;

//Configurations to use passport
module.exports = function(passport){
    passport.use(
        new localStrategy({usernameField: "email", passwordField: "password"}, (username, password, done) => {
            User.findOne({email: username}, (err, user) => {
                if(err) done(err);
                if(!user) done(null, false);
                bcrypt.compare(password, user.password, (err, result) =>{
                    if(err) throw err;
                    if(result === true){
                        return done(null, user)
                    } else {
                        return done(null, false)
                    }
                })
            })
        })
    )

    passport.serializeUser((user, cb) =>{
        cb(null, user.id);
    })

    passport.deserializeUser((id, cb) =>{
        User.findOne({_id: id}, (err, user)=>{
            cb(err, user)
        })
    })
}