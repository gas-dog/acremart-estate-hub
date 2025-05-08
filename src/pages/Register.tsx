
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AuthForm from '@/components/auth/AuthForm';

const Register = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="container-custom py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <AuthForm mode="register" />
            </div>
            <div className="hidden lg:block">
              <div className="relative rounded-lg overflow-hidden h-[600px]">
                <img 
                  src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&auto=format&fit=crop" 
                  alt="Register" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-acremart-700/50 to-acremart-400/30 flex items-center justify-center">
                  <div className="text-white max-w-md px-8">
                    <h2 className="text-3xl font-bold mb-4">Join Our Community</h2>
                    <p className="text-white/90">
                      Create an account to start your real estate journey with AcreMart. Buy, sell, or invest in properties with confidence.
                    </p>
                    <div className="mt-6 space-y-4">
                      <div className="flex items-center">
                        <div className="bg-white/20 p-2 rounded-full">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                          </svg>
                        </div>
                        <span className="ml-3">Access to exclusive property listings</span>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-white/20 p-2 rounded-full">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                          </svg>
                        </div>
                        <span className="ml-3">Secure bidding and payment system</span>
                      </div>
                      <div className="flex items-center">
                        <div className="bg-white/20 p-2 rounded-full">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                          </svg>
                        </div>
                        <span className="ml-3">Personalized property recommendations</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Register;
