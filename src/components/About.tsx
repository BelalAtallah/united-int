import { Building2, FileText, Download, Calendar, Shield } from 'lucide-react';

export default function About() {
  const companyDetails = [
    {
      icon: Building2,
      title: 'الشكل القانوني',
      value: 'مؤسسة منطقة حرة – ذات مسؤولية محدودة',
      subtitle: 'Free Zone Establishment - Limited Liability',
    },
    {
      icon: FileText,
      title: 'رقم الرخصة والسجل',
      value: '39087',
      subtitle: 'License & Registration Number',
    },
    {
      icon: Calendar,
      title: 'تاريخ التأسيس',
      value: '27 فبراير 2025',
      subtitle: 'February 27, 2025',
    },
    {
      icon: Shield,
      title: 'رأس المال المصرح',
      value: '100,000 درهم إماراتي',
      subtitle: 'AED 100,000 Authorized Capital',
    },
  ];

  const handleDownload = (filename: string, arabicName: string) => {
    const link = document.createElement('a');
    link.href = `/${filename}`;
    link.download = filename;
    link.click();
  };

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white via-gold-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            من نحن
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            المتحدون انترناشيونال - شركة رائدة في تجارة السيارات والخدمات اللوجستية المتكاملة
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {companyDetails.map((detail, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg border-2 border-gold-200 hover:border-gold-400 transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="bg-gold-500 p-4 rounded-lg flex-shrink-0">
                  <detail.icon className="w-8 h-8 text-white" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">
                    {detail.title}
                  </h3>
                  <p className="text-xl text-gold-600 font-semibold mb-1">
                    {detail.value}
                  </p>
                  <p className="text-sm text-gray-600">
                    {detail.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-gold-500 to-gold-600 rounded-2xl p-8 md:p-12 shadow-2xl mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">
              رؤيتنا ورسالتنا
            </h3>
            <div className="w-24 h-1 bg-white mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h4 className="text-xl font-bold text-white mb-4">رؤيتنا</h4>
              <p className="text-gold-50 leading-relaxed">
                أن نكون الشريك الأول والأكثر موثوقية في مجال تجارة السيارات والخدمات اللوجستية في منطقة الشرق الأوسط وخارجها
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20">
              <h4 className="text-xl font-bold text-white mb-4">رسالتنا</h4>
              <p className="text-gold-50 leading-relaxed">
                تقديم خدمات عالية الجودة في تجارة السيارات الجديدة والمستعملة، قطع الغيار، والتخليص الجمركي مع الالتزام بأعلى معايير الاحترافية والشفافية
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl border-2 border-gold-200">
          <div className="text-center mb-8">
            <FileText className="w-16 h-16 text-gold-500 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              الوثائق الرسمية
            </h3>
            <p className="text-gray-600 text-lg">
              يمكنكم تحميل وثائقنا الرسمية والتراخيص المعتمدة
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <button
              onClick={() => handleDownload('License 4.pdf', 'الرخصة التجارية')}
              className="group bg-gradient-to-br from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Download className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-bold mb-2">الرخصة التجارية</h4>
              <p className="text-gold-50 mb-4">Business License</p>
              <div className="bg-white/20 px-4 py-2 rounded-lg inline-block">
                <span className="text-sm font-medium">تحميل PDF</span>
              </div>
            </button>

            <button
              onClick={() => handleDownload('Commercial Registry In Details.pdf', 'السجل التجاري')}
              className="group bg-gradient-to-br from-gold-500 to-gold-600 hover:from-gold-600 hover:to-gold-700 text-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <Download className="w-12 h-12 mx-auto mb-4 group-hover:scale-110 transition-transform" />
              <h4 className="text-xl font-bold mb-2">السجل التجاري</h4>
              <p className="text-gold-50 mb-4">Commercial Registry</p>
              <div className="bg-white/20 px-4 py-2 rounded-lg inline-block">
                <span className="text-sm font-medium">تحميل PDF</span>
              </div>
            </button>
          </div>
        </div>

        <div className="mt-16 bg-gradient-to-r from-gold-100 via-white to-gold-100 p-8 rounded-xl border-2 border-gold-200">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              معلومات الاتصال
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <p className="text-gray-600 mb-2">العنوان</p>
                <p className="font-bold text-gold-600">مبنى C1، منطقة عجمان الحرة</p>
                <p className="text-sm text-gray-500">Office - C1 - 1F - SF4362</p>
              </div>
              <div>
                <p className="text-gray-600 mb-2">الهاتف المجاني</p>
                <p className="font-bold text-gold-600 text-left" dir="ltr">800 2392</p>
              </div>
              <div>
                <p className="text-gray-600 mb-2">الموقع الإلكتروني</p>
                <p className="font-bold text-gold-600">www.fza.ae</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
