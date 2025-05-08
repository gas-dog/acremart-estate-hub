
import { useState } from 'react';
import { Card } from '@/components/ui/card';

// Mock testimonial data
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "First-time Homebuyer",
    quote: "AcreMart made my first home purchase so easy! The bidding system was transparent and I felt confident throughout the entire process.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Michael Rodriguez",
    role: "Property Investor",
    quote: "As an investor, I need a platform that's efficient and reliable. AcreMart has helped me add several properties to my portfolio with minimal hassle.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Jennifer Williams",
    role: "Real Estate Agent",
    quote: "The tools AcreMart provides for sellers are unmatched. My clients love the detailed analytics and the speed at which we can close deals.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Property Seller",
    quote: "I was able to sell my house for above asking price thanks to AcreMart's bidding system. The process was seamless from listing to closing.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-16 bg-acremart-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Users Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from our satisfied customers about their experience with AcreMart
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.id} 
              className="p-6 border border-gray-200 hover:border-acremart-400 transition-colors"
            >
              <div className="mb-4 flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
              <blockquote className="text-gray-700 italic">
                "{testimonial.quote}"
              </blockquote>
              <div className="mt-4 flex">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-500 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                ))}
              </div>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 italic">
            "AcreMart has transformed how we buy and sell properties. Join our growing community today!"
          </p>
          <div className="mt-6">
            <a href="/register" className="btn-primary">
              Join AcreMart Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
