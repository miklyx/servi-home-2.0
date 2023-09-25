import { useState, useEffect } from 'react';

function CleanerLogedin() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    async function fetchBookings() {
      try {
        const response = await fetch('/api/getBookings');
        const data = await response.json();
        if (response.ok) {
          setBookings(data);
        } else {
          alert('Error fetching bookings: ' + data.message);
        }
      } catch (error) {
        alert('Failed to fetch bookings: ' + error.message);
      }
    }
    fetchBookings();
  }, []);

  return (
    <div className="bg-gradient-to-b from-yellow-500 to-zinc-500 p-5 text-white">
      <h2 className="text-4xl mb-5 font-semibold">Cleaner - Bookings</h2>
      <div className="overflow-x-auto">
        {bookings.map((booking, index) => (
          <div key={index} className="m-4 border border-black p-6 rounded-lg relative">
            <h3 className="text-lg font-semibold mb-2">Booking #{index + 1}</h3>
            <p className="text-gray-700">User: {booking.user.name}</p>
            <p className="text-gray-700">Address: {booking.address.detail}</p>
            <p className="text-gray-700">Service: {booking.service.type}</p>
            <p className="text-gray-700">Status: {booking.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CleanerLogedin;
