### Класс для колорированного вывода лога

```ts
/**
 * конфиг для логера
 */
const config = {
    INFO: {
        format: ["DATE", "TYPE", "MSG"], // последовательность вывода, доступные типы: "DATE", "TYPE", "MSG"
        color: {
            DATE: "bold", // название полей соответствует типам
            TYPE: "blue.bold.bgBlack",
            MSG: "bold",
        },
        type: "INFO LOG", // метка для лога, вывод [INFO LOG]
    },
};

/**
 * в инстанс можно передать свою функцию логирования
 * после конфига
 * функция должна принять function(msg: string | string[])
 */
const color = new ColoredLogger(config);
color.log("INFO", "test drive new class logger");
```