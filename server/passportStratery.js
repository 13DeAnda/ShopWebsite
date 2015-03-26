var bCrypt = require('bcrypt-nodejs');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./user.js');

module.exports = function(passport) {

    passport.serializeUser(function(user, done) {
        done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
            done(err, user);
        });
    });

    passport.use('login', new LocalStrategy(
        {
            passReqToCallback: true
        },
        function(req, username, password, callback) {
            User.findOne(
                {
                    'username': username
                },
                function(err, user) {
                    if (err) {
                        return callback(err);
                    }

                    if (!user) {
                        console.log('user not found with username: '+username);
                        return callback(null, false, req.flash('message', 'User not found'));
                    }

                    if (!isValidPassword(user, password)) {
                        console.log('Invalid password');

                        return callback(null, false, req.flash('message', 'Invalid password'));
                    }

                    console.log('Login Successful');
                    return callback(null, user);
                }
            );
        })
    );

    var isValidPassword = function(user, password) {
        return bCrypt.compareSync(password, user.password);
    };

    passport.use('signup', new LocalStrategy({
            passReqToCallback: true
        },
        function(req, username, password, callback) {
            var findOrCreateUser = function () {
                User.findOne({'username': username}, function(err, user) {
                    if (err) {
                        console.log('Error in SignUp: '+err);
                        return callback(err);
                    }

                    if (user) {
                        console.log('User already exists');
                        return callback(true, false, req.flash('message', 'User Already Exists'));
                    }
                    else {
                        var newUser = new User();

                        newUser.username = username;
                        newUser.password = createHash(password);
                        newUser.companyId = -1;

                        newUser.save(function(err) {
                            if (err) {
                                console.log('Error in Saving User: '+err);
                                throw err;
                            }

                            console.log('User Registration Successful');
                            return callback(null, newUser);
                        });
                    }
                });
            };

            process.nextTick(findOrCreateUser);
        })
    );

    var createHash = function(password) {
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
    };
};