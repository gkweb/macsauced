const {app, BrowserWindow, Tray} = require('electron')
const path = require('path')
const url = require('url')
const si = require('systeminformation')
var sudo = require('sudo-prompt')

// Generate new mac address here

function generateMac (device) {
  var options = {
    name: 'MacSauced',
    // icns: '/Applications/Electron.app/Contents/Resources/Electron.icns', // (optional)
  }
  sudo.exec('echo hello' + device, options, function(error, stdout, stderr) {
    if (error) console.log(error)

    console.log('Success???')
  })
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win

function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({
    width: 300,
    height: 300,
    darkTheme: true,
    transparent: true,
    alwaysOnTop: true,
    skipTaskbar: true,
    show: false,
    frame: false,
    icon: path.join(__dirname, '/components/app/icon64x64.png'),
    type: 'textured'
  })

  const tray = new Tray(path.join(__dirname, '/components/app/icon16x16bw.png'))

  tray.on('click', () => {
    toggleWindow()
  })

  const toggleWindow = () => {
    if (win.isVisible()) {
      win.hide()
    } else {
      showWindow()
    }
  }

  const showWindow = () => {
    const position = getWindowPosition()
    win.setPosition(position.x, position.y, false)
    win.show()
    win.focus()
  }
  // https://github.com/kevinsawicki/tray-example/blob/master/main.js
  const getWindowPosition = () => {
    const windowBounds = win.getBounds()
    const trayBounds = tray.getBounds()

    // Center window horizontally below the tray icon
    const x = Math.round(trayBounds.x + (trayBounds.width / 2) - (windowBounds.width / 2))

    // Position window 4 pixels vertically below the tray icon
    const y = Math.round(trayBounds.y + trayBounds.height + 4)

    return {x: x, y: y}
  }

  // and load the index.html of the app.
  win.loadURL(url.format({
    pathname: path.join(__dirname, '/components/app/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  // Open the DevTools.
  // win.webContents.openDevTools()

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null
  })
}

// Don't show the app in the doc
app.dock.hide()

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)


// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (win === null) {
    createWindow()
  }
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
