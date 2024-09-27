const express = require('express');
const app = express();
const bookingRoutes = require('./routes/bookings');
const colors = require('colors');
const dotenv = require('dotenv');

dotenv.config({ path: "./config/config.env" });

app.use(express.json());

app.use('/api/v1/bookings', bookingRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`.yellow.bold.underline);
});
