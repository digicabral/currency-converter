const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger/swagger_output.json';
const endpointsFiles = ['./middlewares/user.js']

swaggerAutogen(outputFile, endpointsFiles);