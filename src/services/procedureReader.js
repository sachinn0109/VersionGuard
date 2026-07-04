// procedureReader.js does know how to read the procedure from the database. It will use the connection.js file to connect to the database and then read the procedure from the database.
// It asks connection.js to connect to the database and then it will read the procedure from the database using the connection object returned by connection.js. It will then return the procedure text to the caller.
//procedureReader.js doesn't make connection to the database directly. It will use the connection.js file to connect to the database and then read the procedure from the database. It will then return the procedure text to the caller.
const sql = require("mssql");
const { connectDatabase } = require("../database/connection");
//  why this ../ is writeen in datbase/connection.js because the connection.js file is 
// in the database folder which is in the src folder. So we need to go up one level to src folder and then go to database folder to access the connection.js file.
async function readStoredProcedure(pool,procedureName) {

    const request = pool.request();

    const result = await request
        .input("procedureName", sql.NVarChar(256), procedureName)
        .query(`
            SELECT OBJECT_DEFINITION(
                OBJECT_ID(@procedureName)
            ) AS ProcedureText;
        `);

    // If the procedure text is null, it means that the procedure does not exist in the database. So we will return null to the caller.
    if (result.recordset[0].ProcedureText === null) {

        return null;

    }

    return result.recordset[0].ProcedureText;

}

module.exports = { readStoredProcedure };