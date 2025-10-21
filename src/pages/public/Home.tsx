import React from 'react';
import Header from '@/components/public/Header';
import Seo from '@/components/Seo';
import Footer from '@/components/public/Footer';
import PageHero from '@/components/public/PageHero';
import Section from '@/components/public/Section';
import RealmCard from '@/components/public/RealmCard';
import SpiralDivider from '@/components/public/SpiralDivider';
import Leaf from '@/components/icons/Leaf';
import Moon from '@/components/icons/Moon';
import Spiral from '@/components/icons/Spiral';
import Button from '@/components/public/Button';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import heroHome from '@/assets/hero-home.jpg';
import journeyWheel from '@/assets/journey-wheel.jpg';
import realmPhysical from '@/assets/realm-physical.jpg';
import realmMental from '@/assets/realm-mental.jpg';
import realmSpiritual from '@/assets/realm-spiritual.jpg';
import aboutKeeli from '@/assets/about-keeli.jpg';

export default function Home() {
  const realmsReveal = useScrollReveal<HTMLDivElement>();
  const journeyReveal = useScrollReveal<HTMLDivElement>();
  const aboutReveal = useScrollReveal<HTMLDivElement>();
  const contactReveal = useScrollReveal<HTMLDivElement>();
  return (
    <div className="min-h-screen flex flex-col">
      <Seo
        title="The Sacred Spiral — Feminine, Earth-Rooted Transformation"
        description="A year-long cyclical journey through the Physical, Mental, and Spiritual realms: movement, nourishment, nervous system, ceremony."
      />
  <Header />
  <main id="main" className="flex-1">
          <PageHero
            title="The Sacred Spiral"
            subtitle="A journey of embodiment through the Physical, Mental, and Spiritual realms."
            ctaHref="#spiral"
            ctaLabel="Enter the Spiral"
            imageSrc={heroHome}
            imageAlt="Sacred spiral of transformation"
          />
        {/* Section 2: The Journey */}
  <Section title="The Journey" eyebrow="The Sacred Spiral" spiralAccent>
          <div className="bg-foreground/[0.07] -mx-4 px-4 py-8 rounded-2xl">
            <div ref={aboutReveal.ref} className={`space-y-4 transition-all duration-700 ${aboutReveal.visible ? 'animate-slide-up' : 'opacity-0 translate-y-4'}`}>
              <p>
                This work is rooted in cyclical living, body sovereignty, and earth-aligned transformation. Through gentle structure and spaciousness, the Spiral offers a grounded path of remembrance and return.
              </p>
              <p>
                We move with the seasons of the body—strength, softness, and integration—honoring nature's timing over hustle.
              </p>
              <p>
                In practice, that means honoring your body's signals, deepening nervous system literacy, and weaving ritual into everyday life—so growth feels integrated, not forced.
              </p>
            </div>
          </div>
        </Section>
        <SpiralDivider />
        {/* Section 3: The Spiral */}
  <Section id="spiral" background="ivory" title="The Upward Spiral" eyebrow="The Sacred Spiral" spiralAccent>
          <p ref={realmsReveal.ref} className={`max-w-2xl mx-auto text-muted-foreground transition-all duration-700 ${realmsReveal.visible ? 'animate-slide-up' : 'opacity-0 translate-y-4'}`}>
            The Spiral is a cyclical path of remembering. Move with your body's wisdom, clarify the mind, and root into spirit.
          </p>
          <div className={`mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3 transition-opacity duration-700 ${realmsReveal.visible ? 'opacity-100' : 'opacity-0'}`}>
            <RealmCard
              title="Physical Realm"
              description="Body intelligence through functional movement, whole-food nutrition, and cycle syncing."
              href="/physical-realm"
              accent="sage"
              icon={<Leaf className="h-4 w-4" />}
              imageSrc={realmPhysical}
            />
            <RealmCard
              title="Mental Realm"
              description="Shadow work, nervous system support, and mindset re-patterning."
              href="/mental-realm"
              accent="clay"
              icon={<Moon className="h-4 w-4" />}
              imageSrc={realmMental}
            />
            <RealmCard
              title="Spiritual Realm"
              description="Ceremony, ritual, meditation, and feminine embodiment."
              href="/spiritual-realm"
              accent="ink"
              icon={<Spiral className="h-4 w-4" />}
              imageSrc={realmSpiritual}
            />
          </div>
        </Section>
        <SpiralDivider />
  {/* Section 4: Full Spiral Initiation */}
  <Section id="journey" title="Full Spiral Initiation" eyebrow="The Sacred Spiral" spiralAccent>
          <div ref={journeyReveal.ref} className={`grid md:grid-cols-2 gap-6 items-center transition-all duration-700 ${journeyReveal.visible ? 'animate-slide-up' : 'opacity-0 translate-y-4'}`}>
            <div className="space-y-4">
              <p>
                A year-long path through all three realms — three months each — with a month of integration between levels. Integration months include optional community meetups and continued access to your guide for questions and shares.
              </p>
              <div className="flex justify-center">
                <Button as="a" href="/journey">Learn More</Button>
              </div>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden border shadow-sm">
              <img 
                src={journeyWheel} 
                alt="The 12-month journey wheel"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </Section>
        {/* Section 5: About Me (home page only) */}
        <Section title="About Me">
          <div ref={contactReveal.ref} className={`mx-auto max-w-3xl space-y-4 transition-all duration-700 ${contactReveal.visible ? 'animate-slide-up' : 'opacity-0 translate-y-4'}`}>
            <div className="mx-auto h-32 w-32 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
              <img 
                src={aboutKeeli} 
                alt="Keeli, Earthbound Alchemist"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-lg">I help women remember their rhythm through movement, nourishment, and ritual that honors the seasons of the body.</p>
            <p>
              Hi, I'm Keeli — Earthbound Alchemist and guide of The Sacred Spiral. My own path began through the physical — training my body, seeking strength — until I realized the deeper wisdom lived in rhythm, not rigidity. The Sacred Spiral was born from that remembrance.
            </p>
            <p>
              I teach from nature's intelligence: cyclical, sovereign, and sacred. Each woman's journey unfolds at her own pace, guided by structure that supports freedom.
            </p>
            <p>
              My work bridges science and spirit — movement, nourishment, and ceremony — to help women return to the natural flow of their bodies.
            </p>
            <div className="flex justify-center">
              <Button as="a" href="/about">Read My Story</Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
