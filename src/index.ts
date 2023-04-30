import { AppDataSource } from "./dataSource";
import logger from "./logger";
import app from "./server";
import * as GeneratedRouter from "./GeneratedRouter";
import authRouter from "./routes/auth";

// Start the server
const port = Number(process.env.PORT || 3000);

app.listen(port, () => {
  logger.info("Express server started on port: " + port);
});

AppDataSource.initialize()
  .then(async () => {
    // Add APIs
    GeneratedRouter.registerAll(app);
    app.use("/auth", authRouter);
  })
  .catch((error) => console.log(error));

