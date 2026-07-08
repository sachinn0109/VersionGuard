const compareButton = document.getElementById("compareBtn");
const status = document.getElementById("status");

compareButton.addEventListener("click", async () => {

    compareButton.disabled = true;

    status.innerText = "Comparing Stored Procedures...";

    try {

        await window.versionGuard.compare();

        status.innerText = "Comparison Completed Successfully.";

    } catch (error) {

        status.innerText = "Comparison Failed.";

        console.error(error);

    } finally {

        compareButton.disabled = false;

    }

});