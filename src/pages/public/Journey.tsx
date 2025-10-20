import React from 'react';
import Header from '@/components/public/Header';
import Seo from '@/components/Seo';
import Footer from '@/components/public/Footer';
import PageHero from '@/components/public/PageHero';
import Section from '@/components/public/Section';
import Button from '@/components/public/Button';

export default function Journey() {
  return (
    <div>
      <Seo title="Journey Through the Sacred Spiral" description="A 12-month cyclical path of growth, integration, and remembrance." />
      <Header />
      <main>
        <PageHero title="Journey Through the Sacred Spiral" subtitle="A 12-month cyclical path of growth, integration, and remembrance." />
        <Section title="Timeline">
          <div className="space-y-2">
            <p>Three months per realm with one-month integration in between.</p>
            <ul className="list-disc ml-6 text-muted-foreground">
              <li>Physical (3mo) → Integration (1mo)</li>
              <li>Mental (3mo) → Integration (1mo)</li>
              <li>Spiritual (3mo) → Integration (1mo)</li>
            </ul>
          </div>
        </Section>
        <Section title="What You Receive">
          <ul className="list-disc ml-6 text-muted-foreground space-y-1">
            <li>Guidance and structure</li>
            <li>Seasonal rhythm</li>
            <li>Community touchpoints</li>
          </ul>
        </Section>
        <Section>
          <div className="flex gap-4">
            <Button as="a" href="/physical-realm">Begin in the Physical Realm</Button>
            <Button as="a" href="/contact" variant="secondary">Contact Me</Button>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
