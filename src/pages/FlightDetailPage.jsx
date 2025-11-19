import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Plane, 
  Clock, 
  Luggage, 
  Wifi,
  Coffee,
  Monitor,
  Shield,
  Check,
  ChevronRight,
  ArrowRight,
  Star
} from 'lucide-react';

const FlightDetailPage = () => {
  const navigate = useNavigate();
  const [selectedClass, setSelectedClass] = useState('economy');

  const flight = {
    id: 1,
    airline: 'Garuda Indonesia',
    logo: 'https://via.placeholder.com/120x60?text=GA',
    flightNumber: 'GA-150',
    departure: { 
      time: '08:00', 
      airport: 'CGK', 
      city: 'Jakarta',
      terminal: 'Terminal 3',
      date: 'Rabu, 18 Nov 2025'
    },
    arrival: { 
      time: '10:30', 
      airport: 'DPS', 
      city: 'Bali',
      terminal: 'Terminal Domestik',
      date: 'Rabu, 18 Nov 2025'
    },
    duration: '2h 30m',
    class: 'Ekonomi',
    stops: 'Direct',
    rating: 4.5,
    reviews: 2340
  };

  const classes = [
    {
      id: 'economy',
      name: 'Ekonomi',
      price: 1250000,
      features: ['Bagasi 20kg', 'Cabin Bag 7kg', 'Makanan & Minuman', 'In-Flight Entertainment']
    },
    {
      id: 'business',
      name: 'Bisnis',
      price: 3500000,
      features: ['Bagasi 30kg', 'Cabin Bag 10kg', 'Lounge Access', 'Priority Boarding', 'Full Meal Service', 'Flat Bed Seat']
    },
    {
      id: 'first',
      name: 'First Class',
      price: 6500000,
      features: ['Bagasi 40kg', 'Cabin Bag 15kg', 'Premium Lounge', 'Priority Check-in', 'Chauffeur Service', 'Private Suite', 'Gourmet Dining']
    }
  ];

  const amenities = [
    { icon: Wifi, label: 'WiFi Gratis' },
    { icon: Coffee, label: 'Makanan & Minuman' },
    { icon: Monitor, label: 'Entertainment System' },
    { icon: Luggage, label: 'Bagasi 20kg' }
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleBooking = () => {
    navigate('/checkout');
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center text-sm text-gray-600">
            <button onClick={() => navigate('/flights')} className="hover:text-primary-600">
              Penerbangan
            </button>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900">Detail Penerbangan</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Flight Info Card */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <img src={flight.logo} alt={flight.airline} className="w-24 h-12 object-contain" />
                    <div>
                      <h1 className="text-2xl font-bold text-gray-900">{flight.airline}</h1>
                      <p className="text-gray-600">{flight.flightNumber}</p>
                      <div className="flex items-center mt-2">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">{flight.rating} ({flight.reviews.toLocaleString()} ulasan)</span>
                      </div>
                    </div>
                  </div>
                  <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                    {flight.stops}
                  </span>
                </div>

                {/* Flight Route */}
                <div className="mb-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <p className="text-3xl font-bold text-gray-900">{flight.departure.time}</p>
                      <p className="text-lg font-semibold text-gray-700 mt-1">{flight.departure.city}</p>
                      <p className="text-sm text-gray-600">{flight.departure.airport}</p>
                      <p className="text-sm text-gray-500">{flight.departure.terminal}</p>
                      <p className="text-xs text-gray-500 mt-1">{flight.departure.date}</p>
                    </div>

                    <div className="flex-1 px-6">
                      <div className="flex items-center justify-center mb-2">
                        <div className="flex-1 border-t-2 border-gray-300"></div>
                        <Plane className="w-6 h-6 text-primary-600 mx-3 rotate-90" />
                        <div className="flex-1 border-t-2 border-gray-300"></div>
                      </div>
                      <p className="text-center text-gray-600 flex items-center justify-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {flight.duration}
                      </p>
                    </div>

                    <div className="flex-1 text-right">
                      <p className="text-3xl font-bold text-gray-900">{flight.arrival.time}</p>
                      <p className="text-lg font-semibold text-gray-700 mt-1">{flight.arrival.city}</p>
                      <p className="text-sm text-gray-600">{flight.arrival.airport}</p>
                      <p className="text-sm text-gray-500">{flight.arrival.terminal}</p>
                      <p className="text-xs text-gray-500 mt-1">{flight.arrival.date}</p>
                    </div>
                  </div>
                </div>

                {/* Amenities */}
                <div className="border-t pt-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Fasilitas</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {amenities.map((amenity, index) => (
                      <div key={index} className="flex items-center space-x-2 text-gray-700">
                        <amenity.icon className="w-5 h-5 text-primary-600" />
                        <span className="text-sm">{amenity.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Class Selection */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Pilih Kelas</h2>
                <div className="space-y-4">
                  {classes.map((cls) => (
                    <div
                      key={cls.id}
                      onClick={() => setSelectedClass(cls.id)}
                      className={`border-2 rounded-xl p-4 cursor-pointer transition-all ${
                        selectedClass === cls.id
                          ? 'border-primary-600 bg-primary-50'
                          : 'border-gray-200 hover:border-primary-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3">
                            <input
                              type="radio"
                              checked={selectedClass === cls.id}
                              onChange={() => setSelectedClass(cls.id)}
                              className="w-5 h-5"
                            />
                            <div>
                              <h3 className="font-semibold text-gray-900">{cls.name}</h3>
                              <p className="text-sm text-gray-600 mt-1">
                                {cls.features.join(' • ')}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-2xl font-bold text-primary-600">
                            {formatPrice(cls.price)}
                          </p>
                          <p className="text-xs text-gray-500">per orang</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Policies */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Kebijakan & Ketentuan</h2>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Reschedule</h4>
                      <p className="text-sm text-gray-600">
                        Dapat diubah dengan biaya Rp 250.000 + selisih harga tiket
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Shield className="w-5 h-5 text-red-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Refund</h4>
                      <p className="text-sm text-gray-600">
                        Dapat dibatalkan dengan pengembalian 50% dari harga tiket
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Check className="w-5 h-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Bagasi</h4>
                      <p className="text-sm text-gray-600">
                        Bagasi kabin 7kg, bagasi tercatat 20kg (Kelas Ekonomi)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Booking Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Ringkasan Pemesanan</h2>
                
                <div className="space-y-3 mb-6 pb-6 border-b">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Rute</span>
                    <span className="font-medium text-gray-900">{flight.departure.city} → {flight.arrival.city}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Tanggal</span>
                    <span className="font-medium text-gray-900">18 Nov 2025</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Penumpang</span>
                    <span className="font-medium text-gray-900">1 Dewasa</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-600">Kelas</span>
                    <span className="font-medium text-gray-900">
                      {classes.find(c => c.id === selectedClass)?.name}
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Harga Tiket</span>
                    <span className="font-medium text-gray-900">
                      {formatPrice(classes.find(c => c.id === selectedClass)?.price || 0)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Pajak & Biaya</span>
                    <span className="font-medium text-gray-900">Rp 150.000</span>
                  </div>
                </div>

                <div className="border-t pt-4 mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-2xl font-bold text-primary-600">
                      {formatPrice((classes.find(c => c.id === selectedClass)?.price || 0) + 150000)}
                    </span>
                  </div>
                </div>

                <button 
                  onClick={handleBooking}
                  className="btn-primary w-full justify-center mb-4"
                >
                  Lanjut ke Pembayaran
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-2" />
                    <span>Konfirmasi instan</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-2" />
                    <span>E-ticket langsung terkirim</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-2" />
                    <span>Dapat reschedule</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightDetailPage;
