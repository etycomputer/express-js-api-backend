import { AppDataSource } from "../../dataSource";
import { Marker } from "../../entity/Marker";
import * as t from "../api/markers/types";
import { Api } from "../models";

const markerRepository = AppDataSource.getRepository(Marker);

async function getMarkers(markerId: number): Promise<t.GetMarkersResponse> {
  const marker = await markerRepository.findOneBy({ markerId });

  if (marker) {
    return { status: 200, body: marker };
  } else {
    return { status: 404 };
  }
}

async function patchMarkers(
  markerId: number,
  request: Api.Marker
): Promise<t.PatchMarkersResponse> {
  const { node, subnet, activated, activationTime, installPosition } = request;

  const marker = await markerRepository.findOneBy({ markerId });
  
  if (marker) {
    markerRepository.update(markerId, {
      activated,
      activationTime,
      installPosition,
      node,
      subnet,
    });
    return { status: 204 };
  } else {
    return { status: 404 };
  }
}

async function getMarkersReadings(
  markerId: number,
  startTimestamp: Date | undefined,
  endTimestamp: Date | undefined,
  limit: number | undefined,
  __user: any
): Promise<t.GetMarkersReadingsResponse> {
  throw "Unimplemented";
}

async function postMarkersReadings(
  markerId: number,
  request: Api.Reading,
  __user: any
): Promise<t.PostMarkersReadingsResponse> {
  throw "Unimplemented";
}

async function deleteMarkersReadings(
  markerId: number,
  readingId: number,
  __user: any
): Promise<t.DeleteMarkersReadingsResponse> {
  throw "Unimplemented";
}

const api: t.MarkersApi = {
  getMarkers,
  patchMarkers,
  getMarkersReadings,
  postMarkersReadings,
  deleteMarkersReadings,
};

export default api;

