
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import SectionCard from '../components/SectionCard';
import { Book, Video, Headphones, Gamepad, Heart, Users, Shield } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              منابع آموزشی ما
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              مجموعه‌ای جامع از محتواهای آموزشی برای حمایت از کودکان و خانواده‌ها در شرایط دشوار
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <SectionCard
              title="مقالات"
              description="مطالب تخصصی و راهنمایی‌های کاربردی نوشته شده توسط متخصصان"
              icon={<Book size={48} />}
              link="/articles"
              gradient="bg-gradient-to-br from-blue-500 to-blue-700"
            />
            
            <SectionCard
              title="پادکست‌ها"
              description="گفت‌وگوهای صوتی با متخصصان و تجربیات مفید"
              icon={<Headphones size={48} />}
              link="/podcasts"
              gradient="bg-gradient-to-br from-green-500 to-green-700"
            />
            
            <SectionCard
              title="ویدئوها"
              description="آموزش‌های تصویری و تکنیک‌های عملی"
              icon={<Video size={48} />}
              link="/videos"
              gradient="bg-gradient-to-br from-purple-500 to-purple-700"
            />
            
            <SectionCard
              title="بازی‌ها"
              description="بازی‌های آموزشی تعاملی برای کودکان"
              icon={<Gamepad size={48} />}
              link="/games"
              gradient="bg-gradient-to-br from-orange-500 to-orange-700"
            />
          </div>
        </div>
      </section>

      {/* About Website Purpose Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
              درباره این وبسایت
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                این وبسایت با هدف گردآوری و به اشتراک‌گذاری بهترین منابع آموزشی و راهنمایی‌های تخصصی 
                از نهادهای معتبر جهانی در زمینه حفظ و ارتقای سلامت روان کودکان در هنگام بحران‌ها ایجاد شده است.
              </p>
              <div className="grid gap-8 md:grid-cols-3 mt-12">
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <Heart className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">حمایت جامع</h3>
                  <p className="text-gray-600">
                    ارائه راهکارهای عملی و علمی برای حمایت از کودکان در شرایط بحرانی
                  </p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                    <Users className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">منابع معتبر</h3>
                  <p className="text-gray-600">
                    محتواهایی از سازمان‌های بین‌المللی و نهادهای تخصصی معتبر
                  </p>
                </div>
                <div className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                    <Shield className="text-white" size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">تخصصی و کاربردی</h3>
                  <p className="text-gray-600">
                    راهنمایی‌های عملی قابل اجرا برای والدین، مربیان و متخصصان
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Footer Section */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-4 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent mb-4">
                کودکان و بحران
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                پلتفرمی جامع برای حمایت از سلامت روان کودکان در شرایط بحرانی، 
                با گردآوری بهترین منابع از نهادهای معتبر بین‌المللی
              </p>
              <div className="flex space-x-4 space-x-reverse">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">T</span>
                </div>
                <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center hover:bg-green-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">I</span>
                </div>
                <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center hover:bg-purple-700 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">L</span>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">دسترسی سریع</h4>
              <ul className="space-y-2">
                <li><a href="/articles" className="text-gray-300 hover:text-white transition-colors">مقالات</a></li>
                <li><a href="/videos" className="text-gray-300 hover:text-white transition-colors">ویدئوها</a></li>
                <li><a href="/podcasts" className="text-gray-300 hover:text-white transition-colors">پادکست‌ها</a></li>
                <li><a href="/games" className="text-gray-300 hover:text-white transition-colors">بازی‌ها</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">گروه‌های سنی</h4>
              <ul className="space-y-2">
                <li><span className="text-gray-300">۰-۲ سال</span></li>
                <li><span className="text-gray-300">۳-۶ سال</span></li>
                <li><span className="text-gray-300">۷-۱۲ سال</span></li>
                <li><span className="text-gray-300">۱۳-۱۸ سال</span></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © ۲۰۲۴ کودکان و بحران. تمامی حقوق محفوظ است.
              </p>
              <div className="flex space-x-6 space-x-reverse text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">حریم خصوصی</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">شرایط استفاده</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">تماس با ما</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
