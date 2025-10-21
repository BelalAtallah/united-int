import { useState } from 'react';
import { X } from 'lucide-react';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const carImages = [
    {
      url: 'https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'سيارة فاخرة',
      category: 'جديدة',
    },
    {
      url: 'https://images.pexels.com/photos/3802510/pexels-photo-3802510.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'سيارة رياضية',
      category: 'جديدة',
    },
    {
      url: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'سيارة دفع رباعي',
      category: 'جديدة',
    },
    {
      url: 'https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'سيارة عائلية',
      category: 'مستعملة',
    },
    {
      url: 'https://images.pexels.com/photos/3764984/pexels-photo-3764984.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'سيارة كلاسيكية',
      category: 'مستعملة',
    },
    {
      url: 'https://images.pexels.com/photos/2920064/pexels-photo-2920064.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'سيارة فاخرة حمراء',
      category: 'جديدة',
    },
    {
      url: 'https://images.pexels.com/photos/1213294/pexels-photo-1213294.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'سيارة سوداء أنيقة',
      category: 'جديدة',
    },
    {
      url: 'https://images.pexels.com/photos/1592384/pexels-photo-1592384.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'سيارة بيضاء فاخرة',
      category: 'مستعملة',
    },
    {
      url: 'https://images.pexels.com/photos/3729464/pexels-photo-3729464.jpeg?auto=compress&cs=tinysrgb&w=1200',
      title: 'سيارة رياضية زرقاء',
      category: 'جديدة',
    },
  ];

  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            معرض السيارات
          </h2>
          <div className="w-24 h-1 bg-gold-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            اكتشف مجموعتنا المتنوعة من السيارات الفاخرة والعالية الجودة
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {carImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedImage(image.url)}
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 right-0 left-0 p-6">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-white text-xl font-bold mb-2">
                        {image.title}
                      </h3>
                      <span className="inline-block bg-gold-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {image.category}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-gold-50 to-white p-8 rounded-xl border-2 border-gold-200">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              هل تبحث عن سيارة معينة؟
            </h3>
            <p className="text-gray-600 text-lg mb-6">
              نوفر خدمة البحث والتوريد حسب الطلب. تواصل معنا للحصول على السيارة التي تحلم بها
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white px-6 py-3 rounded-lg shadow-md border-2 border-gold-200">
                <p className="text-sm text-gray-600">الهاتف المجاني</p>
                <p className="text-lg font-bold text-gold-600 text-left" dir="ltr">800 2392</p>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md border-2 border-gold-200">
                <p className="text-sm text-gray-600">الموقع الإلكتروني</p>
                <p className="text-lg font-bold text-gold-600">www.fza.ae</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 left-4 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="عرض كامل"
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
