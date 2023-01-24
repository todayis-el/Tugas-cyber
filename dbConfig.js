require("dotenv").config();

const{Pool}= require("pg");

const isProduction = process.env.NODE_ENV === "production";

//const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
const connectionString = `postgresql://postgres:8DOC6NrNtwJs1nRcwPUY@containers-us-west-35.railway.app:5834/railway`;
const pool = new Pool({
    //connectionString: isProduction ? process.env.DATABASE_URL : connectionString
    connectionString: `postgresql://postgres:8DOC6NrNtwJs1nRcwPUY@containers-us-west-35.railway.app:5834/railway`
});

module.exports = { pool };
