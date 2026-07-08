const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { runComparison } = require('../src/index');

function createWindow() {
    const window = new BrowserWindow({
        width: 1000,
        height: 700,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    });

    window.loadFile(path.join(__dirname, '../ui/index.html'));
}

app.whenReady().then(() => {

    ipcMain.handle("compare", async () => {
        console.log("Starting VersionGuard...");
        try {
        await runComparison();
        console.log("VersionGuard Completed.");
        } catch (error) {
            console.error("Error during VersionGuard execution:", error);
        }

    });

    createWindow();

});