
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { Check, User, Home } from 'lucide-react';

type UserRole = 'buyer' | 'seller' | null;

interface AuthFormProps {
  mode: 'login' | 'register';
}

const AuthForm = ({ mode }: AuthFormProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [selectedRole, setSelectedRole] = useState<UserRole>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // In a real app, this would make an API call to your backend
      if (mode === 'register') {
        if (password !== confirmPassword) {
          toast({
            title: "Passwords don't match",
            description: "Please make sure your passwords match.",
            variant: "destructive",
          });
          setIsLoading(false);
          return;
        }

        if (!selectedRole && mode === 'register') {
          toast({
            title: "Role required",
            description: "Please select your role - buyer or seller.",
            variant: "destructive",
          });
          setIsLoading(false);
          return;
        }

        // Simulate registration API call
        console.log('Registering user:', { email, password, name, role: selectedRole });
        
        toast({
          title: "Registration successful!",
          description: "You have been registered. Please check your email to verify your account.",
        });
      } else {
        // Simulate login API call
        console.log('Logging in user:', { email, password });
        
        toast({
          title: "Login successful!",
          description: "Welcome back to AcreMart!",
        });
      }
      
      // In a real app, redirect to dashboard after auth
      setTimeout(() => {
        navigate('/');
      }, 1500);
    } catch (error) {
      console.error('Auth error:', error);
      toast({
        title: "Authentication failed",
        description: "There was an error processing your request.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md w-full mx-auto">
      <Card className="shadow-md border-gray-200">
        <CardHeader className="text-center">
          <div className="mb-4 flex justify-center">
            <div className="h-12 w-12 bg-acremart-400 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xl">A</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold">
            {mode === 'login' ? 'Sign In to AcreMart' : 'Create an Account'}
          </h2>
          <p className="text-gray-500 text-sm">
            {mode === 'login' 
              ? 'Enter your details to access your account' 
              : 'Join AcreMart to start buying or selling properties'}
          </p>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'register' && (
              <>
                <div className="mb-6">
                  <p className="text-sm font-medium text-gray-700 mb-3">I want to:</p>
                  <div className="grid grid-cols-2 gap-4">
                    <div
                      className={`border rounded-md p-4 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all ${
                        selectedRole === 'buyer'
                          ? 'border-acremart-500 bg-acremart-50 ring-2 ring-acremart-200'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedRole('buyer')}
                    >
                      <div className={`rounded-full p-3 ${selectedRole === 'buyer' ? 'bg-acremart-100 text-acremart-600' : 'bg-gray-100'}`}>
                        <User className="h-6 w-6" />
                      </div>
                      <span className="font-medium text-center">Buy Properties</span>
                      {selectedRole === 'buyer' && (
                        <div className="absolute top-2 right-2 rounded-full bg-acremart-500 p-1">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                      )}
                    </div>
                    <div
                      className={`border rounded-md p-4 flex flex-col items-center justify-center gap-3 cursor-pointer relative transition-all ${
                        selectedRole === 'seller'
                          ? 'border-acremart-500 bg-acremart-50 ring-2 ring-acremart-200'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                      onClick={() => setSelectedRole('seller')}
                    >
                      <div className={`rounded-full p-3 ${selectedRole === 'seller' ? 'bg-acremart-100 text-acremart-600' : 'bg-gray-100'}`}>
                        <Home className="h-6 w-6" />
                      </div>
                      <span className="font-medium text-center">Sell Properties</span>
                      {selectedRole === 'seller' && (
                        <div className="absolute top-2 right-2 rounded-full bg-acremart-500 p-1">
                          <Check className="h-3 w-3 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              </>
            )}
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <Input
                id="email"
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                minLength={8}
              />
            </div>
            
            {mode === 'register' && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <Input
                  id="confirmPassword"
                  type="password"
                  placeholder="••••••••"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  minLength={8}
                />
              </div>
            )}
            
            <Button 
              type="submit" 
              className="w-full bg-acremart-400 hover:bg-acremart-500 mt-6"
              disabled={isLoading}
            >
              {isLoading ? (
                <span className="flex items-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </span>
              ) : (
                mode === 'login' ? 'Sign In' : 'Create Account'
              )}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center border-t pt-4">
          <p className="text-sm text-gray-600">
            {mode === 'login' ? (
              <>
                Don't have an account?{' '}
                <Link to="/register" className="text-acremart-500 font-medium hover:underline">
                  Create one
                </Link>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <Link to="/login" className="text-acremart-500 font-medium hover:underline">
                  Sign in
                </Link>
              </>
            )}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default AuthForm;
