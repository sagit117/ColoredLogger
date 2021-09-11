export namespace loggercolored {
    export interface IConfig {
        [key: string]: {
            format: TFormatLogger[];
            color: {
                [k in TFormatLogger]?: string;
            };
            type: string;
        };
    }

    export type TFormatLogger = "DATE" | "MSG" | "TYPE";
}

export default class ColoredLogger {
    constructor(
        config: loggercolored.IConfig,
        fnLog?: (msg: string | string[]) => void
    );
    log(type: keyof loggercolored.IConfig, msg: string): string | string[];
}
