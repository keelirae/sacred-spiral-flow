import React from 'react';
import Header from '@/components/public/Header';
import Seo from '@/components/Seo';
import Footer from '@/components/public/Footer';
import AuthPage from '@/components/auth/AuthPage';

export default function Auth() {
  return (
    <div className="min-h-screen flex flex-col">
      <Seo title="Sign In — Sacred Spiral" description="Access your Sacred Spiral account or create a new one." />
      <Header />
      <main id="main" className="flex-1">
        <AuthPage />
      </main>
      <Footer />
    </div>
  );
}
