const { app, BrowserWindow, ipcMain } = require("electron");
const path = require("path");
let mainWindow = null;

const createWindow = () => {
  mainWindow = new BrowserWindow({
    width: 500,
    height: 1000,
  });
  //PROD - DELETE
  mainWindow.webContents.openDevTools();

  mainWindow.loadFile("index.html");
};

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

app.on("before-quit", async (event) => {});

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});
