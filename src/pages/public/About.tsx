import React from 'react';
import Header from '@/components/public/Header';
import Seo from '@/components/Seo';
import Footer from '@/components/public/Footer';
import Section from '@/components/public/Section';
import Button from '@/components/public/Button';

export default function About() {
  return (
    <div className="min-h-screen flex flex-col">
      <Seo title="About — The Sacred Spiral" description="Hi, I’m Keeli — Earthbound Alchemist & Guide of The Sacred Spiral." />
      <Header />
  <main id="main" className="flex-1">
        <Section>
          <div className="mx-auto h-24 w-24 rounded-full bg-muted/60 border" aria-hidden="true" />
          <h1 className="mt-6 text-4xl md:text-5xl font-serif text-center">Hi, I’m Keeli — Earthbound Alchemist & Guide of The Sacred Spiral.</h1>
          <p className="mt-4 text-lg text-foreground/80 text-center">I help women remember their rhythm through movement, nourishment, and ritual that honors the seasons of the body.</p>
        </Section>
        <Section>
          <div className="space-y-4 max-w-3xl mx-auto text-center">
            <p>
              My own path began through the physical — training my body, seeking strength — until I realized the deeper wisdom lived in rhythm, not rigidity. The Sacred Spiral was born from that remembrance.
            </p>
            <p>
              I teach from nature’s intelligence: cyclical, sovereign, and sacred. Each woman’s journey unfolds at her own pace, guided by structure that supports freedom.
            </p>
            <p>
              My work bridges science and spirit — movement, nourishment, and ceremony — to help women return to the natural flow of their bodies.
            </p>
          </div>
        </Section>
        <Section title="My Guiding Values">
          <div className="flex flex-wrap gap-2 justify-center">
            {['Cyclical','Sovereign','Nature-Rooted','Sacred & Strategic','Beauty with Substance'].map((v) => (
              <span
                key={v}
                className="inline-flex items-center gap-1 rounded-full border px-3 py-1 bg-gradient-to-r from-primary/10 to-secondary/10 text-foreground/90 ring-1 ring-foreground/10"
              >
                {v}
              </span>
            ))}
          </div>
        </Section>
        <Section>
          <div className="flex justify-center gap-4">
            <Button as="a" href="/journey">Begin Your Journey</Button>
            <Button as="a" href="/contact" variant="secondary">Contact</Button>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}

