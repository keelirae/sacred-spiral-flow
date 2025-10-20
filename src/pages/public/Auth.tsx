import React from 'react';
import Header from '@/components/public/Header';
import Footer from '@/components/public/Footer';
import Seo from '@/components/Seo';
import AuthPage from '@/components/auth/AuthPage';

export default function Auth() {
  return (
    <div>
      <Seo title="Sign in or Create Account" description="Access your Sacred Spiral portal or create a new account." />
      <Header />
      <main id="main">
        <AuthPage />
      </main>
      <Footer />
    </div>
  );
}
