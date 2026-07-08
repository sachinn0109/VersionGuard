const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld("versionGuard", {

    compare: () => ipcRenderer.invoke("compare")

});