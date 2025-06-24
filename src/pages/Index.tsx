import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import SectionCard from '../components/SectionCard';
import { Book, Video, Headphones, Gamepad } from 'lucide-react';
const Index = () => {
  return <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">منابع آموزشی </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">مجموعه‌ای جامع از محتواهای آموزشی معتبر داخلی و بین المللی در راستا حفظ و ارتقای سلامت روانی کودکان و خانواده‌ها در شرایط بحرانی</p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <SectionCard title="مقالات" description="مطالب تخصصی و راهنمایی‌های کاربردی نوشته شده توسط متخصصان" icon={<Book size={48} />} link="/articles" gradient="bg-gradient-to-br from-blue-500 to-blue-700" />
            
            <SectionCard title="پادکست‌ها" description="گفت‌وگوهای صوتی با متخصصان و تجربیات مفید" icon={<Headphones size={48} />} link="/podcasts" gradient="bg-gradient-to-br from-green-500 to-green-700" />
            
            <SectionCard title="ویدئوها" description="آموزش‌های تصویری و تکنیک‌های عملی" icon={<Video size={48} />} link="/videos" gradient="bg-gradient-to-br from-purple-500 to-purple-700" />
            
            <SectionCard title="بازی‌ها" description="بازی‌های آموزشی تعاملی برای کودکان" icon={<Gamepad size={48} />} link="/games" gradient="bg-gradient-to-br from-orange-500 to-orange-700" />
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            چرا سلامت کودکان مهم است؟
          </h2>
          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">حمایت روانی</h3>
              <p className="text-gray-600">
                کودکان در شرایط بحران نیاز به حمایت ویژه دارند تا بتوانند با آسیب‌های روانی مقابله کنند
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">آینده بهتر</h3>
              <p className="text-gray-600">
                سرمایه‌گذاری در سلامت کودکان امروز، آینده‌ای بهتر برای جامعه فردا ایجاد می‌کند
              </p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-4">تاب‌آوری</h3>
              <p className="text-gray-600">
                آموزش مهارت‌های مقابله‌ای به کودکان کمک می‌کند تا در برابر چالش‌ها مقاوم‌تر باشند
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>;
};
export default Index;