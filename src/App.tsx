import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/hooks/useAuth";
import Index from "./pages/Index";
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

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
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

            {/* Existing auth-gated app lives at /app */}
            <Route path="/app" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
