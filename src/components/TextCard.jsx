const TextCard = ({ item }) => {
  return (
    <div className="aspect-square min-w-[200px] max-w-[250px] flex-shrink-0 shadow-lg rounded-lg overflow-hidden border border-gray-200">
      <div className="p-6 flex items-center justify-center h-full">
        <h3 className="text-xl font-bold text-center text-orange-600">{item}</h3>
      </div>
    </div>
  );
};

export default TextCard;
