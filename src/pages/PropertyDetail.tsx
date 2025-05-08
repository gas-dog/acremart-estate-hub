
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Home, ArrowRight, Building } from 'lucide-react';

// Mock data for property details
const getMockPropertyById = (id: string | number) => {
  const mockProperties = [
    {
      id: 1,
      title: "Modern Apartment with Ocean View",
      price: 350000,
      location: "Miami, FL",
      address: "1234 Ocean Drive, Miami, FL 33139",
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
      type: "apartment",
      yearBuilt: 2015,
      description: "This stunning apartment offers breathtaking ocean views from every room. Features include a spacious open floor plan, luxury finishes, and a private balcony perfect for enjoying sunsets. The building provides resort-style amenities including a pool, fitness center, and 24-hour security.",
      features: ["Central AC", "In-unit Laundry", "Walk-in Closet", "Stainless Steel Appliances", "Hardwood Floors", "Gym", "Swimming Pool", "Parking Garage"],
      images: [
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1501183638710-841dd1904471?w=800&auto=format&fit=crop"
      ],
      seller: {
        name: "Jane Smith",
        phone: "(305) 555-1234",
        email: "jane@example.com",
        image: "https://randomuser.me/api/portraits/women/44.jpg"
      }
    },
    {
      id: 2,
      title: "Luxury Family Home",
      price: 750000,
      location: "Austin, TX",
      address: "5678 Highland Dr, Austin, TX 78731",
      bedrooms: 4,
      bathrooms: 3,
      area: 2800,
      type: "house",
      yearBuilt: 2010,
      description: "Beautiful family home in a sought-after neighborhood. This home features an open concept kitchen and living area, a spacious primary suite, and a large backyard perfect for entertaining. Located near top-rated schools, parks, and shopping centers.",
      features: ["Open Floor Plan", "Gourmet Kitchen", "Master Suite", "Backyard", "Attached Garage", "Fireplace", "Energy Efficient", "Smart Home Features"],
      images: [
        "https://images.unsplash.com/photo-1583608205776-bfd35f0d9f83?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1502005229762-cf1b2da7c5d6?w=800&auto=format&fit=crop"
      ],
      seller: {
        name: "Robert Johnson",
        phone: "(512) 555-6789",
        email: "robert@example.com",
        image: "https://randomuser.me/api/portraits/men/32.jpg"
      }
    },
    {
      id: 3,
      title: "Waterfront Property",
      price: 1200000,
      location: "Seattle, WA",
      address: "9012 Lakeside Ave, Seattle, WA 98101",
      bedrooms: 5,
      bathrooms: 4,
      area: 3500,
      type: "house",
      yearBuilt: 2005,
      description: "Exquisite waterfront property with stunning views and private beach access. This luxurious home features high-end finishes throughout, including marble countertops, custom cabinetry, and hardwood floors. Enjoy outdoor living on the expansive deck with a hot tub overlooking the water.",
      features: ["Waterfront", "Private Beach", "Gourmet Kitchen", "Home Theater", "Wine Cellar", "3-Car Garage", "Smart Home System", "Outdoor Kitchen"],
      images: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1598228723793-52759bba239c?w=800&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1571055107559-3e67626fa8be?w=800&auto=format&fit=crop"
      ],
      seller: {
        name: "Michael Wilson",
        phone: "(206) 555-2468",
        email: "michael@example.com",
        image: "https://randomuser.me/api/portraits/men/67.jpg"
      }
    }
  ];

  const property = mockProperties.find(p => p.id === parseInt(id as string));
  return property;
};

const PropertyDetail = () => {
  const { id } = useParams();
  const property = getMockPropertyById(id!);
  const { toast } = useToast();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  if (!property) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold mb-4">Property Not Found</h2>
            <p className="mb-6">The property you're looking for doesn't exist or has been removed.</p>
            <Link to="/properties">
              <Button>Browse Properties</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const handleScheduleViewing = () => {
    toast({
      title: "Viewing Requested",
      description: "We'll contact you shortly to confirm your viewing appointment.",
    });
  };

  const handleMakeOffer = () => {
    toast({
      title: "Make an Offer",
      description: "You'll be redirected to our secure bidding system.",
    });
  };

  const handleContactSeller = () => {
    toast({
      description: "Your message has been sent to the seller.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Property Images */}
        <div className="bg-gray-100">
          <div className="container-custom py-6">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="lg:w-2/3">
                <div className="relative h-[400px] rounded-lg overflow-hidden">
                  <img 
                    src={property.images[activeImageIndex]} 
                    alt={property.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex gap-2 mt-2 overflow-x-auto pb-2">
                  {property.images.map((image, index) => (
                    <div 
                      key={index} 
                      className={`cursor-pointer h-20 w-24 rounded overflow-hidden border-2 ${
                        index === activeImageIndex ? 'border-acremart-400' : 'border-transparent'
                      }`}
                      onClick={() => setActiveImageIndex(index)}
                    >
                      <img 
                        src={image} 
                        alt={`View ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="lg:w-1/3">
                <Card>
                  <CardContent className="p-6">
                    <div className="text-2xl font-bold text-acremart-500">${property.price.toLocaleString()}</div>
                    <h1 className="text-xl font-semibold mt-2">{property.title}</h1>
                    <p className="flex items-center gap-1 text-gray-600 mt-2">
                      <MapPin className="h-4 w-4" /> {property.address}
                    </p>
                    
                    <div className="flex justify-between mt-4 text-sm">
                      <div className="text-center">
                        <div className="font-medium">{property.bedrooms}</div>
                        <div className="text-gray-500">Beds</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium">{property.bathrooms}</div>
                        <div className="text-gray-500">Baths</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium">{property.area}</div>
                        <div className="text-gray-500">Sq Ft</div>
                      </div>
                      <div className="text-center">
                        <div className="font-medium">{property.yearBuilt}</div>
                        <div className="text-gray-500">Year Built</div>
                      </div>
                    </div>
                    
                    <div className="mt-6 space-y-3">
                      <Button 
                        className="w-full bg-acremart-400 hover:bg-acremart-500"
                        onClick={handleScheduleViewing}
                      >
                        Schedule Viewing
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full border-acremart-300 text-acremart-500 hover:bg-acremart-50"
                        onClick={handleMakeOffer}
                      >
                        Make an Offer
                      </Button>
                    </div>
                    
                    <div className="mt-6 border-t pt-4">
                      <div className="flex items-center">
                        <div className="w-12 h-12 rounded-full overflow-hidden mr-3">
                          <img 
                            src={property.seller.image} 
                            alt={property.seller.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <div className="font-medium">{property.seller.name}</div>
                          <div className="text-sm text-gray-500">Property Agent</div>
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        className="w-full mt-3 text-sm"
                        onClick={handleContactSeller}
                      >
                        Contact Agent
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
        
        {/* Property Details */}
        <div className="container-custom py-8">
          <Tabs defaultValue="details">
            <TabsList>
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="features">Features</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="mt-6">
              <h2 className="text-xl font-semibold mb-4">Property Description</h2>
              <p className="text-gray-700 whitespace-pre-line">{property.description}</p>
              
              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Property Details</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center p-3 bg-gray-50 rounded">
                    <Home className="h-5 w-5 text-acremart-400 mr-2" />
                    <div>
                      <div className="text-sm text-gray-500">Property Type</div>
                      <div className="font-medium capitalize">{property.type}</div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded">
                    <Building className="h-5 w-5 text-acremart-400 mr-2" />
                    <div>
                      <div className="text-sm text-gray-500">Year Built</div>
                      <div className="font-medium">{property.yearBuilt}</div>
                    </div>
                  </div>
                  <div className="flex items-center p-3 bg-gray-50 rounded">
                    <MapPin className="h-5 w-5 text-acremart-400 mr-2" />
                    <div>
                      <div className="text-sm text-gray-500">Location</div>
                      <div className="font-medium">{property.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="features" className="mt-6">
              <h2 className="text-xl font-semibold mb-4">Property Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-4">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <ArrowRight className="h-4 w-4 text-acremart-400 mr-2" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PropertyDetail;
