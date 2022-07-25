const express = require('express');
const bodyParser = require('body-parser');

const apiRoutes = require('./routes/api-routes');

const app = express();

app.use(apiRoutes);

app.listen(8080);

