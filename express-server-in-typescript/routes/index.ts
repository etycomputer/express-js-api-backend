import express from "express";
import { markers } from "./markerRoute";

export const router = express.Router();

router.use("/markers", markers);
