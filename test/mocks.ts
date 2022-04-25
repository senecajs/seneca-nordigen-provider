export default {
    token: {
        post: {
            method: "POST",
            url: "/token/new/",
            mock_data: {
                access: "123ABC",
                access_expires: 86400,
                refresh: "456DEF",
                refresh_expires: 2592000,
            },
        },
    },
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
