// this file will give you the list of all the files in the given folder path. It will return an array of file names.
//this will not read content of file,datbase connect and compare the content of file with database procedure. It will just give you the list of files in the given folder path.
const fs = require("fs");

function readSqlFolder(folderPath) {

    const files = fs.readdirSync(folderPath);

    return files;

}

module.exports = { readSqlFolder };