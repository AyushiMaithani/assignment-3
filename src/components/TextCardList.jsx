import React, { useRef, useEffect, useState } from 'react';
import TextCard from './TextCard';
import { motion } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TextCardList = ({ items }) => {
  const scrollContainerRef = useRef(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const updateScrollButtons = () => {
    const container = scrollContainerRef.current;
    if (container) {
      setCanScrollLeft(container.scrollLeft > 0);
      setCanScrollRight(container.scrollLeft + container.clientWidth < container.scrollWidth - 1);
    }
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: -300,
        behavior: 'smooth',
      });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({
        left: 300,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    updateScrollButtons();

    const handleScroll = () => {
      updateScrollButtons();
    };

    container.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateScrollButtons);

    return () => {
      container.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, []);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;
    let interval;

    if (isMobile) {
      interval = setInterval(() => {
        scrollRight();
      }, 2000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, []);

  return (
    <div className="relative">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={scrollLeft}
        disabled={!canScrollLeft}
        className={`absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md border border-gray-300 rounded-full p-2 transition ${
          !canScrollLeft ? 'opacity-50 cursor-not-allowed' : 'hover:bg-orange-100'
        }`}
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
        disabled={!canScrollRight}
        className={`absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-white shadow-md border border-gray-300 rounded-full p-2 transition ${
          !canScrollRight ? 'opacity-50 cursor-not-allowed' : 'hover:bg-orange-100'
        }`}
      >
        <FaChevronRight className="text-orange-600" />
      </motion.button>
    </div>
  );
};

export default TextCardList;
