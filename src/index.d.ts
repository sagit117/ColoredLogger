export namespace loggercolored {
    export interface IConfig {
        [key: string]: {
            format: TFormatLogger[],
            color: {
                [k in TFormatLogger]?: string
            },
            type: string
        }
    }

    export abstract class ColoredLogger {
        log(type: keyof IConfig, msg: string): string | string[]
    }

    export type TFormatLogger = "DATE" | "MSG" | "TYPE"
}