const fs = require("fs");

async function readSqlFile(filePath) {

const sqlText = await fs.promises.readFile(filePath, "utf8"); // open the file, read the content and return string.
// utf8 is the encoding format used to read the file content as a string.
return sqlText;

}
module.exports = { readSqlFile };