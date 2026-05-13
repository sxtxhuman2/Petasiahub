import { Crown, Star, TrendingUp } from 'lucide-react';

const products = [
  {
    id: 1,
    category: '프리미엄',
    icon: Crown,
    color: 'from-[#FFD700] to-[#FFA500]',
    bgColor: 'bg-gradient-to-br from-amber-50 to-orange-50',
    borderColor: 'border-amber-200',
    brands: ['오리젠(Orijen)', '아카나(Acana)', '로얄캐닌(Royal Canin)'],
    description: '최고급 원료와 과학적 배합으로 만든 프리미엄 라인',
    features: ['천연 재료 100%', '고단백 저탄수화물', '수의사 추천']
  },
  {
    id: 2,
    category: '중급',
    icon: Star,
    color: 'from-[#6BCF9D] to-[#4DB885]',
    bgColor: 'bg-gradient-to-br from-emerald-50 to-teal-50',
    borderColor: 'border-emerald-200',
    brands: ['ANF', '네이처스 버라이어티', '하림펫푸드'],
    description: '합리적인 가격과 우수한 품질의 균형',
    features: ['가성비 우수', '국내 생산', '다양한 라인업']
  },
  {
    id: 3,
    category: '보급형',
    icon: TrendingUp,
    color: 'from-[#87CEEB] to-[#4682B4]',
    bgColor: 'bg-gradient-to-br from-blue-50 to-sky-50',
    borderColor: 'border-blue-200',
    brands: ['맥스독', '베이비독', '에코펫'],
    description: '대중적 가격으로 누구나 이용 가능한 제품',
    features: ['경제적 가격', '기본 영양 충족', '대량 구매 가능']
  }
];

export default function ProductCards() {
  return (
    <section id="products" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            상품 카테고리
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            다양한 가격대와 품질의 제품을 준비했습니다
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product) => {
            const Icon = product.icon;
            return (
              <div
                key={product.id}
                className={`${product.bgColor} ${product.borderColor} border-2 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2`}
              >
                <div className={`inline-flex p-4 bg-gradient-to-br ${product.color} rounded-xl mb-6 shadow-lg`}>
                  <Icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-3">
                  {product.category}
                </h3>

                <p className="text-gray-600 mb-6">
                  {product.description}
                </p>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">주요 브랜드</h4>
                  <div className="space-y-2">
                    {product.brands.map((brand, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                        <span className="text-sm text-gray-700">{brand}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <h4 className="text-sm font-semibold text-gray-700 mb-3">특징</h4>
                  <div className="flex flex-wrap gap-2">
                    {product.features.map((feature, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-white rounded-full text-xs text-gray-700 border border-gray-200"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
