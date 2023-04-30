'use strict';

var utils = require('../utils/writer.js');
var Default = require('../service/DefaultService');

module.exports.authTokenPOST = function authTokenPOST (req, res, next, body) {
  Default.authTokenPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.markerGET = function markerGET (req, res, next) {
  Default.markerGET()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.markerPOST = function markerPOST (req, res, next, body) {
  Default.markerPOST(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.markersMarkerIdGET = function markersMarkerIdGET (req, res, next, markerId) {
  Default.markersMarkerIdGET(markerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.markersMarkerIdPATCH = function markersMarkerIdPATCH (req, res, next, body, markerId) {
  Default.markersMarkerIdPATCH(body, markerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.markersMarkerIdReadingsGET = function markersMarkerIdReadingsGET (req, res, next, markerId, startTimestamp, endTimestamp, limit) {
  Default.markersMarkerIdReadingsGET(markerId, startTimestamp, endTimestamp, limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.markersMarkerIdReadingsPOST = function markersMarkerIdReadingsPOST (req, res, next, body, markerId) {
  Default.markersMarkerIdReadingsPOST(body, markerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.markersMarkerIdReadingsReadingIdDELETE = function markersMarkerIdReadingsReadingIdDELETE (req, res, next, markerId, readingId) {
  Default.markersMarkerIdReadingsReadingIdDELETE(markerId, readingId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
