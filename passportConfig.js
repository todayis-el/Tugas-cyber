const LocalStrategy = require('passport-local').Strategy;
const { pool } = require('./dbConfig');
const bcrypt = require('bcrypt');
const { authenticate, use } = require('passport');

function initialize(passport){

    const authenticateUser = (name, password, done)=> {
        pool.query(
            `SELECT * FROM users WHERE name = $1`, [name], (err,results)=>{
                if(err){
                    throw err;
                }

                console.log(results.rows);

                if(results.rows.length > 0){
                    const user = results.rows[0];

                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if(err){
                            throw err;
                        }
                        
                        if(isMatch){
                            return done(null, user);
                        }
                        else{
                            return done(null,false,{message:"Wrong password"});
                        }
                    })
                }
                else{
                    return done(null, false, {message:"Email not registered"});
                }
            }
        );
    };

    passport.use(new LocalStrategy({
        usernameField: "name",
        passwordField: "password"
    },
    authenticateUser
    ));

    passport.serializeUser((user, done)=> done(null, user.id));

    passport.deserializeUser((id, done)=>{
        pool.query(
            `SELECT * FROM users WHERE id = $1`, [id], (err, results)=>{
                if(err){
                    throw err;
                }
                return done(null, results.rows[0]);
            }
        );
    });
}

module.exports = initialize;