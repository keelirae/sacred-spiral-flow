import React from 'react';
import Header from '@/components/public/Header';
import Footer from '@/components/public/Footer';
import PageHero from '@/components/public/PageHero';
import Section from '@/components/public/Section';
import RealmCard from '@/components/public/RealmCard';
import SpiralDivider from '@/components/public/SpiralDivider';
import Leaf from '@/components/icons/Leaf';
import Moon from '@/components/icons/Moon';
import Spiral from '@/components/icons/Spiral';
import ContactForm from '@/components/public/ContactForm';
import Button from '@/components/public/Button';

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <PageHero
          title="The Sacred Spiral"
          subtitle="A journey of embodiment through the Physical, Mental, and Spiritual realms."
          ctaHref="#realms"
          ctaLabel="Enter the Spiral"
        />
        <Section id="realms" background="ivory" title="The Three Realms">
          <p className="max-w-2xl text-muted-foreground">
            The Spiral is a cyclical path of remembering. Move with your body’s wisdom, clarify the mind, and root into spirit.
          </p>
          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <RealmCard
              title="Physical Realm"
              description="Body intelligence through functional movement, whole-food nutrition, and cycle syncing."
              href="/physical-realm"
              accent="sage"
              icon={<Leaf className="h-4 w-4" />}
            />
            <RealmCard
              title="Mental Realm"
              description="Shadow work, nervous system support, and mindset re-patterning."
              href="/mental-realm"
              accent="clay"
              icon={<Moon className="h-4 w-4" />}
            />
            <RealmCard
              title="Spiritual Realm"
              description="Ceremony, ritual, meditation, and feminine embodiment."
              href="/spiritual-realm"
              accent="ink"
              icon={<Spiral className="h-4 w-4" />}
            />
          </div>
        </Section>
        <SpiralDivider />
        <Section id="journey" title="Journey Through the Spiral">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div className="space-y-4">
              <p>
                A year-long path through three realms: 3 months in each, with a month of integration between levels.
                Integration months include optional community meetups and continued access to me for questions and shares.
              </p>
              <Button as="a" href="/journey">Learn More</Button>
            </div>
            <div className="aspect-[4/3] rounded-2xl bg-muted/40" aria-hidden="true" />
          </div>
        </Section>
        <Section id="about" background="sand" title="About the Work">
          <div className="grid md:grid-cols-3 gap-6 items-start">
            <div className="md:col-span-2 space-y-4">
              <p>
                This work is rooted in cyclical living, body sovereignty, and earth-aligned transformation. We move slowly
                and intentionally, honoring the intelligence of the body, mind, and spirit.
              </p>
              <p>
                Through gentle structure and spaciousness, the Spiral offers a grounded path of remembrance and return.
              </p>
            </div>
            <div className="aspect-[4/3] rounded-2xl bg-muted/40" aria-hidden="true" />
          </div>
        </Section>
        <Section id="contact" title="Connect with Me">
          <p className="max-w-2xl text-muted-foreground mb-6">
            Have a question or feel called to walk the spiral? I’d love to hear from you.
          </p>
          <ContactForm />
        </Section>
      </main>
      <Footer />
    </div>
  );
}
