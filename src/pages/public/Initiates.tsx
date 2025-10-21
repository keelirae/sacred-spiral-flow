import React from 'react';
import Header from '@/components/public/Header';
import Seo from '@/components/Seo';
import Footer from '@/components/public/Footer';
import Section from '@/components/public/Section';
import Button from '@/components/public/Button';

export default function Initiates() {
  return (
    <div className="min-h-screen flex flex-col">
      <Seo title="For Initiates" description="Private portal for current students — coming soon." />
      <Header />
  <main id="main" className="flex-1">
        <Section title="For Initiates">
          <div className="space-y-6 max-w-2xl mx-auto text-center">
            <p className="text-muted-foreground">Private Portal — Coming Soon.</p>
            <div className="flex justify-center gap-3">
              <Button as="a" href="/">Back to Home</Button>
              <Button as="a" href="/auth?tab=signin&next=/app" variant="secondary">Sign In / Sign Up</Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
