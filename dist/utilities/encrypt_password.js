"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.encryptPassword = void 0;
const bcrypt = require("bcrypt");
async function encryptPassword(password) {
    const saltOrRounds = 10;
    const encryptedPassword = await bcrypt.hash(password, saltOrRounds);
    return encryptedPassword;
}
exports.encryptPassword = encryptPassword;
//# sourceMappingURL=encrypt_password.js.map