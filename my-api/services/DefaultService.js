/* eslint-disable no-unused-vars */
const Service = require('./Service');

/**
* Get all markers of a given subnet address.
*
* subnet Integer Subnet address to retrieve markers for.
* returns List
* */
const markerAddressSubnetGET = ({ subnet }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        subnet,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get a marker with a given subnet and node address.
*
* subnet Integer Subnet address of the marker to retrieve.
* node Integer Node address of the marker to retrieve.
* returns Marker
* */
const markerAddressSubnetNodeGET = ({ subnet, node }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        subnet,
        node,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all markers.
*
* returns List
* */
const markerGET = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all markers of a given holeId.
*
* holeId Integer ID of the hole to retrieve markers for.
* returns List
* */
const markerHoleHoleIdGET = ({ holeId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        holeId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Add a new marker.
*
* marker Marker 
* returns Marker
* */
const markerPOST = ({ marker }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        marker,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get a marker by its ID
*
* markerId Integer ID of the marker to retrieve
* returns Marker
* */
const markersMarkerIdGET = ({ markerId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        markerId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Partially update a marker by its ID
*
* markerId Integer ID of the marker to update
* marker Marker Partially updated marker object
* no response value expected for this operation
* */
const markersMarkerIdPATCH = ({ markerId, marker }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        markerId,
        marker,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Update a marker by its ID
*
* markerId Integer ID of the marker to update
* marker Marker Updated marker object
* no response value expected for this operation
* */
const markersMarkerIdPUT = ({ markerId, marker }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        markerId,
        marker,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the total number of readings for a specific Marker by its ID.
*
* markerId Integer ID of the Marker to retrieve the total number of readings for.
* returns Integer
* */
const markersMarkerIdReadingsCountGET = ({ markerId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        markerId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all readings for a specific Marker by its ID.
*
* markerId Integer ID of the Marker to retrieve readings for.
* startTimestamp Date Start timestamp of the time range for the Marker readings to retrieve. (optional)
* endTimestamp Date End timestamp of the time range for the Marker readings to retrieve. (optional)
* limit Integer The numbers of items to return (optional)
* returns List
* */
const markersMarkerIdReadingsGET = ({ markerId, startTimestamp, endTimestamp, limit }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        markerId,
        startTimestamp,
        endTimestamp,
        limit,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Add a new reading for a specific Marker by its ID.
*
* markerId Integer ID of the Marker to add a reading for.
* readingsUnderscoreinner List JSON object containing the details of the new reading to add.
* no response value expected for this operation
* */
const markersMarkerIdReadingsPOST = ({ markerId, readingsUnderscoreinner }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        markerId,
        readingsUnderscoreinner,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Delete a specific reading for a specific Marker by its ID and reading ID.
*
* markerId Integer ID of the Marker to delete Reading from.
* readingId Integer ID of the Reading to delete.
* no response value expected for this operation
* */
const markersMarkerIdReadingsReadingIdDELETE = ({ markerId, readingId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        markerId,
        readingId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Update a specific reading for a specific Marker by its ID and reading ID.
*
* markerId Integer ID of the Marker to update.
* readingId Integer ID of the Reading to update.
* readingsUnderscoreinner List New properties of the Reading.
* no response value expected for this operation
* */
const markersMarkerIdReadingsReadingIdPUT = ({ markerId, readingId, readingsUnderscoreinner }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        markerId,
        readingId,
        readingsUnderscoreinner,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get a marker by its serial
*
* serial String Serial number of the marker to retrieve
* returns Marker
* */
const markersSerialSerialGET = ({ serial }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        serial,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all markers of a given type
*
* type Integer Type of markers to retrieve
* returns List
* */
const markersTypeTypeGET = ({ type }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        type,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get the total number of objects in the system
*
* returns Integer
* */
const objectsCountGET = () => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all objects with a given holeId
*
* holeId Integer HoleId of objects to retrieve
* returns List
* */
const objectsHoleHoleIdGET = ({ holeId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        holeId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get a object by its ID
*
* objectsId Integer ID of the object to retrieve
* returns Object
* */
const objectsObjectsIdGET = ({ objectsId }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        objectsId,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Partially update a object by its ID
*
* objectsId Integer ID of the object to update
* object Object Object object to be updated
* returns Object
* */
const objectsObjectsIdPATCH = ({ objectsId, object }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        objectsId,
        object,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Update a object by its ID
*
* objectsId Integer ID of the object to update
* object Object Object object to be updated
* returns Object
* */
const objectsObjectsIdPUT = ({ objectsId, object }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        objectsId,
        object,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);
/**
* Get all objects with a given type
*
* type Integer Type of objects to retrieve
* returns List
* */
const objectsTypeTypeGET = ({ type }) => new Promise(
  async (resolve, reject) => {
    try {
      resolve(Service.successResponse({
        type,
      }));
    } catch (e) {
      reject(Service.rejectResponse(
        e.message || 'Invalid input',
        e.status || 405,
      ));
    }
  },
);

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
