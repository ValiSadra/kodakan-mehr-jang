
const HeroSection = () => {
  return (
    <div className="relative bg-gradient-to-br from-blue-50 via-white to-green-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            سلامت کودکان در زمان جنگ
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            بهترین منابع آموزشی و راهنمایی‌های تخصصی از نهادهای معتبر برای حفظ سلامت روحی و جسمی کودکان
          </p>
          
          {/* Age Group Selection */}
          <div className="bg-white rounded-2xl shadow-lg p-6 max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">انتخاب گروه سنی</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="bg-blue-50 hover:bg-blue-100 rounded-xl p-4 cursor-pointer transition-colors">
                <div className="text-3xl mb-2">👶</div>
                <h3 className="font-semibold text-gray-900">نوزادان</h3>
                <p className="text-sm text-gray-600">۰-۲ سال</p>
              </div>
              <div className="bg-green-50 hover:bg-green-100 rounded-xl p-4 cursor-pointer transition-colors">
                <div className="text-3xl mb-2">🧒</div>
                <h3 className="font-semibold text-gray-900">کودکان</h3>
                <p className="text-sm text-gray-600">۳-۶ سال</p>
              </div>
              <div className="bg-purple-50 hover:bg-purple-100 rounded-xl p-4 cursor-pointer transition-colors">
                <div className="text-3xl mb-2">👦</div>
                <h3 className="font-semibold text-gray-900">نوجوانان</h3>
                <p className="text-sm text-gray-600">۷-۱۲ سال</p>
              </div>
              <div className="bg-orange-50 hover:bg-orange-100 rounded-xl p-4 cursor-pointer transition-colors">
                <div className="text-3xl mb-2">🧑‍🎓</div>
                <h3 className="font-semibold text-gray-900">نوجوانان بزرگ</h3>
                <p className="text-sm text-gray-600">۱۳-۱۸ سال</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
