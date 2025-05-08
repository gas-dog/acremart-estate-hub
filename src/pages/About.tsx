
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container-custom py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About AcreMart</h1>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700">
                AcreMart is a leading real estate marketplace dedicated to empowering consumers with data, 
                inspiration and knowledge around the place they call home, and connecting them with the 
                best local professionals who can help.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Our Mission</h2>
              <p className="text-gray-700">
                Our mission is to build the most trusted and transparent real estate marketplace, 
                providing consumers with the information and tools they need to make informed decisions 
                about buying, selling, financing and renting properties.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Why Choose AcreMart</h2>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-acremart-600">For Buyers</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Access to exclusive property listings</li>
                    <li>Advanced search filters to find your dream property</li>
                    <li>Transparent pricing and property history</li>
                    <li>Secure bidding system</li>
                    <li>Expert guidance throughout the buying process</li>
                  </ul>
                </div>
                
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-3 text-acremart-600">For Sellers</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>Wider reach to potential buyers</li>
                    <li>Tools to showcase your property effectively</li>
                    <li>Market insights to price your property right</li>
                    <li>Simplified selling process</li>
                    <li>Lower fees compared to traditional agencies</li>
                  </ul>
                </div>
              </div>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Our Team</h2>
              <p className="text-gray-700">
                Our team consists of real estate experts, technology professionals, and customer 
                service specialists dedicated to making your property journey as smooth as possible.
              </p>
              
              <h2 className="text-2xl font-semibold mt-8 mb-4">Contact Us</h2>
              <p className="text-gray-700">
                Have questions or feedback? We'd love to hear from you. Please visit our 
                <a href="/contact" className="text-acremart-500 hover:text-acremart-600"> contact page</a> to 
                get in touch with our team.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;
