import { Download, TrendingUp } from 'lucide-react';

const pricingData = [
  {
    id: 1,
    category: '프리미엄',
    brand: '오리젠 (Orijen)',
    product: '오리지널 독 2kg',
    fob: '$28.50',
    retailPrice: 'NT$1,450',
    margin: '42%',
    highlight: true
  },
  {
    id: 2,
    category: '프리미엄',
    brand: '아카나 (Acana)',
    product: '프리런 독 2kg',
    fob: '$24.00',
    retailPrice: 'NT$1,250',
    margin: '45%',
    highlight: false
  },
  {
    id: 3,
    category: '중급',
    brand: 'ANF',
    product: '독 푸드 3kg',
    fob: '$15.50',
    retailPrice: 'NT$850',
    margin: '48%',
    highlight: false
  },
  {
    id: 4,
    category: '중급',
    brand: '네이처스 버라이어티',
    product: '인스팅트 2.7kg',
    fob: '$18.00',
    retailPrice: 'NT$980',
    margin: '46%',
    highlight: false
  },
  {
    id: 5,
    category: '보급형',
    brand: '맥스독',
    product: '어덜트 독 5kg',
    fob: '$12.00',
    retailPrice: 'NT$680',
    margin: '50%',
    highlight: false
  },
  {
    id: 6,
    category: '보급형',
    brand: '베이비독',
    product: '퍼피 푸드 3kg',
    fob: '$10.50',
    retailPrice: 'NT$590',
    margin: '52%',
    highlight: false
  }
];

export default function PricingTable() {
  return (
    <section id="pricing" className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            가격 제안서
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            경쟁력 있는 가격과 높은 마진율을 제공합니다
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gradient-to-r from-[#6BCF9D] to-[#4DB885] text-white">
                  <th className="px-6 py-4 text-left font-semibold">상품군</th>
                  <th className="px-6 py-4 text-left font-semibold">브랜드</th>
                  <th className="px-6 py-4 text-left font-semibold">제품명</th>
                  <th className="px-6 py-4 text-right font-semibold">FOB 단가</th>
                  <th className="px-6 py-4 text-right font-semibold">대만 소비자가</th>
                  <th className="px-6 py-4 text-right font-semibold">
                    <div className="flex items-center justify-end gap-1">
                      <TrendingUp className="w-4 h-4" />
                      마진율
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {pricingData.map((item, index) => (
                  <tr
                    key={item.id}
                    className={`border-b border-gray-100 hover:bg-blue-50/50 transition-colors ${
                      item.highlight ? 'bg-amber-50/30' : index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                    }`}
                  >
                    <td className="px-6 py-4">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        item.category === '프리미엄'
                          ? 'bg-amber-100 text-amber-800'
                          : item.category === '중급'
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-blue-100 text-blue-800'
                      }`}>
                        {item.category}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-medium text-gray-800">{item.brand}</td>
                    <td className="px-6 py-4 text-gray-700">{item.product}</td>
                    <td className="px-6 py-4 text-right font-semibold text-gray-800">{item.fob}</td>
                    <td className="px-6 py-4 text-right font-semibold text-gray-800">{item.retailPrice}</td>
                    <td className="px-6 py-4 text-right">
                      <span className="inline-block px-3 py-1 bg-green-100 text-green-800 rounded-full font-bold">
                        {item.margin}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="px-6 py-6 bg-gray-50 border-t border-gray-200">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-sm text-gray-600">
                * 가격은 2026년 5월 기준이며, 환율 및 시장 상황에 따라 변동될 수 있습니다
              </div>
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#6BCF9D] hover:bg-[#5BBE8D] text-white rounded-lg transition-colors shadow-md">
                <Download className="w-5 h-5" />
                PDF 다운로드
              </button>
            </div>
          </div>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="text-3xl font-bold text-gray-800 mb-2">평균 마진율</div>
            <div className="text-4xl font-bold text-[#6BCF9D] mb-2">47.2%</div>
            <p className="text-sm text-gray-600">업계 최고 수준의 마진 보장</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="text-3xl font-bold text-gray-800 mb-2">최소 주문</div>
            <div className="text-4xl font-bold text-[#6BCF9D] mb-2">50개</div>
            <p className="text-sm text-gray-600">소량 주문도 환영합니다</p>
          </div>
          <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
            <div className="text-3xl font-bold text-gray-800 mb-2">배송 기간</div>
            <div className="text-4xl font-bold text-[#6BCF9D] mb-2">7-10일</div>
            <p className="text-sm text-gray-600">한국 → 대만 직송 시스템</p>
          </div>
        </div>
      </div>
    </section>
  );
}
