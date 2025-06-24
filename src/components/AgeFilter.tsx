
import { ReactNode } from 'react';

interface AgeFilterProps {
  selectedAge: string;
  onAgeChange: (age: string) => void;
}

const AgeFilter = ({ selectedAge, onAgeChange }: AgeFilterProps) => {
  const ageGroups = [
    { id: 'all', name: 'همه سنین', color: 'from-gray-500 to-gray-600', bgColor: 'bg-gray-100 hover:bg-gray-200', borderColor: 'border-gray-300' },
    { id: 'infants', name: '۰-۲ سال', color: 'from-pink-500 to-pink-600', bgColor: 'bg-pink-100 hover:bg-pink-200', borderColor: 'border-pink-300' },
    { id: 'children', name: '۳-۶ سال', color: 'from-blue-500 to-blue-600', bgColor: 'bg-blue-100 hover:bg-blue-200', borderColor: 'border-blue-300' },
    { id: 'kids', name: '۷-۱۲ سال', color: 'from-green-500 to-green-600', bgColor: 'bg-green-100 hover:bg-green-200', borderColor: 'border-green-300' },
    { id: 'teens', name: '۱۳-۱۸ سال', color: 'from-orange-500 to-orange-600', bgColor: 'bg-orange-100 hover:bg-orange-200', borderColor: 'border-orange-300' },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 mb-8 border border-gray-100">
      <h3 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-6 text-center">فیلتر بر اساس سن</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {ageGroups.map((group) => (
          <button
            key={group.id}
            onClick={() => onAgeChange(group.id)}
            className={`px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 transform hover:scale-105 border-2 ${
              selectedAge === group.id
                ? `bg-gradient-to-r ${group.color} text-white shadow-lg scale-105`
                : `${group.bgColor} ${group.borderColor} text-gray-700 hover:shadow-md`
            }`}
          >
            {group.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AgeFilter;
