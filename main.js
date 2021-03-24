const { app, BrowserWindow } = require('electron')
function createWindow() {
    // Create the browser window.     
    win = new BrowserWindow({ width: 800, height: 600 });

    // and load the index.html of the app.     
    win.loadURL('http://localhost:3000/home');
    console.log('file loaded');
    win.once('ready-to-show', () => win.show());

}

console.log("start");
app.on('ready', createWindow)