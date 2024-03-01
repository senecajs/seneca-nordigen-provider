/* Copyright © 2022-2023 Seneca Project Contributors, MIT License. */

import * as Fs from 'fs'

import Seneca from 'seneca'
import SenecaMsgTest from 'seneca-msg-test'


import NordigenProvider from '../src/nordigen-provider'
import NordigenProviderDoc from '../src/NordigenProvider-doc'

const BasicMessages = require('./basic.messages.js')


// Don't run any tests requiring keys with Github Actions.
const CONFIG: any = {
  live$: false,
  keys: {
    secretId: { value: '<API-ID>' },
    secretKey: { value: '<API-KEY>' },
  }
}

if (Fs.existsSync(__dirname + '/local-config.js')) {
  Object.assign(CONFIG, require(__dirname + '/local-config.js'))
  CONFIG.live$ = true
}



describe('nordigen-provider', () => {

  test('happy', async () => {
    expect(NordigenProvider).toBeDefined()
    expect(NordigenProviderDoc).toBeDefined()

    const seneca = await makeSeneca()
    let sdk = seneca.export('NordigenProvider/sdk')()
    expect(sdk.baseUrl).toEqual('https://bankaccountdata.gocardless.com/api/v2')

    expect(await seneca.post('sys:provider,provider:nordigen,get:info'))
      .toMatchObject({
        ok: true,
        name: 'nordigen',
      })
  })


  test('messages', async () => {
    const seneca = await makeSeneca()
    await (SenecaMsgTest(seneca, BasicMessages)())
  })


  test('institution-list', async () => {
    if (false === CONFIG.live$) return;

    const seneca = await makeSeneca()
    const list = await seneca.entity("provider/nordigen/institution").list$({
      country: 'IE'
    })

    // console.log(list)

    expect(list.length > 0).toBeTruthy()
  })

})


async function makeSeneca() {
  const seneca = Seneca({ legacy: false })
    .test()
    .use('promisify')
    .use('entity')
    .use('env', {
      // debug: true,
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
    .use(NordigenProvider)

  return seneca.ready()
}
