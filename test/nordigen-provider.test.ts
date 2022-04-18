/* Copyright © 2021 Seneca Project Contributors, MIT License. */

import * as Fs from 'fs'

import NordigenProvider from '../src/nordigen-provider'

const Seneca = require('seneca')
const SenecaMsgTest = require('seneca-msg-test')
const NordigenProviderMessages = require('./nordigen-provider.messages').default

const CONFIG: any = {}

if (Fs.existsSync(__dirname + '/local-config.js')) {
    Object.assign(CONFIG, require(__dirname + '/local-config.js'))
}

describe('nordigen-provider', () => {

    test('happy', async () => {
        const seneca = Seneca({legacy: false})
            .test()
            .use('promisify')
            .use('provider', {
                provider: {
                    nordigen: {
                        keys: {
                            secretId: {
                                value: CONFIG.id
                            },
                            secretKey: {
                                value: CONFIG.key
                            },
                        }
                    }
                }
            })
            .use(NordigenProvider)
        await seneca.ready()
    })


    test('messages', async () => {
        const seneca = Seneca({legacy: false})
            .test()
            .use('promisify')
            .use('provider', {
                provider: {
                    nordigen: {
                        keys: {
                            secretId: {
                                value: CONFIG.id
                            },
                            secretKey: {
                                value: CONFIG.key
                            },
                        }
                    }
                }
            })
            .use(NordigenProvider)
        await (SenecaMsgTest(seneca, NordigenProviderMessages)())
    })

    test('native', async () => {
        const seneca = Seneca({legacy: false})
            .test()
            .use('promisify')
            .use('provider', {
                provider: {
                    nordigen: {
                        keys: {
                            secretId: {
                                value: CONFIG.id
                            },
                            secretKey: {
                                value: CONFIG.key
                            },
                        }
                    }
                }
            })
            .use(NordigenProvider)
        await seneca.ready()

        let native = seneca.export('NordigenProvider/native')
        expect(native().nordigenClient).toBeDefined()
    })

    //
    // test('entity-load', async () => {
    //     const seneca = Seneca({legacy: false})
    //         .test()
    //         .use('promisify')
    //         .use('entity')
    //         .use('provider', {
    //             provider: {
    //                 github: {
    //                     keys: {
    //                         api: {
    //                             value: CONFIG.key
    //                         }
    //                     }
    //                 }
    //             }
    //         })
    //         .use(NordigenProvider)
    //
    //     let repo = await seneca.entity('provider/github/repo')
    //         .load$('senecajs/seneca')
    //     expect(repo).toBeDefined()
    //     expect(repo.id).toEqual('senecajs/seneca')
    //     expect(repo.name).toEqual('seneca')
    //     expect(repo.full_name).toEqual('senecajs/seneca')
    // })
    //
    //
    // test('entity-save', async () => {
    //     if (CONFIG.key) {
    //         const provider_options = {
    //             provider: {
    //                 github: {
    //                     keys: {
    //                         api: {
    //                             value: CONFIG.key
    //                         }
    //                     }
    //                 }
    //             }
    //         }
    //
    //         const seneca = Seneca({legacy: false})
    //             .test()
    //             .use('promisify')
    //             .use('entity')
    //             .use('provider', provider_options)
    //             .use(NordigenProvider)
    //
    //         let repo = await seneca.entity('provider/github/repo')
    //             .load$('senecajs/github-api-test')
    //         expect(repo).toBeDefined()
    //
    //         repo.description = repo.description + 'M'
    //
    //         repo = await repo.save$()
    //         expect(repo.description.endsWith('M')).toBeTruthy()
    //     }
    // })

})

