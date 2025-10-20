import React from 'react';
import Header from '@/components/public/Header';
import Seo from '@/components/Seo';
import Footer from '@/components/public/Footer';
import Section from '@/components/public/Section';
import Button from '@/components/public/Button';

export default function Initiates() {
  return (
    <div>
      <Seo title="For Initiates" description="Private portal for current students — coming soon." />
      <Header />
      <main>
        <Section title="For Initiates">
          <div className="space-y-4 max-w-2xl">
            <p className="text-muted-foreground">Private portal for current students — coming soon.</p>
            <div className="flex gap-4">
              <Button as="a" href="/">Back to Home</Button>
              <Button as="a" href="/contact" variant="secondary">Contact Me</Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
