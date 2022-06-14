declare type Context = {
    outent?: any;
    inent?: any;
    query?: any;
    request?: any;
    response?: any;
};
declare type Target = keyof Context;
declare type Set = {
    [source in keyof Context]?: string;
};
declare type Task = {
    on: Target;
    field: string;
    set?: Set;
};
declare type TasksTypesFn = {
    set: (task: Task, context: Context) => void;
};
declare type ActionType = "load";
declare type ActionDetails = {
    cb_name: string;
    body_args?: string[];
    before?: Task[];
    after?: Task[];
};
declare type ActionData = {
    sdk_params: SdkParams;
    action_details: ActionDetails;
    pattern: Record<string, any>;
};
declare type Entity = {
    [key: string]: any;
};
declare type EntityMap = {
    [name: string]: {
        name?: string;
        fields: {
            [entity: string]: Record<string, Record<string, any>>;
        };
        sdk: SdkParams;
        actions: EntityAction;
    };
};
declare type EntityAction = {
    "list": ActionDetails;
} | {
    "load": ActionDetails;
};
declare type SdkParams = {
    rest: {
        subpath: NordigenRestEndpoints;
    };
};
declare type NordigenRestEndpoints = "account" | "agreement" | "institution" | "requisition" | "token";
export type { ActionType, ActionDetails, EntityMap, Entity, ActionData, SdkParams, Task, Context, TasksTypesFn };
