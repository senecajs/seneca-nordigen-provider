
const Seneca = require('seneca')

const Config = require('./local-config')
console.log(Config)

Seneca({ legacy: false })
  .test()
  .use('promisify')
  .use('entity')
  .use('provider', {
    provider: {
      nordigen: Config
    }
  })
  .use('../')
  .ready(async function() {
    const seneca = this

    // console.log('SDK:', seneca.export('NordigenProvider/sdk')())

    console.log(await seneca.post('sys:provider,provider:nordigen,get:info'))
    
    const list = await seneca.entity("provider/nordigen/institution").list$({
      country: 'IE'
    })
    
    console.log(list.slice(0,3))
  })
