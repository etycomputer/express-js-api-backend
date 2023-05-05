import express from "express";
import { MarkerController } from "../controllers/markerController";

export const markers = express.Router();

// Instantiate MarkerController
const markerController = new MarkerController();

// Define routes
markers.get("/", markerController.getAllMarkers);
markers.get("/:id", markerController.getAllMarkers);
