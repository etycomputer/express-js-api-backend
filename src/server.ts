import cookieParser from "cookie-parser";
import express, {
  Request as ExpressRequest,
  Response as ExpressResponse,
} from "express";
import { StatusCodes } from "http-status-codes";
import passport from "passport";
import expressSession from "express-session";
import logger from "./logger";

export { default as pgClient } from "./db";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(expressSession({ secret: "mySecretKey" }));
app.use(passport.initialize());
app.use(passport.session());

/// Print API errors
app.use((error: Error, request: ExpressRequest, response: ExpressResponse) => {
  logger.error(error.message, error);

  return response.status(StatusCodes.BAD_REQUEST).json({
    error: error.message,
  });
});

// Export express instance
export default app;

