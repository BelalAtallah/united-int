import { Car, Package, Truck, Wrench, FileCheck } from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: Car,
      title: 'تجارة السيارات الجديدة',
      subtitle: 'New Automobile Trading',
      description: 'تصدير السيارات الجديدة إلى جميع أنحاء العالم',
    },
    {
      icon: FileCheck,
      title: 'خدمات التخليص الجمركي',
      subtitle: 'Customs Clearance',
      description: 'خدمات تخليص جمركي احترافية وسريعة',
    },
    {
      icon: Package,
      title: 'تجارة إكسسوارات السيارات',
      subtitle: 'Car Accessories Trading',
      description: 'استيراد وتصدير أفضل إكسسوارات السيارات',
    },
    {
      icon: Truck,
      title: 'تجارة السيارات المستعملة',
      subtitle: 'Used Cars Trading',
      description: 'سيارات مستعملة مفحوصة بعناية وجودة عالية',
    },
    {
      icon: Wrench,
      title: 'قطع الغيار المستعملة',
      subtitle: 'Used Spare Parts',
      description: 'قطع غيار أصلية للسيارات - استيراد وتصدير',
    },
  ];

  return (
    <section id="home" className="pt-20">
      <div className="relative bg-gradient-to-br from-gold-50 via-white to-gold-50 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="text-center">
            <div className="inline-block mb-6">
              <div className="bg-gold-500 p-4 rounded-2xl shadow-lg">
                <Car className="w-16 h-16 text-white" />
              </div>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              المتحدون انترناشيونال
            </h1>
            <p className="text-2xl md:text-3xl text-gold-600 font-semibold mb-6">
              United International F.Z.E
            </p>

            <div className="max-w-3xl mx-auto mb-8">
              <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
                شريكك الموثوق في تجارة السيارات والخدمات اللوجستية
              </p>
              <p className="text-base md:text-lg text-gray-600 mt-2">
                نقدم حلولاً شاملة في تجارة السيارات الجديدة والمستعملة، قطع الغيار، والتخليص الجمركي
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <div className="bg-white px-6 py-3 rounded-lg shadow-md border-2 border-gold-200">
                <p className="text-sm text-gray-600">رقم الرخصة</p>
                <p className="text-lg font-bold text-gold-600">39087</p>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md border-2 border-gold-200">
                <p className="text-sm text-gray-600">الموقع</p>
                <p className="text-lg font-bold text-gold-600">منطقة عجمان الحرة</p>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md border-2 border-gold-200">
                <p className="text-sm text-gray-600">تأسست</p>
                <p className="text-lg font-bold text-gold-600">2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              خدماتنا
            </h2>
            <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gold-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gold-200 hover:border-gold-400 group"
              >
                <div className="bg-gold-500 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gold-600 font-medium mb-3">
                  {service.subtitle}
                </p>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gold-500 to-gold-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            هل لديك استفسار؟
          </h2>
          <p className="text-xl text-gold-50 mb-8">
            نحن هنا لمساعدتك في جميع احتياجاتك التجارية
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white px-8 py-4 rounded-lg">
              <p className="text-sm text-gray-600">الهاتف المجاني</p>
              <p className="text-lg font-bold text-gold-600 text-left" dir="ltr">800 2392</p>
            </div>
            <div className="bg-white px-8 py-4 rounded-lg">
              <p className="text-sm text-gray-600">الموقع الإلكتروني</p>
              <p className="text-lg font-bold text-gold-600">www.fza.ae</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
