import { Link } from 'react-router-dom';
import { 
  Plane, 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const Footer = () => {
  const productLinks = [
    { name: 'Pesawat', path: '/flights' },
    { name: 'Hotel', path: '/hotels' },
    { name: 'Kereta Api', path: '/trains' },
    { name: 'Bus & Travel', path: '/bus' },
    { name: 'Sewa Mobil', path: '/car-rental' },
    { name: 'Event', path: '/events' },
  ];

  const companyLinks = [
    { name: 'Tentang Kami', path: '/about' },
    { name: 'Karir', path: '/careers' },
    { name: 'Press', path: '/press' },
    { name: 'Blog', path: '/blog' },
  ];

  const supportLinks = [
    { name: 'Pusat Bantuan', path: '/help' },
    { name: 'Hubungi Kami', path: '/contact' },
    { name: 'Kebijakan Privasi', path: '/privacy' },
    { name: 'Syarat & Ketentuan', path: '/terms' },
  ];

  const partnerLinks = [
    { name: 'Jadi Partner', path: '/partner' },
    { name: 'Daftarkan Hotel', path: '/partner/hotel' },
    { name: 'Daftarkan Event', path: '/partner/event' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <div className="bg-gradient-to-r from-primary-500 to-primary-600 p-2 rounded-lg">
                <Plane className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">TravelHub</span>
            </Link>
            <p className="text-sm mb-4">
              Satu aplikasi untuk semua kebutuhan perjalanan Anda. Pesan tiket pesawat, hotel, kereta, dan lainnya dengan mudah.
            </p>
            <div className="flex space-x-3">
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-white font-semibold mb-4">Produk</h3>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm hover:text-primary-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Perusahaan</h3>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm hover:text-primary-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Dukungan</h3>
            <ul className="space-y-2">
              {supportLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm hover:text-primary-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Partner & Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Partner</h3>
            <ul className="space-y-2 mb-6">
              {partnerLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-sm hover:text-primary-400 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className="space-y-2">
              <a href="mailto:info@travelhub.com" className="flex items-center space-x-2 text-sm hover:text-primary-400">
                <Mail className="w-4 h-4" />
                <span>info@travelhub.com</span>
              </a>
              <a href="tel:+622150001234" className="flex items-center space-x-2 text-sm hover:text-primary-400">
                <Phone className="w-4 h-4" />
                <span>+62 21 5000 1234</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-400 mb-2">Metode Pembayaran:</p>
              <div className="flex flex-wrap gap-3">
                {['BCA', 'Mandiri', 'BNI', 'BRI', 'Visa', 'Mastercard', 'GoPay', 'OVO', 'DANA', 'ShopeePay'].map((method) => (
                  <div key={method} className="bg-gray-800 px-3 py-1 rounded text-xs text-gray-300">
                    {method}
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center md:text-right">
              <p className="text-sm text-gray-400 mb-2">Partner Resmi:</p>
              <div className="flex items-center space-x-2">
                <div className="bg-gray-800 px-4 py-2 rounded text-xs text-gray-300">
                  Kementrian Pariwisata RI
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800 bg-gray-950">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
            <p>© 2025 TravelHub. All Rights Reserved.</p>
            <p className="mt-2 md:mt-0">Made with ❤️ in Indonesia</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
