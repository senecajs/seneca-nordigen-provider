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
                cb_name: 'getInstitutionById',
                after: [
                    {on: 'outent', field: 'id', set: {query: 'institution_id'}},
                    {on: 'outent', field: 'institution_id', set: {query: 'institution_id'}},
                    {on: 'outent', field: 'institution_id', set: {response: 'id'}},
                ]
            },
        },
    },
    // accountMetaData: {
    //     fields: fields.account,
    //     sdk: {
    //         rest: {
    //             subpath: 'account',
    //         }
    //     },
    //     actions: {
    //         load: {
    //             cb_name: 'getAccountMetaData',
    //             after: [
    //                 {on: 'outent', field: 'id', set: {query: 'account_id'}},
    //                 {on: 'outent', field: 'account_id', set: {query: 'account_id'}},
    //                 {on: 'outent', field: 'account_id', set: {response: 'id'}},
    //             ]
    //         },
    //     },
    // },
    // accountDetails: {
    //     fields: fields.account,
    //     sdk: {
    //         rest: {
    //             subpath: 'account',
    //         }
    //     },
    //     actions: {
    //         load: {
    //             cb_name: 'getAccountDetails',
    //             after: [
    //                 {on: 'outent', field: 'id', set: {query: 'account_id'}},
    //                 {on: 'outent', field: 'account_id', set: {query: 'account_id'}},
    //                 {on: 'outent', field: 'account_id', set: {response: 'id'}},
    //             ]
    //         },
    //     },
    // },
    // accountBalances: {
    //     fields: fields.account,
    //     sdk: {
    //         rest: {
    //             subpath: 'account',
    //         }
    //     },
    //     actions: {
    //         load: {
    //             cb_name: 'getAccountBalance',
    //             after: [
    //                 {on: 'outent', field: 'id', set: {query: 'account_id'}},
    //                 {on: 'outent', field: 'account_id', set: {query: 'account_id'}},
    //                 {on: 'outent', field: 'account_id', set: {response: 'id'}},
    //             ]
    //         },
    //     },
    // },
    // accountTransactions: {
    //     fields: fields.account,
    //     sdk: {
    //         rest: {
    //             subpath: 'account',
    //         }
    //     },
    //     actions: {
    //         load: {
    //             cb_name: 'getAccountTransaction',
    //             after: [
    //                 {on: 'outent', field: 'id', set: {query: 'account_id'}},
    //                 {on: 'outent', field: 'account_id', set: {query: 'account_id'}},
    //                 {on: 'outent', field: 'account_id', set: {response: 'id'}},
    //             ]
    //         },
    //     },
    // },
    // agreement: {
    //     fields: fields.agreement,
    //     sdk: {
    //         rest: {
    //             subpath: 'agreement',
    //         }
    //     },
    //     actions: {
    //         load: {
    //             cb_name: 'getAgreementById',
    //             after: [
    //                 {on: 'outent', field: 'id', set: {query: 'agreement_id'}},
    //                 {on: 'outent', field: 'agreement_id', set: {query: 'agreement_id'}},
    //                 {on: 'outent', field: 'agreement_id', set: {response: 'id'}},
    //             ]
    //         },
    //         save: {
    //             cb_name: 'creatAgreement',
    //             after: [],
    //             body_args: ['max_historical_days', 'access_valid_for_days', 'access_scope', 'institution_id']
    //         },
    //         update: {
    //             cb_name: 'acceptAgreement',
    //             after: [
    //                 {on: 'outent', field: 'id', set: {query: 'agreement_id'}},
    //                 {on: 'outent', field: 'agreement_id', set: {query: 'agreement_id'}},
    //                 {on: 'outent', field: 'agreement_id', set: {response: 'id'}},
    //             ],
    //             body_args: ['user_agent', 'ip_address']
    //         },
    //         delete: {
    //             cb_name: 'deleteAgreement',
    //             after: [
    //                 {on: 'outent', field: 'id', set: {query: 'agreement_id'}},
    //                 {on: 'outent', field: 'agreement_id', set: {query: 'agreement_id'}},
    //                 {on: 'outent', field: 'agreement_id', set: {response: 'id'}},
    //             ]
    //         },
    //     },
    // },
    // agreements: {
    //     fields: fields.agreement,
    //     sdk: {
    //         rest: {
    //             subpath: 'agreement',
    //         }
    //     },
    //     actions: {
    //         load: {
    //             cb_name: 'getAgreements',
    //             after: [
    //                 {on: 'outent', field: 'id', set: {query: 'agreement_id'}},
    //                 {on: 'outent', field: 'agreement_id', set: {query: 'agreement_id'}},
    //                 {on: 'outent', field: 'agreement_id', set: {response: 'id'}},
    //             ]
    //         },
    //     },
    // },

}

export {entities}
