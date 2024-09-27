const { optimizeBookings } = require('../utils/bookingUtils');

const handleOptimizeBookings = (req, res) => {
    const bookings = req.body.bookings;

    if (!Array.isArray(bookings)) {
        return res.status(400).json({ error: 'Invalid input format' });
    }

    const optimizedBookings = optimizeBookings(bookings);
    res.json(optimizedBookings);
};

module.exports = { handleOptimizeBookings };
