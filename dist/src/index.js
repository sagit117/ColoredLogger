"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cli_color_1 = __importDefault(require("cli-color"));
class ColoredLogger {
    fnLog = function (msg) {
        if (typeof msg === "string")
            console.log(msg);
        if (Array.isArray(msg))
            console.log(...msg);
    };
    config = {};
    constructor(config, fnLog) {
        if (typeof fnLog === "function") {
            this.fnLog = fnLog;
        }
        this.config = config;
    }
    /**
     * Метод логирования
     * @param type - тип лога
     * @param msg - сообщение лога
     */
    log(type, msg) {
        if (type in this.config) {
            // @ts-ignore
            const color = cli_color_1.default;
            const logMsg = this.config[type]?.color?.MSG
                ? eval(`color.${this.config[type]?.color?.MSG || "bold"}`)
                : cli_color_1.default;
            const logDate = this.config[type]?.color?.DATE
                ? eval(`color.${this.config[type]?.color?.DATE}`)
                : cli_color_1.default;
            const logType = this.config[type]?.color?.TYPE
                ? eval(`color.${this.config[type]?.color?.TYPE}`)
                : cli_color_1.default;
            const logMessage = this.config[type].format.map((item) => {
                switch (item) {
                    case "TYPE":
                        return logType(`[${this.config[type].type}]`);
                    case "DATE":
                        return logDate(new Date().toLocaleString());
                    case "MSG":
                        return logMsg(msg);
                    default:
                        return item;
                }
            });
            this.fnLog(logMessage);
            return logMessage;
        }
        else {
            this.fnLog(msg);
            return msg;
        }
    }
}
exports.default = ColoredLogger;
//# sourceMappingURL=index.js.map