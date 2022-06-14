import { Entity, ActionDetails, SdkParams } from "../types";
declare function token_make_actions(sdk_params: SdkParams, action_details: ActionDetails, sdk: Record<string, any>): {
    load: (this: any, msg: any) => Promise<Entity>;
};
export { token_make_actions };
