import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

interface Car {
  id: string;
  title: string;
  category: string;
  images: string[];
  coverImage: string;
}

export default function Gallery() {
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useTranslation();

  const cars: Car[] = [
    {
      id: 'car0',
      title: t('gallery.car0'),
      category: t('gallery.new'),
      images: [
        '/united-int/Range(1).jpeg',
        '/united-int/Range(2).jpeg',
        '/united-int/Range(3).jpeg',
        '/united-int/Range(4).jpeg',
        '/united-int/Range(5).jpeg',
        '/united-int/Range(6).jpeg',
      ],
      coverImage: '/united-int/Range(6).jpeg',
    },
    {
      id: 'car1',
      title: t('gallery.car1'),
      category: t('gallery.new'),
      images: [
        'https://dbz-images.dubizzle.com/images/2025/10/15/fad6e6f2415547678626906cd2d44fb3-.jpeg?impolicy=dpv',
        'https://dbz-images.dubizzle.com/images/2025/10/15/310ab362623a41568df5dbab34983d48-.jpeg?impolicy=dpv',
        'https://dbz-images.dubizzle.com/images/2025/10/15/f4eed87318ce431d956382d10d871ba0-.jpeg?impolicy=dpv',
      ],
      coverImage: 'https://dbz-images.dubizzle.com/images/2025/10/15/fad6e6f2415547678626906cd2d44fb3-.jpeg?impolicy=dpv',
    },
    {
      id: 'car2',
      title: t('gallery.car2'),
      category: t('gallery.new'),
      images: [
        'https://dbz-images.dubizzle.com/images/2025/10/18/dcc3a7acb8064acda0041329ace5a1ca-.jpeg?impolicy=dpv',
        'https://dbz-images.dubizzle.com/images/2025/10/18/7bf596a0230f43c5992b0e311c73829e-.jpeg?impolicy=dpv',
      ],
      coverImage: 'https://dbz-images.dubizzle.com/images/2025/10/18/7bf596a0230f43c5992b0e311c73829e-.jpeg?impolicy=dpv',
    },
    {
      id: 'car3',
      title: t('gallery.car3'),
      category: t('gallery.used'),
      images: [
        'https://dbz-images.dubizzle.com/images/2025/10/21/4d52feac785743428ab904630c30d0bf-.jpeg?impolicy=dpv',
        'https://dbz-images.dubizzle.com/images/2025/10/21/9848d4fe5f18498f8673cbc1e0f4f16a-.jpeg?impolicy=dpv',
      ],
      coverImage: 'https://dbz-images.dubizzle.com/images/2025/10/21/3ceb2310be7f46ff8221077bb49b9fef-.jpeg?impolicy=dpv',
    },
    {
      id: 'car4',
      title: t('gallery.car4'),
      category: t('gallery.used'),
      images: [
        'https://dbz-images.dubizzle.com/images/2025/09/02/7e971ce3f5ad4a9c9286612a50691d73-.jpeg?impolicy=dpv',
        'https://dbz-images.dubizzle.com/images/2025/09/02/c273443c60124df9b281ef146a767205-.jpeg?impolicy=dpv',
      ],
      coverImage: 'https://dbz-images.dubizzle.com/images/2025/09/02/3ba07995903f46ba8a36b5fa864af87f-.jpeg?impolicy=dpv',
    },
    {
      id: 'car5',
      title: t('gallery.car5'),
      category: t('gallery.used'),
      images: [
        'https://dbz-images.dubizzle.com/images/2025/10/21/b644ccb69b2348ee82e21f9367fa4808-.jpeg?impolicy=dpc',
        'https://dbz-images.dubizzle.com/images/2025/10/21/236d5569f26b4946a7332dfcfa1e0376-.jpeg?impolicy=dpc',
      ],
      coverImage: 'https://dbz-images.dubizzle.com/images/2025/10/21/b644ccb69b2348ee82e21f9367fa4808-.jpeg?impolicy=dpc',
    },
    {
      id: 'car6',
      title: t('gallery.car6'),
      category: t('gallery.new'),
      images: [
        'https://dbz-images.dubizzle.com/images/2025/10/01/52fe085d4cf64eb196a35a976018d278-.jpeg?impolicy=dpv',
        'https://dbz-images.dubizzle.com/images/2025/10/01/425b97c473ca47da80bb489adaaca12f-.jpeg?impolicy=dpv',
      ],
      coverImage: 'https://dbz-images.dubizzle.com/images/2025/10/01/52fe085d4cf64eb196a35a976018d278-.jpeg?impolicy=dpv',
    },
    {
      id: 'car7',
      title: t('gallery.car7'),
      category: t('gallery.used'),
      images: [
        'https://dbz-images.dubizzle.com/images/2025/10/06/c5684110f7f74ced9996e078811e483f-.jpeg?impolicy=dpv',
        'https://dbz-images.dubizzle.com/images/2025/10/06/c2ad6bd32fe34e2289bb7732da4b520b-.jpeg?impolicy=dpv',
      ],
      coverImage: 'https://dbz-images.dubizzle.com/images/2025/10/06/c5684110f7f74ced9996e078811e483f-.jpeg?impolicy=dpv',
    },
    {
      id: 'car9',
      title: t('gallery.car9'),
      category: t('gallery.new'),
      images: [
        'https://dbz-images.dubizzle.com/images/2025/10/12/c79dc1c9a4d842f59595f47def800a32-.jpeg?impolicy=dpv',
        'https://dbz-images.dubizzle.com/images/2025/10/12/d96d39ec3c4e427d933808481c23974c-.jpeg?impolicy=dpv',
      ],
      coverImage: 'https://dbz-images.dubizzle.com/images/2025/10/12/c79dc1c9a4d842f59595f47def800a32-.jpeg?impolicy=dpv',
    },
  ];

  const handleCarClick = (car: Car) => {
    setSelectedCar(car);
    setCurrentImageIndex(0);
  };

  const handleCloseGallery = () => {
    setSelectedCar(null);
    setCurrentImageIndex(0);
  };

  const handleNextImage = () => {
    if (selectedCar && currentImageIndex < selectedCar.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gradient-to-br from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 animate-fade-in-up">
            {t('gallery.title')}
          </h2>
          <div className="w-24 h-1 bg-gold-600 mx-auto mb-6 animate-slide-in-right"></div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {t('gallery.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cars.map((car, index) => (
            <div
              key={car.id}
              className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
              onClick={() => handleCarClick(car)}
            >
              <div className="aspect-[4/3] overflow-hidden bg-gray-200">
                <img
                  src={car.coverImage}
                  alt={car.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  loading="lazy"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 right-0 left-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <div className="flex justify-between items-end">
                    <div>
                      <h3 className="text-white text-xl font-bold mb-2">
                        {car.title}
                      </h3>
                      <div className="flex items-center gap-2">
                        <span className="inline-block bg-gradient-to-r from-gold-500 to-gold-700 text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg">
                          {car.category}
                        </span>
                        <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-medium">
                          {car.images.length} {t('gallery.photos')}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border-2 border-gray-200 hover:border-gold-500 transition-all duration-500 shadow-lg animate-fade-in-up">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('gallery.searchTitle')}
            </h3>
            <p className="text-gray-600 text-lg mb-6">
              {t('gallery.searchDescription')}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white px-6 py-3 rounded-lg shadow-md border-2 border-gray-200 hover:border-gold-500 hover:scale-105 transition-all duration-300">
                <p className="text-sm text-gray-600">{t('gallery.phone')}</p>
                <a className="text-lg font-bold text-gold-600 text-left" href="tel:(06)5207204" dir="ltr">(06) 520 7204</a>
              </div>
              <div className="bg-white px-6 py-3 rounded-lg shadow-md border-2 border-gray-200 hover:border-gold-500 hover:scale-105 transition-all duration-300">
                <p className="text-sm text-gray-600">{t('gallery.email')}</p>
                <a target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-gold-600 hover:text-gold-700 transition-colors" href="mailto:info@unitedint-uae.com">info@unitedint-uae.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {selectedCar && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 animate-fade-in"
          onClick={handleCloseGallery}
        >
          {/* Close Button */}
          <button
            className="absolute top-4 right-4 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
            onClick={handleCloseGallery}
          >
            <X className="w-8 h-8" />
          </button>

          {/* Car Info */}
          <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white p-4 rounded-lg z-10">
            <h3 className="text-2xl font-bold mb-1">{selectedCar.title}</h3>
            <div className="flex items-center gap-2">
              <span className="bg-gradient-to-r from-gold-500 to-gold-700 px-3 py-1 rounded-full text-sm font-medium">
                {selectedCar.category}
              </span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {selectedCar.images.length}
              </span>
            </div>
          </div>

          {/* Previous Button */}
          {currentImageIndex > 0 && (
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
              onClick={(e) => {
                e.stopPropagation();
                handlePrevImage();
              }}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>
          )}

          {/* Next Button */}
          {currentImageIndex < selectedCar.images.length - 1 && (
            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 z-10"
              onClick={(e) => {
                e.stopPropagation();
                handleNextImage();
              }}
            >
              <ChevronRight className="w-8 h-8" />
            </button>
          )}

          {/* Main Image */}
          <div className="max-w-5xl max-h-[80vh] flex items-center justify-center">
            <img
              src={selectedCar.images[currentImageIndex]}
              alt={`${selectedCar.title} - ${currentImageIndex + 1}`}
              className="max-w-full max-h-full object-contain animate-scale-in"
              onClick={(e) => e.stopPropagation()}
            />
          </div>

          {/* Thumbnail Navigation */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/50 backdrop-blur-sm p-3 rounded-lg max-w-[90vw] overflow-x-auto">
            {selectedCar.images.map((image, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                }}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                  index === currentImageIndex
                    ? 'ring-2 ring-gold-500 scale-110'
                    : 'opacity-50 hover:opacity-100'
                }`}
              >
                <img
                  src={image}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
