
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin } from 'lucide-react';

// Mock data for featured properties
const mockProperties = [
  {
    id: 1,
    title: "Modern Downtown Apartment",
    address: "123 Urban St, New York, NY",
    price: 425000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    type: "Apartment",
    image: "https://images.unsplash.com/photo-1551038247-3d9af20df552?w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Suburban Family Home",
    address: "456 Quiet Ave, Los Angeles, CA",
    price: 750000,
    bedrooms: 4,
    bathrooms: 3,
    area: 2400,
    type: "House",
    image: "https://images.unsplash.com/photo-1466442929976-97f336a657be?w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Luxury Waterfront Villa",
    address: "789 Coastal Rd, Miami, FL",
    price: 1250000,
    bedrooms: 5,
    bathrooms: 4.5,
    area: 3800,
    type: "Villa",
    image: "https://images.unsplash.com/photo-1517022812141-23620dba5c23?w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Cozy Urban Loft",
    address: "101 Artsy Blvd, San Francisco, CA",
    price: 595000,
    bedrooms: 1,
    bathrooms: 1,
    area: 950,
    type: "Loft",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&auto=format&fit=crop"
  },
];

const FeaturedListings = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      maximumFractionDigits: 0
    }).format(price);
  };

  return (
    <section className="py-16 bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Properties</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties from across the country
          </p>
          
          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            <Button 
              variant={activeFilter === 'all' ? "default" : "outline"}
              className={activeFilter === 'all' ? "bg-acremart-400 hover:bg-acremart-500" : ""} 
              onClick={() => setActiveFilter('all')}
            >
              All
            </Button>
            <Button 
              variant={activeFilter === 'house' ? "default" : "outline"}
              className={activeFilter === 'house' ? "bg-acremart-400 hover:bg-acremart-500" : ""} 
              onClick={() => setActiveFilter('house')}
            >
              Houses
            </Button>
            <Button 
              variant={activeFilter === 'apartment' ? "default" : "outline"}
              className={activeFilter === 'apartment' ? "bg-acremart-400 hover:bg-acremart-500" : ""} 
              onClick={() => setActiveFilter('apartment')}
            >
              Apartments
            </Button>
            <Button 
              variant={activeFilter === 'villa' ? "default" : "outline"}
              className={activeFilter === 'villa' ? "bg-acremart-400 hover:bg-acremart-500" : ""} 
              onClick={() => setActiveFilter('villa')}
            >
              Villas
            </Button>
            <Button 
              variant={activeFilter === 'land' ? "default" : "outline"}
              className={activeFilter === 'land' ? "bg-acremart-400 hover:bg-acremart-500" : ""} 
              onClick={() => setActiveFilter('land')}
            >
              Land
            </Button>
          </div>
        </div>
        
        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mockProperties.map((property) => (
            <Card key={property.id} className="card-property group">
              <div className="relative overflow-hidden h-56">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-acremart-400 text-white text-sm font-medium px-2 py-1 rounded">
                  {property.type}
                </div>
              </div>
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg line-clamp-1">{property.title}</h3>
                  <p className="text-acremart-500 font-bold">{formatPrice(property.price)}</p>
                </div>
                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <MapPin className="h-4 w-4 mr-1" />
                  <p className="truncate">{property.address}</p>
                </div>
                <div className="flex justify-between text-sm text-gray-600 border-t border-gray-100 pt-3">
                  <p>{property.bedrooms} Beds</p>
                  <p>{property.bathrooms} Baths</p>
                  <p>{property.area} sqft</p>
                </div>
                <Link to={`/property/${property.id}`}>
                  <Button className="w-full mt-4 bg-acremart-400 hover:bg-acremart-500">
                    View Details
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/properties">
            <Button variant="outline" className="border-acremart-400 text-acremart-500 hover:bg-acremart-50">
              View All Properties
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedListings;
