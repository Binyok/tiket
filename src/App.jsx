import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import FlightsPage from './pages/FlightsPage';
import FlightDetailPage from './pages/FlightDetailPage';
import HotelsPage from './pages/HotelsPage';
import HotelDetailPage from './pages/HotelDetailPage';
import TrainsPage from './pages/TrainsPage';
import CheckoutPage from './pages/CheckoutPage';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/flights" element={<FlightsPage />} />
            <Route path="/flight-detail" element={<FlightDetailPage />} />
            <Route path="/hotels" element={<HotelsPage />} />
            <Route path="/hotel-detail" element={<HotelDetailPage />} />
            <Route path="/trains" element={<TrainsPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/bus" element={<div className="container mx-auto px-4 py-16 min-h-screen"><h1 className="text-3xl font-bold text-gray-900">Halaman Bus & Travel</h1><p className="text-gray-600 mt-4">Fitur ini sedang dalam pengembangan</p></div>} />
            <Route path="/car-rental" element={<div className="container mx-auto px-4 py-16 min-h-screen"><h1 className="text-3xl font-bold text-gray-900">Halaman Sewa Mobil</h1><p className="text-gray-600 mt-4">Fitur ini sedang dalam pengembangan</p></div>} />
            <Route path="/events" element={<div className="container mx-auto px-4 py-16 min-h-screen"><h1 className="text-3xl font-bold text-gray-900">Halaman Event</h1><p className="text-gray-600 mt-4">Fitur ini sedang dalam pengembangan</p></div>} />
            <Route path="/rewards" element={<div className="container mx-auto px-4 py-16 min-h-screen"><h1 className="text-3xl font-bold text-gray-900">Rewards Program</h1><p className="text-gray-600 mt-4">Kumpulkan poin setiap transaksi!</p></div>} />
            <Route path="/help" element={<div className="container mx-auto px-4 py-16 min-h-screen"><h1 className="text-3xl font-bold text-gray-900">Pusat Bantuan</h1><p className="text-gray-600 mt-4">Hubungi kami: +62 21 5000 1234</p></div>} />
            <Route path="/about" element={<div className="container mx-auto px-4 py-16 min-h-screen"><h1 className="text-3xl font-bold text-gray-900">Tentang TravelHub</h1><p className="text-gray-600 mt-4">Platform booking travel terpercaya #1 di Indonesia</p></div>} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
