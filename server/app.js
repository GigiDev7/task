const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();

const countryStatsRouter = require('./routes/country');

const app = express();

//middlewares
app.use(express.json());
app.use(cors());
app.use(cookieParser());

//routes
app.use('/countries-stats', countryStatsRouter);

//Connect to DB and run server
const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
