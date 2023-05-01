'use strict';

import { Request, Response, NextFunction } from 'express';
import { DefaultService } from '../service/DefaultService';
import { writeJson } from '../utils/writer';

export function authTokenPOST(req: Request, res: Response, next: NextFunction, body: any): void {
  DefaultService.authTokenPOST(body)
    .then(response => writeJson(res, response))
    .catch(response => writeJson(res, response));
}

export function markerGET(req: Request, res: Response, next: NextFunction): void {
  DefaultService.markerGET()
    .then(response => writeJson(res, response))
    .catch(response => writeJson(res, response));
}

export function markerPOST(req: Request, res: Response, next: NextFunction, body: any): void {
  DefaultService.markerPOST(body)
    .then(response => writeJson(res, response))
    .catch(response => writeJson(res, response));
}

export function markersMarkerIdGET(req: Request, res: Response, next: NextFunction, markerId: string): void {
  DefaultService.markersMarkerIdGET(markerId)
    .then(response => writeJson(res, response))
    .catch(response => writeJson(res, response));
}

export function markersMarkerIdPATCH(req: Request, res: Response, next: NextFunction, body: any, markerId: string): void {
  DefaultService.markersMarkerIdPATCH(body, markerId)
    .then(response => writeJson(res, response))
    .catch(response => writeJson(res, response));
}

export function markersMarkerIdReadingsGET(req: Request, res: Response, next: NextFunction, markerId: string, startTimestamp: Date, endTimestamp: Date, limit: number): void {
  DefaultService.markersMarkerIdReadingsGET(markerId, startTimestamp, endTimestamp, limit)
    .then(response => writeJson(res, response))
    .catch(response => writeJson(res, response));
}

export function markersMarkerIdReadingsPOST(req: Request, res: Response, next: NextFunction, body: any, markerId: string): void {
  DefaultService.markersMarkerIdReadingsPOST(body, markerId)
    .then(response => writeJson(res, response))
    .catch(response => writeJson(res, response));
}

export function markersMarkerIdReadingsReadingIdDELETE(req: Request, res: Response, next: NextFunction, markerId: string, readingId: string): void {
  DefaultService.markersMarkerIdReadingsReadingIdDELETE(markerId, readingId)
    .then(response => writeJson(res, response))
    .catch(response => writeJson(res, response));
}