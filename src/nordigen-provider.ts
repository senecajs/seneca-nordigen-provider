/* Copyright © 2021 Seneca Project Contributors, MIT License. */


// TODO: namespace provider zone; needs seneca-entity feature

import NordigenClient from 'nordigen-node'
import {make_actions} from './cmd-handlers'
import {entities} from './entities'
import {ActionData, EntityMap} from './types'

type NordigenProviderOptions = {}

function NordigenProvider(this: any, _options: any) {
    const seneca: any = this

    const ZONE_BASE = 'provider/nordigen/'

    let sdk: Record<string, any> = {nordigenClient: undefined}


    // NOTE: sys- zone prefix is reserved.

    add_actions()
    seneca
        .message('sys:provider,provider:nordigen,get:info', get_info)

    function add_actions() {
        const actions = prepare_actions(entities)

        for (const action of actions) {
            switch (action.pattern.cmd) {
                case 'load':
                    seneca.message(action.pattern, make_load(action))
                    break
            }
        }
    }

    function make_load(action: ActionData) {
        return make_actions(
            action.sdk_params,
            action.action_details,
            sdk
        )['load']
    }

    function prepare_actions(entities: EntityMap): Array<ActionData> {
        const actions_data = []

        for (const [ent_name, data] of Object.entries(entities)) {
            const {actions} = data
            data.name = ent_name

            for (const [action_name, action_details] of Object.entries(actions)) {
                const pattern = {
                    name: ent_name,
                    cmd: action_name,
                    zone: 'provider',
                    base: 'nordigenClient',
                    role: 'entity',
                }

                actions_data.push({
                    pattern,
                    sdk_params: data.sdk,
                    action_details,
                })
            }
        }

        return actions_data
    }


    async function get_info(this: any, _msg: any) {
        return {
            ok: true,
            name: 'nordigen',
            details: {
                sdk: 'nordigenClient'
            }
        }
    }

    seneca.prepare(async function (this: any) {
        let secretId = await this.post('sys:provider,get:key,provider:nordigen,key:secretId')
        let secretKey = await this.post('sys:provider,get:key,provider:nordigen,key:secretKey')
        if (!secretId.value || !secretKey.value) {
            this.fail('secretId or secretKey missing')
        }
        sdk.nordigenClient = new NordigenClient({secretId: secretId.value, secretKey: secretKey.value})
    })


    return {
        exports: {
            native: () => ({
                nordigenClient: sdk.nordigenClient
            })
        }
    }
}


// Default options.
const defaults: NordigenProviderOptions = {

    // TODO: Enable debug logging
    debug: false
}


Object.assign(NordigenProvider, {defaults})

export default NordigenProvider

if ('undefined' !== typeof (module)) {
    module.exports = NordigenProvider
}
