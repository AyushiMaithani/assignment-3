import React, { useState } from 'react';
import { pujaCategories } from '../constant/cardData';
import TextCardList from './TextCardList';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Navbar = () => {
  const [activeTab, setActiveTab] = useState('puran-katha');

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

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="hidden md:flex flex-wrap justify-center gap-4 md:gap-6 bg-white shadow-md rounded-full p-2 border border-green-500">
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
        <button
          onClick={handlePrev}
          className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 hover:bg-orange-100 transition"
          aria-label="Previous Category"
        >
         <FaChevronLeft className="text-orange-600" />
        </button>
        <span className="text-lg font-semibold text-gray-800 px-4 whitespace-nowrap max-w-[150px] overflow-hidden text-ellipsis">
          {activeCategory?.label || 'No category'}
        </span>
        <button
          onClick={handleNext}
          className="px-4 py-2 bg-gray-100 rounded-full text-gray-700 hover:bg-orange-100 transition"
          aria-label="Next Category"
        >
          <FaChevronRight className="text-orange-600" />
        </button>
      </div>

      <div className="mt-10">
        {activeCategory ? (
          <>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center sm:text-left">
              {activeCategory.label}
            </h2>
            <TextCardList items={activeCategory.items} />
          </>
        ) : (
          <p className="text-center text-gray-500">No items available.</p>
        )}
      </div>
    </div>
  );
};

export default Navbar;
