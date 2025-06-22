
import { useState } from 'react';
import Navigation from '../components/Navigation';
import AgeFilter from '../components/AgeFilter';
import { Video, Play, ExternalLink } from 'lucide-react';

const Videos = () => {
  const [selectedAge, setSelectedAge] = useState('all');
  
  const videos = [
    {
      title: "تکنیک‌های تنفس برای کودکان",
      description: "آموزش تکنیک‌های ساده تنفس برای کاهش اضطراب کودکان",
      duration: "۸ دقیقه",
      thumbnail: "bg-gradient-to-br from-purple-400 to-pink-400",
      source: "مرکز درمان کودکان استرالیا",
      ageGroup: "children"
    },
    {
      title: "مراقبت از نوزادان در شرایط استرس",
      description: "راهنمای عملی برای والدین نوزادان در زمان بحران",
      duration: "۱۲ دقیقه",
      thumbnail: "bg-gradient-to-br from-blue-400 to-cyan-400",
      source: "یونیسف",
      ageGroup: "infants"
    },
    {
      title: "چگونه با نوجوان درباره جنگ صحبت کنیم",
      description: "راهنمای گام به گام برای گفت‌وگو با نوجوانان",
      duration: "۱۵ دقیقه",
      thumbnail: "bg-gradient-to-br from-orange-400 to-red-400",
      source: "انجمن روانشناسان آمریکا",
      ageGroup: "teens"
    },
    {
      title: "بازی‌های آرام‌بخش خانگی",
      description: "فعالیت‌هایی که می‌توانید در خانه با کودکان مدرسه‌ای انجام دهید",
      duration: "۱۰ دقیقه",
      thumbnail: "bg-gradient-to-br from-green-400 to-teal-400",
      source: "مؤسسه بازی درمانی بریتانیا",
      ageGroup: "kids"
    }
  ];

  const filteredVideos = selectedAge === 'all' 
    ? videos 
    : videos.filter(video => video.ageGroup === selectedAge);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-purple-100 rounded-full mb-4">
            <Video className="w-8 h-8 text-purple-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">ویدئوهای آموزشی</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            آموزش‌های تصویری منتخب از بهترین مراکز تخصصی جهان
          </p>
        </div>

        <AgeFilter selectedAge={selectedAge} onAgeChange={setSelectedAge} />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredVideos.map((video, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className={`${video.thumbnail} h-48 relative flex items-center justify-center`}>
                <button className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-4 group-hover:bg-white/30 transition-all">
                  <Play className="w-8 h-8 text-white" />
                </button>
                <div className="absolute bottom-3 right-3 bg-black/50 text-white text-sm px-2 py-1 rounded">
                  {video.duration}
                </div>
                <div className="absolute top-3 left-3">
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
              </div>
              <div className="p-6">
                <div className="mb-2">
                  <span className="bg-purple-100 text-purple-800 text-xs font-semibold px-2 py-1 rounded-full">
                    {video.source}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{video.title}</h2>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {filteredVideos.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">محتوایی برای این گروه سنی یافت نشد.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Videos;
