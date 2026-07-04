const fs = require("fs");

function writeReport(filePath, content) {

    fs.writeFileSync(filePath, content);

}

module.exports = { writeReport };