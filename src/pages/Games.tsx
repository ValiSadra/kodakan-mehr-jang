
import Navigation from '../components/Navigation';
import { Gamepad, Star } from 'lucide-react';

const Games = () => {
  const games = [
    {
      title: "بازی تنفس پروانه",
      description: "بازی تعاملی برای یادگیری تکنیک‌های تنفس آرام‌بخش",
      age: "۴-۸ سال",
      difficulty: "آسان",
      color: "bg-gradient-to-br from-pink-400 to-purple-400"
    },
    {
      title: "جعبه احساسات",
      description: "بازی شناخت و بیان احساسات برای کودکان",
      age: "۵-۱۰ سال",
      difficulty: "متوسط",
      color: "bg-gradient-to-br from-blue-400 to-indigo-400"
    },
    {
      title: "باغ آرامش",
      description: "بازی مراقبت از گیاهان مجازی برای آموزش صبر و مراقبت",
      age: "۶-۱۲ سال",
      difficulty: "آسان",
      color: "bg-gradient-to-br from-green-400 to-teal-400"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
            <Gamepad className="w-8 h-8 text-orange-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">بازی‌های آموزشی</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            بازی‌های تعاملی و آموزشی برای کمک به یادگیری مهارت‌های مقابله‌ای
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {games.map((game, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className={`${game.color} h-32 flex items-center justify-center`}>
                <Gamepad className="w-12 h-12 text-white" />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-500 text-sm">۴.۸</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{game.title}</h2>
                <p className="text-gray-600 mb-4">{game.description}</p>
                <div className="flex items-center justify-between text-sm">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {game.age}
                  </span>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    {game.difficulty}
                  </span>
                </div>
                <button className="w-full mt-4 bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors">
                  شروع بازی
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Games;
