"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envs = void 0;
require("dotenv/config");
const joi = require("joi");
const envVarsSchema = joi.object({
    PORT: joi.number().required(),
    DATABASE_URL: joi.string().uri().required(),
}).unknown(true);
const { error, value } = envVarsSchema.validate(process.env);
if (error) {
    throw new Error(`Config validation error: ${error.message}`);
}
const envVars = value;
exports.envs = {
    PORT: envVars.PORT,
    DATABASE_URL: envVars.DATABASE_URL,
};
//# sourceMappingURL=envs.js.map