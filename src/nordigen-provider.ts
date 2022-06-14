/* Copyright © 2022 Seneca Project Contributors, MIT License. */

const Pkg = require('../package.json')
const { NordigenLoader } = require('../nordigen-loader.js')


type NordigenProviderOptions = {}


function NordigenProvider(this: any, options: NordigenProviderOptions) {
  const seneca: any = this

  const entityBuilder = this.export('provider/entityBuilder')


  seneca
    .message('sys:provider,provider:nordigen,get:info', get_info)


  async function get_info(this: any, _msg: any) {
    return {
      ok: true,
      name: 'nordigen',
      version: Pkg.version,
      sdk: {
        name: 'nordigen-node',
        version: Pkg.dependencies['nordigen-node'],
        baseUrl: this.shared.sdk?.baseUrl,
      }
    }
  }


  entityBuilder(this, {
    provider: {
      name: 'nordigen'
    },
    entity: {
      institution: {
        cmd: {
          list: {
            action: async function(this: any, entize: any, msg: any) {
              if (null == msg.q?.country) {
                return seneca.fail('no-country')
              }
              let res = await this.shared.sdk.institution.getInstitutions({
                country: msg.q.country
              })
              let list = res.map((data: any) => entize(data))
              return list
            }
          }
        }
      }
    }
  })


  seneca.prepare(async function(this: any) {
    const NordigenModule: any = await NordigenLoader
    const Nordigen = NordigenModule.default

    // TODO: define get:keys to get all the keys?
    let secretId =
      await this.post('sys:provider,get:key,provider:nordigen,key:secretId')
    let secretKey =
      await this.post('sys:provider,get:key,provider:nordigen,key:secretKey')

    let config = {
      secretId: secretId.value,
      secretKey: secretKey.value
    }


    this.shared.sdk = new Nordigen(config)
    await this.shared.sdk.generateToken()
  })


  return {
    exports: {
      sdk: () => this.shared.sdk
    }
  }

}


// Default options.
const defaults: NordigenProviderOptions = {

  // TODO: Enable debug logging
  debug: false
}


Object.assign(NordigenProvider, { defaults })

export default NordigenProvider

if ('undefined' !== typeof (module)) {
  module.exports = NordigenProvider
}
