import { Request, Response } from "express";
import { Marker } from "../models/marker.model";

export class MarkerController {
  /**
   * Returns a list of all markers.
   */
  async getAllMarkers(req: Request, res: Response): Promise<void> {
    try {
      const marker = new Marker();
      res.json(marker.getAllMarkers());
    } catch (error) {
      res.status(500).send(error);
    }
  }

  /**
   * Returns a single marker by ID.
   */
  async getMarkerById(req: Request, res: Response): Promise<void> {
    try {
      const marker = new Marker();
      const markerId = parseInt(req.params.markerId, 10);
      const result = marker.getMarkerById(markerId);
      if (result !== null) {
        res.json(result);
      } else {
        res.status(404).send("Marker not found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
