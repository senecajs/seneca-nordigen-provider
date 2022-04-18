/* Copyright © 2021 Seneca Project Contributors, MIT License. */


import NordigenClient from 'nordigen-node'


type NordigenProviderOptions = {}


function NordigenProvider(this: any, _options: any) {
    const seneca: any = this

    const ZONE_BASE = 'provider/nordigen/'

    let nordigenClient: NordigenClient


    // NOTE: sys- zone prefix is reserved.

    seneca
        .message('sys:provider,provider:nordigen,get:info', get_info)
    // .message('role:entity,cmd:load,zone:provider,base:nordigen,name:repo',
    //     load_repo)
    //
    // .message('role:entity,cmd:save,zone:provider,base:nordigen,name:repo',
    //     save_repo)


    async function get_info(this: any, _msg: any) {
        return {
            ok: true,
            name: 'nordigen',
            details: {
                sdk: 'nordigenClient'
            }
        }
    }

    // async function load_repo(this: any, msg: any) {
    //     let ent: any = null
    //
    //     let q: any = msg.q
    //     let [ownername, reponame]: [string, string] = q.id.split('/')
    //
    //     let res = await octokit.rest.repos.get({
    //         owner: ownername,
    //         repo: reponame,
    //     })
    //
    //     if (res && 200 === res.status) {
    //         let data: any = res.data
    //         data.nordigen_id = data.id
    //         data.id = q.id
    //         ent = this.make$(ZONE_BASE + 'repo').data$(data)
    //     }
    //
    //     return ent
    // }
    //
    //
    // async function save_repo(this: any, msg: any) {
    //     let ent: any = msg.ent
    //
    //     let [ownername, reponame]: [string, string] = ent.id.split('/')
    //
    //     let data = {
    //         owner: ownername,
    //         repo: reponame,
    //         description: ent.description
    //     }
    //
    //     let res = await octokit.rest.repos.update(data)
    //
    //     if (res && 200 === res.status) {
    //         let data: any = res.data
    //         data.nordigen_id = data.id
    //         data.id = ownername + '/' + reponame
    //         ent = this.make$(ZONE_BASE + 'repo').data$(data)
    //     }
    //
    //     return ent
    // }


    seneca.prepare(async function (this: any) {
        let secretId = await this.post('sys:provider,get:key,provider:nordigen,key:secretId')
        let secretKey = await this.post('sys:provider,get:key,provider:nordigen,key:secretKey')
        if (!secretId.value || !secretKey.value) {
            this.fail('secretId or secretKey missing')
        }
        nordigenClient = new NordigenClient({secretId: secretId.value, secretKey: secretKey.value})
    })


    return {
        exports: {
            native: () => ({
                nordigenClient
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
