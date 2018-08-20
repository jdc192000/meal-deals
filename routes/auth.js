var authController = require('../controllers/authcontroller.js');
var db = require('../models');

module.exports = function (app, passport) {
    app.get('/signup', authController.signup);

    app.get('/signin', authController.signin);

    app.post('/signup', passport.authenticate('local-signup', {
        successRedirect: '/profile',
        failureRedirect: '/signup',
        failureFlash: true
    }
    ));

    app.post('/signin', passport.authenticate('local-signin', {
        successRedirect: '/profile',
        failureRedirect: '/signin',
        failureFlash: 'Invalid username or password.' 
    }

    ));

    app.get('/profile', isLoggedIn, authController.dashboard);

    // app.get('/event', isLoggedIn, authController.dashboard);

    app.get('/logout', authController.logout);

    function isLoggedIn(req, res, next) {
        if (req.isAuthenticated())
            return next();
        res.redirect('/signin');
    }

}

