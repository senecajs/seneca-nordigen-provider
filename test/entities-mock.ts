import {TestEntityMap} from "./types-mock"

let test_args = {
    token: {
        access: "123ABC",
        access_expires: 86400,
        refresh: "456DEF",
        refresh_expires: 2592000
    },
    institutionA: {
        id: "FakeBank123A",
        name: "Fake Bank A",
        bic: "ABC1DXXX",
        transaction_total_days: "500",
        countries: [
            "IE"
        ],
    },
    institutionB: {
        id: "FakeBank123B",
        name: "Fake Bank B",
        bic: "ABC2DXXX",
        transaction_total_days: "537",
        countries: [
            "FI"
        ],
    },
}

const entities_tests: TestEntityMap = {
    token: {
        load: {
            args: {
                token: test_args.token,
            },
            expectations: {
                token: {
                    sameAs: test_args.token,
                },
            },
        }
    },
    institution: {
        list: {
            args: {
                institution: [test_args.institutionA, test_args.institutionB],
            },
            expectations: {
                institution: {
                    sameAs: [test_args.institutionA, test_args.institutionB],
                },
            },
        },
        load: {
            args: {
                institution: test_args.institutionA,
            },
            expectations: {
                institution: {
                    sameAs: test_args.institutionA,
                },
            },
        }
    },
}

export {entities_tests}
