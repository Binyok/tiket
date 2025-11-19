import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Plane, 
  Hotel, 
  Train, 
  Bus, 
  Car, 
  Calendar, 
  MapPin,
  Users,
  ArrowRight,
  Star,
  TrendingUp,
  Shield,
  Clock,
  Percent
} from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('flight');
  const [tripType, setTripType] = useState('roundtrip');

  const handleFlightSearch = () => {
    navigate('/flights');
  };

  const handleHotelSearch = () => {
    navigate('/hotels');
  };

  const handleTrainSearch = () => {
    navigate('/trains');
  };

  const promos = [
    {
      id: 1,
      title: 'Diskon 40% Hotel',
      description: 'Untuk pemesanan hotel pilihan di seluruh Indonesia',
      discount: '40%',
      color: 'from-blue-500 to-blue-700',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=500&h=300&fit=crop'
    },
    {
      id: 2,
      title: 'Flash Sale Pesawat',
      description: 'Promo spesial tiket pesawat ke destinasi favorit',
      discount: '30%',
      color: 'from-purple-500 to-purple-700',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=500&h=300&fit=crop'
    },
    {
      id: 3,
      title: 'Sewa Mobil Hemat',
      description: 'Nikmati perjalanan dengan harga spesial',
      discount: '50%',
      color: 'from-green-500 to-green-700',
      image: 'https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=500&h=300&fit=crop'
    },
  ];

  const popularDestinations = [
    {
      name: 'Bali',
      hotels: '2,340 Hotel',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=400&h=300&fit=crop',
      price: 'Mulai Rp 350.000'
    },
    {
      name: 'Jakarta',
      hotels: '3,120 Hotel',
      image: 'https://images.unsplash.com/photo-1555899434-94d1eb536e0f?w=400&h=300&fit=crop',
      price: 'Mulai Rp 280.000'
    },
    {
      name: 'Yogyakarta',
      hotels: '1,580 Hotel',
      image: 'https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=400&h=300&fit=crop',
      price: 'Mulai Rp 250.000'
    },
    {
      name: 'Lombok',
      hotels: '890 Hotel',
      image: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop',
      price: 'Mulai Rp 320.000'
    },
  ];

  const features = [
    {
      icon: Shield,
      title: 'Transaksi Aman',
      description: 'Pembayaran terproteksi dengan sistem keamanan terbaik'
    },
    {
      icon: Percent,
      title: 'Harga Terbaik',
      description: 'Dapatkan harga terbaik dengan banyak promo menarik'
    },
    {
      icon: Clock,
      title: 'Support 24/7',
      description: 'Customer service siap membantu Anda kapan saja'
    },
    {
      icon: TrendingUp,
      title: 'Rewards Points',
      description: 'Kumpulkan poin setiap transaksi untuk diskon istimewa'
    },
  ];

  const tabs = [
    { id: 'flight', icon: Plane, label: 'Pesawat' },
    { id: 'hotel', icon: Hotel, label: 'Hotel' },
    { id: 'train', icon: Train, label: 'Kereta' },
    { id: 'bus', icon: Bus, label: 'Bus & Travel' },
    { id: 'car', icon: Car, label: 'Sewa Mobil' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Search */}
      <div className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-primary-800 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
        </div>

        <div className="container mx-auto px-4 pt-12 pb-32 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Wujudkan Liburan Impian Anda
            </h1>
            <p className="text-xl text-blue-100">
              Pesan tiket pesawat, hotel, kereta, dan lainnya dengan mudah dan harga terbaik
            </p>
          </div>

          {/* Search Card */}
          <div className="max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl p-6">
              {/* Tabs */}
              <div className="flex flex-wrap gap-2 mb-6 border-b pb-4">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all ${
                      activeTab === tab.id
                        ? 'bg-primary-600 text-white shadow-lg'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </div>

              {/* Flight Search Form */}
              {activeTab === 'flight' && (
                <div className="space-y-4">
                  {/* Trip Type */}
                  <div className="flex gap-4">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="tripType"
                        value="roundtrip"
                        checked={tripType === 'roundtrip'}
                        onChange={(e) => setTripType(e.target.value)}
                        className="mr-2"
                      />
                      <span className="text-gray-700">Pulang-Pergi</span>
                    </label>
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="radio"
                        name="tripType"
                        value="oneway"
                        checked={tripType === 'oneway'}
                        onChange={(e) => setTripType(e.target.value)}
                        className="mr-2"
                      />
                      <span className="text-gray-700">Sekali Jalan</span>
                    </label>
                  </div>

                  {/* Search Fields */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    <div className="lg:col-span-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Dari
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          placeholder="Jakarta (CGK)"
                          className="input-field pl-10"
                        />
                      </div>
                    </div>

                    <div className="lg:col-span-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Ke
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          placeholder="Bali (DPS)"
                          className="input-field pl-10"
                        />
                      </div>
                    </div>

                    <div className="lg:col-span-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tanggal Pergi
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="date"
                          className="input-field pl-10"
                        />
                      </div>
                    </div>

                    <div className="lg:col-span-1">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {tripType === 'roundtrip' ? 'Tanggal Pulang' : 'Penumpang'}
                      </label>
                      {tripType === 'roundtrip' ? (
                        <div className="relative">
                          <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <input
                            type="date"
                            className="input-field pl-10"
                          />
                        </div>
                      ) : (
                        <div className="relative">
                          <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <select className="input-field pl-10">
                            <option>1 Penumpang</option>
                            <option>2 Penumpang</option>
                            <option>3 Penumpang</option>
                            <option>4+ Penumpang</option>
                          </select>
                        </div>
                      )}
                    </div>
                  </div>

                  {tripType === 'roundtrip' && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Penumpang
                        </label>
                        <div className="relative">
                          <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                          <select className="input-field pl-10">
                            <option>1 Penumpang, Ekonomi</option>
                            <option>2 Penumpang, Ekonomi</option>
                            <option>3 Penumpang, Ekonomi</option>
                            <option>1 Penumpang, Bisnis</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  )}

                  <button 
                    onClick={handleFlightSearch}
                    className="btn-primary w-full md:w-auto px-12 flex items-center justify-center"
                  >
                    <span className="mr-2">Cari Penerbangan</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              )}

              {/* Hotel Search Form */}
              {activeTab === 'hotel' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Kota atau Nama Hotel
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          placeholder="Mau ke mana?"
                          className="input-field pl-10"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Check-in
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="date"
                          className="input-field pl-10"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Check-out
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="date"
                          className="input-field pl-10"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tamu & Kamar
                      </label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <select className="input-field pl-10">
                          <option>1 Kamar, 2 Tamu</option>
                          <option>2 Kamar, 4 Tamu</option>
                          <option>3 Kamar, 6 Tamu</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={handleHotelSearch}
                    className="btn-primary w-full md:w-auto px-12 flex items-center justify-center"
                  >
                    <span className="mr-2">Cari Hotel</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              )}

              {/* Train Search Form */}
              {activeTab === 'train' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Stasiun Asal
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          placeholder="Jakarta (GMR)"
                          className="input-field pl-10"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Stasiun Tujuan
                      </label>
                      <div className="relative">
                        <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          placeholder="Yogyakarta (YK)"
                          className="input-field pl-10"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tanggal Keberangkatan
                      </label>
                      <div className="relative">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="date"
                          className="input-field pl-10"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Penumpang
                      </label>
                      <div className="relative">
                        <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <select className="input-field pl-10">
                          <option>1 Dewasa</option>
                          <option>2 Dewasa</option>
                          <option>3 Dewasa</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={handleTrainSearch}
                    className="btn-primary w-full md:w-auto px-12 flex items-center justify-center"
                  >
                    <span className="mr-2">Cari Tiket Kereta</span>
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Promo Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Promo Spesial Hari Ini</h2>
            <p className="text-gray-600">Jangan lewatkan penawaran terbaik untuk perjalanan Anda</p>
          </div>
          <Link to="/promos" className="text-primary-600 hover:text-primary-700 font-semibold flex items-center">
            Lihat Semua
            <ArrowRight className="w-5 h-5 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {promos.map((promo) => (
            <div key={promo.id} className="card group cursor-pointer">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={promo.image} 
                  alt={promo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute top-4 right-4 bg-gradient-to-r ${promo.color} text-white px-4 py-2 rounded-lg font-bold text-lg shadow-lg`}>
                  {promo.discount}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{promo.title}</h3>
                <p className="text-gray-600 mb-4">{promo.description}</p>
                <button className="text-primary-600 font-semibold flex items-center hover:text-primary-700">
                  Pesan Sekarang
                  <ArrowRight className="w-4 h-4 ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Destinations */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Destinasi Populer</h2>
            <p className="text-gray-600">Temukan hotel terbaik di kota-kota favorit</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {popularDestinations.map((dest, index) => (
              <div key={index} className="card group cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={dest.image} 
                    alt={dest.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-1">{dest.name}</h3>
                    <p className="text-sm text-gray-200 mb-2">{dest.hotels}</p>
                    <p className="text-accent-400 font-semibold">{dest.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Kenapa Pilih TravelHub?</h2>
          <p className="text-gray-600">Kemudahan dan keuntungan yang kami tawarkan untuk Anda</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                <feature.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Download Aplikasi TravelHub
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Dapatkan diskon eksklusif dan kemudahan booking di genggaman Anda
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all flex items-center justify-center">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
                </svg>
                App Store
              </button>
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all flex items-center justify-center">
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                Google Play
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
