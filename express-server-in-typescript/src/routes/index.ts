import express, { Response } from "express";
import { markers } from "./markerRoute";

export const router = express.Router();

// Define routes
router.get("/", async (res: Response): Promise<void> => {
  res.send("Welcome to my API!");
});
router.use("/api/v1.0/marker", markers);
