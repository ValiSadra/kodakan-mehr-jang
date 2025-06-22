
import { ReactNode } from 'react';

interface AgeFilterProps {
  selectedAge: string;
  onAgeChange: (age: string) => void;
}

const AgeFilter = ({ selectedAge, onAgeChange }: AgeFilterProps) => {
  const ageGroups = [
    { id: 'all', name: 'همه سنین', emoji: '👥' },
    { id: 'infants', name: 'نوزادان (۰-۲)', emoji: '👶' },
    { id: 'children', name: 'کودکان (۳-۶)', emoji: '🧒' },
    { id: 'kids', name: 'نوجوانان (۷-۱۲)', emoji: '👦' },
    { id: 'teens', name: 'نوجوانان بزرگ (۱۳-۱۸)', emoji: '🧑‍🎓' },
  ];

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">فیلتر بر اساس سن</h3>
      <div className="flex flex-wrap gap-3">
        {ageGroups.map((group) => (
          <button
            key={group.id}
            onClick={() => onAgeChange(group.id)}
            className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors flex items-center gap-2 ${
              selectedAge === group.id
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            <span>{group.emoji}</span>
            {group.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default AgeFilter;
