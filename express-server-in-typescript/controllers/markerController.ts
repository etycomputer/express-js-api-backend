import { Request, Response } from 'express';
import { Marker } from '../models/marker';
import { Position } from '../models/position';

// Dummy Markers
const markers: Marker[] = [
    new Marker(1, 1, 1, new Position(0,0,0), false, new Date("2000-01-23T04:56:10.000+00:00")),
    new Marker(2, 1, 2, new Position(0,0,10), true, new Date("2000-01-23T05:56:10.000+00:00")),
    new Marker(3, 1, 3, new Position(0,0,20), false, new Date("2000-01-23T08:56:10.000+00:00")),
  ];

export class MarkerController {
    /**
     * Returns a list of all markers.
     */
    async getAllMarkers(req: Request, res: Response): Promise<void> {
        try {
            //const users = await UserModel.find();
            res.json(markers);
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
            const marker = markers.find(m => m.markerId === +req.params.id);
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

