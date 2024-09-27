const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const requestRoutes = require('./routes/requests');

dotenv.config({ path: "./config/config.env" });

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/v1/requests', requestRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`.cyan.bold.underline);
});
