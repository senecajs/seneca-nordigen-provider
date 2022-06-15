
const Seneca = require('seneca')

Seneca({ legacy: false })
  .test()
  .use('promisify')
  .use('entity')
  .use('env', {
    debug: true,
    file: [__dirname + '/local-config.js;?'],
    var: {
      NORDIGEN_SECRET_ID: String,
      $NORDIGEN_SECRET_KEY: String,
    }
  })
  .use('provider', {
    provider: {
      nordigen: {
        keys: {
          secretId: { value: '$NORDIGEN_SECRET_ID' },
          secretKey: { value: '$NORDIGEN_SECRET_KEY' },
        }
      }
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
