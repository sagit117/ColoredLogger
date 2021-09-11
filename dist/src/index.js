import clc from "cli-color";
export default class ColoredLogger {
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
            const color = clc;
            const logMsg = this.config[type]?.color?.MSG
                ? eval(`color.${this.config[type]?.color?.MSG || "bold"}`)
                : clc;
            const logDate = this.config[type]?.color?.DATE
                ? eval(`color.${this.config[type]?.color?.DATE}`)
                : clc;
            const logType = this.config[type]?.color?.TYPE
                ? eval(`color.${this.config[type]?.color?.TYPE}`)
                : clc;
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
const config = {
    INFO: {
        format: ["DATE", "TYPE", "MSG"],
        color: {
            DATE: "bold",
            TYPE: "blue.bold.bgBlack",
            MSG: "bold",
        },
        type: "INFO",
    },
};
const color = new ColoredLogger(config);
color.log("INFO", "test drive new class logger");
//# sourceMappingURL=index.js.map