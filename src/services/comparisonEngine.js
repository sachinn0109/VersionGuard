const { normalizeSql } = require("./sqlNormalizer");

function compareSql(databaseSql, fileSql) {

    const normalizedDatabase = normalizeSql(databaseSql);
    const normalizedFile = normalizeSql(fileSql);

    const result = {

        isSame: normalizedDatabase === normalizedFile,

        differences: []

    };

    if (!result.isSame) {

        const maxLength = Math.max(
            normalizedDatabase.length,
            normalizedFile.length
        );

        for (let i = 0; i < maxLength; i++) {

            if (normalizedDatabase[i] !== normalizedFile[i]) {

                // Line Number
                const lineNumber =
                    normalizedDatabase.substring(0, i).split("\n").length;

                // Last New Line Position
                const lastNewLine =
                    normalizedDatabase.lastIndexOf("\n", i);

                // Column Number
                const columnNumber =
                    i - lastNewLine;

                result.differences.push(
                    `Difference found at Line ${lineNumber}, Column ${columnNumber}`
                );

                const start = Math.max(0, i - 15);
                const end = i + 15;

                const databaseContext =
                    normalizedDatabase.substring(start, end);

                const fileContext =
                    normalizedFile.substring(start, end);

                result.differences.push(
                    `Database Context : ${databaseContext}`
                );

                result.differences.push(
                    `File Context : ${fileContext}`
                );

                break;

            }

        }

    }

    return result;

}

module.exports = { compareSql };