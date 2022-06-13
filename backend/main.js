const bodyParser = require('body-parser');
const express = require('express');
const vehicleRoutes = require('./routes');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors("*"));
app.use('/api', vehicleRoutes)

const PORT = process.env.API_PORT || 8080;
app.listen(PORT, console.log(`Server started on port ${PORT}`));
