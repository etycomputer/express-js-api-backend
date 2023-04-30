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

export interface AuthApi {
	postAuthToken: (request: Api.AuthCredentials) => Promise<PostAuthTokenResponse>
}

export type PostAuthTokenResponse = PostAuthToken200Response | PostAuthToken401Response

export interface PostAuthToken200Response {
	status: 200
	body: Api.ApiKey
	headers?: never
}

export interface PostAuthToken401Response {
	status: 401
	body: Api.Error
	headers?: never
}
