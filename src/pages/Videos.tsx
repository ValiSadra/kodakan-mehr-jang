
import Navigation from '../components/Navigation';
import { Video, Play } from 'lucide-react';

const Videos = () => {
  const videos = [
    {
      title: "تکنیک‌های تنفس برای کودکان",
      description: "آموزش تکنیک‌های ساده تنفس برای کاهش اضطراب",
      duration: "۸ دقیقه",
      thumbnail: "bg-gradient-to-br from-purple-400 to-pink-400"
    },
    {
      title: "بازی‌های آرام‌بخش خانگی",
      description: "فعالیت‌هایی که می‌توانید در خانه با کودکان انجام دهید",
      duration: "۱۲ دقیقه",
      thumbnail: "bg-gradient-to-br from-blue-400 to-cyan-400"
    },
    {
      title: "چگونه با کودک درباره جنگ صحبت کنیم",
      description: "راهنمای گام به گام برای گفت‌وگو با کودکان",
      duration: "۱۵ دقیقه",
      thumbnail: "bg-gradient-to-br from-orange-400 to-red-400"
    }
  ];

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
            آموزش‌های تصویری و عملی برای کمک به کودکان و خانواده‌ها
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {videos.map((video, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className={`${video.thumbnail} h-48 relative flex items-center justify-center`}>
                <button className="bg-white/20 backdrop-blur-sm border border-white/30 rounded-full p-4 group-hover:bg-white/30 transition-all">
                  <Play className="w-8 h-8 text-white" />
                </button>
                <div className="absolute bottom-3 right-3 bg-black/50 text-white text-sm px-2 py-1 rounded">
                  {video.duration}
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-2">{video.title}</h2>
                <p className="text-gray-600">{video.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videos;
