"use strict";
/* Copyright © 2022 Seneca Project Contributors, MIT License. */
Object.defineProperty(exports, "__esModule", { value: true });
const Pkg = require('../package.json');
const { NordigenLoader } = require('../nordigen-loader.js');
function NordigenProvider(options) {
    const seneca = this;
    const entityBuilder = this.export('provider/entityBuilder');
    seneca
        .message('sys:provider,provider:nordigen,get:info', get_info);
    async function get_info(_msg) {
        return {
            ok: true,
            name: 'nordigen',
            version: Pkg.version,
            sdk: {
                name: 'nordigen-node',
                version: Pkg.dependencies['nordigen-node'],
                baseUrl: this.shared.sdk?.baseUrl,
            }
        };
    }
    entityBuilder(this, {
        provider: {
            name: 'nordigen'
        },
        entity: {
            institution: {
                cmd: {
                    list: {
                        action: async function (entize, msg) {
                            if (null == msg.q?.country) {
                                return seneca.fail('no-country');
                            }
                            let q = {
                                country: msg.q.country
                            };
                            let res = await this.shared.sdk.institution.getInstitutions(q);
                            if (res.status_code) {
                                seneca.fail('nordigen-api-fail', { section: 'institution', q });
                            }
                            else {
                                let list = res.map((data) => entize(data));
                                return list;
                            }
                        }
                    },
                    /*
          
                    load: {
                      action: async function(this: any, entize: any, msg: any) {
                        let q = { id: ... }
          
                        let res = await this.shared.sdk.institution.getInstitution(q)
          
                        if (res.status_code) {
                          seneca.fail('nordigen-api-fail', { section: 'institution', q })
                        }
          
                        return entize(res)
                      }
                    }
                    */
                }
            }
        }
    });
    seneca.prepare(async function () {
        const NordigenModule = await NordigenLoader;
        const Nordigen = NordigenModule.default;
        // TODO: define get:keys to get all the keys?
        let secretId = await this.post('sys:provider,get:key,provider:nordigen,key:secretId');
        let secretKey = await this.post('sys:provider,get:key,provider:nordigen,key:secretKey');
        let config = {
            secretId: secretId.value,
            secretKey: secretKey.value
        };
        this.shared.sdk = new Nordigen(config);
        await this.shared.sdk.generateToken();
    });
    return {
        exports: {
            sdk: () => this.shared.sdk
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