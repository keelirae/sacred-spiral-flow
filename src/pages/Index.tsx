import { useState } from "react";
import MainLayout from "@/components/layout/MainLayout";
import AuthPage from "@/components/auth/AuthPage";

const Index = () => {
  // TODO: Replace with actual Supabase auth state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  if (!isAuthenticated) {
    return <AuthPage />;
  }

  return <MainLayout />;
};

export default Index;
