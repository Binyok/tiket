import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Train, MapPin, Calendar, Users, Clock, ArrowRight, Star } from 'lucide-react';

const TrainsPage = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    from: 'Jakarta (GMR)',
    to: 'Yogyakarta (YK)',
    date: '',
    passengers: 1
  });

  const cities = [
    { name: 'Jakarta', code: 'GMR' },
    { name: 'Yogyakarta', code: 'YK' },
    { name: 'Surabaya', code: 'SB' },
    { name: 'Bandung', code: 'BD' },
    { name: 'Semarang', code: 'SMG' },
  ];

  const trains = [
    {
      id: 1,
      name: 'Argo Parahyangan',
      trainNumber: 'KA-123',
      departure: { time: '08:00', station: 'Gambir' },
      arrival: { time: '11:30', station: 'Lempuyangan' },
      duration: '3h 30m',
      price: 250000,
      class: 'Eksekutif',
      available: 45
    },
    {
      id: 2,
      name: 'Gajayana',
      trainNumber: 'KA-456',
      departure: { time: '10:00', station: 'Gambir' },
      arrival: { time: '13:45', station: 'Lempuyangan' },
      duration: '3h 45m',
      price: 200000,
      class: 'Bisnis',
      available: 32
    },
    {
      id: 3,
      name: 'Taksaka',
      trainNumber: 'KA-789',
      departure: { time: '14:30', station: 'Gambir' },
      arrival: { time: '18:15', station: 'Lempuyangan' },
      duration: '3h 45m',
      price: 230000,
      class: 'Eksekutif',
      available: 28
    }
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
      <div className="bg-primary-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Stasiun Asal</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={searchData.from}
                    onChange={(e) => setSearchData({...searchData, from: e.target.value})}
                    className="input-field pl-10"
                  />
                </div>
              </div>

              <div className="md:col-span-1">
                <label className="block text-sm font-medium text-gray-700 mb-2">Stasiun Tujuan</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={searchData.to}
                    onChange={(e) => setSearchData({...searchData, to: e.target.value})}
                    className="input-field pl-10"
                  />
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
                <button className="btn-primary w-full">Cari</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">Kereta Api {searchData.from.split('(')[0]} → {searchData.to.split('(')[0]}</h1>
          <p className="text-gray-600">{trains.length} kereta tersedia</p>
        </div>

        <div className="space-y-4">
          {trains.map((train) => (
            <div key={train.id} className="card">
              <div className="p-6">
                <div className="flex items-center justify-between gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-primary-100 rounded-lg flex items-center justify-center mb-2">
                      <Train className="w-10 h-10 text-primary-600" />
                    </div>
                    <p className="text-xs text-gray-600 text-center">{train.trainNumber}</p>
                  </div>

                  <div className="flex-1 flex items-center gap-4">
                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">{train.departure.time}</p>
                      <p className="text-sm text-gray-600">{train.departure.station}</p>
                    </div>

                    <div className="flex-1 px-4">
                      <div className="flex items-center justify-center mb-2">
                        <div className="flex-1 border-t-2 border-gray-300"></div>
                        <Train className="w-5 h-5 text-primary-600 mx-2" />
                        <div className="flex-1 border-t-2 border-gray-300"></div>
                      </div>
                      <p className="text-center text-sm text-gray-600">{train.duration}</p>
                    </div>

                    <div className="text-center">
                      <p className="text-2xl font-bold text-gray-900">{train.arrival.time}</p>
                      <p className="text-sm text-gray-600">{train.arrival.station}</p>
                    </div>
                  </div>

                  <div className="flex-shrink-0 text-right">
                    <h3 className="font-bold text-lg text-gray-900 mb-1">{train.name}</h3>
                    <p className="text-sm text-gray-600 mb-1">{train.class}</p>
                    <p className="text-sm text-green-600 mb-3">{train.available} kursi tersedia</p>
                    <p className="text-2xl font-bold text-primary-600 mb-3">{formatPrice(train.price)}</p>
                    <button 
                      onClick={() => navigate('/checkout')}
                      className="btn-primary text-sm py-2 px-6"
                    >
                      Pilih
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrainsPage;
