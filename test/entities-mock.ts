import {TestEntityMap} from "./types-mock"

let test_args = {
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
    // institutions: {
    //     load: {
    //         args: {
    //             institution_a: test_args.institutionA,
    //             institution_b: test_args.institutionB,
    //         },
    //         expectations: {
    //             idA: {
    //                 sameAs: test_args.institutionA.id,
    //             },
    //             idB: {
    //                 sameAs: test_args.institutionB.id,
    //             }
    //         },
    //     },
    // },
    institution: {
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
