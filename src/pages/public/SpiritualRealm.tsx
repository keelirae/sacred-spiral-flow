import React from 'react';
import Header from '@/components/public/Header';
import Seo from '@/components/Seo';
import Footer from '@/components/public/Footer';
import PageHero from '@/components/public/PageHero';
import Section from '@/components/public/Section';
import Button from '@/components/public/Button';
import SpiralDivider from '@/components/public/SpiralDivider';
import realmSpiritual from '@/assets/realm-spiritual.jpg';

export default function SpiritualRealm() {
  return (
    <div className="min-h-screen flex flex-col">
      <Seo title="The Spiritual Realm" description="Ceremony, ritual, meditation, and feminine embodiment." />
  <Header />
  <main id="main" className="flex-1">
  <PageHero 
    title="The Spiritual Realm" 
    subtitle="🕯️ Ceremony, ritual, meditation, and feminine embodiment."
    imageSrc={realmSpiritual}
    imageAlt="Woman in white dress surrounded by candles in ceremony"
  />
        <SpiralDivider />
        <Section>
          <div className="rounded-2xl border p-8 bg-card/90 backdrop-blur-sm shadow-sm">
            <h3 className="font-serif text-2xl mb-2">🌀 Full Program Launching Soon</h3>
            <p className="text-foreground/80 mb-4">Sign up for updates or reach out with questions.</p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button as="a" href="/" variant="secondary">Back to The Spiral</Button>
            </div>
          </div>
        </Section>
        <Section>
          <Button as="a" href="/" variant="secondary">Back to The Spiral</Button>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
