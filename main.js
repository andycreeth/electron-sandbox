const {app, BrowserWindow, dialog, ipcMain} = require('electron');
const fs = require('fs');

let mainWindow;

app.on('ready', function() {
  mainWindow = new BrowserWindow({ width: 800, height: 600 });

  mainWindow.loadURL('file://' + __dirname + '/index.html');
});

// File open handler
ipcMain.on('file-read', function(event, arg) {
  fs.readFile(arg, 'utf8', function(err, data) {
    event.returnValue = data;
  });
});




