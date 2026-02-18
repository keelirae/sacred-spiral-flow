import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "@/hooks/useAuth";
import Home from "./pages/public/Home";
import PhysicalRealm from "./pages/public/PhysicalRealm";
import MentalRealm from "./pages/public/MentalRealm";
import SpiritualRealm from "./pages/public/SpiritualRealm";
import Journey from "./pages/public/Journey";
import Contact from "./pages/public/Contact";
// Auth removed from public site per spec
import Auth from "./pages/public/Auth";
import Initiates from "./pages/public/Initiates";
import About from "@/pages/public/About";
import Privacy from "./pages/public/Privacy";
import NotFound from "./pages/NotFound";

// Dashboard imports
import Dashboard from "@/pages/Dashboard";
import Login from "@/pages/Login";
import CheckIns from "@/pages/CheckIns";
import Forms from "@/pages/Forms";
import Messages from "@/pages/Messages";
import Nutrition from "@/pages/Nutrition";
import Packages from "@/pages/Packages";
import Tasks from "@/pages/Tasks";
import Training from "@/pages/Training";

const queryClient = new QueryClient();

// Auth-gated dashboard wrapper
function DashboardApp() {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Login />;
  }

  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="checkins" element={<CheckIns />} />
      <Route path="forms" element={<Forms />} />
      <Route path="messages" element={<Messages />} />
      <Route path="nutrition" element={<Nutrition />} />
      <Route path="packages" element={<Packages />} />
      <Route path="tasks" element={<Tasks />} />
      <Route path="training" element={<Training />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

const App = () => (
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <Routes>
            {/* Public site */}
            <Route path="/" element={<Home />} />
            <Route path="/physical-realm" element={<PhysicalRealm />} />
            <Route path="/mental-realm" element={<MentalRealm />} />
            <Route path="/spiritual-realm" element={<SpiritualRealm />} />
            <Route path="/journey" element={<Journey />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/initiates" element={<Initiates />} />
            <Route path="/privacy" element={<Privacy />} />
            
            {/* Dashboard routes at /app - now running on same server */}
            <Route path="/app/*" element={<DashboardApp />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  </BrowserRouter>
);

export default App;
