import React from 'react';
import Header from '@/components/public/Header';
import Seo from '@/components/Seo';
import Footer from '@/components/public/Footer';
import PageHero from '@/components/public/PageHero';
import Section from '@/components/public/Section';
import ContactForm from '@/components/public/ContactForm';

export default function Contact() {
  return (
    <div>
      <Seo title="Connect with Me" description="Questions, resonance, or collaboration?" />
      <Header />
      <main>
        <PageHero title="Connect with Me" subtitle="Questions, resonance, or collaboration?" />
        <Section>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-4">
              <p>Send a note anytime — I’d love to hear what’s alive for you and how the Spiral is calling you.</p>
              <p>Email: <a className="underline" href="mailto:hello@example.com">hello@example.com</a></p>
            </div>
            <ContactForm />
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
