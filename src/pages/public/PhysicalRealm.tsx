import React from 'react';
import Header from '@/components/public/Header';
import Seo from '@/components/Seo';
import Footer from '@/components/public/Footer';
import PageHero from '@/components/public/PageHero';
import Section from '@/components/public/Section';
import Button from '@/components/public/Button';
import Leaf from '@/components/icons/Leaf';
import Moon from '@/components/icons/Moon';

export default function PhysicalRealm() {
  return (
    <div>
      <Seo title="The Physical Realm" description="Fitness, nutrition, and cycle syncing — in rhythm with your body." />
  <Header />
  <main id="main">
        <PageHero title="The Physical Realm" subtitle="Fitness, nutrition, and cycle syncing — in rhythm with your body." />
        <Section title="Overview">
          <div className="space-y-4 max-w-3xl">
            <p>
              Functional movement, whole-food nourishment, and training with menstrual phases come together in the
              Physical Realm. We build strength, capacity, and resilience from a place of body listening.
            </p>
            <p>
              You’ll learn to sync training and recovery with your cycle, eat to support hormones, and cultivate a
              respectful relationship with the body.
            </p>
          </div>
        </Section>
        <Section title="The Three Pillars">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border p-6 bg-card shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-2">
                <Leaf className="h-5 w-5 text-sage-600" />
                <h3 className="font-serif text-xl">Fitness</h3>
              </div>
              <p className="text-muted-foreground">Functional strength, mobility, and cycles of intensity and recovery.</p>
            </div>
            <div className="rounded-2xl border p-6 bg-card shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-2">
                <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-sand-200 text-ink-900">🥗</span>
                <h3 className="font-serif text-xl">Nutrition</h3>
              </div>
              <p className="text-muted-foreground">Whole-food, hormone-supportive meals aligned to your needs.</p>
            </div>
            <div className="rounded-2xl border p-6 bg-card shadow-sm hover:shadow-md transition-all">
              <div className="flex items-center gap-3 mb-2">
                <Moon className="h-5 w-5 text-clay-600" />
                <h3 className="font-serif text-xl">Cycle Syncing</h3>
              </div>
              <p className="text-muted-foreground">Training, fuel, and self-care tuned to menstrual, follicular, ovulatory, and luteal phases.</p>
            </div>
          </div>
        </Section>
        <Section>
          <div className="flex gap-4">
            <Button as="a" href="/initiates">Join the Physical Realm</Button>
            <Button as="a" href="/" variant="secondary">Back to The Spiral</Button>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
