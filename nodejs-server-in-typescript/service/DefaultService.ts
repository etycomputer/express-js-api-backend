'use strict';

interface AuthCredentials {
  username: string;
  password: string;
}

interface ApiKey {
  apiKey: string;
}

interface Marker {
  subnet: number;
  node: number;
  installPosition: {
    x: number;
    y: number;
    z: number;
  };
  activationTime: Date;
  markerId: number;
  activated: boolean;
}

interface Reading {
  readingId: number;
  timestamp: Date;
  temperature: number;
  porePressure: number;
}


/**
 * Authenticate user and retrieve API key
 *
 * body AuthCredentials
 * returns ApiKey
 **/
export function authTokenPOST(body: AuthCredentials): Promise<ApiKey> {
  return new Promise(function(resolve, reject) {
    const examples: {[contentType: string]: ApiKey} = {};
    examples['application/json'] = {
      apiKey: 'apiKey',
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
export const markerGET = (): Promise<Marker[]> => {
  return new Promise((resolve, reject) => {
    const examples: {[contentType: string]: Marker[]} = {};
    examples['application/json'] = [
      {
        subnet: 1,
        node: 1,
        installPosition: {
          x: 5.962134,
          y: 5.637377,
          z: 2.302136,
        },
        activationTime: new Date('2000-01-23T04:56:07.000+00:00'),
        markerId: 1,
        activated: true,
      },
      {
        subnet: 1,
        node: 1,
        installPosition: {
          x: 5.962134,
          y: 5.637377,
          z: 2.302136,
        },
        activationTime: new Date('2000-01-23T04:56:07.000+00:00'),
        markerId: 1,
        activated: true,
      },
    ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};

/**
 * Add a new marker.
 *
 * body Marker
 * returns Marker
 **/
export function markerPOST(body: Marker): Promise<Marker> {
  return new Promise(function(resolve, reject) {
    const examples: {[contentType: string]: Marker} = {};
    examples['application/json'] = {
      subnet: 1,
      node: 1,
      installPosition: {
        x: 5.962134,
        y: 5.637377,
        z: 2.302136,
      },
      activationTime: new Date('2000-01-23T04:56:07.000+00:00'),
      markerId: 1,
      activated: true,
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
export const markersMarkerIdGET = (markerId: number): Promise<Marker> => {
  return new Promise((resolve, reject) => {
    const examples: {[contentType: string]: Marker} = {};
    examples['application/json'] = {
      subnet: 1,
      node: 1,
      installPosition: {
        x: 5.962134,
        y: 5.637377,
        z: 2.302136,
      },
      activationTime: new Date('2000-01-23T04:56:07.000+00:00'),
      markerId: 1,
      activated: true,
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
};


/**
 * Partially update a marker by its ID
 *
 * body Marker Partially updated marker object
 * markerId Integer ID of the marker to update
 * no response value expected for this operation
 **/
export const markersMarkerIdPATCH = function (body: Marker, markerId: number): Promise<void> {
  return new Promise(function (resolve, reject) {
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
export const markersMarkerIdReadingsGET = function(
  markerId: number,
  startTimestamp: Date,
  endTimestamp: Date,
  limit: number
): Promise<Array<Reading>> {
  return new Promise(function(resolve, reject) {
    const examples: { [contentType: string]: Reading[] } = {};
    examples["application/json"] = [
        {
          readingId: 1,
          timestamp: new Date("2000-01-23T04:56:07.000+00:00"),
          temperature: 20.0274563,
          porePressure: 46000.29
        },
        {
          readingId: 1,
          timestamp: new Date("2000-01-23T04:56:08.000+00:00"),
          temperature: 22.0274563,
          porePressure: 46222.29
        },
        {
          readingId: 1,
          timestamp: new Date("2000-01-23T04:56:09.000+00:00"),
          temperature: 23.0274563,
          porePressure: 46333.29
        },
        {
          readingId: 1,
          timestamp: new Date("2000-01-23T04:56:10.000+00:00"),
          temperature: 24.0274563,
          porePressure: 46444.29
        }
    ];
    if (Object.keys(examples).length > 0) {
      resolve(examples);
    } else {
      resolve();
    }
  });
};


/**
 * Add new readings for a specific Marker by its ID.
 *
 * body Reading JSON object containing the details of the new reading to add.
 * markerId Integer ID of the Marker to add a reading for.
 * no response value expected for this operation
 **/
export function markersMarkerIdReadingsPOST(body: Reading[], markerId: number): Promise<void> {
  return new Promise<void>((resolve, reject) => {
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
export function markersMarkerIdReadingsReadingIdDELETE(markerId: number, readingId: number): Promise<void> {
  return new Promise<void>((resolve, reject) => {
    resolve();
  });
}

