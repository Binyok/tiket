import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { 
  CreditCard,
  Banknote,
  Building2,
  Smartphone,
  Check,
  Lock,
  ChevronRight
} from 'lucide-react';

const TrainCheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState('');
  const [selectedBank, setSelectedBank] = useState('');

  const state = location.state || {};
  const { train, passengers = 1, date } = state;

  if (!train) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="bg-white rounded-xl shadow-md p-8 max-w-md text-center">
          <p className="text-gray-700 mb-4">
            Data pemesanan kereta tidak ditemukan. Silakan pilih kereta terlebih dahulu.
          </p>
          <button
            className="btn-primary"
            onClick={() => navigate('/trains')}
          >
            Kembali ke Pencarian Kereta
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
      options: ['Visa', 'Mastercard', 'JCB', 'American Express']
    },
    {
      id: 'bank-transfer',
      name: 'Transfer Bank',
      icon: Building2,
      options: ['BCA', 'Mandiri', 'BNI', 'BRI', 'CIMB Niaga', 'Permata']
    },
    {
      id: 'e-wallet',
      name: 'E-Wallet',
      icon: Smartphone,
      options: ['GoPay', 'OVO', 'DANA', 'ShopeePay', 'LinkAja']
    },
    {
      id: 'installment',
      name: 'Cicilan',
      icon: Banknote,
      options: ['Cicilan 0% - 3 Bulan', 'Cicilan 0% - 6 Bulan', 'Cicilan 0% - 12 Bulan']
    }
  ];

  const passengerCount = passengers || 1;
  const basePricePerPassenger = train.price || 0;
  const subtotal = basePricePerPassenger * passengerCount;
  const tax = Math.round(subtotal * 0.1);
  const serviceFee = 0;
  const totalPrice = subtotal + tax + serviceFee;

  const bookingDetails = {
    type: 'Kereta',
    route: `${train.departure.station} - ${train.arrival.station}`,
    date: date || 'Tanggal tidak ditentukan',
    time: `${train.departure.time} - ${train.arrival.time}`,
    trainName: train.name,
    trainNumber: train.trainNumber,
    class: train.class,
    passengers: passengerCount,
    pricePerPassenger: basePricePerPassenger,
    tax,
    serviceFee,
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const passengerIndexes = Array.from({ length: bookingDetails.passengers }, (_, idx) => idx + 1);

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Checkout Kereta</h1>
            <p className="text-gray-600">Lengkapi pembayaran untuk menyelesaikan pemesanan kereta Anda</p>
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
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap *
                    </label>
                    <input
                      type="text"
                      className="input-field"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      className="input-field"
                      placeholder="email@example.com"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nomor Telepon *
                    </label>
                    <input
                      type="tel"
                      className="input-field"
                      placeholder="+62"
                    />
                  </div>
                </div>
              </div>

              {/* Passenger Details */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <span className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center mr-3 text-sm">2</span>
                  Detail Penumpang
                </h2>
                
                {passengerIndexes.map((passenger, index) => (
                  <div key={passenger} className="mb-6 last:mb-0">
                    <h3 className="font-semibold text-gray-900 mb-3">Penumpang {passenger}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Nama Lengkap *
                        </label>
                        <input
                          type="text"
                          className="input-field"
                          placeholder="Sesuai KTP"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Tanggal Lahir
                        </label>
                        <input
                          type="date"
                          className="input-field"
                        />
                      </div>
                    </div>
                    {index < passengerIndexes.length - 1 && <hr className="mt-6" />}
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
                          <method.icon className={`w-6 h-6 mr-3 ${
                            paymentMethod === method.id ? 'text-primary-600' : 'text-gray-600'
                          }`} />
                          <span className={`font-medium ${
                            paymentMethod === method.id ? 'text-primary-700' : 'text-gray-700'
                          }`}>
                            {method.name}
                          </span>
                        </div>
                        <ChevronRight className={`w-5 h-5 ${
                          paymentMethod === method.id ? 'text-primary-600' : 'text-gray-400'
                        }`} />
                      </button>

                      {/* Payment Options */}
                      {paymentMethod === method.id && (
                        <div className="mt-3 ml-4 space-y-2 animate-fadeIn">
                          {method.id === 'credit-card' ? (
                            <div className="space-y-3 p-4 bg-gray-50 rounded-lg">
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  Nomor Kartu
                                </label>
                                <input
                                  type="text"
                                  className="input-field"
                                  placeholder="1234 5678 9012 3456"
                                  maxLength="19"
                                />
                              </div>
                              <div className="grid grid-cols-2 gap-3">
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Berlaku Hingga
                                  </label>
                                  <input
                                    type="text"
                                    className="input-field"
                                    placeholder="MM/YY"
                                    maxLength="5"
                                  />
                                </div>
                                <div>
                                  <label className="block text-sm font-medium text-gray-700 mb-2">
                                    CVV
                                  </label>
                                  <input
                                    type="text"
                                    className="input-field"
                                    placeholder="123"
                                    maxLength="3"
                                  />
                                </div>
                              </div>
                              <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                  Nama di Kartu
                                </label>
                                <input
                                  type="text"
                                  className="input-field"
                                  placeholder="JOHN DOE"
                                />
                              </div>
                            </div>
                          ) : (
                            <div className="grid grid-cols-2 gap-3 p-4">
                              {method.options.map((option) => (
                                <button
                                  key={option}
                                  onClick={() => setSelectedBank(option)}
                                  className={`p-3 rounded-lg border-2 text-sm font-medium transition-all ${
                                    selectedBank === option
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

                {/* Security Notice */}
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

              {/* Terms & Conditions */}
              <div className="bg-white rounded-xl shadow-md p-6">
                <label className="flex items-start cursor-pointer">
                  <input type="checkbox" className="mt-1 mr-3" />
                  <span className="text-sm text-gray-700">
                    Saya telah membaca dan menyetujui{' '}
                    <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
                      Syarat & Ketentuan
                    </a>
                    {' '}serta{' '}
                    <a href="#" className="text-primary-600 hover:text-primary-700 font-medium">
                      Kebijakan Privasi
                    </a>
                  </span>
                </label>
              </div>
            </div>

            {/* Order Summary - Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-md p-6 sticky top-24">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Ringkasan Pesanan</h2>

                {/* Booking Details */}
                <div className="space-y-3 mb-6 pb-6 border-b">
                  <div className="flex items-start justify-between">
                    <span className="text-sm text-gray-600">Jenis</span>
                    <span className="text-sm font-medium text-gray-900">{bookingDetails.type}</span>
                  </div>
                  <div className="flex items-start justify-between">
                    <span className="text-sm text-gray-600">Rute</span>
                    <span className="text-sm font-medium text-gray-900 text-right">{bookingDetails.route}</span>
                  </div>
                  <div className="flex items-start justify-between">
                    <span className="text-sm text-gray-600">Tanggal</span>
                    <span className="text-sm font-medium text-gray-900">{bookingDetails.date}</span>
                  </div>
                  <div className="flex items-start justify-between">
                    <span className="text-sm text-gray-600">Waktu</span>
                    <span className="text-sm font-medium text-gray-900">{bookingDetails.time}</span>
                  </div>
                  <div className="flex items-start justify-between">
                    <span className="text-sm text-gray-600">Kereta</span>
                    <span className="text-sm font-medium text-gray-900 text-right">{bookingDetails.trainName} ({bookingDetails.trainNumber})</span>
                  </div>
                  <div className="flex items-start justify-between">
                    <span className="text-sm text-gray-600">Kelas</span>
                    <span className="text-sm font-medium text-gray-900">{bookingDetails.class}</span>
                  </div>
                  <div className="flex items-start justify-between">
                    <span className="text-sm text-gray-600">Penumpang</span>
                    <span className="text-sm font-medium text-gray-900">{bookingDetails.passengers} orang</span>
                  </div>
                </div>

                {/* Price Breakdown */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">
                      Harga Tiket x {bookingDetails.passengers}
                    </span>
                    <span className="text-sm font-medium text-gray-900">
                      {formatPrice(bookingDetails.pricePerPassenger * bookingDetails.passengers)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Pajak & Fee</span>
                    <span className="text-sm font-medium text-gray-900">
                      {formatPrice(bookingDetails.tax)}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-600">Biaya Layanan</span>
                    <span className="text-sm font-medium text-gray-900">
                      {formatPrice(bookingDetails.serviceFee)}
                    </span>
                  </div>
                </div>

                {/* Total */}
                <div className="pt-6 border-t">
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-lg font-bold text-gray-900">Total</span>
                    <span className="text-2xl font-bold text-primary-600">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>

                  <button className="btn-primary w-full text-center justify-center">
                    Bayar Sekarang
                  </button>

                  {/* Promo Code */}
                  <div className="mt-4">
                    <details className="group">
                      <summary className="text-sm text-primary-600 font-medium cursor-pointer hover:text-primary-700">
                        Punya kode promo?
                      </summary>
                      <div className="mt-3 flex gap-2">
                        <input
                          type="text"
                          className="input-field flex-1"
                          placeholder="Masukkan kode"
                        />
                        <button className="btn-secondary px-4 text-sm whitespace-nowrap">
                          Terapkan
                        </button>
                      </div>
                    </details>
                  </div>
                </div>

                {/* Benefits */}
                <div className="mt-6 pt-6 border-t space-y-3">
                  <p className="text-sm font-semibold text-gray-900">Keuntungan Booking:</p>
                  <div className="space-y-2">
                    {[
                      'Konfirmasi instan via email',
                      'Banyak pilihan metode pembayaran',
                      'Dapatkan poin rewards',
                      'Customer support 24/7'
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-700">
                        <Check className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
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

export default TrainCheckoutPage;
