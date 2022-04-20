"use strict";
/* Copyright © 2021 Seneca Project Contributors, MIT License. */
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// TODO: namespace provider zone; needs seneca-entity feature
const nordigen_node_1 = __importDefault(require("nordigen-node"));
const cmd_handlers_1 = require("./cmd-handlers");
const entities_1 = require("./entities");
function NordigenProvider(_options) {
    const seneca = this;
    const ZONE_BASE = 'provider/nordigen/';
    let sdk = { nordigenClient: undefined };
    // NOTE: sys- zone prefix is reserved.
    add_actions();
    seneca
        .message('sys:provider,provider:nordigen,get:info', get_info);
    function add_actions() {
        const actions = prepare_actions(entities_1.entities);
        for (const action of actions) {
            switch (action.pattern.cmd) {
                case 'load':
                    seneca.message(action.pattern, make_load(action));
                    break;
            }
        }
    }
    function make_load(action) {
        return (0, cmd_handlers_1.make_actions)(action.sdk_params, action.action_details, sdk)['load'];
    }
    function prepare_actions(entities) {
        const actions_data = [];
        for (const [ent_name, data] of Object.entries(entities)) {
            const { actions } = data;
            data.name = ent_name;
            for (const [action_name, action_details] of Object.entries(actions)) {
                const pattern = {
                    name: ent_name,
                    cmd: action_name,
                    zone: 'provider',
                    base: 'nordigenClient',
                    role: 'entity',
                };
                actions_data.push({
                    pattern,
                    sdk_params: data.sdk,
                    action_details,
                });
            }
        }
        return actions_data;
    }
    async function get_info(_msg) {
        return {
            ok: true,
            name: 'nordigen',
            details: {
                sdk: 'nordigenClient'
            }
        };
    }
    seneca.prepare(async function () {
        let secretId = await this.post('sys:provider,get:key,provider:nordigen,key:secretId');
        let secretKey = await this.post('sys:provider,get:key,provider:nordigen,key:secretKey');
        if (!secretId.value || !secretKey.value) {
            this.fail('secretId or secretKey missing');
        }
        sdk.nordigenClient = new nordigen_node_1.default({ secretId: secretId.value, secretKey: secretKey.value });
    });
    return {
        exports: {
            native: () => ({
                nordigenClient: sdk.nordigenClient
            })
        }
    };
}
// Default options.
const defaults = {
    // TODO: Enable debug logging
    debug: false
};
Object.assign(NordigenProvider, { defaults });
exports.default = NordigenProvider;
if ('undefined' !== typeof (module)) {
    module.exports = NordigenProvider;
}
//# sourceMappingURL=nordigen-provider.js.map