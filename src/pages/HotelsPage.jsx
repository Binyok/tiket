import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  Calendar, 
  Users, 
  Star,
  Wifi,
  Coffee,
  Utensils,
  Dumbbell,
  Car,
  Heart,
  ArrowRight,
  Filter
} from 'lucide-react';

const HotelsPage = () => {
  const navigate = useNavigate();
  const [viewMode, setViewMode] = useState('grid');

  const hotels = [
    {
      id: 1,
      name: 'Grand Hyatt Jakarta',
      location: 'Thamrin, Jakarta Pusat',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
      rating: 4.8,
      reviews: 2340,
      price: 1850000,
      originalPrice: 2200000,
      discount: 16,
      amenities: ['wifi', 'pool', 'restaurant', 'gym', 'parking'],
      description: 'Hotel bintang 5 dengan fasilitas lengkap di pusat kota Jakarta'
    },
    {
      id: 2,
      name: 'The Ritz-Carlton Bali',
      location: 'Nusa Dua, Bali',
      image: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=600&h=400&fit=crop',
      rating: 4.9,
      reviews: 3120,
      price: 3250000,
      originalPrice: 3800000,
      discount: 15,
      amenities: ['wifi', 'pool', 'restaurant', 'gym', 'spa'],
      description: 'Resort mewah dengan pemandangan laut yang menakjubkan'
    },
    {
      id: 3,
      name: 'Pullman Bandung Grand Central',
      location: 'Dago, Bandung',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=600&h=400&fit=crop',
      rating: 4.6,
      reviews: 1580,
      price: 950000,
      originalPrice: 1150000,
      discount: 17,
      amenities: ['wifi', 'pool', 'restaurant', 'gym'],
      description: 'Hotel modern dengan akses mudah ke tempat wisata'
    },
    {
      id: 4,
      name: 'The Trans Luxury Hotel',
      location: 'Setiabudi, Bandung',
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&h=400&fit=crop',
      rating: 4.7,
      reviews: 2100,
      price: 2100000,
      originalPrice: 2500000,
      discount: 16,
      amenities: ['wifi', 'pool', 'restaurant', 'gym', 'spa'],
      description: 'Hotel mewah dengan arsitektur unik'
    },
    {
      id: 5,
      name: 'Shangri-La Jakarta',
      location: 'Sudirman, Jakarta Pusat',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=600&h=400&fit=crop',
      rating: 4.8,
      reviews: 2890,
      price: 2250000,
      originalPrice: 2700000,
      discount: 17,
      amenities: ['wifi', 'pool', 'restaurant', 'gym', 'spa'],
      description: 'Hotel bintang 5 dengan layanan kelas dunia'
    },
    {
      id: 6,
      name: 'Four Seasons Resort Bali',
      location: 'Jimbaran, Bali',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=600&h=400&fit=crop',
      rating: 4.9,
      reviews: 3450,
      price: 4500000,
      originalPrice: 5200000,
      discount: 13,
      amenities: ['wifi', 'pool', 'restaurant', 'gym', 'spa'],
      description: 'Resort eksklusif dengan villa privat dan pantai pribadi'
    },
  ];

  const amenityIcons = {
    wifi: { icon: Wifi, label: 'WiFi' },
    pool: { icon: '🏊', label: 'Kolam Renang' },
    restaurant: { icon: Utensils, label: 'Restoran' },
    gym: { icon: Dumbbell, label: 'Gym' },
    parking: { icon: Car, label: 'Parkir' },
    spa: { icon: '💆', label: 'Spa' },
  };

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
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Destinasi
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

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Tamu & Kamar
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <select className="input-field pl-10">
                    <option>1 Kamar, 2 Tamu</option>
                    <option>2 Kamar, 4 Tamu</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="btn-primary mt-4 px-12">
              Cari Hotel
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-1">
                Hotel di Jakarta
              </h1>
              <p className="text-gray-600">
                {hotels.length} hotel ditemukan
              </p>
            </div>
            <div className="flex items-center gap-4">
              <select className="px-4 py-2 border border-gray-300 rounded-lg">
                <option>Harga Termurah</option>
                <option>Rating Tertinggi</option>
                <option>Populer</option>
                <option>Terdekat</option>
              </select>
            </div>
          </div>
        </div>

        {/* Hotel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="card group cursor-pointer">
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <img 
                  src={hotel.image} 
                  alt={hotel.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <button className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-red-50 transition-colors">
                  <Heart className="w-5 h-5 text-gray-600 hover:text-red-500" />
                </button>
                {hotel.discount && (
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-lg text-sm font-bold">
                    {hotel.discount}% OFF
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Rating & Location */}
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-primary-600 transition-colors">
                      {hotel.name}
                    </h3>
                    <p className="text-sm text-gray-600 flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {hotel.location}
                    </p>
                  </div>
                  <div className="flex items-center bg-primary-600 text-white px-2 py-1 rounded-lg ml-2">
                    <Star className="w-4 h-4 fill-current mr-1" />
                    <span className="text-sm font-bold">{hotel.rating}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                  {hotel.description}
                </p>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {hotel.amenities.slice(0, 4).map((amenity) => {
                    const AmenityInfo = amenityIcons[amenity];
                    return (
                      <span 
                        key={amenity}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded flex items-center"
                      >
                        {typeof AmenityInfo.icon === 'string' ? (
                          <span className="mr-1">{AmenityInfo.icon}</span>
                        ) : (
                          <AmenityInfo.icon className="w-3 h-3 mr-1" />
                        )}
                        {AmenityInfo.label}
                      </span>
                    );
                  })}
                </div>

                {/* Reviews */}
                <p className="text-xs text-gray-500 mb-3">
                  {hotel.reviews.toLocaleString('id-ID')} ulasan
                </p>

                {/* Price */}
                <div className="border-t pt-3">
                  <div className="flex items-end justify-between">
                    <div>
                      <p className="text-xs text-gray-500 line-through">
                        {formatPrice(hotel.originalPrice)}
                      </p>
                      <p className="text-2xl font-bold text-primary-600">
                        {formatPrice(hotel.price)}
                      </p>
                      <p className="text-xs text-gray-500">per malam</p>
                    </div>
                    <button 
                      onClick={() => navigate('/hotel-detail')}
                      className="btn-primary text-sm py-2 px-4 flex items-center"
                    >
                      Pilih
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-8 text-center">
          <button className="btn-secondary">
            Muat Lebih Banyak Hotel
          </button>
        </div>
      </div>

      {/* Why Book With Us */}
      <div className="bg-white py-16 mt-12">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Kenapa Booking Hotel di TravelHub?
            </h2>
            <p className="text-gray-600">
              Dapatkan pengalaman menginap terbaik dengan harga termurah
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Harga Terbaik
              </h3>
              <p className="text-gray-600">
                Jaminan harga termurah atau kami kembalikan selisihnya
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <span className="text-3xl">✅</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Booking Mudah
              </h3>
              <p className="text-gray-600">
                Proses booking cepat dan mudah, konfirmasi instan
              </p>
            </div>

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
                <span className="text-3xl">🎁</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Reward Points
              </h3>
              <p className="text-gray-600">
                Kumpulkan poin setiap booking untuk diskon di masa depan
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotelsPage;
