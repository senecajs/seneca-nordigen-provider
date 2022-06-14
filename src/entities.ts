import {EntityMap} from './types'
import fields from './fields'

const entities: EntityMap = {
    institution: {
        fields: fields.institution,
        sdk: {
            rest: {
                subpath: 'institution',
            }
        },
        actions: {
            list: {
                cb_name: 'getInstitutions',
            },
            load: {
                cb_name: 'getInstitutionById',
            }
        },
    },
    token: {
        fields: fields.token,
        sdk: {
            rest: {
                subpath: 'token',
            }
        },
        actions: {
            load: {
                cb_name: 'generateToken',
            }
        },
    },
}

export {entities}
