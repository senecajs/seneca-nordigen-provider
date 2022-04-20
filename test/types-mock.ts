type EntityActionTest = { load: ActionTest }

type TestEntityMap = {
    [name: string]: EntityActionTest
}

type ActionTest = {
    args?: Record<string, any>
    expectations?: Record<string, Assertions>
}

type Assertions = {
    sameAs?: any
    toBe?: TestToBe[]
}

type TestToBe = "defined" | "falsy"

export type {TestEntityMap}
