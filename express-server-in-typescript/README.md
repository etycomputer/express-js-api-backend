# Project Folder structure

- config/
    - index.ts
- controllers/
    - userController.ts
- models/
    - user.ts
- routes/
    - index.ts
    - userRoutes.ts
- tests/
    - userController.test.ts
- app.ts
- package.json
- tsconfig.json

- [ ] config: This folder contains configuration files such as database configuration, environment variables, etc.
- [ ] controllers: This folder contains the logic for handling requests and responses. Each controller corresponds to a resource, such as users, products, or orders.
- [ ] models: This folder contains the data models for your application, such as User, Product, or Order models.
- [ ] routes: This folder contains the route definitions for your application. The index.ts file is used to combine all the route files, while userRoutes.ts contains all the routes related to user resources.
- [ ] tests: This folder contains the automated tests for your application, such as userController.test.ts, which tests the userController.
- [ ] app.ts: This file is the main entry point for your application and contains the configuration for your Express app.
- [x] package.json: This file contains information about your project and its dependencies.
- [x] tsconfig.json: This file contains TypeScript compiler options, such as specifying the target version of JavaScript, enabling strict type checking, and configuring module resolution.

# OpenAPI Typescript Generator

Initializing a new npm package:
```shell
npm init -y
```

Install the necessary dependencies:
```shell
npm install express body-parser openapi-typescript
```

Initializing a new TypeScript configuration file:
```shell
npx tsc --init
```

Create a src folder in the root of your project, and create a new file inside it called index.ts. This file will contain the main code for your Express application.
```javascript
npx tsc --init
```

Use openapi-typescript to generate TypeScript interfaces and router functions based on your OpenAPI specification:
```shell
npx openapi-typescript openapi.yaml -o src/generated
```