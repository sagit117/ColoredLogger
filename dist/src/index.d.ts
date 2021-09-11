import { loggercolored } from "./index.d";
export default class ColoredLogger implements loggercolored.ColoredLogger {
    private fnLog;
    private readonly config;
    constructor(config: loggercolored.IConfig, fnLog?: (msg: string | string[]) => void);
    /**
     * Метод логирования
     * @param type - тип лога
     * @param msg - сообщение лога
     */
    log(type: keyof loggercolored.IConfig, msg: string): string | string[];
}
//# sourceMappingURL=index.d.ts.map