import { Menu } from 'lucide-react';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#6BCF9D] to-[#4DB885] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">🐾</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-800">PetCare Korea</h1>
              <p className="text-xs text-[#6BCF9D]">Made in Korea</p>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-gray-700 hover:text-[#6BCF9D] transition-colors">Home</a>
            <a href="#products" className="text-gray-700 hover:text-[#6BCF9D] transition-colors">Products</a>
            <a href="#pricing" className="text-gray-700 hover:text-[#6BCF9D] transition-colors">Pricing</a>
            <a href="#contact" className="text-gray-700 hover:text-[#6BCF9D] transition-colors">Contact</a>
          </nav>

          <button className="md:hidden p-2 hover:bg-gray-100 rounded-lg">
            <Menu className="w-5 h-5 text-gray-700" />
          </button>
        </div>
      </div>
    </header>
  );
}
