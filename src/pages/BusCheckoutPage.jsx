import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  CreditCard,
  Banknote,
  Building2,
  Smartphone,
  Check,
  Lock,
  ChevronRight,
  Bus,
  MapPin,
  Calendar,
  Users
} from 'lucide-react';

const BusCheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [selectedOption, setSelectedOption] = useState('');

  const state = location.state || {};
  const { route, passengers = 1, date } = state;

  if (!route) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-md p-8 max-w-md text-center">
          <p className="text-gray-700 mb-4">
            Data pemesanan bus tidak ditemukan. Silakan pilih rute bus terlebih dahulu.
          </p>
          <button className="btn-primary" onClick={() => navigate('/bus')}>
            Kembali ke Pencarian Bus
          </button>
        </div>
      </div>
    );
  }

  const paymentMethods = [
    {
      id: 'credit-card',
      name: 'Kartu Kredit / Debit',
      icon: CreditCard,
      options: ['Visa', 'Mastercard', 'JCB', 'American Express'],
    },
    {
      id: 'bank-transfer',
      name: 'Transfer Bank',
      icon: Building2,
      options: ['BCA', 'Mandiri', 'BNI', 'BRI', 'CIMB Niaga', 'Permata'],
    },
    {
      id: 'e-wallet',
      name: 'E-Wallet',
      icon: Smartphone,
      options: ['GoPay', 'OVO', 'DANA', 'ShopeePay', 'LinkAja'],
    },
  ];

  const passengerCount = passengers || 1;
  const basePricePerPassenger = route.price || 0;
  const subtotal = basePricePerPassenger * passengerCount;
  const tax = Math.round(subtotal * 0.1);
  const serviceFee = 5000;
  const totalPrice = subtotal + tax + serviceFee;

  const formatPrice = (price) =>
    new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);

  const passengerIndexes = Array.from({ length: passengerCount }, (_, idx) => idx + 1);

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Checkout Bus</h1>
            <p className="text-gray-600">Lengkapi pembayaran untuk menyelesaikan pemesanan bus Anda</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Contact Information */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">1</span>
                  Informasi Kontak
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap *</label>
                    <input type="text" className="input-field" placeholder="Masukkan nama lengkap" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input type="email" className="input-field" placeholder="email@example.com" />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Telepon *</label>
                    <input type="tel" className="input-field" placeholder="+62" />
                  </div>
                </div>
              </div>

              {/* Passenger Details */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                  Detail Penumpang
                </h2>
                {passengerIndexes.map((p, idx) => (
                  <div key={p} className="mb-6 last:mb-0">
                    <h3 className="font-semibold text-gray-900 mb-3">Penumpang {p}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Nama Lengkap *</label>
                        <input type="text" className="input-field" placeholder="Sesuai KTP" />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Kursi (opsional)</label>
                        <input type="text" className="input-field" placeholder="Contoh: 2A" />
                      </div>
                    </div>
                    {idx < passengerIndexes.length - 1 && <hr className="mt-6" />}
                  </div>
                ))}
              </div>

              {/* Payment Method */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">3</span>
                  Metode Pembayaran
                </h2>
                <div className="space-y-3">
                  {paymentMethods.map((method) => (
                    <div key={method.id}>
                      <button
                        onClick={() => setPaymentMethod(method.id)}
                        className={`w-full flex items-center justify-between p-4 rounded-lg border-2 transition-all ${
                          paymentMethod === method.id
                            ? 'border-primary-600 bg-primary-50'
                            : 'border-gray-200 hover:border-primary-300'
                        }`}
                      >
                        <div className="flex items-center">
                          <method.icon
                            className={`w-6 h-6 mr-3 ${
                              paymentMethod === method.id ? 'text-primary-600' : 'text-gray-600'
                            }`}
                          />
                          <span
                            className={`font-medium ${
                              paymentMethod === method.id ? 'text-primary-700' : 'text-gray-700'
                            }`}
                          >
                            {method.name}
                          </span>
                        </div>
                        <ChevronRight
                          className={`w-5 h-5 ${
                            paymentMethod === method.id ? 'text-primary-600' : 'text-gray-400'
                          }`}
                        />
                      </button>

                      {paymentMethod === method.id && (
                        <div className="mt-3 ml-4 space-y-2 animate-fadeIn">
                          {method.id === 'credit-card' ? (
                            <div className="space-y-3 p-4 bg-gray-50 rounded-lg">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Nomor Kartu</label>
                                <input
                                  type="text"
                                  className="input-field"
                                  placeholder="1234 5678 9012 3456"
                                  maxLength={19}
                                />
                              </div>
                              <div className="grid grid-cols-2 gap-3">
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-2">Berlaku Hingga</label>
                                  <input
                                    type="text"
                                    className="input-field"
                                    placeholder="MM/YY"
                                    maxLength={5}
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-2">CVV</label>
                                  <input
                                    type="text"
                                    className="input-field"
                                    placeholder="123"
                                    maxLength={3}
                                  />
                                </div>
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">Nama di Kartu</label>
                                <input type="text" className="input-field" placeholder="JOHN DOE" />
                              </div>
                            </div>
                          ) : (
                            <div className="grid grid-cols-2 gap-3 p-4">
                              {method.options.map((option) => (
                                <button
                                  key={option}
                                  onClick={() => setSelectedOption(option)}
                                  className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                                    selectedOption === option
                                      ? 'border-primary-600 bg-primary-50 text-primary-700'
                                      : 'border-gray-200 hover:border-primary-300 text-gray-700'
                                  }`}
                                >
                                  {option}
                                </button>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 bg-blue-50 rounded-lg flex items-start">
                  <Lock className="w-5 h-5 text-blue-600 mr-3 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-blue-900">
                    <p className="font-medium mb-1">Transaksi Aman & Terenkripsi</p>
                    <p className="text-blue-700">
                      Data pembayaran Anda dilindungi dengan enkripsi SSL 256-bit dan tidak disimpan di server kami.
                    </p>
                  </div>
                </div>
              </div>

              {/* Terms */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <label className="flex items-start cursor-pointer">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span className="text-sm text-gray-700">
                    Saya telah membaca dan menyetujui{' '}
                    <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
                      Syarat & Ketentuan
                    </a>{' '}
                    serta{' '}
                    <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
                      Kebijakan Privasi
                    </a>
                  </span>
                </label>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Ringkasan Pesanan</h2>

                <div className="space-y-3 mb-6 pb-6 border-b">
                  <div className="flex items-start justify-between">
                    <span className="text-sm text-gray-600">Rute</span>
                    <span className="text-sm font-medium text-gray-900 text-right">
                      {route.from} → {route.to}
                    </span>
                  </div>
                  <div className="flex items-start justify-between">
                    <span className="text-sm text-gray-600">Tanggal</span>
                    <span className="text-sm font-medium text-gray-900 flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {date || 'Belum dipilih'}
                    </span>
                  </div>
                  <div className="flex items-start justify-between">
                    <span className="text-sm text-gray-600">Operator</span>
                    <span className="text-sm font-medium text-gray-900 flex items-center">
                      <Bus className="w-4 h-4 mr-1" />
                      {route.operator}
                    </span>
                  </div>
                  <div className="flex items-start justify-between">
                    <span className="text-sm text-gray-600">Kelas</span>
                    <span className="text-sm font-medium text-gray-900">{route.class}</span>
                  </div>
                  <div className="flex items-start justify-between">
                    <span className="text-sm text-gray-600">Penumpang</span>
                    <span className="text-sm font-medium text-gray-900 flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {passengerCount} orang
                    </span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Harga Tiket x {passengerCount}</span>
                    <span className="text-sm font-medium text-gray-900">
                      {formatPrice(subtotal)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Pajak & Fee</span>
                    <span className="text-sm font-medium text-gray-900">{formatPrice(tax)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Biaya Layanan</span>
                    <span className="text-sm font-medium text-gray-900">{formatPrice(serviceFee)}</span>
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-2xl font-bold text-primary-600">{formatPrice(totalPrice)}</span>
                  </div>
                  <button className="btn-primary w-full text-center justify-center">Bayar Sekarang</button>
                  <div className="mt-4 text-xs text-gray-500 flex items-start">
                    <MapPin className="w-4 h-4 mr-2 mt-0.5" />
                    <span>Titik naik & turun akan diinformasikan di e-ticket.</span>
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

export default BusCheckoutPage;
