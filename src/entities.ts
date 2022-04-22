import {EntityMap} from './types'
import fields from './fields'

const entities: EntityMap = {
    institutions: {
        fields: fields.institution,
        sdk: {
            rest: {
                subpath: 'institution',
            }
        },
        actions: {
            load: {
                cb_name: 'getInstitutions',
            },
        },
    },
    institution: {
        fields: fields.institution,
        sdk: {
            rest: {
                subpath: 'institution',
            }
        },
        actions: {
            load: {
                cb_name: 'getInstitutionById',
            }
        },
    },
}

export {entities}
