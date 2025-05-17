import { cardData } from '../constant/cardData';
import CardList from '../components/CardList';

function CardsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white shadow-sm py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl font-bold text-gray-900 text-center md:text-left">Free Astrology Services</h1>
        </div>
      </header>
      
      <main className="sm:ml-20 py-6 sm:px-6 lg:px-8">
        <CardList cards={cardData} />
        </main>
        
    </div>
  );
}

export default CardsPage;