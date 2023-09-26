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

  const acceptBooking = async (bookingId) => {
    try {
        const response = await fetch('/api/updateBookingStatus', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ bookingId })
        });

        if (response.ok) {
          const updatedBooking = await response.json();
          setBookings(prevBookings => 
              prevBookings.map(booking => 
                  booking.id === updatedBooking.id ? updatedBooking : booking
              )
          );
        } else {
            const data = await response.json();
            alert('Error updating booking status: ' + data.message);
        }
    } catch (error) {
        alert('Failed to update booking status: ' + error.message);
    }
  };

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-200 p-8 text-gray-800">
  <h2 className="text-4xl mb-8 font-bold tracking-tight">Cleaner Dashboard</h2>
  <div className="overflow-x-auto">
    {bookings.map((booking, index) => {
      return (
        <div key={index} className="bg-white m-4 shadow-lg border-t-4 border-blue-500 p-6 rounded-lg relative transform transition-transform duration-300 hover:scale-105">
          <h3 className="text-2xl font-semibold mb-4 tracking-normal">Booking #{index + 1}</h3>
          <p className="mb-2 font-medium text-gray-700">Client: {booking.user.username}</p>
          <p className="mb-4 font-medium text-gray-700">Address: {booking.address.detail}</p>
          <div className="mb-4">
            <strong className="text-xl">Services:</strong>
            {booking.services.map((service, idx) => (
              <div key={idx} className="mt-2 text-gray-800">
                <strong className="text-lg underline">{service.type}</strong>
                <ul className="list-disc list-inside pl-5">
                  {JSON.parse(service.description).map((descItem, descIdx) => (
                    descItem.value ? (
                      <li key={descIdx} className="mt-1">
                        {descItem.attribute}: {descItem.value}
                      </li>
                    ) : null
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="mb-4 font-medium text-gray-700">Status: 
            <span className={`font-semibold ${booking.status === 'PENDING' ? 'text-yellow-500' : 'text-green-500'}`}>{booking.status}</span>
          </p>
          {booking.status === 'PENDING' && (
            <button 
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-200 transform hover:scale-105"
              onClick={() => acceptBooking(booking.id)}
            >
              Accept
            </button>
          )}
        </div>
      )
    })}
  </div>
</div>

);
}

export default CleanerLogedin;

