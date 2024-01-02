const passport = require('passport')
const passportJWT = require('passport-jwt')
const User = require('../model/modelAuth')

passport.use(
    new passportJWT.Strategy({
        jwtFromRequest : passportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey : "SECRET_KEY"
    },
        function(jwtpayload, done) {
            return User.findById(jwtpayload.id)
            .then(user => {
                return done(null, user)
            })
            .catch(error => {
                return done(error)
            })
        }
    )
)