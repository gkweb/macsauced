var sudo = require('sudo-prompt')

// Generate new mac address here
var exports = module.exports = {}

exports.generateMac = function (device) {
  var options = {
    name: 'MacSauced',
    // icns: '/Applications/Electron.app/Contents/Resources/Electron.icns', // (optional)
  }

  // let Result = new Promise ((resolve, reject) => {
  //
  //
  // })

  if (typeof device === 'string') sudo.exec('openssl rand -hex 6 | sed "s/\(..\)/\1:/g;s/.$//" | xargs sudo ifconfig '+ device + ' ether', options, function(error, stdout, stderr) {
  if (error) console.log(error)

    console.log('Success???')
  })
}
