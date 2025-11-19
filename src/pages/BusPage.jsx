import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Users, Bus, Clock, ArrowRight } from 'lucide-react';

const BusPage = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    from: 'Jakarta',
    to: 'Bandung',
    date: '',
    passengers: 1,
  });
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);

  const cities = [
    { name: 'Jakarta' },
    { name: 'Bandung' },
    { name: 'Yogyakarta' },
    { name: 'Surabaya' },
    { name: 'Semarang' },
  ];

  const routes = [
    {
      id: 1,
      operator: 'Primajasa',
      from: 'Jakarta',
      to: 'Bandung',
      departure: '08:00',
      arrival: '11:30',
      duration: '3h 30m',
      class: 'Ekonomi AC',
      price: 150000,
      seat: '2-2',
    },
    {
      id: 2,
      operator: 'Lorena',
      from: 'Jakarta',
      to: 'Bandung',
      departure: '10:00',
      arrival: '13:30',
      duration: '3h 30m',
      class: 'Executive',
      price: 180000,
      seat: '2-1',
    },
    {
      id: 3,
      operator: 'PO Budiman',
      from: 'Jakarta',
      to: 'Bandung',
      departure: '14:00',
      arrival: '17:30',
      duration: '3h 30m',
      class: 'VIP',
      price: 200000,
      seat: '2-1',
    },
  ];

  const formatPrice = (price) =>
    new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', minimumFractionDigits: 0 }).format(price);

  const filteredRoutes = routes.filter((route) => {
    const fromMatch = route.from.toLowerCase().includes(searchData.from.split('(')[0].trim().toLowerCase());
    const toMatch = route.to.toLowerCase().includes(searchData.to.split('(')[0].trim().toLowerCase());
    return fromMatch && toMatch;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Search Bar */}
      <div className="bg-primary-600 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* From */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Dari</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={searchData.from}
                    onFocus={() => setShowFromDropdown(true)}
                    onBlur={() => setTimeout(() => setShowFromDropdown(false), 200)}
                    onChange={(e) => setSearchData({ ...searchData, from: e.target.value })}
                    className="input-field pl-10"
                    placeholder="Pilih kota keberangkatan"
                  />
                  {showFromDropdown && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {cities.map((city) => (
                        <div
                          key={city.name}
                          onClick={() => {
                            setSearchData({ ...searchData, from: city.name });
                            setShowFromDropdown(false);
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

              {/* To */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Ke</label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    value={searchData.to}
                    onFocus={() => setShowToDropdown(true)}
                    onBlur={() => setTimeout(() => setShowToDropdown(false), 200)}
                    onChange={(e) => setSearchData({ ...searchData, to: e.target.value })}
                    className="input-field pl-10"
                    placeholder="Pilih kota tujuan"
                  />
                  {showToDropdown && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                      {cities.map((city) => (
                        <div
                          key={city.name}
                          onClick={() => {
                            setSearchData({ ...searchData, to: city.name });
                            setShowToDropdown(false);
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
                    value={searchData.date}
                    onChange={(e) => setSearchData({ ...searchData, date: e.target.value })}
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
                    <option value={1}>1 Penumpang</option>
                    <option value={2}>2 Penumpang</option>
                    <option value={3}>3 Penumpang</option>
                    <option value={4}>4 Penumpang</option>
                  </select>
                </div>
              </div>
            </div>
            <button className="btn-primary mt-4 px-12">Cari Bus</button>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-md p-6 mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">
            Bus {searchData.from}  {searchData.to}
          </h1>
          <p className="text-gray-600">{filteredRoutes.length} rute tersedia</p>
        </div>

        <div className="space-y-4">
          {filteredRoutes.map((route) => (
            <div key={route.id} className="card">
              <div className="p-6 flex items-center justify-between gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-primary-100 rounded-lg flex items-center justify-center">
                    <Bus className="w-8 h-8 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{route.operator}</p>
                    <p className="text-lg font-bold text-gray-900">
                      {route.from} - {route.to}
                    </p>
                    <p className="text-xs text-gray-500">Kursi {route.seat} • {route.class}</p>
                  </div>
                </div>

                <div className="flex-1 flex items-center justify-center gap-8">
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">{route.departure}</p>
                    <p className="text-xs text-gray-500">Keberangkatan</p>
                  </div>
                  <div className="text-center">
                    <Clock className="w-5 h-5 text-primary-600 mx-auto mb-1" />
                    <p className="text-sm text-gray-600">{route.duration}</p>
                  </div>
                  <div className="text-center">
                    <p className="text-2xl font-bold text-gray-900">{route.arrival}</p>
                    <p className="text-xs text-gray-500">Tiba</p>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-2xl font-bold text-primary-600">{formatPrice(route.price)}</p>
                  <p className="text-xs text-gray-500 mb-3">per orang</p>
                  <button
                    className="btn-primary text-sm py-2 px-4 flex items-center justify-center"
                    onClick={() =>
                      navigate('/checkout/bus', {
                        state: {
                          route,
                          passengers: searchData.passengers,
                          date: searchData.date,
                        },
                      })
                    }
                  >
                    Pilih
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BusPage;
