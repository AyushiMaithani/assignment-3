import React, { useRef } from 'react';
import TextCard from './TextCard';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TextCardList = ({ items }) => {
  const scrollContainerRef = useRef(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -250,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 250,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md border border-gray-300 rounded-full p-2 hover:bg-orange-100 transition"
      >
        <FaChevronLeft className="text-orange-600" />
      </motion.button>

      <div ref={scrollContainerRef} className="overflow-x-auto scrollbar-hide">
        <div className="flex gap-4 px-6 py-4 w-max">
          {items.map((item, index) => (
            <TextCard key={index} item={item} />
          ))}
        </div>
      </div>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md border border-gray-300 rounded-full p-2 hover:bg-orange-100 transition"
      >
        <FaChevronRight className="text-orange-600" />
      </motion.button>
    </div>
  );
};

export default TextCardList;
