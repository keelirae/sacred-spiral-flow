import React from 'react';
import Header from '@/components/public/Header';
import Seo from '@/components/Seo';
import Footer from '@/components/public/Footer';
import PageHero from '@/components/public/PageHero';
import Section from '@/components/public/Section';
import ContactForm from '@/components/public/ContactForm';
import SpiralDivider from '@/components/public/SpiralDivider';

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col">
      <Seo title="Contact" description="Have a question or feel called to walk the Spiral? I’d love to hear from you." />
  <Header />
  <main id="main" className="flex-1">
        <PageHero title="Contact" subtitle="Have a question or feel called to walk the Spiral? I’d love to hear from you." />
        <SpiralDivider />
        <Section eyebrow="The Sacred Spiral" title="Get in touch" spiralAccent>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-10 items-stretch">
            {/* Info panel */}
            <div className="flex flex-col justify-center rounded-2xl border bg-card/80 backdrop-blur-sm p-6 shadow-sm transition-shadow hover:shadow-md">
              <div className="space-y-5 text-center md:text-left">
                <p className="text-foreground/90 max-w-prose mx-auto md:mx-0">
                  Whether you have questions about the Sacred Spiral, feel called to begin your journey, or simply want to connect — I’m here.
                </p>
                <div>
                  <p className="text-sm mb-2 text-muted-foreground">Topics</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                  {['General questions','Begin your journey','Collaborations'].map((v) => (
                    <span key={v} className="inline-flex items-center rounded-full border bg-gradient-to-r from-primary/10 to-secondary/10 px-3 py-1 text-sm ring-1 ring-foreground/10">{v}</span>
                  ))}
                  </div>
                </div>
                <div className="rounded-xl border bg-background/70 p-4 text-center md:text-left">
                  <p className="text-sm">Email</p>
                  <a className="text-lg underline underline-offset-2 focus:outline-none focus:ring-2 focus:ring-primary rounded-sm px-0.5" href="mailto:hello@example.com">hello@example.com</a>
                  <p className="mt-1 text-sm text-muted-foreground">I typically respond within 1–2 business days.</p>
                </div>
              </div>
            </div>

            {/* Form panel */}
            <div className="relative rounded-2xl border bg-card/90 backdrop-blur-sm p-6 shadow-sm transition-shadow hover:shadow-md">
              {/* subtle aura */}
              <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-[radial-gradient(circle_at_70%_10%,hsl(var(--primary)/.12),transparent_60%)]" aria-hidden="true" />
              <div className="mb-4 flex items-center justify-center">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-background/80 ring-1 ring-foreground/10 transition-[filter,opacity] duration-300 hover:opacity-95 hover:[filter:brightness(1.05)]">✉️</div>
              </div>
              <h3 className="text-center font-serif text-2xl tracking-tight">Send a message</h3>
              <p className="mt-1 text-center text-muted-foreground">I’ll get back to you as soon as I can.</p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
