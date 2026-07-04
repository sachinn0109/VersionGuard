/**
 * ==========================================
 * File Name : index.js
 * Module    : Entry Point
 * Purpose   : Start VersionGuard
 * Author    : Sachin Jha
 * ==========================================
 */

const { readStoredProcedure } = require("./services/procedureReader");
const { readSqlFile } = require("./services/fileReader");
const { compareSql } = require("./services/comparisonEngine");
const { readSqlFolder } = require("./services/folderReader");
const { connectDatabase } = require("./database/connection");
const { writeReport } = require("./services/reportWriter");

async function main() {
    const startTime = Date.now();

    console.log("=================================");
    console.log("      VersionGuard v1.0");
    console.log("=================================\n");

    const pool = await connectDatabase();

    const sqlFiles = readSqlFolder("./sql");

    let matchedCount = 0;
    let differentCount = 0;
    let missingProcedureCount = 0;

    let report = "";

    console.log(sqlFiles);

    for (const file of sqlFiles) {

        console.log(`\nProcessing : ${file}`);

        const procedureName =
            "dbo." + file.replace(".sql", "");

        console.log(procedureName);

        const databaseProcedure =
            await readStoredProcedure(pool, procedureName);

        if (!databaseProcedure) {

            console.log("Stored Procedure Not Found");

            report += `Processing : ${file}\n`;
            report += "Status : STORED PROCEDURE NOT FOUND\n\n";

            missingProcedureCount++;

            continue;

        }

        const sqlFile =
            await readSqlFile(`./sql/${file}`);

        const comparisonResult =
            compareSql(databaseProcedure, sqlFile);

        console.log(comparisonResult);

        report += `Processing : ${file}\n`;

        if (comparisonResult.isSame) {

            report += "Status : MATCHED\n\n";

            matchedCount++;

        } else {

            report += "Status : DIFFERENT\n";
            report += comparisonResult.differences.join("\n");
            report += "\n\n";

            differentCount++;

        }

    }

    console.log("\n=================================");
    console.log("      VersionGuard Summary");
    console.log("=================================");

    console.log(`Total SQL Files      : ${sqlFiles.length}`);
    console.log(`Matched              : ${matchedCount}`);
    console.log(`Different            : ${differentCount}`);
    console.log(`Missing Procedures   : ${missingProcedureCount}`);

    console.log("=================================");

    report += "=================================\n";
    report += "VersionGuard Summary\n";
    report += "=================================\n";
    report += `Total SQL Files      : ${sqlFiles.length}\n`;
    report += `Matched              : ${matchedCount}\n`;
    report += `Different            : ${differentCount}\n`;
    report += `Missing Procedures   : ${missingProcedureCount}\n`;
    report += "=================================\n";

    writeReport("./reports/comparison.txt", report);
    const endTime = Date.now(); 

    console.log("\n=================================");
    console.log(" Comparison Completed Successfully");
    console.log(" Report Saved : ./reports/comparison.txt");
    console.log("=================================");

}

main();