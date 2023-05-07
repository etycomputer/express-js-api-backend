import { IMarker } from "../interfaces/marker.interface";
import { MarkerRepository } from "../repositories/marker.repository";

export class Marker {
  getAllMarkers(): Promise<IMarker[]> {
    return MarkerRepository.find();
  }

  getMarkerById(id: number): Promise<IMarker | null> {
    return MarkerRepository.findOneBy({ markerId: id });
  }
}
