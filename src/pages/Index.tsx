import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import SectionCard from '../components/SectionCard';
import { Book, Video, Headphones, Gamepad, Heart, Shield, Users, Mail, Phone, MapPin, MessageCircle, Building2 } from 'lucide-react';
const Index = () => {
  return <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">منابع آموزشی</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">مجموعه‌ای جامع از محتواهای آموزشی معتبر داخلی و بین المللی</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <SectionCard title="مقالات" description="مطالب تخصصی و راهنمایی‌های کاربردی نوشته شده توسط متخصصان" icon={<Book size={48} />} link="/articles" gradient="bg-gradient-to-br from-blue-500 to-blue-700" />
            
            <SectionCard title="پادکست‌ها" description="گفت‌وگوهای صوتی با متخصصان و تجربیات مفید" icon={<Headphones size={48} />} link="/podcasts" gradient="bg-gradient-to-br from-green-500 to-green-700" />
            
            <SectionCard title="ویدئوها" description="آموزش‌های تصویری و تکنیک‌های عملی" icon={<Video size={48} />} link="/videos" gradient="bg-gradient-to-br from-purple-500 to-purple-700" />
            
            <SectionCard title="بازی‌ها" description="بازی‌های آموزشی تعاملی برای کودکان" icon={<Gamepad size={48} />} link="/games" gradient="bg-gradient-to-br from-orange-500 to-orange-700" />
          </div>
        </div>
      </section>

      {/* New Expert Consultation Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">مشاوره با متخصصان</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">ارتباط مستقیم با روانشناسان و متخصصان سلامت روان کودکان</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <SectionCard title="مشاوره آنلاین" description="جلسات مشاوره آنلاین با متخصصان مجرب سلامت روان کودکان" icon={<MessageCircle size={48} />} link="/consultation" gradient="bg-gradient-to-br from-teal-500 to-teal-700" />
            
            <SectionCard title="مشاوره اورژانسی" description="دسترسی ۲۴ ساعته به متخصصان برای مواقع بحرانی و فوری" icon={<Phone size={48} />} link="/emergency" gradient="bg-gradient-to-br from-red-500 to-red-700" />
          </div>
        </div>
      </section>

      {/* New Corporate Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">خدمات سازمانی</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">خدمات تخصصی شرکت‌ها و نهادها برای حمایت از سلامت روان کودکان</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <SectionCard title="خدمات شرکت‌ها" description="برنامه‌های حمایتی شرکت‌ها و سازمان‌ها برای کودکان کارکنان" icon={<Building2 size={48} />} link="/corporate" gradient="bg-gradient-to-br from-indigo-500 to-indigo-700" />
            
            <SectionCard title="برنامه‌های خیریه" description="کمک‌های مالی و خدمات رایگان برای خانواده‌های نیازمند" icon={<Heart size={48} />} link="/charity" gradient="bg-gradient-to-br from-rose-500 to-rose-700" />
          </div>
        </div>
      </section>

      {/* About Website Purpose Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">درباره ما</h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">این پلتفرم که به عنوان بخش مسئولیت اجتماعی شرکت داروسازی الحاوی تأسیس شده است، با هدف گردآوری و سازماندهی بهترین منابع آموزشی در زمینه سلامت روان کودکان در شرایط بحرانی طراحی شده است. ما بر آن هستیم تا والدین، مربیان، و متخصصان را با ابزارها و دانش لازم برای حمایت از کودکان در مواقع دشوار مجهز کنیم.</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <Heart className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">حمایت جامع</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                ارائه منابع کامل و متنوع برای پشتیبانی همه‌جانبه از کودکان در مواقع بحران
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center">
                <Shield className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">محتوای معتبر</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                تمام منابع توسط متخصصان بررسی و از نهادهای معتبر بین‌المللی گردآوری شده‌اند
              </p>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center">
                <Users className="text-white" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">دسترسی آسان</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                طراحی ساده و کاربرپسند برای دسترسی آسان والدین و مربیان به اطلاعات مورد نیاز
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid gap-8 md:grid-cols-4">
            {/* Website Info */}
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
                سلامت روان کودکان و بحران‌ها
              </h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                مرجع جامع منابع آموزشی برای حفظ و ارتقای سلامت روانی کودکان در شرایط بحران. 
                ما متعهد به ارائه بهترین و معتبرترین اطلاعات برای حمایت از کودکان هستیم.
              </p>
              <div className="flex space-x-4 space-x-reverse">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                  <span className="text-white font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors cursor-pointer">
                  <span className="text-white font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center hover:bg-red-700 transition-colors cursor-pointer">
                  <span className="text-white font-bold">@</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold mb-4">دسترسی سریع</h4>
              <ul className="space-y-2">
                <li><a href="/articles" className="text-gray-300 hover:text-white transition-colors">مقالات</a></li>
                <li><a href="/videos" className="text-gray-300 hover:text-white transition-colors">ویدئوها</a></li>
                <li><a href="/podcasts" className="text-gray-300 hover:text-white transition-colors">پادکست‌ها</a></li>
                <li><a href="/games" className="text-gray-300 hover:text-white transition-colors">بازی‌ها</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-bold mb-4">تماس با ما</h4>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-blue-400" />
                  <span className="text-gray-300">info@childmentalhealth.ir</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-green-400" />
                  <span className="text-gray-300">۰۲۱-۱۲۳۴۵۶۷۸</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={18} className="text-red-400" />
                  <span className="text-gray-300">تهران، ایران</span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © ۱۴۰۳ سلامت روان کودکان و بحران‌ها. تمامی حقوق محفوظ است.
            </p>
          </div>
        </div>
      </footer>
    </div>;
};
export default Index;