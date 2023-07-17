const { app, BrowserWindow, ipcMain    } = require('electron');
const path = require('path');
const setupMenu = require('./src/view/menu.js');
let win;
let winForce;
const locale = app.getLocaleCountryCode();
console.log('<<<<<<<<<<<<<<<',locale);

require('electron-reload')(__dirname, {
  electron: path.join(__dirname, 'node_modules', '.bin', 'electron')
});

const createWindow = () => {
 win = new BrowserWindow({
    width: 800,
    height: 600,
    show:true,
     webPreferences: {
      nodeIntegration: true,
    // contextIsolation: false,
      preload: path.join(__dirname, 'preload.js'),
    }
  })
  
    
    win.loadFile('./src/view/index.html');
    win.on('closed', () => {
    win = null;
   
    if (winForce && !winForce.isDestroyed()) {
      // La ventana winForce está abierta
       winForce.close();
    } else {
      // La ventana winForce está cerrada
    }
  });

    ipcMain.on('abrirForce', () => {
      abrirForce();
    });

}



 function abrirForce() {
  let winForce = new BrowserWindow({
    parent:win,
    modal:true,
    show:false,
    width:300,
    height:300,
    webPreferences:{
      nodeIntegration: true,
    // contextIsolation: false,
      preload: path.join(__dirname, 'preload.js'),
    }
  })
  winForce.loadFile('./src/view/Force/force.html');
  winForce.setMenu(null);
  winForce.once('ready-to-show',()=>{
  winForce.show();
  });
}





app.whenReady().then(() => {
  ipcMain.handle('ping', () => 'oK');
  createWindow();
  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
     
  })

  setupMenu();

})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})


