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
import FlightCheckoutPage from './pages/FlightCheckoutPage';
import HotelCheckoutPage from './pages/HotelCheckoutPage';
import TrainCheckoutPage from './pages/TrainCheckoutPage';
import BusCheckoutPage from './pages/BusCheckoutPage';
import CarCheckoutPage from './pages/CarCheckoutPage';
import BusPage from './pages/BusPage';
import CarRentalPage from './pages/CarRentalPage';
import EventsPage from './pages/EventsPage';
import RewardsPage from './pages/RewardsPage';
import HelpPage from './pages/HelpPage';
import AboutPage from './pages/AboutPage';

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
            <Route path="/checkout/flight" element={<FlightCheckoutPage />} />
            <Route path="/checkout/hotel" element={<HotelCheckoutPage />} />
            <Route path="/checkout/train" element={<TrainCheckoutPage />} />
            <Route path="/checkout/bus" element={<BusCheckoutPage />} />
            <Route path="/checkout/car" element={<CarCheckoutPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/bus" element={<BusPage />} />
            <Route path="/car-rental" element={<CarRentalPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/rewards" element={<RewardsPage />} />
            <Route path="/help" element={<HelpPage />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
