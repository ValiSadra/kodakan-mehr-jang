
import Navigation from '../components/Navigation';
import { Book } from 'lucide-react';

const Articles = () => {
  const articles = [
    {
      title: "مدیریت اضطراب کودکان در زمان بحران",
      excerpt: "راهکارهای عملی برای کمک به کودکان در مواجهه با اضطراب و ترس",
      date: "۱۴۰۳/۰۹/۱۵",
      readTime: "۵ دقیقه"
    },
    {
      title: "تغذیه سالم کودکان در شرایط دشوار",
      excerpt: "نکات مهم تغذیه‌ای برای حفظ سلامت جسمی کودکان",
      date: "۱۴۰۳/۰۹/۱۰",
      readTime: "۷ دقیقه"
    },
    {
      title: "بازی درمانی برای کودکان آسیب‌دیده",
      excerpt: "استفاده از بازی به عنوان ابزار درمانی و بهبودی",
      date: "۱۴۰۳/۰۹/۰۵",
      readTime: "۶ دقیقه"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <Book className="w-8 h-8 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">مقالات و بلاگ</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            مطالب تخصصی و راهنمایی‌های کاربردی برای والدین و مراقبان کودکان
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <h2 className="text-xl font-bold text-gray-900 mb-3 hover:text-blue-600 transition-colors">
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
      </div>
    </div>
  );
};

export default Articles;
