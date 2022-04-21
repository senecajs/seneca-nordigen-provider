import {TestEntityMap} from "./types-mock"

let test_args = {
    institution_id: "REVOLUT_REVOGB21",
}

const entities_tests: TestEntityMap = {
    institutions: {
        load: {
            args: {
                institution_id: test_args.institution_id,
            },
            expectations: {
                id: {
                    sameAs: test_args.institution_id,
                },
            },
        },
    },
}

export {entities_tests}
