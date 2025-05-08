
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select } from '@/components/ui/select';
import { Search } from 'lucide-react';

const Hero = () => {
  const [searchType, setSearchType] = useState('buy');

  return (
    <div className="relative bg-gray-100 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10"></div>
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&w=3000')] bg-cover bg-center"></div>
      
      <div className="relative z-20 container-custom py-24 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in">
            Find Your Perfect Property with AcreMart
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            The most comprehensive platform for buying, selling, and renting properties with secure bidding and seamless transactions.
          </p>
          
          {/* Search Box */}
          <div className="bg-white rounded-lg shadow-xl p-4 md:p-6 max-w-3xl mx-auto">
            {/* Search Type Tabs */}
            <div className="flex mb-6 border-b">
              <button
                onClick={() => setSearchType('buy')}
                className={`text-base font-medium px-4 py-2 border-b-2 transition-colors ${
                  searchType === 'buy' 
                    ? 'border-acremart-400 text-acremart-500' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Buy
              </button>
              <button
                onClick={() => setSearchType('rent')}
                className={`text-base font-medium px-4 py-2 border-b-2 transition-colors ${
                  searchType === 'rent' 
                    ? 'border-acremart-400 text-acremart-500' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Rent
              </button>
              <button
                onClick={() => setSearchType('sell')}
                className={`text-base font-medium px-4 py-2 border-b-2 transition-colors ${
                  searchType === 'sell' 
                    ? 'border-acremart-400 text-acremart-500' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
              >
                Sell
              </button>
            </div>
            
            {/* Search Form */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="col-span-1 md:col-span-3">
                <Input 
                  type="text" 
                  placeholder="Enter location, city, or zip code" 
                  className="w-full"
                />
              </div>
              
              <div>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-acremart-400 text-gray-700">
                  <option value="">Property Type</option>
                  <option value="house">House</option>
                  <option value="apartment">Apartment</option>
                  <option value="condo">Condo</option>
                  <option value="land">Land</option>
                  <option value="commercial">Commercial</option>
                </select>
              </div>
              
              <div>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-acremart-400 text-gray-700">
                  <option value="">Price Range</option>
                  <option value="0-100000">$0 - $100,000</option>
                  <option value="100000-300000">$100,000 - $300,000</option>
                  <option value="300000-500000">$300,000 - $500,000</option>
                  <option value="500000-1000000">$500,000 - $1,000,000</option>
                  <option value="1000000+">$1,000,000+</option>
                </select>
              </div>
              
              <div>
                <Button className="w-full bg-acremart-400 hover:bg-acremart-500 text-white">
                  <Search className="mr-2 h-4 w-4" /> Search
                </Button>
              </div>
            </div>
          </div>
          
          <div className="mt-8 text-white">
            <p className="text-sm">Popular searches: New York, Los Angeles, Miami, Chicago, Houston</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
