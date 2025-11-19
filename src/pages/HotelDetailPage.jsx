import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  Star,
  Wifi,
  Coffee,
  Utensils,
  Dumbbell,
  Car,
  Users,
  Bed,
  Check,
  ChevronRight,
  ArrowRight,
  Phone,
  Mail
} from 'lucide-react';

const HotelDetailPage = () => {
  const navigate = useNavigate();
  const [selectedRoom, setSelectedRoom] = useState(null);

  const hotel = {
    name: 'Grand Hyatt Jakarta',
    location: 'Thamrin, Jakarta Pusat',
    address: 'Jl. MH. Thamrin No.28-30, Jakarta Pusat 10350',
    rating: 4.8,
    reviews: 2340,
    description: 'Hotel bintang 5 dengan fasilitas lengkap di pusat kota Jakarta. Menawarkan kemewahan dan kenyamanan dengan akses mudah ke berbagai tempat wisata dan pusat bisnis.',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1582719508461-905c673771fd?w=800&h=500&fit=crop',
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&h=500&fit=crop',
    ]
  };

  const facilities = [
    { icon: Wifi, label: 'WiFi Gratis' },
    { icon: Utensils, label: 'Restoran' },
    { icon: Coffee, label: 'Cafe & Bar' },
    { icon: Dumbbell, label: 'Fitness Center' },
    { icon: Car, label: 'Parkir Gratis' },
    { icon: Users, label: 'Meeting Room' }
  ];

  const rooms = [
    {
      id: 1,
      name: 'Superior Room',
      size: '32 m²',
      beds: '1 King Bed atau 2 Twin Beds',
      capacity: '2 Tamu',
      price: 1850000,
      originalPrice: 2200000,
      facilities: ['WiFi Gratis', 'TV LED', 'AC', 'Kamar Mandi', 'Minibar'],
      image: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=400&h=300&fit=crop'
    },
    {
      id: 2,
      name: 'Deluxe Room',
      size: '42 m²',
      beds: '1 King Bed',
      capacity: '2 Tamu',
      price: 2450000,
      originalPrice: 2900000,
      facilities: ['WiFi Gratis', 'TV LED', 'AC', 'Bathtub', 'Balkon', 'City View'],
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=400&h=300&fit=crop'
    },
    {
      id: 3,
      name: 'Executive Suite',
      size: '65 m²',
      beds: '1 King Bed + Sofa Bed',
      capacity: '3 Tamu',
      price: 4250000,
      originalPrice: 5000000,
      facilities: ['WiFi Gratis', 'Living Room', 'Kitchen', 'Bathtub', 'Premium View'],
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?w=400&h=300&fit=crop'
    }
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    }).format(price);
  };

  const handleBooking = () => {
    if (selectedRoom) {
      navigate('/checkout');
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-6 flex items-center text-sm text-gray-600">
            <button onClick={() => navigate('/hotels')} className="hover:text-primary-600">
              Hotel
            </button>
            <ChevronRight className="w-4 h-4 mx-2" />
            <span className="text-gray-900">{hotel.name}</span>
          </div>

          {/* Hotel Images Gallery */}
          <div className="grid grid-cols-4 gap-2 mb-6 rounded-xl overflow-hidden">
            <div className="col-span-4 md:col-span-2 md:row-span-2">
              <img 
                src={hotel.images[0]} 
                alt={hotel.name}
                className="w-full h-full object-cover"
              />
            </div>
            {hotel.images.slice(1).map((img, idx) => (
              <div key={idx} className="col-span-2 md:col-span-1">
                <img 
                  src={img} 
                  alt={`${hotel.name} ${idx + 2}`}
                  className="w-full h-48 object-cover"
                />
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Hotel Info */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h1 className="text-3xl font-bold text-gray-900 mb-2">{hotel.name}</h1>
                    <div className="flex items-center space-x-4 mb-3">
                      <div className="flex items-center bg-primary-600 text-white px-3 py-1 rounded-lg">
                        <Star className="w-4 h-4 fill-current mr-1" />
                        <span className="font-bold">{hotel.rating}</span>
                      </div>
                      <span className="text-gray-600">
                        {hotel.reviews.toLocaleString()} ulasan
                      </span>
                    </div>
                    <div className="flex items-center text-gray-600 mb-2">
                      <MapPin className="w-5 h-5 mr-2" />
                      <span>{hotel.location}</span>
                    </div>
                    <p className="text-sm text-gray-500">{hotel.address}</p>
                  </div>
                </div>

                <p className="text-gray-700 mb-6">{hotel.description}</p>

                {/* Facilities */}
                <div className="border-t pt-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Fasilitas Hotel</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {facilities.map((facility, idx) => (
                      <div key={idx} className="flex items-center space-x-2 text-gray-700">
                        <facility.icon className="w-5 h-5 text-primary-600" />
                        <span className="text-sm">{facility.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Contact */}
                <div className="border-t pt-6 mt-6">
                  <h3 className="font-semibold text-gray-900 mb-4">Kontak Hotel</h3>
                  <div className="space-y-2">
                    <div className="flex items-center text-gray-700">
                      <Phone className="w-5 h-5 mr-3 text-primary-600" />
                      <span>+62 21 2992 1234</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <Mail className="w-5 h-5 mr-3 text-primary-600" />
                      <span>reservation@grandhyatt-jakarta.com</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Room Selection */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Pilih Kamar</h2>
                <div className="space-y-4">
                  {rooms.map((room) => (
                    <div
                      key={room.id}
                      className={`border-2 rounded-xl overflow-hidden cursor-pointer transition-all ${
                        selectedRoom === room.id
                          ? 'border-primary-600 shadow-lg'
                          : 'border-gray-200 hover:border-primary-300'
                      }`}
                      onClick={() => setSelectedRoom(room.id)}
                    >
                      <div className="flex flex-col md:flex-row">
                        {/* Room Image */}
                        <div className="md:w-1/3">
                          <img 
                            src={room.image} 
                            alt={room.name}
                            className="w-full h-48 md:h-full object-cover"
                          />
                        </div>

                        {/* Room Info */}
                        <div className="flex-1 p-4">
                          <div className="flex items-start justify-between mb-3">
                            <div className="flex-1">
                              <h3 className="text-lg font-bold text-gray-900 mb-2">{room.name}</h3>
                              <div className="space-y-1 text-sm text-gray-600 mb-3">
                                <div className="flex items-center">
                                  <Bed className="w-4 h-4 mr-2" />
                                  {room.beds}
                                </div>
                                <div className="flex items-center">
                                  <Users className="w-4 h-4 mr-2" />
                                  {room.capacity}
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="w-4 h-4 mr-2" />
                                  {room.size}
                                </div>
                              </div>
                            </div>
                            <div className="text-right ml-4">
                              <p className="text-xs text-gray-500 line-through">
                                {formatPrice(room.originalPrice)}
                              </p>
                              <p className="text-2xl font-bold text-primary-600">
                                {formatPrice(room.price)}
                              </p>
                              <p className="text-xs text-gray-500">per malam</p>
                            </div>
                          </div>

                          {/* Room Facilities */}
                          <div className="flex flex-wrap gap-2 mb-3">
                            {room.facilities.map((fac, idx) => (
                              <span 
                                key={idx}
                                className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                              >
                                {fac}
                              </span>
                            ))}
                          </div>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              setSelectedRoom(room.id);
                            }}
                            className={`w-full md:w-auto px-6 py-2 rounded-lg font-semibold transition-all ${
                              selectedRoom === room.id
                                ? 'bg-primary-600 text-white'
                                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                            }`}
                          >
                            {selectedRoom === room.id ? 'Terpilih' : 'Pilih Kamar'}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Policies */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Kebijakan Hotel</h2>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Check-in / Check-out</h4>
                    <p className="text-gray-600">Check-in: 14:00 | Check-out: 12:00</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Pembatalan</h4>
                    <p className="text-gray-600">
                      Pembatalan gratis hingga 3 hari sebelum tanggal check-in. Setelah itu dikenakan biaya 1 malam.
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Ketentuan Lainnya</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      <li>Dilarang merokok di dalam kamar</li>
                      <li>Hewan peliharaan tidak diperbolehkan</li>
                      <li>Deposit Rp 500.000 per kamar</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Sidebar - Booking Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Detail Pemesanan</h2>
                
                {selectedRoom ? (
                  <>
                    <div className="space-y-3 mb-6 pb-6 border-b">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Hotel</span>
                        <span className="font-medium text-gray-900 text-right">{hotel.name}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Check-in</span>
                        <span className="font-medium text-gray-900">18 Nov 2025</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Check-out</span>
                        <span className="font-medium text-gray-900">20 Nov 2025</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Durasi</span>
                        <span className="font-medium text-gray-900">2 Malam</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Tipe Kamar</span>
                        <span className="font-medium text-gray-900">
                          {rooms.find(r => r.id === selectedRoom)?.name}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Harga per malam</span>
                        <span className="font-medium text-gray-900">
                          {formatPrice(rooms.find(r => r.id === selectedRoom)?.price || 0)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">2 malam</span>
                        <span className="font-medium text-gray-900">
                          {formatPrice((rooms.find(r => r.id === selectedRoom)?.price || 0) * 2)}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Pajak & Biaya</span>
                        <span className="font-medium text-gray-900">Rp 350.000</span>
                      </div>
                    </div>

                    <div className="border-t pt-4 mb-6">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold text-gray-900">Total</span>
                        <span className="text-2xl font-bold text-primary-600">
                          {formatPrice(((rooms.find(r => r.id === selectedRoom)?.price || 0) * 2) + 350000)}
                        </span>
                      </div>
                    </div>

                    <button 
                      onClick={handleBooking}
                      className="btn-primary w-full justify-center mb-4"
                    >
                      Pesan Sekarang
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </button>
                  </>
                ) : (
                  <div className="text-center py-8">
                    <p className="text-gray-500 mb-4">Pilih kamar terlebih dahulu</p>
                  </div>
                )}

                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-2" />
                    <span>Konfirmasi instan</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-2" />
                    <span>Pembatalan gratis</span>
                  </div>
                  <div className="flex items-center">
                    <Check className="w-4 h-4 text-green-600 mr-2" />
                    <span>Tidak perlu kartu kredit</span>
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

export default HotelDetailPage;
