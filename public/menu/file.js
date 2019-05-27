const isMac = require('./helper');

const file = {
  label: 'File',
  submenu: [
    { label: 'New', accelerator: 'CmdOrCtrl+N' },
    { label: 'Open', accelerator: 'CmdOrCtrl+O' },
    { label: 'Save', accelerator: 'CmdOrCtrl+S' },
    { label: 'Save as ...', accelerator: 'CmdOrCtrl+Shift+S' },
    { role: isMac ? 'close' : 'quit' }
  ]
};

module.exports = file;