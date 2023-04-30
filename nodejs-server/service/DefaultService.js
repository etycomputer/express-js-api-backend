'use strict';


/**
 * Authenticate user and retrieve API key
 *
 * body AuthCredentials 
 * returns ApiKey
 **/
exports.authTokenPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "apiKey" : "apiKey"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get all markers.
 *
 * returns List
 **/
exports.markerGET = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "subnet" : 1,
  "node" : 1,
  "installPosition" : {
    "x" : 5.962134,
    "y" : 5.637377,
    "z" : 2.302136
  },
  "activationTime" : "2000-01-23T04:56:07.000+00:00",
  "markerId" : 1,
  "activated" : true
}, {
  "subnet" : 1,
  "node" : 1,
  "installPosition" : {
    "x" : 5.962134,
    "y" : 5.637377,
    "z" : 2.302136
  },
  "activationTime" : "2000-01-23T04:56:07.000+00:00",
  "markerId" : 1,
  "activated" : true
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a new marker.
 *
 * body Marker 
 * returns Marker
 **/
exports.markerPOST = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "subnet" : 1,
  "node" : 1,
  "installPosition" : {
    "x" : 5.962134,
    "y" : 5.637377,
    "z" : 2.302136
  },
  "activationTime" : "2000-01-23T04:56:07.000+00:00",
  "markerId" : 1,
  "activated" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get a marker by its ID
 *
 * markerId Integer ID of the marker to retrieve
 * returns Marker
 **/
exports.markersMarkerIdGET = function(markerId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "subnet" : 1,
  "node" : 1,
  "installPosition" : {
    "x" : 5.962134,
    "y" : 5.637377,
    "z" : 2.302136
  },
  "activationTime" : "2000-01-23T04:56:07.000+00:00",
  "markerId" : 1,
  "activated" : true
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Partially update a marker by its ID
 *
 * body Marker Partially updated marker object
 * markerId Integer ID of the marker to update
 * no response value expected for this operation
 **/
exports.markersMarkerIdPATCH = function(body,markerId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get all readings for a specific Marker by its ID.
 *
 * markerId Integer ID of the Marker to retrieve readings for.
 * startTimestamp Date Start timestamp of the time range for the Marker readings to retrieve. (optional)
 * endTimestamp Date End timestamp of the time range for the Marker readings to retrieve. (optional)
 * limit Integer The numbers of items to return (optional)
 * returns List
 **/
exports.markersMarkerIdReadingsGET = function(markerId,startTimestamp,endTimestamp,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ [ {
  "readingId" : 1,
  "timestamp" : "2000-01-23T04:56:07.000+00:00",
  "temperature" : 26.0274563,
  "porePressure" : 46581.29
}, {
  "readingId" : 1,
  "timestamp" : "2000-01-23T04:56:07.000+00:00",
  "temperature" : 26.0274563,
  "porePressure" : 46581.29
} ], [ {
  "readingId" : 1,
  "timestamp" : "2000-01-23T04:56:07.000+00:00",
  "temperature" : 26.0274563,
  "porePressure" : 46581.29
}, {
  "readingId" : 1,
  "timestamp" : "2000-01-23T04:56:07.000+00:00",
  "temperature" : 26.0274563,
  "porePressure" : 46581.29
} ] ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add a new reading for a specific Marker by its ID.
 *
 * body Reading JSON object containing the details of the new reading to add.
 * markerId Integer ID of the Marker to add a reading for.
 * no response value expected for this operation
 **/
exports.markersMarkerIdReadingsPOST = function(body,markerId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Delete a specific reading for a specific Marker by its ID and reading ID.
 *
 * markerId Integer ID of the Marker to delete Reading from.
 * readingId Integer ID of the Reading to delete.
 * no response value expected for this operation
 **/
exports.markersMarkerIdReadingsReadingIdDELETE = function(markerId,readingId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

