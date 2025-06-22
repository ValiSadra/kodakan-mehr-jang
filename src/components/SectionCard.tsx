
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface SectionCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
  gradient: string;
}

const SectionCard = ({ title, description, icon, link, gradient }: SectionCardProps) => {
  return (
    <Link to={link} className="block group">
      <div className={`${gradient} p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full`}>
        <div className="text-white mb-4 group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
        <p className="text-white/90 text-lg leading-relaxed">{description}</p>
        <div className="mt-6 inline-flex items-center text-white font-semibold">
          مطالعه بیشتر ←
        </div>
      </div>
    </Link>
  );
};

export default SectionCard;
