import { Entity, ActionDetails, SdkParams } from "../types";
declare function institution_make_actions(sdk_params: SdkParams, action_details: ActionDetails, sdk: Record<string, any>): {
    list: (this: any, msg: any) => Promise<Entity>;
    load: (this: any, msg: any) => Promise<Entity>;
};
export { institution_make_actions };
