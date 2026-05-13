import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 bg-gradient-to-br from-[#6BCF9D] to-[#4DB885] rounded-xl flex items-center justify-center">
                <span className="text-white text-2xl">🐾</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">PetCare Korea</h3>
                <p className="text-sm text-[#6BCF9D]">Made in Korea</p>
              </div>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              대만 시장을 위한 프리미엄 한국 반려동물 제품 공급업체입니다.
              최고의 품질과 합리적인 가격으로 반려동물의 건강한 삶을 지원합니다.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#6BCF9D] rounded-lg flex items-center justify-center transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#6BCF9D] rounded-lg flex items-center justify-center transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-[#6BCF9D] rounded-lg flex items-center justify-center transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold mb-4">빠른 링크</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-400 hover:text-[#6BCF9D] transition-colors">홈</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-[#6BCF9D] transition-colors">상품 소개</a></li>
              <li><a href="#pricing" className="text-gray-400 hover:text-[#6BCF9D] transition-colors">가격 정보</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-[#6BCF9D] transition-colors">문의하기</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">연락처</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#6BCF9D] mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  서울특별시 강남구 테헤란로 123<br />
                  PetCare 빌딩 5층
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#6BCF9D] flex-shrink-0" />
                <a href="mailto:contact@petcare.kr" className="text-gray-400 hover:text-[#6BCF9D] transition-colors text-sm">
                  contact@petcare.kr
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#6BCF9D] flex-shrink-0" />
                <a href="tel:+82-2-1234-5678" className="text-gray-400 hover:text-[#6BCF9D] transition-colors text-sm">
                  +82-2-1234-5678
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-gray-400">
              © 2026 PetCare Korea. All rights reserved.
            </div>
            <div className="flex items-center gap-2 text-sm">
              <div className="px-4 py-2 bg-red-900/30 border border-red-700 rounded-lg text-red-300">
                ⚠️ 내부 검토용 – 외부 공개 금지
              </div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500 flex items-center justify-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for pets
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
