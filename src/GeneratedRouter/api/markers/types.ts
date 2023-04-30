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

import { Express } from 'express'
import { Api } from '../../models'

export interface MarkersApi {
	getMarkers: (markerId: number, __user: any) => Promise<GetMarkersResponse>
	patchMarkers: (markerId: number, request: Api.Marker, __user: any) => Promise<PatchMarkersResponse>
	getMarkersReadings: (markerId: number, startTimestamp: Date | undefined, endTimestamp: Date | undefined, limit: number | undefined, __user: any) => Promise<GetMarkersReadingsResponse>
	postMarkersReadings: (markerId: number, request: Api.Reading, __user: any) => Promise<PostMarkersReadingsResponse>
	deleteMarkersReadings: (markerId: number, readingId: number, __user: any) => Promise<DeleteMarkersReadingsResponse>
}

export type GetMarkersResponse = GetMarkers200Response | GetMarkers404Response

export interface GetMarkers200Response {
	status: 200
	body: Api.Marker
	headers?: never
}

export interface GetMarkers404Response {
	status: 404
	body?: never
	headers?: never
}

export type PatchMarkersResponse = PatchMarkers204Response | PatchMarkers404Response

export interface PatchMarkers204Response {
	status: 204
	body?: never
	headers?: never
}

export interface PatchMarkers404Response {
	status: 404
	body?: never
	headers?: never
}

export type GetMarkersReadingsResponse = GetMarkersReadings200Response

export interface GetMarkersReadings200Response {
	status: 200
	body: (Api.Reading2[])[]
	headers?: never
}

export type PostMarkersReadingsResponse = PostMarkersReadings201Response | PostMarkersReadings400Response

export interface PostMarkersReadings201Response {
	status: 201
	body?: never
	headers?: never
}

export interface PostMarkersReadings400Response {
	status: 400
	body?: never
	headers?: never
}

export type DeleteMarkersReadingsResponse = DeleteMarkersReadings204Response | DeleteMarkersReadings404Response

export interface DeleteMarkersReadings204Response {
	status: 204
	body?: never
	headers?: never
}

export interface DeleteMarkersReadings404Response {
	status: 404
	body?: never
	headers?: never
}
