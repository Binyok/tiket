import { useState } from 'react';
import { MapPin, Calendar, Ticket } from 'lucide-react';

const EventsPage = () => {
  const [location, setLocation] = useState('Jakarta');
  const [date, setDate] = useState('');
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);

  const cities = [
    { name: 'Jakarta' },
    { name: 'Bandung' },
    { name: 'Bali' },
    { name: 'Yogyakarta' },
  ];

  const events = [
    {
      id: 1,
      name: 'Jakarta Music Festival',
      location: 'Jakarta',
      date: '2025-12-20',
      venue: 'Gelora Bung Karno',
      price: 350000,
      image: 'https://images.unsplash.com/photo-1515165562835-c4c9e0737eaa?w=600&h=400&fit=crop',
    },
    {
      id: 2,
      name: 'Bandung Food Carnival',
      location: 'Bandung',
      date: '2025-12-05',
      venue: 'Cihampelas Walk',
      price: 150000,
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&h=400&fit=crop',
    },
    {
      id: 3,
      name: 'Bali Beach Party',
      location: 'Bali',
      date: '2025-12-31',
      venue: 'Kuta Beach',
      price: 500000,
      image: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=600&h=400&fit=crop',
    },
  ];

  const formatPrice = (price) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);

  const filteredEvents = events.filter((event) => {
    const matchLocation = event.location.toLowerCase().includes(location.toLowerCase());
    const matchDate = !date || event.date === date;
    return matchLocation && matchDate;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-10">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Cari Event & Hiburan</h1>

          {/* Filters */}
          <div className="bg-white rounded-xl shadow-md p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Lokasi</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={location}
                    onFocus={() => setShowLocationDropdown(true)}
                    onBlur={() => setTimeout(() => setShowLocationDropdown(false), 200)}
                    onChange={(e) => setLocation(e.target.value)}
                    className="input-field pl-10"
                    placeholder="Pilih kota"
                  />
                  {showLocationDropdown && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {cities.map((city) => (
                        <div
                          key={city.name}
                          onClick={() => {
                            setLocation(city.name);
                            setShowLocationDropdown(false);
                          }}
                          className="px-4 py-3 hover:bg-primary-50 cursor-pointer"
                        >
                          <p className="font-medium text-gray-900">{city.name}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tanggal</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="date"
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="input-field pl-10"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredEvents.map((event) => (
              <div key={event.id} className="card">
                <div className="h-40 w-full overflow-hidden rounded-t-xl">
                  <img src={event.image} alt={event.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{event.name}</h3>
                  <p className="text-sm text-gray-600 mb-1 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" /> {event.location} • {event.venue}
                  </p>
                  <p className="text-sm text-gray-600 mb-3 flex items-center">
                    <Calendar className="w-4 h-4 mr-1" /> {event.date}
                  </p>
                  <div className="flex items-center justify-between mt-2">
                    <div>
                      <p className="text-xs text-gray-500">Mulai dari</p>
                      <p className="text-xl font-bold text-primary-600">{formatPrice(event.price)}</p>
                    </div>
                    <button className="btn-primary text-sm py-2 px-4 flex items-center">
                      Pesan Tiket
                      <Ticket className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsPage;
