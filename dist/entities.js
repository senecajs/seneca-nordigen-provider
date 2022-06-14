"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.entities = void 0;
const fields_1 = __importDefault(require("./fields"));
const entities = {
    institution: {
        fields: fields_1.default.institution,
        sdk: {
            rest: {
                subpath: 'institution',
            }
        },
        actions: {
            list: {
                cb_name: 'getInstitutions',
            },
            load: {
                cb_name: 'getInstitutionById',
            }
        },
    },
    token: {
        fields: fields_1.default.token,
        sdk: {
            rest: {
                subpath: 'token',
            }
        },
        actions: {
            load: {
                cb_name: 'generateToken',
            }
        },
    },
};
exports.entities = entities;
//# sourceMappingURL=entities.js.map