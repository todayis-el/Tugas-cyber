require("dotenv").config();

const{Pool}= require("pg");

const isProduction = process.env.NODE_ENV === "production";

//const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`;
const connectionString = `mysql://5j9oqoy6r6fs:pscale_pw_EM1bLYjmVUpt9jvhQtPoP_Auvp77ZWR29s113O2Qbjg@oc9e50ejz9kq.ap-southeast-2.psdb.cloud/nodelogin?ssl={"rejectUnauthorized":true}`;
const pool = new Pool({
    //connectionString: isProduction ? process.env.DATABASE_URL : connectionString
    connectionString: `mysql://5j9oqoy6r6fs:pscale_pw_EM1bLYjmVUpt9jvhQtPoP_Auvp77ZWR29s113O2Qbjg@oc9e50ejz9kq.ap-southeast-2.psdb.cloud/nodelogin?ssl={"rejectUnauthorized":true}`
});
//tes
module.exports = { pool };
