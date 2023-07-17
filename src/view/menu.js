const { app, Menu } = require('electron');

function setupMenu() {
  const template = [
    {
      label: 'Archivo',
      submenu: [
        {
          label: 'Nuevo',
          accelerator: 'CmdOrCtrl+N',
          click: () => {
            // Acción al hacer clic en "Nuevo"
          }
        },
        { type: 'separator' },
        {
          label: 'Salir',
          accelerator: 'CmdOrCtrl+Q',
          click: () => {
            // Acción al hacer clic en "Salir"
            app.quit();
          }
        }
      ]
    },
    {
      label: 'Procedimiento',
      submenu: [
        {
          label: 'Ver',
          click: () => {
            // Colocar función para visualizar el readme
          }
        }
      ]
    },
    {
      label: 'Acerca de',
      submenu: [
        {
          label: 'Créditos',
        },
    { type: 'separator' },
    {
      label: 'Inspeccionar elemento',
      accelerator: 'F12',
      click: (item, focusedWindow) => {
        if (focusedWindow) {
          focusedWindow.webContents.toggleDevTools();
        }
      }
    }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);
}

module.exports = setupMenu;
