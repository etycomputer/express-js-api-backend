# ExpressJS API Backend

## Introduction
In this project, we will build an API backend using Express JS (TypeScript) to store and retrieve data from a Postgres database using TypeORM as the ORM. This API backend will be used to provide data to our web application. The API is required to adhere to the OpenAPI standard and be fully unit tested. We will also require an end-to-end testing system using Postman.

## Project Components
The project will consist of the following components:
### Database
The database will be a Postgres database and will store data for three types of objects: objects, markers, and readings. The database schema will be managed using TypeORM.
#### Object
- objectsId: integer (minimum: 0)
- serial: string
- holeId: integer (minimum: -1, default: -1)
#### Marker
- markerId: integer (minimum: 0)
- subnet: integer (minimum: 0)
- node: integer (minimum: 0)
- activated: boolean (default: false)
- activationTime: string (format: date-time)
#### Reading
- readingId: integer (minimum: 0)
- timestamp: string (format: date-time)
- temperature: number (format: float)
- porePressure: number (format: float)
### API Endpoints
The API will have the following endpoints:
#### Objects Endpoints
- GET /objects/{objectsId}: Get an object by its ID.
- PUT /objects/{objectsId}: Update an object by its ID.
- PATCH /objects/{objectsId}: Partially update an object by its ID.
- GET /objects/count: Get the total number of objects in the system.
- GET /objects/type/{type}: Get all objects with a given type (e.g. 0 for Unspecified or 1 for Markers).
- GET /objects/hole/{holeId}: Get all objects with a given holeId.
#### Markers Endpoints
- GET /markers/{markerId}: Get a marker by its ID.
- PUT /markers/{markerId}: Update a marker by its ID.
- PATCH /markers/{markerId}: Partially update a marker by its ID.
- GET /markers/serial/{serial}: Get a marker by its serial.
- GET /markers/type/{type}: Get all markers of a given type.
- GET /markers/hole/{holeId}: Get all markers of a given holeId.
- GET /markers/address/{subnet}: Get all markers of a given subnet address.
- GET /markers/address/{subnet}/{node}: Get a marker with a given subnet and node address.
- POST /markers: Add a new marker.
- GET /markers: Get all marker.
- GET /markers/{markerId}/readings: Get all readings for a specific Marker by its ID. This endpoint also accepts two query parameters, startTimestamp and endTimestamp, which define the time range for the Marker readings to retrieve. A limit query parameter is also optional.
  - GET /markers/{markerId}/readings?limit=5
  - GET /markers/{markerId}/readings?startTimestamp=2023-02-20%2023:00:01
  - GET /markers/{markerId}/readings?startTimestamp=2023-02-20%2023:00:01& endTimestamp=2023-02-21%2000:00:01
- GET /markers/{markerId}/readings/count: Get the total number of readings for a specific Marker by its ID.
- POST /markers/{markerId}/readings: Add a new reading for a specific Marker by its ID.
- PUT /markers/{markerId}/readings/{readingId}: Update a specific reading for a specific Marker by its ID and reading ID.
- DELETE /markers/{markerId}/readings/{readingId}: Delete a specific reading for a specific Marker by its ID and reading ID.
### Inputs
The following input materials are given to help with this project:
#### [openapi.yaml](./openapi.yaml)
This is a very basic version of the openapi.yaml file that contains all the different endpoint paths and components needed for this project. You can use this file in conjunction with the openapi code generator to generate the initial code needed to implement this Express JS API backend.
## Objectives
The objectives of this project are as follows:
1.	Develop an API using Express JS and TypeScript that adheres to the OpenAPI standard.
2.	Use an ORM to store and retrieve data from a Postgres database.
3.	Fully unit test the code to ensure its reliability and stability.
4.	Use popular tools like Postman for end-to-end testing.
5.	All API input and outputs should be in JSON format.
6.	Best available security measures (OAuth2 or OAuth3) and authorisations would need to be used.
## Scope
The scope of this project includes the following:
1.	Writing the Express JS API using TypeScript.
2.	Creating a YAML file that describes the API using the OpenAPI standard.
3.	Using an ORM to store and retrieve data from a Postgres database.
4.	Fully unit testing the code.
5.	Using popular tools like Postman for end-to-end testing.
## Expected Deliverables
The expected deliverables for this project are as follows:
1.	The fully functional Express JS API written using TypeScript.
2.	The YAML file that describes the API using the OpenAPI standard.
3.	The ORM code that stores and retrieves data from a Postgres database.
4.	The fully unit tested code.
5.	All code should be stored in github with descriptive commit messages.
6.	A report outlining the results of the end-to-end testing using Postman.
7.	The input/output of the API request and should be in JSON format.
8.	The performance and security level of the API would be evaluated using Postman or Swagger tools. 
