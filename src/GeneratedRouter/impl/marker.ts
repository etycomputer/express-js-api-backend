import { AppDataSource } from "../../dataSource";
import { Marker } from "../../entity/Marker";
import * as t from "../api/marker/types";
import { Api } from "../models";

const markerRepository = AppDataSource.getRepository(Marker);

async function getMarker(): Promise<t.GetMarkerResponse> {
  const markers = await markerRepository.find();

  return { status: 200, body: markers };
}

async function postMarker(request: Api.Marker): Promise<t.PostMarkerResponse> {
  const { node, subnet, activated, activationTime, installPosition } = request;

  const newMarker = markerRepository.create({
    activated,
    activationTime,
    installPosition,
    node,
    subnet,
  });

  return { status: 201, body: newMarker };
}

const api: t.MarkerApi = {
  getMarker,
  postMarker,
};

export default api;

