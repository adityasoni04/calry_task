const express = require('express');
const router = express.Router();
const { handleOptimizeBookings } = require('../controllers/bookingsController');

router.post('/optimize', handleOptimizeBookings);

module.exports = router;
