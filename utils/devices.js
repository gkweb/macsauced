// let system = {}
//
// si.networkInterfaceDefault().then(
//   (data) => {
//     system.defaultNetworkDevice = data
//   }
// )

const devices = [
  "en0" : {
    name: 'en0',
    mac: {
      previous: '22:33:44:55:66:77'
    }
  },
  'll0': {
    name: 'll0',
    isDefault: false,
    mac: {
      previous: '22:33:44:55:66:77'
    }
  }
]

export default devices
