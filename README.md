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
However, at this point we only need to fully implement the checked  API endpoints.
#### Authentication Endpoint
- [x] POST /auth/token: Authenticate user and retrieve API key.
#### Objects Endpoints
- [ ] GET /objects/{objectsId}: Get an object by its ID.
- [ ] PUT /objects/{objectsId}: Update an object by its ID.
- [ ] PATCH /objects/{objectsId}: Partially update an object by its ID.
- [ ] GET /objects/count: Get the total number of objects in the system.
- [ ] GET /objects/type/{type}: Get all objects with a given type (e.g. 0 for Unspecified or 1 for Markers).
- [ ] GET /objects/hole/{holeId}: Get all objects with a given holeId.
#### Markers Endpoints
- [x] GET /markers/{markerId}: Get a marker by its ID.
- [ ] PUT /markers/{markerId}: Update a marker by its ID.
- [x] PATCH /markers/{markerId}: Partially update a marker by its ID.
- [ ] GET /markers/serial/{serial}: Get a marker by its serial.
- [ ] GET /markers/type/{type}: Get all markers of a given type.
- [ ] GET /markers/hole/{holeId}: Get all markers of a given holeId.
- [ ] GET /markers/address/{subnet}: Get all markers of a given subnet address.
- [ ] GET /markers/address/{subnet}/{node}: Get a marker with a given subnet and node address.
- [x] POST /markers: Add a new marker.
- [x] GET /markers: Get all marker.
- [x] GET /markers/{markerId}/readings: Get all readings for a specific Marker by its ID. This endpoint also accepts two query parameters, startTimestamp and endTimestamp, which define the time range for the Marker readings to retrieve. A limit query parameter is also optional.
 - [ ] GET	/markers/{markerId}/readings?limit=10: Get the first 10 readings for a specific Marker by its ID. 
 - [ ] GET	/markers/{markerId}/readings?limit=10&start_timestamp=startTimestamp=2023-02-20%2023:00:01: Get the first 10 readings from 2023-02-20 23:00:01 (UTC) for a specific Marker by its ID.
 - [ ] GET	/markers/{markerId}/readings?limit=10&start_timestamp=startTimestamp=2023-02-20%2023:00:01&endTimestamp=2023-02-21%2000:00:01: Get the first 10 readings between 2023-02-20 23:00:01 and 2023-02-21 00:00:01 (UTC) for a specific Marker by its ID.
- [ ] GET /markers/{markerId}/readings/count: Get the total number of readings for a specific Marker by its ID.
- [x] POST /markers/{markerId}/readings: Add a new reading for a specific Marker by its ID.
- [ ] PUT /markers/{markerId}/readings/{readingId}: Update a specific reading for a specific Marker by its ID and reading ID.
- [x] DELETE /markers/{markerId}/readings/{readingId}: Delete a specific reading for a specific Marker by its ID and reading ID.
### Inputs
The following input materials are given to help with this project:
#### [openapi.yaml](./openapi.yaml)
This is a very basic version of the openapi.yaml file that contains all the different endpoint paths and components needed for this project. You can use this file in conjunction with the openapi code generator to generate the initial code needed to implement this Express JS API backend.
One of the OpenAPI tools available is the [openapi-generator-cli](https://github.com/OpenAPITools/openapi-generator-cli) that can be used to generate the code needed to generate ExpressJS code.
`npm install @openapitools/openapi-generator-cli`
`npx openapi-generator-cli generate -i openapi.yaml -g nodejs-express-server -o my-api`
`cd my-api`
`npm install`

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


# OpenAPI Generator Plus generator project

This project generates server code for providing an API.

The generator template used is [`@openapi-generator-plus/typescript-express-passport-server-generator`](https://github.com/karlvr/openapi-generator-plus-express-passport#readme).

## Using

```shell
npm install
npm run generate
```

## Configuration

The API generator is configured in `config.yml`. See [`@openapi-generator-plus/typescript-express-passport-server-generator`](https://github.com/karlvr/openapi-generator-plus-express-passport#readme) for configuration options.
