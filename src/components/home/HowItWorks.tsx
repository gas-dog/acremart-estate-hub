
import { Check } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: 1,
      title: "Search Properties",
      description: "Browse our extensive collection of properties across the country with advanced filters.",
      color: "bg-blue-500"
    },
    {
      number: 2,
      title: "Make an Offer or Bid",
      description: "Place a bid on your desired property or make a direct offer to the seller.",
      color: "bg-green-500"
    },
    {
      number: 3,
      title: "Secure Payment",
      description: "Complete the transaction securely through our platform with multiple payment options.",
      color: "bg-purple-500"
    },
    {
      number: 4,
      title: "Close the Deal",
      description: "Finalize the purchase with our assistance in documentation and legal requirements.",
      color: "bg-orange-500"
    }
  ];

  const benefits = [
    "Transparent pricing with no hidden fees",
    "Verified property listings with detailed information",
    "Secure bidding system with anti-fraud protection",
    "Direct communication with property sellers",
    "Professional support throughout the buying process",
    "Automated document generation for legal compliance"
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How AcreMart Works</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We've simplified the real estate process into a few easy steps
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {steps.map((step) => (
            <div key={step.number} className="bg-white rounded-lg shadow-md p-6 relative overflow-hidden">
              <div className={`${step.color} h-2 absolute top-0 inset-x-0`}></div>
              <div className={`${step.color} h-12 w-12 rounded-full flex items-center justify-center text-white font-bold text-xl mb-4`}>
                {step.number}
              </div>
              <h3 className="font-bold text-xl mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>

        {/* Benefits */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Why Choose AcreMart?</h3>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-3 mt-1">
                      <div className="bg-acremart-400 h-5 w-5 rounded-full flex items-center justify-center">
                        <Check className="h-3 w-3 text-white" />
                      </div>
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-100 rounded-lg p-6 flex flex-col justify-center">
              <div className="text-center">
                <h4 className="text-xl font-bold mb-4 text-gray-800">Ready to get started?</h4>
                <p className="text-gray-600 mb-6">Join thousands of satisfied customers who have found their perfect property through AcreMart.</p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a href="/register" className="btn-primary">
                    Create Account
                  </a>
                  <a href="/properties" className="btn-secondary">
                    Browse Properties
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
