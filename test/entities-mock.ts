import crypto from "crypto"
import {TestEntityMap} from "./types-mock"

let test_args = {
    institution_id: "FakeBank123",
    institution_name: 'Fake Bank'
}

const rand = crypto.randomBytes(10).toString("hex")

const entities_tests: TestEntityMap = {
    institution: {
        load: {
            args: {
                institution_id: test_args.institution_id,
            },
            expectations: {
                id: {
                    sameAs: test_args.institution_id,
                },
                institution_name: {
                    sameAs: test_args.institution_name
                },
            },
        },
    },
}

export {entities_tests}
