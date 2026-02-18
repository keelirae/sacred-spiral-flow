import { useNavigate } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dumbbell } from "lucide-react";
import { useState, useEffect } from "react";

export default function Login() {
  const navigate = useNavigate();
  const [tier, setTier] = useState<string>(() => localStorage.getItem("spiral:tier") || "physical");

  useEffect(() => {
    localStorage.setItem("spiral:tier", tier);
  }, [tier]);

  const handleEnterDashboard = () => {
    // tier persisted in localStorage for demo usage by frontend
    navigate("/app");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
              <Dumbbell className="w-6 h-6 text-white" />
            </div>
          </div>
          <CardTitle className="text-2xl font-bold">Welcome to Spiral Root</CardTitle>
          <p className="text-gray-600">Sacred Spiral dashboard — demo mode</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Choose a tier</label>
              <div className="flex gap-2">
                <Button variant={tier === "physical" ? "default" : "ghost"} onClick={() => setTier("physical")}>
                  Physical
                </Button>
                <Button variant={tier === "mental" ? "default" : "ghost"} onClick={() => setTier("mental")}>
                  Mental
                </Button>
                <Button variant={tier === "spiritual" ? "default" : "ghost"} onClick={() => setTier("spiritual")}>
                  Spiritual
                </Button>
              </div>
            </div>

            <Button onClick={handleEnterDashboard} className="w-full hubfit-primary">
              Enter Dashboard
            </Button>

            <p className="text-xs text-gray-500 text-center mt-2">Demo mode - tier saved locally for the session</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
