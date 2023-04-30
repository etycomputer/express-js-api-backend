/* eslint-disable */
// tslint:disable
/**
 * Objects API
 * API for managing objects
 *
 * OpenAPI spec version: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator+.
 * https://github.com/karlvr/openapi-generator-plus
 * Do not edit the class manually.
 */

import { Express } from "express";
import auth from "./api/auth";
import marker from "./api/marker";
import markers from "./api/markers";
import authImpl from "./impl/auth";
import markerImpl from "./impl/marker";
import markersImpl from "./impl/markers";

export function registerAll(app: Express) {
  auth(app, authImpl);
  marker(app, markerImpl);
  markers(app, markersImpl);
}

