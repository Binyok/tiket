const RewardsPage = () => {
  const tiers = [
    {
      id: 'silver',
      name: 'Silver',
      requirement: '0 - 4.999 poin / tahun',
      benefits: ['1x poin setiap transaksi', 'Promo khusus member', 'Notifikasi harga turun'],
    },
    {
      id: 'gold',
      name: 'Gold',
      requirement: '5.000 - 19.999 poin / tahun',
      benefits: ['1.5x poin setiap transaksi', 'Prioritas customer service', 'Early access promo besar'],
    },
    {
      id: 'platinum',
      name: 'Platinum',
      requirement: '≥ 20.000 poin / tahun',
      benefits: ['2x poin setiap transaksi', 'Voucher hotel gratis setiap tahun', 'Dedicated travel consultant'],
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Rewards Program</h1>
          <p className="text-gray-600 mb-8">
            Kumpulkan poin dari setiap transaksi dan naikkan level membership Anda untuk mendapatkan lebih banyak keuntungan.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {tiers.map((tier) => (
              <div key={tier.id} className="bg-white rounded-xl shadow-md p-6 flex flex-col">
                <h2 className="text-xl font-bold text-gray-900 mb-1">{tier.name}</h2>
                <p className="text-sm text-gray-500 mb-4">{tier.requirement}</p>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 flex-1">
                  {tier.benefits.map((b, idx) => (
                    <li key={idx}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-3">Cara Mengumpulkan Poin</h2>
            <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mb-4">
              <li>Setiap Rp 10.000 transaksi = 1 poin (Silver)</li>
              <li>Bonus poin untuk pembelian tiket pesawat & paket hotel</li>
              <li>Poin berlaku selama 12 bulan sejak tanggal didapatkan</li>
            </ul>
            <p className="text-sm text-gray-600">
              Poin dapat ditukarkan dengan voucher diskon, upgrade kamar hotel, atau tiket pesawat gratis pada periode promo tertentu.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RewardsPage;
