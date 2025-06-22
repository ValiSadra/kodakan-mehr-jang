
import { useState } from 'react';
import Navigation from '../components/Navigation';
import AgeFilter from '../components/AgeFilter';
import { Headphones, Play, ExternalLink } from 'lucide-react';

const Podcasts = () => {
  const [selectedAge, setSelectedAge] = useState('all');
  
  const podcasts = [
    {
      title: "گفت‌وگو با روانشناس کودک",
      description: "مصاحبه با دکتر احمدی درباره تأثیرات روانی جنگ بر کودکان خردسال",
      duration: "۴۵ دقیقه",
      episode: "قسمت ۱",
      source: "رادیو BBC فارسی",
      ageGroup: "children"
    },
    {
      title: "والدینی که نگران نوزادشان هستند",
      description: "راهکارهای عملی برای والدین در مدیریت اضطراب خود و نوزادان",
      duration: "۳۲ دقیقه",
      episode: "قسمت ۲",
      source: "پادکست سلامت کودک",
      ageGroup: "infants"
    },
    {
      title: "داستان‌هایی برای آرامش نوجوانان",
      description: "مجموعه داستان‌های آرام‌بخش ویژه نوجوانان",
      duration: "۲۵ دقیقه",
      episode: "قسمت ۳",
      source: "رادیو کانادا",
      ageGroup: "teens"
    },
    {
      title: "مدرسه و سلامت روان کودکان",
      description: "بحث درباره نقش مدرسه در حمایت از کودکان مدرسه‌ای",
      duration: "۳۸ دقیقه",
      episode: "قسمت ۴",
      source: "پادکست آموزش",
      ageGroup: "kids"
    }
  ];

  const filteredPodcasts = selectedAge === 'all' 
    ? podcasts 
    : podcasts.filter(podcast => podcast.ageGroup === selectedAge);

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
            گفت‌وگوهای تخصصی منتخب از بهترین رسانه‌های بین‌المللی
          </p>
        </div>

        <AgeFilter selectedAge={selectedAge} onAgeChange={setSelectedAge} />

        <div className="space-y-6">
          {filteredPodcasts.map((podcast, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
              <div className="flex items-center justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="bg-green-100 text-green-800 text-sm font-semibold px-3 py-1 rounded-full">
                      {podcast.episode}
                    </span>
                    <span className="bg-gray-100 text-gray-700 text-xs font-semibold px-2 py-1 rounded-full">
                      {podcast.source}
                    </span>
                    <span className="text-gray-500 text-sm">{podcast.duration}</span>
                    <ExternalLink className="w-4 h-4 text-gray-400" />
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
        
        {filteredPodcasts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">محتوایی برای این گروه سنی یافت نشد.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Podcasts;
