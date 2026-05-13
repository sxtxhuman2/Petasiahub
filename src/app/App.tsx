import Header from './components/Header';
import Hero from './components/Hero';
import ProductCards from './components/ProductCards';
import PricingTable from './components/PricingTable';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <ProductCards />
      <PricingTable />
      <Footer />
    </div>
  );
}