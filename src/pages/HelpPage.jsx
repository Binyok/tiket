import { Phone, Mail, MessageCircle } from 'lucide-react';

const HelpPage = () => {
  const faqs = [
    {
      q: 'Bagaimana cara mengubah jadwal penerbangan?',
      a: 'Anda dapat mengajukan reschedule melalui menu "Pesanan Saya" atau menghubungi customer service kami.',
    },
    {
      q: 'Bagaimana jika saya tidak menerima e-ticket?',
      a: 'Periksa folder spam email Anda, atau masukkan ulang email di halaman bantuan ini dan kami akan kirim ulang.',
    },
    {
      q: 'Apakah saya bisa refund tiket?',
      a: 'Kebijakan refund berbeda untuk setiap maskapai/hotel. Cek detail di halaman pesanan sebelum mengajukan refund.',
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-10">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left - FAQ */}
          <div className="md:col-span-2">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Pusat Bantuan</h1>
            <p className="text-gray-600 mb-6">
              Temukan jawaban atas pertanyaan umum atau hubungi tim support kami.
            </p>

            <div className="space-y-4">
              {faqs.map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl shadow-md p-4">
                  <p className="font-semibold text-gray-900 mb-1">{item.q}</p>
                  <p className="text-sm text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Contact */}
          <div>
            <div className="bg-white rounded-xl shadow-md p-5 mb-5">
              <h2 className="text-lg font-bold text-gray-900 mb-3">Kontak Kami</h2>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2 text-primary-600" />
                  <span>+62 21 5000 1234 (24 jam)</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2 text-primary-600" />
                  <span>support@travelhub.id</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="w-4 h-4 mr-2 text-primary-600" />
                  <span>Live chat di aplikasi</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-5">
              <h2 className="text-lg font-bold text-gray-900 mb-3">Form Bantuan</h2>
              <div className="space-y-3 text-sm">
                <div>
                  <label className="block text-gray-700 mb-1">Email</label>
                  <input type="email" className="input-field" placeholder="email@example.com" />
                </div>
                <div>
                  <label className="block text-gray-700 mb-1">Pesan</label>
                  <textarea className="input-field" rows={4} placeholder="Jelaskan kendala Anda"></textarea>
                </div>
                <button className="btn-primary w-full text-sm justify-center">Kirim</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpPage;
