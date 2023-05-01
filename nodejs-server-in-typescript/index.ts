import path from 'path';
import http from 'http';
import { expressAppConfig } from 'oas3-tools';

const serverPort = 3000;

// swaggerRouter configuration
const options = {
    routing: {
        controllers: path.join(__dirname, './controllers')
    },
};

const expressAppConfigObj = expressAppConfig(path.join(__dirname, 'api/openapi.yaml'), options);
const app = expressAppConfigObj.getApp();

// Initialize the Swagger middleware
http.createServer(app).listen(serverPort, () => {
    console.log(`Your server is listening on port ${serverPort} (http://localhost:${serverPort})`);
    console.log(`Swagger-ui is available on http://localhost:${serverPort}/docs`);
});
