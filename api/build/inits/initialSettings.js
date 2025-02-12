"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const InitialSettings_1 = require("../entity/InitialSettings");
function initSettings() {
    return __awaiter(this, void 0, void 0, function* () {
        const initialSettings = yield InitialSettings_1.default.findOne();
        if (!initialSettings) {
            yield settings();
        }
    });
}
exports.initSettings = initSettings;
function settings() {
    return __awaiter(this, void 0, void 0, function* () {
        const settings = new InitialSettings_1.default();
        settings.title = "Добавляйте, изменяйте и удаляйте задачи...";
        settings.completed = false;
        yield settings.save();
    });
}
//# sourceMappingURL=initialSettings.js.map