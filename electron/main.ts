import { app, screen, ipcMain, BrowserWindow, nativeImage } from 'electron'
import * as url from 'url'
import * as path from 'path'

function createWindow() {
  const icon = nativeImage.createFromPath(`${app.getAppPath()}/public/icon.png`)

  if(app.dock) {
    app.dock.setIcon(icon)
  }

  let windowMain: Electron.BrowserWindow | null = new BrowserWindow({
    icon,
    minWidth: 1000,
    minHeight: 600,
    frame: false,
    transparent: true,
    webPreferences: {
      nodeIntegration: true,
      // enableRemoteModule: true,
      contextIsolation: false
    }
  })

  ipcMain.on('close-window', () => {
    windowMain?.close();
  });

  ipcMain.on('minimize-window', () => {
    windowMain?.minimize();
  });

  ipcMain.on('maximize-window', () => {
    const { width: currentWidth, height: currentHeight }: any = windowMain?.getBounds()

    const {
      width: maxWidth,
      height: maxHeight
    } = screen.getPrimaryDisplay().workAreaSize

    const isMaximized = currentWidth === maxWidth && currentHeight === maxHeight

    if (!isMaximized) {
      windowMain?.maximize()
    } else {
      windowMain?.unmaximize()
    }
  });


  if(process.env.NODE_ENV === 'development') {
    windowMain.loadURL('http://localhost:4000')
  } else {
    windowMain.loadURL(
      url.format({
        pathname: path.join(__dirname, 'renderer/index.html'),
        protocol: 'file:',
        slashes: true
      })
    )
  }

  windowMain.on('closed', () => {
    windowMain = null
  })
}

app.on('ready', () => {
  createWindow()
})

