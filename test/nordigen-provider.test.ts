/* Copyright © 2021 Seneca Project Contributors, MIT License. */

import * as Fs from 'fs'

import {entities_tests} from "./entities-mock"
import {set_mock_worker} from './set-mock-worker'
import mocks from './mocks'
import NordigenProvider from '../src/nordigen-provider'


const Seneca = require('seneca')
const SenecaMsgTest = require('seneca-msg-test')
const NordigenProviderMessages = require('./nordigen-provider.messages').default

const CONFIG: any = {}

if (Fs.existsSync(__dirname + '/local-config.js')) {
    Object.assign(CONFIG, require(__dirname + '/local-config.js'))
}

const worker = set_mock_worker(mocks)

beforeAll(() => worker.listen())
afterAll(() => worker.close())

const provider_options = {
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
}

describe('nordigen-provider', () => {

    test('happy', async () => {
        const seneca = Seneca({legacy: false})
            .test()
            .use('promisify')
            .use('provider', provider_options)
            .use(NordigenProvider)
        await seneca.ready()
    })


    test('messages', async () => {
        const seneca = Seneca({legacy: false})
            .test()
            .use('provider', provider_options)
            .use(NordigenProvider)
        await (SenecaMsgTest(seneca, NordigenProviderMessages)())
    })

    test('native', async () => {
        const seneca = Seneca({legacy: false})
            .test()
            .use('promisify')
            .use('provider', provider_options)
            .use(NordigenProvider)
        await seneca.ready()

        let native = seneca.export('NordigenProvider/native')
        expect(native().nordigenClient).toBeDefined()
    })
})

describe("institutions", () => {

    test(`list institutions`, async () => {
        const seneca = Seneca({legacy: false})
            .test()
            .use("promisify")
            .use("entity")
            .use("provider", provider_options)
            .use(NordigenProvider)

        const list_test_data = entities_tests.institutions.list
        let res_data = await seneca.entity("provider/nordigenClient/institutions").list$(list_test_data.args)

        expect(res_data.entity$).toBe("provider/nordigenClient/institutions")

        const expectations = list_test_data.expectations
        expect(expectations.institutions.sameAs).toEqual(res_data.res)
    })

    test('load institution', async () => {
        const seneca = Seneca({legacy: false})
            .test()
            .use("promisify")
            .use("entity")
            .use("provider", provider_options)
            .use(NordigenProvider)

        const load_test_data = entities_tests.institutions.load
        let res_data = await seneca.entity("provider/nordigenClient/institutions").load$(load_test_data.args)

        expect(res_data.entity$).toBe("provider/nordigenClient/institutions")

        const expectations = load_test_data.expectations
        expect(expectations.institution.sameAs).toEqual(res_data.res)
    })
})

describe("token", () => {
    test('load token', async () => {
        const seneca = Seneca({legacy: false})
            .test()
            .use("promisify")
            .use("entity")
            .use("provider", provider_options)
            .use(NordigenProvider)

        const load_test_data = entities_tests.token.load
        let res_data = await seneca.entity("provider/nordigenClient/token").load$(load_test_data.args)
        expect(res_data.entity$).toBe("provider/nordigenClient/token")

        const expectations = load_test_data.expectations
        expect(expectations.token.sameAs).toEqual(res_data.res)
    })
})
