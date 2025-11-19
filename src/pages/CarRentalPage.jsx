import { useState } from 'react';
import { MapPin, Calendar, Users, Car, Fuel, Gauge } from 'lucide-react';

const CarRentalPage = () => {
  const [searchData, setSearchData] = useState({
    location: 'Jakarta',
    startDate: '',
    endDate: '',
    passengers: 4,
  });
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);

  const cities = [
    { name: 'Jakarta' },
    { name: 'Bandung' },
    { name: 'Bali' },
    { name: 'Yogyakarta' },
  ];

  const cars = [
    {
      id: 1,
      name: 'Toyota Avanza',
      type: 'MPV',
      passengers: 7,
      luggage: 2,
      transmission: 'Matic',
      fuel: 'Bensin',
      pricePerDay: 350000,
      image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?w=600&h=400&fit=crop',
    },
    {
      id: 2,
      name: 'Honda Brio',
      type: 'City Car',
      passengers: 4,
      luggage: 1,
      transmission: 'Matic',
      fuel: 'Bensin',
      pricePerDay: 250000,
      image: 'https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?w=600&h=400&fit=crop',
    },
    {
      id: 3,
      name: 'Mitsubishi Pajero Sport',
      type: 'SUV',
      passengers: 7,
      luggage: 3,
      transmission: 'Matic',
      fuel: 'Diesel',
      pricePerDay: 650000,
      image: 'https://images.unsplash.com/photo-1525609004556-c46c7d6cf023?w=600&h=400&fit=crop',
    },
  ];

  const formatPrice = (price) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);

  const filteredCars = cars; // bisa diperluas untuk filter lokasi/kapasitas

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Search Bar */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Location */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Lokasi</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={searchData.location}
                    onFocus={() => setShowLocationDropdown(true)}
                    onBlur={() => setTimeout(() => setShowLocationDropdown(false), 200)}
                    onChange={(e) => setSearchData({ ...searchData, location: e.target.value })}
                    className="input-field pl-10"
                    placeholder="Pilih kota"
                  />
                  {showLocationDropdown && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {cities.map((city) => (
                        <div
                          key={city.name}
                          onClick={() => {
                            setSearchData({ ...searchData, location: city.name });
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

              {/* Start Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tanggal Mulai</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="date"
                    value={searchData.startDate}
                    onChange={(e) => setSearchData({ ...searchData, startDate: e.target.value })}
                    className="input-field pl-10"
                  />
                </div>
              </div>

              {/* End Date */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tanggal Selesai</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="date"
                    value={searchData.endDate}
                    onChange={(e) => setSearchData({ ...searchData, endDate: e.target.value })}
                    className="input-field pl-10"
                  />
                </div>
              </div>

              {/* Passengers */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Penumpang</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select
                    className="input-field pl-10"
                    value={searchData.passengers}
                    onChange={(e) => setSearchData({ ...searchData, passengers: parseInt(e.target.value, 10) })}
                  >
                    <option value={2}>2 Penumpang</option>
                    <option value={4}>4 Penumpang</option>
                    <option value={6}>6 Penumpang</option>
                    <option value={7}>7 Penumpang</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="btn-primary mt-4 px-12">Cari Mobil</button>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Sewa Mobil di {searchData.location}</h1>
          <p className="text-gray-600">{filteredCars.length} mobil tersedia</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredCars.map((car) => (
            <div key={car.id} className="card">
              <div className="h-40 w-full overflow-hidden rounded-t-xl">
                <img src={car.image} alt={car.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-900 mb-1">{car.name}</h3>
                <p className="text-sm text-gray-600 mb-2">{car.type}</p>
                <div className="flex items-center text-xs text-gray-600 mb-3 gap-4">
                  <span className="flex items-center"><Users className="w-4 h-4 mr-1" /> {car.passengers} Penumpang</span>
                  <span className="flex items-center"><Gauge className="w-4 h-4 mr-1" /> {car.transmission}</span>
                  <span className="flex items-center"><Fuel className="w-4 h-4 mr-1" /> {car.fuel}</span>
                </div>
                <div className="flex items-end justify-between mt-2">
                  <div>
                    <p className="text-xs text-gray-500">Mulai dari</p>
                    <p className="text-2xl font-bold text-primary-600">{formatPrice(car.pricePerDay)}</p>
                    <p className="text-xs text-gray-500">per hari</p>
                  </div>
                  <button className="btn-primary text-sm py-2 px-4">Pilih Mobil</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarRentalPage;
