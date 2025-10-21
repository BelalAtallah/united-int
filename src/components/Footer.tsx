import { Car, MapPin, Phone, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gold-500 p-2 rounded-lg">
                <Car className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gold-400">المتحدون انترناشيونال</h3>
                <p className="text-sm text-gray-400">United International F.Z.E</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed">
              شريكك الموثوق في تجارة السيارات والخدمات اللوجستية المتكاملة في منطقة عجمان الحرة
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gold-400 mb-4">معلومات الشركة</h4>
            <ul className="space-y-2 text-gray-400">
              <li>رقم الرخصة: 39087</li>
              <li>رقم السجل: 39087</li>
              <li>مؤسسة منطقة حرة</li>
              <li>رأس المال: 100,000 درهم</li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-gold-400 mb-4">تواصل معنا</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-gold-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">
                  مبنى C1، الطابق الأول<br />
                  منطقة عجمان الحرة، الإمارات
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <span className="text-gray-400" dir="ltr">800 2392</span>
              </li>
              <li className="flex items-center gap-3">
                <Globe className="w-5 h-5 text-gold-400 flex-shrink-0" />
                <span className="text-gray-400">www.fza.ae</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-center md:text-right">
              © 2025 المتحدون انترناشيونال. جميع الحقوق محفوظة.
            </p>
            <p className="text-gray-400 text-center md:text-left">
              مرخصة من هيئة المناطق الحرة في عجمان
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
