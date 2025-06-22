
import { useState } from 'react';
import Navigation from '../components/Navigation';
import AgeFilter from '../components/AgeFilter';
import { Gamepad, Star, ExternalLink } from 'lucide-react';

const Games = () => {
  const [selectedAge, setSelectedAge] = useState('all');
  
  const games = [
    {
      title: "بازی تنفس پروانه",
      description: "بازی تعاملی برای یادگیری تکنیک‌های تنفس آرام‌بخش کودکان",
      difficulty: "آسان",
      color: "bg-gradient-to-br from-pink-400 to-purple-400",
      source: "مرکز بازی درمانی نروژ",
      ageGroup: "children"
    },
    {
      title: "آرامش نوزاد",
      description: "اپلیکیشن صدای طبیعت و لالایی برای آرام کردن نوزادان",
      difficulty: "آسان",
      color: "bg-gradient-to-br from-blue-300 to-cyan-300",
      source: "یونیسف",
      ageGroup: "infants"
    },
    {
      title: "جعبه احساسات نوجوان",
      description: "بازی شناخت و بیان احساسات ویژه نوجوانان",
      difficulty: "متوسط",
      color: "bg-gradient-to-br from-orange-400 to-red-400",
      source: "انجمن روانشناسی کانادا",
      ageGroup: "teens"
    },
    {
      title: "باغ آرامش",
      description: "بازی مراقبت از گیاهان مجازی برای آموزش صبر و مراقبت",
      difficulty: "آسان",
      color: "bg-gradient-to-br from-green-400 to-teal-400",
      source: "مؤسسه بازی آموزشی فنلاند",
      ageGroup: "kids"
    }
  ];

  const filteredGames = selectedAge === 'all' 
    ? games 
    : games.filter(game => game.ageGroup === selectedAge);

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
            بازی‌های تعاملی منتخب از بهترین مراکز تخصصی جهان
          </p>
        </div>

        <AgeFilter selectedAge={selectedAge} onAgeChange={setSelectedAge} />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredGames.map((game, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all transform hover:-translate-y-2">
              <div className={`${game.color} h-32 flex items-center justify-center relative`}>
                <Gamepad className="w-12 h-12 text-white" />
                <div className="absolute top-3 right-3">
                  <ExternalLink className="w-4 h-4 text-white" />
                </div>
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
                <div className="mb-2">
                  <span className="bg-orange-100 text-orange-800 text-xs font-semibold px-2 py-1 rounded-full">
                    {game.source}
                  </span>
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-2">{game.title}</h2>
                <p className="text-gray-600 mb-4">{game.description}</p>
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full">
                    {game.difficulty}
                  </span>
                </div>
                <button className="w-full bg-orange-600 text-white py-2 rounded-lg hover:bg-orange-700 transition-colors">
                  شروع بازی
                </button>
              </div>
            </div>
          ))}
        </div>
        
        {filteredGames.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">محتوایی برای این گروه سنی یافت نشد.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Games;
