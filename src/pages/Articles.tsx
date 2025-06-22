
import { useState } from 'react';
import Navigation from '../components/Navigation';
import AgeFilter from '../components/AgeFilter';
import { Book, ExternalLink } from 'lucide-react';

const Articles = () => {
  const [selectedAge, setSelectedAge] = useState('all');
  
  const articles = [
    {
      title: "مدیریت اضطراب کودکان در زمان بحران",
      excerpt: "راهکارهای عملی برای کمک به کودکان در مواجهه با اضطراب و ترس",
      date: "۱۴۰۳/۰۹/۱۵",
      readTime: "۵ دقیقه",
      source: "یونیسف",
      ageGroup: "children",
      url: "#"
    },
    {
      title: "تغذیه سالم نوزادان در شرایط دشوار",
      excerpt: "نکات مهم تغذیه‌ای برای حفظ سلامت جسمی نوزادان و کودکان خردسال",
      date: "۱۴۰۳/۰۹/۱۰",
      readTime: "۷ دقیقه",
      source: "سازمان جهانی بهداشت",
      ageGroup: "infants",
      url: "#"
    },
    {
      title: "بازی درمانی برای نوجوانان آسیب‌دیده",
      excerpt: "استفاده از بازی به عنوان ابزار درمانی و بهبودی برای نوجوانان",
      date: "۱۴۰۳/۰۹/۰۵",
      readTime: "۶ دقیقه",
      source: "انجمن روانشناسی کودک",
      ageGroup: "teens",
      url: "#"
    },
    {
      title: "حمایت عاطفی از کودکان در مدرسه",
      excerpt: "راهنمای معلمان برای شناسایی و حمایت از کودکان آسیب‌دیده",
      date: "۱۴۰۳/۰۹/۰۱",
      readTime: "۸ دقیقه",
      source: "یونسکو",
      ageGroup: "kids",
      url: "#"
    }
  ];

  const filteredArticles = selectedAge === 'all' 
    ? articles 
    : articles.filter(article => article.ageGroup === selectedAge);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Book className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">مقالات و منابع تخصصی</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            بهترین مطالب تخصصی از نهادهای معتبر بین‌المللی برای والدین و مراقبان کودکان
          </p>
        </div>

        <AgeFilter selectedAge={selectedAge} onAgeChange={setSelectedAge} />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredArticles.map((article, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full">
                    {article.source}
                  </span>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </div>
                <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors cursor-pointer">
                  {article.title}
                </h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{article.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{article.date}</span>
                  <span>خواندن {article.readTime}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
        
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">محتوایی برای این گروه سنی یافت نشد.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Articles;
