import express from "express";
import { MarkerController } from "../controllers/marker.controler";

export const markers = express.Router();

// Instantiate MarkerController
const markerController = new MarkerController();

// Define routes
markers.get("/list", markerController.getAllMarkers);
markers.get("/:id", markerController.getMarkerById);
