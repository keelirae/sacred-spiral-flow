import React from 'react'
import Header from '@/components/public/Header'
import Seo from '@/components/Seo'
import Footer from '@/components/public/Footer'
import Section from '@/components/public/Section'

export default function Privacy() {
  return (
    <div className="min-h-screen flex flex-col">
      <Seo title="Privacy — The Sacred Spiral" description="Privacy policy for The Sacred Spiral." />
      <Header />
  <main id="main" className="flex-1">
        <Section title="Privacy">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <p className="text-sm text-muted-foreground">This site is a demo. Please replace this page with your live privacy policy before publishing.</p>
            <p>
              We do not share your contact information. Contact messages are delivered to the site owner via email. Replace this stub with your official privacy policy.
            </p>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  )
}

