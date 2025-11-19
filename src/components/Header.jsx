import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Plane, 
  Hotel, 
  Train, 
  Bus, 
  Car, 
  Calendar, 
  User, 
  Menu, 
  X,
  Gift,
  Shield
} from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const navigationItems = [
    { icon: Plane, label: 'Pesawat', path: '/flights' },
    { icon: Hotel, label: 'Hotel', path: '/hotels' },
    { icon: Train, label: 'Kereta', path: '/trains' },
    { icon: Bus, label: 'Bus & Travel', path: '/bus' },
    { icon: Car, label: 'Sewa Mobil', path: '/car-rental' },
    { icon: Calendar, label: 'Event', path: '/events' },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-800 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center space-x-4">
              <span className="flex items-center">
                <Shield className="w-4 h-4 mr-1" />
                Transaksi Aman & Terpercaya
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <Link to="/help" className="hover:text-accent-200">Pusat Bantuan</Link>
              <span>|</span>
              <Link to="/partner" className="hover:text-accent-200">Jadi Partner</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 p-2 rounded-lg">
              <Plane className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-primary-700">TravelHub</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-primary-50 transition-colors group"
              >
                <item.icon className="w-5 h-5 text-gray-600 group-hover:text-primary-600" />
                <span className="text-sm font-medium text-gray-700 group-hover:text-primary-700">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link 
              to="/rewards" 
              className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-accent-50 text-accent-600 transition-colors"
            >
              <Gift className="w-5 h-5" />
              <span className="text-sm font-medium">Rewards</span>
            </Link>
            
            <div className="relative">
              <button
                onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                className="flex items-center space-x-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <User className="w-5 h-5 text-gray-700" />
                <span className="text-sm font-medium text-gray-700">Masuk</span>
              </button>

              {isUserMenuOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 border border-gray-100">
                  <Link to="/login" className="block px-4 py-3 hover:bg-gray-50 text-gray-700">
                    Masuk
                  </Link>
                  <Link to="/register" className="block px-4 py-3 hover:bg-gray-50 text-gray-700">
                    Daftar
                  </Link>
                  <hr className="my-2" />
                  <Link to="/orders" className="block px-4 py-3 hover:bg-gray-50 text-gray-700">
                    Pesanan Saya
                  </Link>
                  <Link to="/profile" className="block px-4 py-3 hover:bg-gray-50 text-gray-700">
                    Profil
                  </Link>
                </div>
              )}
            </div>

            <Link to="/register" className="btn-primary text-sm">
              Daftar Sekarang
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <nav className="space-y-2">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-primary-50"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5 text-primary-600" />
                  <span className="text-gray-700 font-medium">{item.label}</span>
                </Link>
              ))}
              <hr className="my-2" />
              <Link
                to="/rewards"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-accent-50"
                onClick={() => setIsMenuOpen(false)}
              >
                <Gift className="w-5 h-5 text-accent-600" />
                <span className="text-gray-700 font-medium">Rewards</span>
              </Link>
              <Link
                to="/login"
                className="flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-gray-50"
                onClick={() => setIsMenuOpen(false)}
              >
                <User className="w-5 h-5 text-gray-600" />
                <span className="text-gray-700 font-medium">Masuk</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
