import clc from "cli-color";
import ColoredLoggerClass, { loggercolored } from "./index.d";

export default class ColoredLogger implements ColoredLoggerClass {
    private fnLog = function (msg: string | string[]) {
        if (typeof msg === "string") console.log(msg);
        if (Array.isArray(msg)) console.log(...msg);
    };
    private readonly config: loggercolored.IConfig = {};

    constructor(
        config: loggercolored.IConfig,
        fnLog?: (msg: string | string[]) => void
    ) {
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
    public log(type: keyof loggercolored.IConfig, msg: string) {
        if (type in this.config) {
            // @ts-ignore
            const color = clc;

            const logMsg = this.config[type]?.color?.MSG
                ? (eval(
                      `color.${this.config[type]?.color?.MSG || "bold"}`
                  ) as clc.Format)
                : clc;

            const logDate = this.config[type]?.color?.DATE
                ? (eval(
                      `color.${this.config[type]?.color?.DATE}`
                  ) as clc.Format)
                : clc;

            const logType = this.config[type]?.color?.TYPE
                ? (eval(
                      `color.${this.config[type]?.color?.TYPE}`
                  ) as clc.Format)
                : clc;

            const logMessage = this.config[type].format.map(
                (item: loggercolored.TFormatLogger) => {
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
                }
            );

            this.fnLog(logMessage);

            return logMessage;
        } else {
            this.fnLog(msg);

            return msg;
        }
    }
}
