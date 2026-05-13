import { ArrowRight, FileDown } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#F5E6D3] via-[#B5E7D3] to-[#A0DCC7] pt-20">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgZmlsbD0iI2ZmZiIgZmlsbC1vcGFjaXR5PSIuMSIvPjwvZz48L3N2Zz4=')] opacity-30"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 text-center">
        <div className="mb-8 inline-block">
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full text-sm text-gray-700 border border-white/50">
            <span className="w-2 h-2 bg-[#6BCF9D] rounded-full animate-pulse"></span>
            Premium Quality from Korea
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
          반려동물을 위한
          <br />
          <span className="text-[#6BCF9D]">프리미엄 제품</span>
        </h1>

        <p className="text-xl md:text-2xl text-gray-700 mb-4 max-w-3xl mx-auto">
          대만 시장을 위한 한국 프리미엄 반려동물 제품
        </p>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          엄선된 브랜드와 최고의 품질로 반려동물의 건강과 행복을 책임집니다
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#products"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#6BCF9D] hover:bg-[#5BBE8D] text-white rounded-full transition-all shadow-lg hover:shadow-xl"
          >
            상품 리스트 보기
            <ArrowRight className="w-5 h-5" />
          </a>
          <a
            href="#pricing"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white hover:bg-gray-50 text-gray-800 rounded-full border-2 border-gray-200 transition-all"
          >
            <FileDown className="w-5 h-5" />
            가격 제안서 다운로드
          </a>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-800 mb-2">50+</div>
            <div className="text-sm text-gray-600">프리미엄 브랜드</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-800 mb-2">100%</div>
            <div className="text-sm text-gray-600">한국산</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-800 mb-2">24/7</div>
            <div className="text-sm text-gray-600">고객 지원</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gray-800 mb-2">5★</div>
            <div className="text-sm text-gray-600">고객 만족도</div>
          </div>
        </div>
      </div>
    </section>
  );
}
