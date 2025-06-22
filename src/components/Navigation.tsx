
import { Book, Video, Headphones, Gamepad } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const Navigation = () => {
  const location = useLocation();

  const navItems = [
    { name: 'خانه', path: '/', icon: null },
    { name: 'مقالات', path: '/articles', icon: Book },
    { name: 'پادکست', path: '/podcasts', icon: Headphones },
    { name: 'ویدئوها', path: '/videos', icon: Video },
    { name: 'بازی‌ها', path: '/games', icon: Gamepad },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
              سلامت کودکان
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4 space-x-reverse">
              {navItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium flex items-center gap-2 transition-colors ${
                      location.pathname === item.path
                        ? 'bg-blue-100 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    {Icon && <Icon size={18} />}
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
