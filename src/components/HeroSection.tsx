
const HeroSection = () => {
  return <div className="relative bg-gradient-to-br from-blue-600 via-purple-600 to-green-600 py-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-10"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 drop-shadow-lg">سلامت روان کودکان در هنگام بحران ها</h1>
          <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto drop-shadow-md opacity-90">بهترین منابع آموزشی و راهنمایی‌های تخصصی از نهادهای معتبر در راستای حفظ و ارتقا سلامت روانی کودکان در هنگام بحران ها</p>
          
          {/* Age Group Selection */}
          <div className="bg-white bg-opacity-95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 max-w-4xl mx-auto border border-white border-opacity-20">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">انتخاب گروه سنی</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="group bg-gradient-to-br from-pink-100 to-pink-200 hover:from-pink-200 hover:to-pink-300 rounded-2xl p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 border-pink-200 hover:border-pink-300">
                <div className="text-5xl mb-3 group-hover:animate-bounce">🌸</div>
                <h3 className="font-bold text-gray-800 text-lg mb-1">۰-۲ سال</h3>
                <div className="w-full h-2 bg-pink-300 rounded-full"></div>
              </div>
              
              <div className="group bg-gradient-to-br from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300 rounded-2xl p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 border-blue-200 hover:border-blue-300">
                <div className="text-5xl mb-3 group-hover:animate-bounce">🎈</div>
                <h3 className="font-bold text-gray-800 text-lg mb-1">۳-۶ سال</h3>
                <div className="w-full h-2 bg-blue-300 rounded-full"></div>
              </div>
              
              <div className="group bg-gradient-to-br from-green-100 to-green-200 hover:from-green-200 hover:to-green-300 rounded-2xl p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 border-green-200 hover:border-green-300">
                <div className="text-5xl mb-3 group-hover:animate-bounce">⭐</div>
                <h3 className="font-bold text-gray-800 text-lg mb-1">۷-۱۲ سال</h3>
                <div className="w-full h-2 bg-green-300 rounded-full"></div>
              </div>
              
              <div className="group bg-gradient-to-br from-orange-100 to-orange-200 hover:from-orange-200 hover:to-orange-300 rounded-2xl p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 border-orange-200 hover:border-orange-300">
                <div className="text-5xl mb-3 group-hover:animate-bounce">🚀</div>
                <h3 className="font-bold text-gray-800 text-lg mb-1">۱۳-۱۸ سال</h3>
                <div className="w-full h-2 bg-orange-300 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};

export default HeroSection;
