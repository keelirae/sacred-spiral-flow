import React from 'react';
import Header from '@/components/public/Header';
import Footer from '@/components/public/Footer';
import PageHero from '@/components/public/PageHero';
import Section from '@/components/public/Section';
import Button from '@/components/public/Button';

export default function SpiritualRealm() {
  return (
    <div>
      <Header />
      <main>
        <PageHero title="The Spiritual Realm" subtitle="Ceremony, ritual, meditation, and feminine embodiment." />
        <Section>
          <div className="rounded-xl border p-6 bg-muted/30">
            <h3 className="font-semibold mb-2">Coming Soon</h3>
            <p className="text-muted-foreground mb-4">Full program launching soon.</p>
            <Button as="a" href="/#contact">Notify Me</Button>
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
