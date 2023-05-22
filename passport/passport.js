const passport = require('passport');
const User = require('../models/User');

// CHANGE: USE "createStrategy" INSTEAD OF "authenticate"
passport.use(User.createStrategy());

// for sessions
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());


//webtokens
var JwtStrategy = require('passport-jwt').Strategy,
    ExtractJwt = require('passport-jwt').ExtractJwt;
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'MySecretWord';

 passport.use(new JwtStrategy(opts, async (jwtPayload, done) => {
    try {
    const user = await User.findOne({ _id: jwtPayload.uid });
    
    if (user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (error) {
    return done(error, false);
  }
}));

module.exports = passport;