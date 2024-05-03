const path = require("path");
// const os = require('os');
const fs = require("fs");
const resizeImg = require("resize-img");
const { app, BrowserWindow, Menu, ipcMain, shell } = require("electron");

const isDev = process.env.NODE_ENV !== "production";
const isMac = process.platform === "darwin";

let mainWindow;
let aboutWindow;

// Main Window
function createMainWindow() {
  mainWindow = new BrowserWindow({
    minWidth: 1000,
    height: 600,
    icon: `${__dirname}/assets/Brobob.jpg`,
    resizable: isDev,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: true,
      preload: path.join(__dirname, "preload.js"),
    },
  });

  // mainWindow.maximize();
  // mainWindow.removeMenu();

  mainWindow.loadFile(path.join(__dirname, "./src/renderer/loading.html"));

  //
}

// About Window
function createAboutWindow() {
  aboutWindow = new BrowserWindow({
    width: 300,
    height: 300,
    title: "About Electron",
    icon: `${__dirname}/assets/Brobob.jpg`,
  });

  aboutWindow.loadFile(path.join(__dirname, "./renderer/about.html"));
}

// When the app is ready, create the window
app.on("ready", () => {
  createMainWindow();

  const mainMenu = Menu.buildFromTemplate(menu);
  Menu.setApplicationMenu(mainMenu);

  // Remove variable from memory
  mainWindow.on("closed", () => (mainWindow = null));
});

// Menu template
const menu = [
  ...(isMac
    ? [
        {
          label: app.name,
          submenu: [
            {
              label: "About",
              click: createAboutWindow,
            },
          ],
        },
      ]
    : []),
  {
    role: "fileMenu",
  },
  ...(!isMac
    ? [
        {
          label: "Help",
          submenu: [
            {
              label: "About",
              click: createAboutWindow,
            },
          ],
        },
      ]
    : []),
  // {
  //   label: 'File',
  //   submenu: [
  //     {
  //       label: 'Quit',
  //       click: () => app.quit(),
  //       accelerator: 'CmdOrCtrl+W',
  //     },
  //   ],
  // },
  ...(isDev
    ? [
        {
          label: "Developer",
          submenu: [
            { role: "reload" },
            { role: "forcereload" },
            { type: "separator" },
            { role: "toggledevtools" },
          ],
        },
      ]
    : []),
];
   
// Quit when all windows are closed.
app.on("window-all-closed", () => {
  if (!isMac) app.quit();
});

// Open a window if none are open (macOS)
app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createMainWindow();
});
