var bCrypt = require('bcrypt-nodejs');
var db = require("../../models");
const Op = db.Sequelize.Op;

module.exports = function (passport, user) {

    var User = user;
    var LocalStrategy = require('passport-local').Strategy;

    passport.use('local-signup', new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },

        function (req, email, password, done) {
            var generateHash = function (password) {
                return bCrypt.hashSync(password, bCrypt.genSaltSync(8), null);
            };

            User.findOne({
                where: {
                    // email: email
                    [Op.or]: [{ email: email }, { username: req.body.username }]
                }
            }).then(function (user) {

                if (user) {
                    return done(null, false, {
                        message: 'That email or userid is already in use.'
                    });
                } else {
                    var userPassword = generateHash(password);
                    var data =
                    {
                        email: email,
                        username: req.body.username,
                        password: userPassword,
                        firstname: req.body.firstname,
                        lastname: req.body.lastname,
                        about: req.body.bio,
                        age: req.body.age,
                        city: req.body.city,
                        photo: req.body.file
                    };

                    User.create(data).then(function (newUser, created) {
                        if (!newUser) {
                            return done(null, false);
                        }

                        if (newUser) {
                            return done(null, newUser);
                        }
                    });

                }

            });
        }

    ));

    //serialize
    passport.serializeUser(function (user, done) {
        console.log("user", user.id);
        done(null, user.id);
       
    });

    // deserialize user 
    passport.deserializeUser(function (id, done) {
        User.findById(id).then(function (user) {
            if (user) {
                done(null, user.get());
            } else {
                done(user.errors, null);
            }
        });

    });

    //LOCAL SIGNIN
    passport.use('local-signin', new LocalStrategy(
        {
            // by default, local strategy uses username and password, we will override with email
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true // allows us to pass back the entire request to the callback
        },

        function (req, email, password, done) {
            var User = user;
            var isValidPassword = function (userpass, password) {
                return bCrypt.compareSync(password, userpass);
            }
            User.findOne({
                where: {
                    email: email
                }
            }).then(function (user) {
                if (!user) {
                    return done(null, false, {
                        message: 'User does not exist'
                    });
                }
                if (!isValidPassword(user.password, password)) {
                    return done(null, false, {
                        message: 'Incorrect password.'
                    });
                }
                var userinfo = user.get();
                return done(null, userinfo);
            }).catch(function (err) {
                console.log("Error:", err);
                return done(null, false, {
                    message: 'Something went wrong with your Signin'
                });
            });
        }

    ));

}

