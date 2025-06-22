
import Navigation from '../components/Navigation';
import { Headphones, Play } from 'lucide-react';

const Podcasts = () => {
  const podcasts = [
    {
      title: "گفت‌وگو با روانشناس کودک",
      description: "مصاحبه با دکتر احمدی درباره تأثیرات روانی جنگ بر کودکان",
      duration: "۴۵ دقیقه",
      episode: "قسمت ۱"
    },
    {
      title: "والدینی که نگران هستند",
      description: "راهکارهای عملی برای والدین در مدیریت اضطراب خود و فرزندان",
      duration: "۳۲ دقیقه",
      episode: "قسمت ۲"
    },
    {
      title: "داستان‌هایی برای آرامش",
      description: "مجموعه داستان‌های آرام‌بخش برای کودکان",
      duration: "۲۵ دقیقه",
      episode: "قسمت ۳"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <Headphones className="w-8 h-8 text-green-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">پادکست‌ها</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            گفت‌وگوهای تخصصی و راهنمایی‌های صوتی برای بهتر درک کردن نیازهای کودکان
          </p>
        </div>

        <div className="space-y-6">
          {podcasts.map((podcast, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                      {podcast.episode}
                    </span>
                    <span className="text-gray-500 text-sm">{podcast.duration}</span>
                  </div>
                  <h2 className="text-xl font-bold text-gray-900 mb-2">{podcast.title}</h2>
                  <p className="text-gray-600">{podcast.description}</p>
                </div>
                <button className="ml-6 bg-green-600 hover:bg-green-700 text-white p-3 rounded-full transition-colors">
                  <Play className="w-6 h-6" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Podcasts;
