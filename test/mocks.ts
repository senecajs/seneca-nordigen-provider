export default {
    institution: {
        get: {
            method: "GET",
            url: "/institutions/:id",
            mock_data: {
                id: "FakeBank123A",
                name: "Fake Bank A",
                bic: "ABC1DXXX",
                transaction_total_days: "500",
                countries: [
                    "IE"
                ],
            },
        },
    },
    institutions: {
        get: {
            method: "GET",
            url: "/institutions",
            mock_data: [
                {
                    id: "FakeBank123A",
                    name: "Fake Bank A",
                    bic: "ABC1DXXX",
                    transaction_total_days: "500",
                    countries: [
                        "IE"
                    ],
                },
                {
                    id: "FakeBank123B",
                    name: "Fake Bank B",
                    bic: "ABC2DXXX",
                    transaction_total_days: "537",
                    countries: [
                        "FI"
                    ],
                },
            ]
        },
    },
}
