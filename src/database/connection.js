// connection.js will connect to the database and export the connection object for use in other parts of the application.
/**
 * ==========================================
 * File Name : connection.js
 * Module    : Database
 * Purpose   : Connect VersionGuard to SQL Server
 * Author    : Sachin Jha
 * ==========================================
 */

const sql = require('mssql'); // meaning : the package we installed to connect to SQL Server is being imported here.
require('dotenv').config(); // meaning : the dotenv package is being imported here to load environment variables from a .env file.
//console.log(process.env.DB_SERVER); // meaning : the value of the DB_SERVER environment variable is being logged to the console for debugging purposes.
//console.log(process.env.DB_USER);
//console.log(process.env.DB_PASSWORD);
const config = {
    server: process.env.DB_SERVER,
    port: Number(process.env.DB_PORT),

    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,

    options: {
            encrypt: false,

        trustServerCertificate: process.env.DB_TRUST_SERVER_CERTIFICATE === "true"
    },
     connectionTimeout: 30000,
    requestTimeout: 30000
};

//console.log(config);
// meaning : the config object is being logged to the console for debugging purposes.
async function connectDatabase() {

    try {

        console.log("Connecting to SQL Server...");

        const pool = await sql.connect(config);

        console.log("Connected Successfully.");

        return pool;

    } catch (error) {

        console.log("Database Connection Failed");

        console.error(error.message);

        throw error;

    }

}

module.exports = { connectDatabase };