import express from "express";
import logger from "./configs/logging";
// import morgan from 'morgan';
// import helmet from 'helmet';
// import cors from 'cors';
import { router as routes } from "./routes";
import { readwriteConfig } from "./database/readwriteDataSources";
import "reflect-metadata";
import { DataSource } from "typeorm";
import seedDefault from "./database/seeders/default";
import { markerEntity } from "./database/entities/markerEntity";

import { exit } from "process";

logger.info("step 0");
const AppDataSource = new DataSource(readwriteConfig);
logger.info("step 1");
AppDataSource.initialize();
logger.info("step 2");
const question = AppDataSource.getRepository(markerEntity);
logger.info("step 2");
seedDefault(AppDataSource);
logger.info("step 3");

// AppDataSource.initialize()
//   .then(async () => {
//     console.log("Inserting a new user into the database...");
//     const user = new User();
//     user.firstName = "Timber";
//     user.lastName = "Saw";
//     user.age = 25;
//     await AppDataSource.manager.save(user);
//     console.log("Saved a new user with id: " + user.id);

//     console.log("Loading users from the database...");
//     const users = await AppDataSource.manager.find(User);
//     console.log("Loaded users: ", users);

//     console.log(
//       "Here you can setup and run express / fastify / any other framework."
//     );
//   })
//   .catch((error) => console.log(error));
exit();

const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(morgan('tiny'));
// app.use(helmet());
// app.use(cors());

// Routes
app.use("/", routes);

// Error handling middleware
app.use(
  (
    err: Error,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    logger.error(err.stack);
    res.status(500).send("Internal Server Error");
  }
);

// Start the server
app.listen(port, () => {
  logger.info(`Server started at http://localhost:${port}`);
});
