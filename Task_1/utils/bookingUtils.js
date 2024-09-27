function optimizeBookings(bookings) {
  if (!bookings.length) return [];

  bookings.sort((a, b) => a[0] - b[0]);

  const optimizedBookings = [];
  let currentStart = bookings[0][0];
  let currentEnd = bookings[0][1];

  for (let i = 1; i < bookings.length; i++) {
      const [start, end] = bookings[i];

      if (start <= currentEnd) {
          currentEnd = Math.max(currentEnd, end);
      } else {
          optimizedBookings.push([currentStart, currentEnd]);
          currentStart = start;
          currentEnd = end;
      }
  }

  optimizedBookings.push([currentStart, currentEnd]);

  return optimizedBookings;
}

module.exports = { optimizeBookings };
