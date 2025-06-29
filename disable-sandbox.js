// disable-sandbox.js
const fs = require('fs');
const path = require('path');

exports.default = async function(context) {
  const appPath = context.appOutDir;
  const chromeSandbox = path.join(appPath, 'chrome-sandbox');
  if (fs.existsSync(chromeSandbox)) {
    fs.unlinkSync(chromeSandbox); // remove problematic binary
  }
};
