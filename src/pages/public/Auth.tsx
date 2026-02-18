import React, { useState } from 'react';
import Header from '@/components/public/Header';
import Seo from '@/components/Seo';
import Footer from '@/components/public/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dumbbell } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Auth() {
  const navigate = useNavigate();
  const [tier, setTier] = useState<string>('physical');

  const handleEnterDashboard = () => {
    localStorage.setItem("spiral:tier", tier);
    navigate("/app");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Seo title="Sign In — Sacred Spiral" description="Access your Sacred Spiral account or create a new one." />
      <Header />
      <main id="main" className="flex-1 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <Card className="w-full max-w-md">
          <CardHeader className="text-center">
            <div className="flex justify-center mb-4">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <Dumbbell className="w-6 h-6 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl font-bold">Welcome to Spiral Root</CardTitle>
            <p className="text-gray-600 text-sm mt-2">Sacred Spiral dashboard — demo mode</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Choose a tier</label>
                <div className="flex gap-2">
                  <Button 
                    variant={tier === "physical" ? "default" : "outline"}
                    onClick={() => setTier("physical")}
                    className="flex-1"
                  >
                    Physical
                  </Button>
                  <Button 
                    variant={tier === "mental" ? "default" : "outline"}
                    onClick={() => setTier("mental")}
                    className="flex-1"
                  >
                    Mental
                  </Button>
                  <Button 
                    variant={tier === "spiritual" ? "default" : "outline"}
                    onClick={() => setTier("spiritual")}
                    className="flex-1"
                  >
                    Spiritual
                  </Button>
                </div>
              </div>

              <Button 
                onClick={handleEnterDashboard}
                className="w-full bg-primary hover:bg-primary/90"
              >
                Enter Dashboard
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
