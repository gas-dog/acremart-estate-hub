
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, Home, Building, MapPin } from 'lucide-react';

// Mock data for properties
const mockProperties = [
  {
    id: 1,
    title: "Modern Apartment with Ocean View",
    price: 350000,
    location: "Miami, FL",
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    type: "apartment",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Luxury Family Home",
    price: 750000,
    location: "Austin, TX",
    bedrooms: 4,
    bathrooms: 3,
    area: 2800,
    type: "house",
    image: "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Waterfront Property",
    price: 1200000,
    location: "Seattle, WA",
    bedrooms: 5,
    bathrooms: 4,
    area: 3500,
    type: "house",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "Downtown Loft",
    price: 420000,
    location: "Chicago, IL",
    bedrooms: 1,
    bathrooms: 1,
    area: 950,
    type: "apartment",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Historic Townhouse",
    price: 550000,
    location: "Boston, MA",
    bedrooms: 3,
    bathrooms: 2.5,
    area: 1800,
    type: "townhouse",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Ranch with Mountain View",
    price: 890000,
    location: "Denver, CO",
    bedrooms: 4,
    bathrooms: 3,
    area: 3200,
    type: "house",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop"
  }
];

// Mock data for properties to sell
const mockSellProperties = [
  {
    id: 101,
    title: "Your Beachfront Condo",
    status: "Active",
    listedDate: "2023-05-10",
    views: 245,
    inquiries: 8,
    price: 420000,
    image: "https://images.unsplash.com/photo-1560185007-cde436f6a4d0?w=800&auto=format&fit=crop"
  },
  {
    id: 102,
    title: "Mountain Cabin Retreat",
    status: "Pending",
    listedDate: "2023-04-15",
    views: 189,
    inquiries: 5,
    price: 350000,
    image: "https://images.unsplash.com/photo-1542718610-a1d656d1884c?w=800&auto=format&fit=crop"
  }
];

const Properties = () => {
  const [activeTab, setActiveTab] = useState("buy");
  const [propertyType, setPropertyType] = useState<string>("all");
  const [priceRange, setPriceRange] = useState<string>("all");

  const filteredProperties = mockProperties.filter(property => {
    if (propertyType !== "all" && property.type !== propertyType) {
      return false;
    }
    
    if (priceRange === "0-500000" && property.price > 500000) {
      return false;
    } else if (priceRange === "500000-1000000" && (property.price < 500000 || property.price > 1000000)) {
      return false;
    } else if (priceRange === "1000000+" && property.price < 1000000) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="bg-gradient-to-r from-acremart-400/10 to-acremart-500/5 py-8">
          <div className="container-custom">
            <h1 className="text-3xl font-bold mb-2">Real Estate Properties</h1>
            <p className="text-gray-600">Discover your perfect property with AcreMart</p>
          </div>
        </div>

        <div className="container-custom py-8">
          <Tabs defaultValue="buy" onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full md:w-[400px] grid-cols-2 mb-8">
              <TabsTrigger value="buy">Buy Properties</TabsTrigger>
              <TabsTrigger value="sell">Sell Properties</TabsTrigger>
            </TabsList>
            
            <TabsContent value="buy" className="space-y-8">
              {/* Search Filters */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Find Your Dream Property</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <div className="relative">
                      <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                      <Input 
                        type="text" 
                        placeholder="City, State, or ZIP" 
                        className="pl-10"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Property Type
                    </label>
                    <select 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-acremart-400 text-gray-700"
                      value={propertyType}
                      onChange={(e) => setPropertyType(e.target.value)}
                    >
                      <option value="all">All Types</option>
                      <option value="house">Houses</option>
                      <option value="apartment">Apartments</option>
                      <option value="townhouse">Townhouses</option>
                      <option value="land">Land</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Price Range
                    </label>
                    <select 
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-acremart-400 text-gray-700"
                      value={priceRange}
                      onChange={(e) => setPriceRange(e.target.value)}
                    >
                      <option value="all">Any Price</option>
                      <option value="0-500000">Under $500,000</option>
                      <option value="500000-1000000">$500,000 - $1,000,000</option>
                      <option value="1000000+">$1,000,000+</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      &nbsp;
                    </label>
                    <Button className="w-full bg-acremart-400 hover:bg-acremart-500">
                      <Search className="mr-2 h-4 w-4" /> Search Properties
                    </Button>
                  </div>
                </div>
              </div>
              
              {/* Property Listings */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Properties for Sale</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProperties.map((property) => (
                    <Link to={`/property/${property.id}`} key={property.id}>
                      <Card className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="relative h-48 overflow-hidden">
                          <img 
                            src={property.image} 
                            alt={property.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute bottom-0 left-0 bg-acremart-400 text-white px-3 py-1">
                            ${property.price.toLocaleString()}
                          </div>
                        </div>
                        <CardContent className="pt-4">
                          <h3 className="text-lg font-semibold line-clamp-1">{property.title}</h3>
                          <p className="text-gray-500 flex items-center gap-1 mt-1">
                            <MapPin className="h-4 w-4" /> {property.location}
                          </p>
                          <div className="flex justify-between mt-3 text-sm text-gray-600">
                            <span>{property.bedrooms} Beds</span>
                            <span>{property.bathrooms} Baths</span>
                            <span>{property.area} sqft</span>
                          </div>
                        </CardContent>
                        <CardFooter className="border-t pt-4">
                          <Button variant="outline" className="w-full hover:bg-acremart-50 hover:text-acremart-500 border-acremart-300">
                            View Details
                          </Button>
                        </CardFooter>
                      </Card>
                    </Link>
                  ))}
                </div>
                
                {filteredProperties.length === 0 && (
                  <div className="text-center py-12 bg-gray-50 rounded-lg">
                    <h3 className="text-xl font-medium text-gray-600">No properties match your search criteria</h3>
                    <p className="mt-2 text-gray-500">Try adjusting your filters to see more results.</p>
                  </div>
                )}
              </div>
            </TabsContent>
            
            <TabsContent value="sell" className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Sell Your Property</h2>
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-center">
                  <div className="lg:col-span-3">
                    <p className="text-gray-700 mb-4">
                      List your property on AcreMart and connect with thousands of potential buyers. Our platform offers 
                      professional listing services, virtual tours, and dedicated support to help you sell faster.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      <div className="text-center p-4 border rounded-lg border-acremart-100 bg-acremart-50">
                        <div className="text-acremart-500 font-bold text-2xl">10M+</div>
                        <div className="text-sm text-gray-600">Monthly Visitors</div>
                      </div>
                      <div className="text-center p-4 border rounded-lg border-acremart-100 bg-acremart-50">
                        <div className="text-acremart-500 font-bold text-2xl">30K+</div>
                        <div className="text-sm text-gray-600">Successful Sales</div>
                      </div>
                      <div className="text-center p-4 border rounded-lg border-acremart-100 bg-acremart-50">
                        <div className="text-acremart-500 font-bold text-2xl">4.8/5</div>
                        <div className="text-sm text-gray-600">Seller Satisfaction</div>
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-span-2 flex justify-center">
                    <Button className="bg-acremart-500 hover:bg-acremart-600 py-6 text-lg">
                      List Your Property
                    </Button>
                  </div>
                </div>
              </div>
              
              {mockSellProperties.length > 0 ? (
                <>
                  <h2 className="text-2xl font-bold mb-6">Your Listed Properties</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {mockSellProperties.map((property) => (
                      <Card key={property.id} className="overflow-hidden">
                        <div className="flex flex-col md:flex-row">
                          <div className="md:w-1/3 h-full">
                            <img 
                              src={property.image} 
                              alt={property.title}
                              className="w-full h-48 md:h-full object-cover"
                            />
                          </div>
                          <div className="md:w-2/3 p-5">
                            <h3 className="text-lg font-semibold">{property.title}</h3>
                            <div className="flex flex-wrap gap-3 mt-2">
                              <span className={`px-2 py-1 text-xs rounded-full ${
                                property.status === 'Active' ? 'bg-green-100 text-green-800' : 
                                property.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 
                                'bg-gray-100 text-gray-800'
                              }`}>
                                {property.status}
                              </span>
                              <span className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-800">
                                Listed: {property.listedDate}
                              </span>
                            </div>
                            <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                              <div>
                                <p className="text-gray-500">Price</p>
                                <p className="font-semibold">${property.price.toLocaleString()}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Views</p>
                                <p className="font-semibold">{property.views}</p>
                              </div>
                              <div>
                                <p className="text-gray-500">Inquiries</p>
                                <p className="font-semibold">{property.inquiries}</p>
                              </div>
                            </div>
                            <div className="mt-4 flex gap-2">
                              <Button variant="outline" size="sm">Edit Listing</Button>
                              <Button variant="outline" size="sm" className="border-acremart-300 text-acremart-500">
                                View Offers
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </>
              ) : (
                <div className="text-center py-12 bg-gray-50 rounded-lg">
                  <h3 className="text-xl font-medium text-gray-600">You don't have any listed properties</h3>
                  <p className="mt-2 text-gray-500">Start selling by listing your first property today.</p>
                  <Button className="bg-acremart-400 hover:bg-acremart-500 mt-4">
                    List Your First Property
                  </Button>
                </div>
              )}
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Properties;
