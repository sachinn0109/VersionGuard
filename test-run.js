const { runComparison } = require('./src/index');

runComparison()
    .then(() => console.log("Test Completed"))
    .catch(console.error);