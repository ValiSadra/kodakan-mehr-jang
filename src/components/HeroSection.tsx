
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
              <div className="group bg-gradient-to-br from-pink-100 to-pink-200 hover:from-pink-200 hover:to-pink-300 rounded-2xl p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 border-pink-200 hover:border-pink-300 relative overflow-hidden">
                <div className="absolute top-2 right-2 w-4 h-4 bg-pink-400 rounded-full opacity-80"></div>
                <div className="absolute bottom-2 left-2 w-6 h-6 bg-pink-300 rounded-full opacity-60"></div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-pink-400 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    0-2
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg">سال</h3>
                </div>
              </div>
              
              <div className="group bg-gradient-to-br from-blue-100 to-blue-200 hover:from-blue-200 hover:to-blue-300 rounded-2xl p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 border-blue-200 hover:border-blue-300 relative overflow-hidden">
                <div className="absolute top-2 right-2 w-4 h-4 bg-blue-400 rounded-full opacity-80"></div>
                <div className="absolute bottom-2 left-2 w-6 h-6 bg-blue-300 rounded-full opacity-60"></div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-blue-400 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    3-6
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg">سال</h3>
                </div>
              </div>
              
              <div className="group bg-gradient-to-br from-green-100 to-green-200 hover:from-green-200 hover:to-green-300 rounded-2xl p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 border-green-200 hover:border-green-300 relative overflow-hidden">
                <div className="absolute top-2 right-2 w-4 h-4 bg-green-400 rounded-full opacity-80"></div>
                <div className="absolute bottom-2 left-2 w-6 h-6 bg-green-300 rounded-full opacity-60"></div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-green-400 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    7-12
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg">سال</h3>
                </div>
              </div>
              
              <div className="group bg-gradient-to-br from-orange-100 to-orange-200 hover:from-orange-200 hover:to-orange-300 rounded-2xl p-6 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 border-orange-200 hover:border-orange-300 relative overflow-hidden">
                <div className="absolute top-2 right-2 w-4 h-4 bg-orange-400 rounded-full opacity-80"></div>
                <div className="absolute bottom-2 left-2 w-6 h-6 bg-orange-300 rounded-full opacity-60"></div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-orange-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    13-18
                  </div>
                  <h3 className="font-bold text-gray-800 text-lg">سال</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>;
};

export default HeroSection;
