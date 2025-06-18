import React, { useState, useRef } from 'react';
import { pujaCategories } from '../constant/cardData';
import TextCardList from './TextCardList';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('puran-katha');

  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const activeIndex = pujaCategories.findIndex(cat => cat.id === activeTab);
  const activeCategory = pujaCategories[activeIndex];

  const handlePrev = () => {
    const prevIndex = activeIndex === 0 ? pujaCategories.length - 1 : activeIndex - 1;
    setActiveTab(pujaCategories[prevIndex].id);
  };

  const handleNext = () => {
    const nextIndex = activeIndex === pujaCategories.length - 1 ? 0 : activeIndex + 1;
    setActiveTab(pujaCategories[nextIndex].id);
  };

  const handleTouchStart = (e) => {
    touchStartX.current = e.changedTouches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const deltaX = touchStartX.current - touchEndX.current;
    if (Math.abs(deltaX) > 50) {
      if (deltaX > 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  return (
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div className="hidden md:flex flex-wrap justify-center gap-4 md:gap-6 bg-white shadow-md rounded-full p-2 border border-green-500 w-fit mx-auto">
        {pujaCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setActiveTab(category.id)}
            className={`transition-all duration-300 px-5 py-2 text-sm sm:text-base font-medium rounded-full ${
              activeTab === category.id
                ? 'bg-orange-500 text-white shadow-md'
                : 'bg-gray-100 text-gray-700 hover:bg-orange-100'
            }`}
          >
            {category.label}
          </button>
        ))}
      </div>

      <div className="flex items-center justify-center gap-6 bg-white shadow-md rounded-full p-2 border border-green-500 md:hidden">
        <span className="text-lg font-semibold text-gray-800 px-4 whitespace-nowrap max-w-[150px] overflow-hidden text-ellipsis">
          {activeCategory?.label || 'No category'}
        </span>
      </div>

      <div className="mt-10">
        {activeCategory ? (
          <TextCardList items={activeCategory.items} />
        ) : (
          <p className="text-center text-gray-500">No items available.</p>
        )}
      </div>
    </div>
  );
};

export default Navbar;
