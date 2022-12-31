const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./config.env" });
const listEndpoints = require('express-list-endpoints')
const port = process.env.PORT || 8000;

//=================~import route~=================
const user = require('./routes/api/user');

// CORS
app.use(cors());
// Express Body Parser
app.use(express.json());

//=================~use route~=================
app.use('/api/user', user);
 
app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
  console.log(listEndpoints(app));
});