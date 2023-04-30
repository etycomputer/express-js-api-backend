import { createLogger, format, transports } from "winston";

// Init Logger
const logger = createLogger({
  level: "info",
});

const errorStackFormat = format((info) => {
  if (info.stack) {
    // tslint:disable-next-line:no-console
    console.log(info.stack);
    return false;
  }
  return info;
});

const consoleTransport = new transports.Console({
  format: format.combine(
    format.colorize(),
    format.simple(),
    errorStackFormat()
  ),
});

logger.add(consoleTransport);

export default logger;

