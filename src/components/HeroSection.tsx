
const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            سلامت کودکان در زمان جنگ
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            منابع آموزشی و راهنمایی‌های تخصصی برای حفظ سلامت روحی و جسمی کودکان در شرایط دشوار
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors">
              شروع کنید
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors">
              درباره ما
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
