import { createLogger, format, transports } from "winston";
import path from "path";
import fs from "fs";

const logDir = path.join("logs")
if(!fs.existsSync(logDir)){
    fs.mkdirSync(logDir, {recursive: true})
}

export const logger = createLogger ({
    level: "info",
    format: format.combine (
        format.timestamp(),
        format.json()
    ),
    transports:[
        new transports.Console(),
        new transports.File({filename: path.join(logDir, "error.log"), level: "error"}),
        new transports.File({filename: path.join(logDir,"combine.log")})
    ]
})