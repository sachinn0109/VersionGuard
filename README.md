# VersionGuard

SQL Server Stored Procedure Comparison & Verification Tool

## Overview

VersionGuard is a Node.js-based utility that compares SQL Server stored procedures deployed in a database with SQL scripts available in the local project. It helps Development, QA, and Release teams identify mismatches before deployment, reducing production risks and improving release confidence.

The tool automates the verification process by comparing source-controlled SQL scripts with deployed database objects and generates a detailed comparison report for further analysis.

## Problem Statement

In enterprise applications, multiple developers often modify the same database objects. During deployments, stored procedures may become inconsistent because of version mismatches, missing deployments, or unintended changes.

Manual verification of every stored procedure is time-consuming and increases the possibility of deployment errors reaching production.

## Solution

VersionGuard automates stored procedure verification by reading SQL scripts from the local project, retrieving corresponding stored procedures from SQL Server, normalizing SQL content, comparing both versions, and generating a comparison report.

The generated report helps Development, QA, and Release teams identify mismatches before deployment.

## Core Features

- SQL Server Stored Procedure Comparison
- SQL Normalization
- Automated Comparison Engine
- Comparison Report Generation
- Modular Node.js Architecture
- QA-Oriented Verification
- Deployment Validation Support

  ## Technology Stack

- Node.js
- JavaScript
- SQL Server
- Git
- GitHub

- ## Architecture

The application follows a modular architecture where each component is responsible for a single task.

```text
                Local SQL Folder
                       │
                       ▼
               Folder Reader
                       │
                       ▼
                SQL File Reader
                       │
                       ▼
            SQL Normalization Engine
                       │
                       ▼
               Comparison Engine
                       ▲
                       │
      SQL Server Stored Procedures
                       ▲
                       │
             Database Connection
                       │
                       ▼
              Comparison Report
```
## Project Structure

```text
VersionGuard/
│
├── src/
│   ├── database/
│   │   └── connection.js
│   │
│   ├── services/
│   │   ├── comparisonEngine.js
│   │   ├── fileReader.js
│   │   ├── folderReader.js
│   │   ├── procedureReader.js
│   │   ├── reportWriter.js
│   │   └── sqlNormalizer.js
│   │
│   └── index.js
│
├── sql/
├── reports/
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```
## Installation

Clone the repository.

```bash
git clone https://github.com/sachinn0109/VersionGuard.git
```

Move to the project directory.

```bash
cd VersionGuard
```

Install dependencies.

```bash
npm install
```

## Configuration

Create a `.env` file in the project root.

Configure the following values:

```env
DB_SERVER=YOUR_SERVER
DB_DATABASE=YOUR_DATABASE
DB_USER=YOUR_USERNAME
DB_PASSWORD=YOUR_PASSWORD
```

> **Note:** Never commit the `.env` file to GitHub because it contains sensitive credentials.

## Usage

Run the application using:

```bash
node src/index.js
```

The application performs the following operations:

- Connects to SQL Server.
- Reads local SQL files.
- Retrieves stored procedures.
- Normalizes SQL.
- Compares both versions.
- Generates a comparison report.

  ## Sample Output

After successful execution, VersionGuard generates a comparison report similar to the following.

```text
===================================================

            VERSIONGUARD REPORT

===================================================

Procedure : USP_GetEmployee

Status : MATCHED

---------------------------------------------------

Procedure : USP_InsertEmployee

Status : MISMATCH FOUND

Reason :

Source SQL and Database Stored Procedure are different.

---------------------------------------------------

Procedure : USP_DeleteEmployee

Status : MATCHED

===================================================

Comparison Completed Successfully

===================================================
```

## Screenshots

The following screenshots demonstrate the application workflow.

### Project Structure

> Project directory in Visual Studio Code.

*(Screenshot will be added.)*

---

### Application Execution

> Terminal output after running the application.

*(Screenshot will be added.)*

---

### Comparison Report

> Sample report generated after comparison.

*(Screenshot will be added.)*

---

### GitHub Repository

> Public GitHub repository of VersionGuard.

*(Screenshot will be added.)*

## Business Value

VersionGuard provides practical benefits across Development, QA, and Release teams.

- Reduces manual SQL verification effort.
- Saves QA verification time.
- Saves developer effort during deployments.
- Detects deployment mismatches before production.
- Improves release confidence.
- Supports regression verification.
- Generates documented reports for audit purposes.
- Reduces operational costs by preventing deployment issues.
- Improves collaboration between Development, QA, and Release teams.

- ## Future Roadmap

The following enhancements are planned for future releases.

- AI-assisted SQL validation.
- HTML Dashboard.
- PDF and Excel report generation.
- Email notifications.
- Azure DevOps integration.
- Jenkins integration.
- Multi-environment support.
- Comparison history.

- ## Author

**Sachin Kumar Jha**

Quality Assurance Engineer

### Skills

- Manual Testing
- SQL Server
- API Testing
- JavaScript
- Node.js
- Git & GitHub
- Playwright

GitHub

https://github.com/sachinn0109

LinkedIn

https://www.linkedin.com/in/sachin-jha-a2950854

## License

This project is licensed under the MIT License.

You are free to use, modify, and distribute this project with proper attribution.

See the LICENSE file for complete license information.
