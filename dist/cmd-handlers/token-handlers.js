"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.token_make_actions = void 0;
const utils_1 = require("../utils");
function token_make_actions(sdk_params, action_details, sdk) {
    const { before, after, cb_name } = action_details;
    async function load(msg) {
        let body = { ...msg.q };
        const context = {
            inent: msg.ent,
            request: body,
            query: msg.q,
        };
        if (before) {
            (0, utils_1.perform_tasks)(before, context);
        }
        const apiResponse = await sdk.nordigenClient[cb_name](body);
        let entity = this.make$(msg.ent.entity$).data$({ res: apiResponse });
        if (after) {
            (0, utils_1.perform_tasks)(after, {
                ...context,
                outent: entity,
                response: apiResponse
            });
        }
        return entity;
    }
    return {
        load,
    };
}
exports.token_make_actions = token_make_actions;
//# sourceMappingURL=token-handlers.js.map