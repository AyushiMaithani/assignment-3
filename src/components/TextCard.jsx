const TextCard = ({ item }) => {
  return (
    <div className="flex flex-col shadow-lg rounded-lg overflow-hidden border border-gray-200 w-[200px] sm:w-[225px] md:w-[280px]">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-40 object-cover"
      />
      <div className="p-4 flex flex-col justify-between flex-grow">
        <h3 className="text-lg mb-2 font-bold text-center text-orange-600">
          {item.name}
        </h3>
        <p className="text-sm text-center mb-2 gray-700 truncate">
          {item.shloka}
        </p>
        <p className="text-sm text-gray-700 truncate">
          {item.meaning}
        </p>
        <button className="mt-2 px-4 py-2 text-orange-600 border-1 border-orange-600 rounded hover:bg-orange-600 hover:text-white">
          Schedule Pooja
        </button>
      </div>
    </div>
  );
};

export default TextCard;
