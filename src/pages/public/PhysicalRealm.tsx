import React from 'react';
import Header from '@/components/public/Header';
import Footer from '@/components/public/Footer';
import PageHero from '@/components/public/PageHero';
import Section from '@/components/public/Section';
import Button from '@/components/public/Button';

export default function PhysicalRealm() {
  return (
    <div>
      <Header />
      <main>
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
        <Section title="Three Pillars">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="rounded-xl border p-6">
              <h3 className="font-semibold mb-2">Fitness</h3>
              <p className="text-muted-foreground">Functional strength, mobility, and cycles of intensity and recovery.</p>
            </div>
            <div className="rounded-xl border p-6">
              <h3 className="font-semibold mb-2">Nutrition</h3>
              <p className="text-muted-foreground">Whole-food, hormone-supportive meals aligned to your needs.</p>
            </div>
            <div className="rounded-xl border p-6">
              <h3 className="font-semibold mb-2">Cycle Syncing</h3>
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
