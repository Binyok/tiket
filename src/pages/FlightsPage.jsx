import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Plane, 
  MapPin, 
  Calendar, 
  Users, 
  Clock,
  ArrowRight,
  Filter,
  SlidersHorizontal,
  Star
} from 'lucide-react';

const FlightsPage = () => {
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(true);
  const [priceRange, setPriceRange] = useState([0, 10000000]);
  const [searchData, setSearchData] = useState({
    from: 'Jakarta (CGK)',
    to: 'Bali (DPS)',
    date: '',
    passengers: 1
  });
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [selectedAirlines, setSelectedAirlines] = useState([]);
  const [selectedTimeSlots, setSelectedTimeSlots] = useState([]);
  const [sortBy, setSortBy] = useState('price');

  const cities = [
    { name: 'Jakarta', code: 'CGK' },
    { name: 'Bali', code: 'DPS' },
    { name: 'Surabaya', code: 'SUB' },
    { name: 'Yogyakarta', code: 'JOG' },
    { name: 'Medan', code: 'KNO' },
    { name: 'Makassar', code: 'UPG' },
    { name: 'Bandung', code: 'BDO' },
    { name: 'Semarang', code: 'SRG' },
  ];

  const handleSearch = () => {
    console.log('Searching with:', searchData);
  };

  const toggleAirline = (airline) => {
    setSelectedAirlines(prev => 
      prev.includes(airline) 
        ? prev.filter(a => a !== airline)
        : [...prev, airline]
    );
  };

  const toggleTimeSlot = (slot) => {
    setSelectedTimeSlots(prev => 
      prev.includes(slot) 
        ? prev.filter(s => s !== slot)
        : [...prev, slot]
    );
  };

  const flights = [
    {
      id: 1,
      airline: 'Garuda Indonesia',
      logo: 'https://via.placeholder.com/80x40?text=GA',
      departure: { time: '08:00', airport: 'CGK', city: 'Jakarta' },
      arrival: { time: '10:30', airport: 'DPS', city: 'Bali' },
      duration: '2h 30m',
      price: 1250000,
      class: 'Ekonomi',
      stops: 'Direct',
      baggage: '20kg',
      rating: 4.5
    },
    {
      id: 2,
      airline: 'Lion Air',
      logo: 'https://via.placeholder.com/80x40?text=JT',
      departure: { time: '09:30', airport: 'CGK', city: 'Jakarta' },
      arrival: { time: '12:00', airport: 'DPS', city: 'Bali' },
      duration: '2h 30m',
      price: 950000,
      class: 'Ekonomi',
      stops: 'Direct',
      baggage: '20kg',
      rating: 4.2
    },
    {
      id: 3,
      airline: 'AirAsia',
      logo: 'https://via.placeholder.com/80x40?text=AK',
      departure: { time: '11:00', airport: 'CGK', city: 'Jakarta' },
      arrival: { time: '13:30', airport: 'DPS', city: 'Bali' },
      duration: '2h 30m',
      price: 850000,
      class: 'Ekonomi',
      stops: 'Direct',
      baggage: '20kg',
      rating: 4.0
    },
    {
      id: 4,
      airline: 'Batik Air',
      logo: 'https://via.placeholder.com/80x40?text=ID',
      departure: { time: '13:30', airport: 'CGK', city: 'Jakarta' },
      arrival: { time: '16:00', airport: 'DPS', city: 'Bali' },
      duration: '2h 30m',
      price: 1100000,
      class: 'Ekonomi',
      stops: 'Direct',
      baggage: '20kg',
      rating: 4.3
    },
    {
      id: 5,
      airline: 'Citilink',
      logo: 'https://via.placeholder.com/80x40?text=QG',
      departure: { time: '15:00', airport: 'CGK', city: 'Jakarta' },
      arrival: { time: '17:30', airport: 'DPS', city: 'Bali' },
      duration: '2h 30m',
      price: 920000,
      class: 'Ekonomi',
      stops: 'Direct',
      baggage: '20kg',
      rating: 4.1
    },
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Search Bar */}
      <div className="bg-primary-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Dari</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={searchData.from}
                    onFocus={() => setShowFromDropdown(true)}
                    onBlur={() => setTimeout(() => setShowFromDropdown(false), 200)}
                    onChange={(e) => setSearchData({...searchData, from: e.target.value})}
                    className="input-field pl-10"
                    placeholder="Pilih kota keberangkatan"
                  />
                  {showFromDropdown && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {cities.map((city) => (
                        <div
                          key={city.code}
                          onClick={() => {
                            setSearchData({...searchData, from: `${city.name} (${city.code})`});
                            setShowFromDropdown(false);
                          }}
                          className="px-4 py-3 hover:bg-primary-50 cursor-pointer transition-colors"
                        >
                          <p className="font-medium text-gray-900">{city.name}</p>
                          <p className="text-sm text-gray-500">{city.code}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Ke</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={searchData.to}
                    onFocus={() => setShowToDropdown(true)}
                    onBlur={() => setTimeout(() => setShowToDropdown(false), 200)}
                    onChange={(e) => setSearchData({...searchData, to: e.target.value})}
                    className="input-field pl-10"
                    placeholder="Pilih kota tujuan"
                  />
                  {showToDropdown && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {cities.map((city) => (
                        <div
                          key={city.code}
                          onClick={() => {
                            setSearchData({...searchData, to: `${city.name} (${city.code})`});
                            setShowToDropdown(false);
                          }}
                          className="px-4 py-3 hover:bg-primary-50 cursor-pointer transition-colors"
                        >
                          <p className="font-medium text-gray-900">{city.name}</p>
                          <p className="text-sm text-gray-500">{city.code}</p>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Tanggal</label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="date"
                    value={searchData.date}
                    onChange={(e) => setSearchData({...searchData, date: e.target.value})}
                    className="input-field pl-10"
                  />
                </div>
              </div>

              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Penumpang</label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select 
                    className="input-field pl-10"
                    value={searchData.passengers}
                    onChange={(e) => setSearchData({...searchData, passengers: parseInt(e.target.value)})}
                  >
                    <option value={1}>1 Penumpang</option>
                    <option value={2}>2 Penumpang</option>
                    <option value={3}>3 Penumpang</option>
                  </select>
                </div>
              </div>

              <div className="md:col-span-1 flex items-end">
                <button onClick={handleSearch} className="btn-primary w-full">
                  Cari
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-6">
          {/* Filters Sidebar */}
          {showFilters && (
            <div className="w-80 flex-shrink-0">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900 flex items-center">
                    <Filter className="w-5 h-5 mr-2" />
                    Filter
                  </h2>
                  <button className="text-primary-600 text-sm font-medium">Reset</button>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Harga</h3>
                  <div className="space-y-2">
                    <input
                      type="range"
                      min="0"
                      max="10000000"
                      step="100000"
                      value={priceRange[1]}
                      onChange={(e) => setPriceRange([0, parseInt(e.target.value)])}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>{formatPrice(priceRange[0])}</span>
                      <span>{formatPrice(priceRange[1])}</span>
                    </div>
                  </div>
                </div>

                {/* Departure Time */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Waktu Keberangkatan</h3>
                  <div className="space-y-2">
                    {['morning', 'afternoon', 'evening', 'night'].map((slot, idx) => (
                      <label key={slot} className="flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="mr-2"
                          checked={selectedTimeSlots.includes(slot)}
                          onChange={() => toggleTimeSlot(slot)}
                        />
                        <span className="text-sm text-gray-700">
                          {slot === 'morning' && 'Pagi (00:00 - 06:00)'}
                          {slot === 'afternoon' && 'Siang (06:00 - 12:00)'}
                          {slot === 'evening' && 'Sore (12:00 - 18:00)'}
                          {slot === 'night' && 'Malam (18:00 - 24:00)'}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Airlines */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Maskapai</h3>
                  <div className="space-y-2">
                    {['Garuda Indonesia', 'Lion Air', 'AirAsia', 'Batik Air', 'Citilink'].map((airline) => (
                      <label key={airline} className="flex items-center cursor-pointer">
                        <input 
                          type="checkbox" 
                          className="mr-2"
                          checked={selectedAirlines.includes(airline)}
                          onChange={() => toggleAirline(airline)}
                        />
                        <span className="text-sm text-gray-700">{airline}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Transit */}
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-3">Transit</h3>
                  <div className="space-y-2">
                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm text-gray-700">Direct</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm text-gray-700">1 Transit</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input type="checkbox" className="mr-2" />
                      <span className="text-sm text-gray-700">2+ Transit</span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Flight Results */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="bg-white rounded-xl shadow-md p-6 mb-6">
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900 mb-1">
                    Jakarta → Bali
                  </h1>
                  <p className="text-gray-600">
                    {flights.length} penerbangan ditemukan • Rabu, 18 Nov 2025
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
                  >
                    <SlidersHorizontal className="w-5 h-5" />
                    <span>{showFilters ? 'Sembunyikan' : 'Tampilkan'} Filter</span>
                  </button>
                  <select 
                    className="px-4 py-2 border border-gray-300 rounded-lg text-gray-900"
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                  >
                    <option value="price">Harga Termurah</option>
                    <option value="departure">Keberangkatan Terawal</option>
                    <option value="arrival">Kedatangan Terawal</option>
                    <option value="duration">Durasi Terpendek</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Flight Cards */}
            <div className="space-y-4">
              {flights.map((flight) => (
                <div key={flight.id} className="card hover:shadow-2xl transition-all">
                  <div className="p-6">
                    <div className="flex items-center justify-between gap-6">
                      {/* Airline Info */}
                      <div className="flex-shrink-0">
                        <img 
                          src={flight.logo} 
                          alt={flight.airline}
                          className="w-20 h-10 object-contain mb-2"
                        />
                        <p className="text-xs text-gray-600">{flight.airline}</p>
                        <div className="flex items-center mt-1">
                          <Star className="w-3 h-3 text-yellow-400 fill-current" />
                          <span className="text-xs text-gray-600 ml-1">{flight.rating}</span>
                        </div>
                      </div>

                      {/* Flight Details */}
                      <div className="flex-1 flex items-center gap-4">
                        {/* Departure */}
                        <div className="text-center">
                          <p className="text-2xl font-bold text-gray-900">{flight.departure.time}</p>
                          <p className="text-sm text-gray-600">{flight.departure.airport}</p>
                          <p className="text-xs text-gray-500">{flight.departure.city}</p>
                        </div>

                        {/* Flight Path */}
                        <div className="flex-1 px-4">
                          <div className="flex items-center justify-center mb-2">
                            <div className="flex-1 border-t-2 border-gray-300"></div>
                            <Plane className="w-5 h-5 text-primary-600 mx-2" />
                            <div className="flex-1 border-t-2 border-gray-300"></div>
                          </div>
                          <div className="text-center">
                            <p className="text-sm text-gray-600">{flight.duration}</p>
                            <p className="text-xs text-green-600 font-medium">{flight.stops}</p>
                          </div>
                        </div>

                        {/* Arrival */}
                        <div className="text-center">
                          <p className="text-2xl font-bold text-gray-900">{flight.arrival.time}</p>
                          <p className="text-sm text-gray-600">{flight.arrival.airport}</p>
                          <p className="text-xs text-gray-500">{flight.arrival.city}</p>
                        </div>
                      </div>

                      {/* Price & Booking */}
                      <div className="flex-shrink-0 text-right">
                        <p className="text-xs text-gray-600 mb-1">{flight.class}</p>
                        <p className="text-2xl font-bold text-primary-600 mb-1">
                          {formatPrice(flight.price)}
                        </p>
                        <p className="text-xs text-gray-500 mb-3">per orang</p>
                        <button 
                          onClick={() => navigate('/flight-detail')}
                          className="btn-primary text-sm py-2 px-6 flex items-center"
                        >
                          Pilih
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </button>
                        <p className="text-xs text-gray-500 mt-2">Bagasi: {flight.baggage}</p>
                      </div>
                    </div>
                  </div>

                  {/* Additional Info */}
                  <div className="border-t border-gray-100 px-6 py-3 bg-gray-50 rounded-b-xl">
                    <div className="flex items-center justify-between text-xs text-gray-600">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          Refundable
                        </span>
                        <span>• Reschedule Available</span>
                      </div>
                      <button 
                        onClick={() => navigate('/flight-detail')}
                        className="text-primary-600 font-medium hover:text-primary-700"
                      >
                        Lihat Detail
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-8 text-center">
              <button className="btn-secondary">
                Muat Lebih Banyak
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightsPage;
