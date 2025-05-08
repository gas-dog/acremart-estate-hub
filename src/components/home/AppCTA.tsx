
import { Button } from '@/components/ui/button';

const AppCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-acremart-600 to-acremart-400 text-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* App Screenshots/Mockups */}
          <div className="relative hidden md:block">
            <div className="relative mx-auto w-64 h-[500px] rounded-[36px] border-4 border-gray-800 shadow-2xl">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-40 h-5 bg-gray-800 rounded-b-xl"></div>
              <div className="absolute inset-0 rounded-[32px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&auto=format&fit=crop" 
                  alt="AcreMart Mobile App" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            {/* Second phone (angled and behind) */}
            <div className="absolute top-24 -left-12 w-64 h-[400px] rounded-[36px] border-4 border-gray-800 shadow-xl transform -rotate-12 z-[-1]">
              <div className="absolute inset-0 rounded-[32px] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1485958449943-2429e8be8625?w=400&auto=format&fit=crop" 
                  alt="AcreMart Mobile App" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Take AcreMart On The Go</h2>
            <p className="text-white/90 text-lg mb-8">
              Download our mobile app to browse properties, receive real-time notifications, and manage your listings from anywhere, anytime.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-2 rounded-full mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Real-time Notifications</h3>
                  <p className="text-white/80">Instant alerts for new listings, price changes, and bids on your properties.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-2 rounded-full mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Location-based Search</h3>
                  <p className="text-white/80">Find properties near you with GPS integration and map view.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-white/20 p-2 rounded-full mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"></path>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-lg">Secure Payments</h3>
                  <p className="text-white/80">Make deposits and complete transactions safely from your mobile device.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-black hover:bg-gray-900 flex items-center justify-center text-white px-6 py-3 rounded-lg">
                <svg className="w-7 h-7 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.5214 11.7471C17.5151 9.58747 19.2512 8.2851 19.334 8.23271C18.2482 6.6863 16.5462 6.48594 15.9536 6.47358C14.4984 6.31611 13.0894 7.3407 12.3491 7.3407C11.5922 7.3407 10.4324 6.48594 9.20138 6.51066C7.61538 6.53539 6.14451 7.4407 5.33921 8.8454C3.67368 11.7099 4.91232 15.9495 6.51068 18.0729C7.31598 19.1111 8.24835 20.2851 9.4547 20.236C10.6364 20.1869 11.0942 19.4724 12.5123 19.4724C13.9138 19.4724 14.3468 20.236 15.5779 20.2113C16.8413 20.1869 17.6466 19.1358 18.4271 18.0852C19.3427 16.8741 19.7093 15.6877 19.7262 15.6259C19.6931 15.613 17.5297 14.7954 17.5214 11.7471"></path>
                  <path d="M15.5284 4.15336C16.1958 3.32171 16.6454 2.17418 16.5294 1C15.5368 1.04009 14.3218 1.6602 13.6297 2.47648C13.0202 3.18713 12.4769 4.37104 12.6095 5.50319C13.729 5.58336 14.8365 4.97219 15.5284 4.15336V4.15336Z"></path>
                </svg>
                <div className="text-left">
                  <div className="text-xs">Download on the</div>
                  <div className="text-xl font-semibold font-sans">App Store</div>
                </div>
              </Button>
              
              <Button className="bg-black hover:bg-gray-900 flex items-center justify-center text-white px-6 py-3 rounded-lg">
                <svg className="w-7 h-7 mr-3" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3.60598 2.2954C3.44463 2.48698 3.33426 2.7579 3.33426 3.10686C3.33426 3.47777 3.42111 3.82673 3.60598 4.12025V19.8797C3.42111 20.1733 3.33426 20.5223 3.33426 20.8932C3.33426 21.2421 3.46814 21.513 3.60598 21.7046L3.65301 21.7515L14.0178 11.9639V11.964V11.9171L3.67652 2.2485L3.60598 2.2954Z"></path>
                  <path d="M17.998 15.8283L14.0178 13.2958V11.9639V11.964V11.9171L17.998 9.38462L18.0216 9.4081L22.8455 12.0814C24.1823 12.8475 24.1823 14.0667 22.8455 14.8562L18.0216 17.5062L17.998 15.8283Z"></path>
                  <path d="M18.022 17.5062L14.0418 14.9737L3.60644 21.7046C4.01525 22.1243 4.6538 22.171 5.32645 21.7748C5.32645 21.7748 5.32645 21.7748 5.32645 21.7748L18.022 17.5062Z"></path>
                  <path d="M3.60644 2.2954C4.01525 1.87567 4.6538 1.92894 5.32645 2.32518L5.32645 2.32518L18.022 6.59383L14.0418 9.12631L3.60644 2.2954Z"></path>
                </svg>
                <div className="text-left">
                  <div className="text-xs">GET IT ON</div>
                  <div className="text-xl font-semibold font-sans">Google Play</div>
                </div>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppCTA;
