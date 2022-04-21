export default {
    institutions: {
        get: {
            method: "GET",
            url: "/institutions/:id",
            mock_data: {
                id: 'FakeBank123',
            },
        },
    },
}
