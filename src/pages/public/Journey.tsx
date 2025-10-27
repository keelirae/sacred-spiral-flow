import React from 'react'
import Header from '@/components/public/Header'
import Seo from '@/components/Seo'
import Footer from '@/components/public/Footer'
import PageHero from '@/components/public/PageHero'
import Section from '@/components/public/Section'
import Button from '@/components/public/Button'
import JourneyTimeline from '@/components/public/JourneyTimeline'
import heroJourney from '@/assets/hero-journey.jpg';

export default function Journey() {
  return (
    <div className="min-h-screen flex flex-col">
      <Seo title="Journey Through the Sacred Spiral" description="A 12-month cyclical path of growth, integration, and remembrance." />
      <Header />
      <main id="main" className="flex-1">
        <PageHero 
          title="Journey Through the Sacred Spiral" 
          subtitle="A 12-month cyclical path of growth, integration, and remembrance."
          imageSrc={heroJourney}
          imageAlt="A winding path through an ancient forest"
        />
        <Section title="The 12-Month Path" spiralAccent>
          <JourneyTimeline />
        </Section>
        <Section title="What You Receive">
          <div className="flex flex-wrap justify-center gap-2">
            {['Guidance & structure','Seasonal rhythm','Community touchpoints'].map((v) => (
              <span key={v} className="inline-flex items-center rounded-full border bg-gradient-to-r from-primary/10 to-secondary/10 px-3 py-1 text-foreground/90 ring-1 ring-foreground/10">{v}</span>
            ))}
          </div>
        </Section>
        <Section>
          <div className="flex justify-center gap-4">
            <Button as="a" href="/contact">Stay Informed (Contact)</Button>
            <Button as="a" href="/" variant="secondary">Back to The Spiral</Button>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}
