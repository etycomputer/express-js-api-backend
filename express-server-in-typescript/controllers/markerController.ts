import { Request, Response } from "express";
import { Marker } from "../models/marker";
import { Position } from "../models/position";

export class MarkerController {
  /**
   * Returns a list of all markers.
   */
  async getAllMarkers(req: Request, res: Response): Promise<void> {
    try {
      //const users = await UserModel.find();
      res.json({});
    } catch (error) {
      res.status(500).send(error);
    }
  }

  /**
   * Returns a single marker by ID.
   */
  async getMarkerById(req: Request, res: Response): Promise<void> {
    try {
      //const user = await UserModel.findById(req.params.id);
      const marker = false;
      if (marker) {
        res.json(marker);
      } else {
        res.status(404).send("Marker not found");
      }
    } catch (error) {
      res.status(500).send(error);
    }
  }
}
