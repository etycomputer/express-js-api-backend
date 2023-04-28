/**
 * The DefaultController file is a very simple one, which does not need to be changed manually,
 * unless there's a case where business logic routes the request to an entity which is not
 * the service.
 * The heavy lifting of the Controller item is done in Request.js - that is where request
 * parameters are extracted and sent to the service, and where response is handled.
 */

const Controller = require('./Controller');
const service = require('../services/DefaultService');
const markerAddressSubnetGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.markerAddressSubnetGET);
};

const markerAddressSubnetNodeGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.markerAddressSubnetNodeGET);
};

const markerGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.markerGET);
};

const markerHoleHoleIdGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.markerHoleHoleIdGET);
};

const markerPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.markerPOST);
};

const markersMarkerIdGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.markersMarkerIdGET);
};

const markersMarkerIdPATCH = async (request, response) => {
  await Controller.handleRequest(request, response, service.markersMarkerIdPATCH);
};

const markersMarkerIdPUT = async (request, response) => {
  await Controller.handleRequest(request, response, service.markersMarkerIdPUT);
};

const markersMarkerIdReadingsCountGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.markersMarkerIdReadingsCountGET);
};

const markersMarkerIdReadingsGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.markersMarkerIdReadingsGET);
};

const markersMarkerIdReadingsPOST = async (request, response) => {
  await Controller.handleRequest(request, response, service.markersMarkerIdReadingsPOST);
};

const markersMarkerIdReadingsReadingIdDELETE = async (request, response) => {
  await Controller.handleRequest(request, response, service.markersMarkerIdReadingsReadingIdDELETE);
};

const markersMarkerIdReadingsReadingIdPUT = async (request, response) => {
  await Controller.handleRequest(request, response, service.markersMarkerIdReadingsReadingIdPUT);
};

const markersSerialSerialGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.markersSerialSerialGET);
};

const markersTypeTypeGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.markersTypeTypeGET);
};

const objectsCountGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.objectsCountGET);
};

const objectsHoleHoleIdGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.objectsHoleHoleIdGET);
};

const objectsObjectsIdGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.objectsObjectsIdGET);
};

const objectsObjectsIdPATCH = async (request, response) => {
  await Controller.handleRequest(request, response, service.objectsObjectsIdPATCH);
};

const objectsObjectsIdPUT = async (request, response) => {
  await Controller.handleRequest(request, response, service.objectsObjectsIdPUT);
};

const objectsTypeTypeGET = async (request, response) => {
  await Controller.handleRequest(request, response, service.objectsTypeTypeGET);
};


module.exports = {
  markerAddressSubnetGET,
  markerAddressSubnetNodeGET,
  markerGET,
  markerHoleHoleIdGET,
  markerPOST,
  markersMarkerIdGET,
  markersMarkerIdPATCH,
  markersMarkerIdPUT,
  markersMarkerIdReadingsCountGET,
  markersMarkerIdReadingsGET,
  markersMarkerIdReadingsPOST,
  markersMarkerIdReadingsReadingIdDELETE,
  markersMarkerIdReadingsReadingIdPUT,
  markersSerialSerialGET,
  markersTypeTypeGET,
  objectsCountGET,
  objectsHoleHoleIdGET,
  objectsObjectsIdGET,
  objectsObjectsIdPATCH,
  objectsObjectsIdPUT,
  objectsTypeTypeGET,
};
