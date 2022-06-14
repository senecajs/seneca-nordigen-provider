declare const _default: {
    repo: {
        patch: {
            method: string;
            url: string;
            mock_data: {
                id: number;
            };
        };
        get: {
            method: string;
            url: string;
            mock_data: {
                id: number;
            };
        };
    };
    code_scanning: {
        patch: {
            method: string;
            url: string;
            mock_data: {
                number: number;
                dismissed_reason: string;
            };
        };
        get: {
            method: string;
            url: string;
            mock_data: {
                number: number;
            };
        };
    };
    gist: {
        patch: {
            method: string;
            url: string;
            mock_data: {
                id: string;
            };
        };
        get: {
            method: string;
            url: string;
            mock_data: {
                id: string;
            };
        };
    };
    issue: {
        patch: {
            method: string;
            url: string;
            mock_data: {
                number: number;
            };
        };
        get: {
            method: string;
            url: string;
            mock_data: {
                number: number;
            };
        };
    };
    pull: {
        patch: {
            method: string;
            url: string;
            mock_data: {
                id: number;
                number: number;
            };
        };
        get: {
            method: string;
            url: string;
            mock_data: {
                id: number;
                number: number;
            };
        };
    };
    release: {
        get: {
            method: string;
            url: string;
            mock_data: {
                id: number;
                tag_name: string;
            };
        };
    };
    branch: {
        get: {
            method: string;
            url: string;
            mock_data: {
                name: string;
            };
        };
    };
    code_of_conduct: {
        get: {
            method: string;
            url: string;
            mock_data: {
                key: string;
            };
        };
    };
    commit: {
        get: {
            method: string;
            url: string;
            mock_data: {
                sha: string;
            };
        };
    };
    license: {
        get: {
            method: string;
            url: string;
            mock_data: {
                key: string;
            };
        };
    };
    org: {
        get: {
            method: string;
            url: string;
            mock_data: {
                login: string;
            };
        };
    };
    user: {
        get: {
            method: string;
            url: string;
            mock_data: {
                id: number;
            };
        };
    };
    check: {
        get: {
            method: string;
            url: string;
            mock_data: {
                id: number;
            };
        };
        patch: {
            method: string;
            url: string;
            mock_data: {
                id: number;
            };
        };
    };
    project: {
        get: {
            method: string;
            url: string;
            mock_data: {
                id: number;
            };
        };
        patch: {
            method: string;
            url: string;
            mock_data: {
                id: number;
            };
        };
    };
    secret_scanning: {
        get: {
            method: string;
            url: string;
            mock_data: {
                number: number;
                state: string;
                resolution: string;
            };
        };
        patch: {
            method: string;
            url: string;
            mock_data: {
                number: number;
                state: string;
                resolution: string;
            };
        };
    };
};
export default _default;
