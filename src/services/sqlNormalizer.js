function normalizeSql(sqlText) {

    return sqlText
        .replace(/\s+/g, " ") // this line says to replace all whitespace characters (spaces, tabs, newlines) with a single space.
        .trim();

}

module.exports = { normalizeSql }; 