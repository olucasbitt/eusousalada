import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VideoSection } from './components/VideoSection';
import { ShowSchedule } from './components/ShowSchedule';
import { About } from './components/About';
import { CTA, VenueCTA, Footer, WhatsAppButton } from './components/Footer';
import { Testimonials, FAQ } from './components/ExtraSections';

export default function App() {
  return (
    <div className="relative min-h-screen bg-black text-white">
      <Navbar />

      <main className="overflow-hidden">
        <Hero />

        <SectionDivider />

        <VideoSection />

        <ShowSchedule />

        <Testimonials />

        <About />

        <CTA />

        <VenueCTA />

        <FAQ />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}

/* ---------------- COMPONENTES AUXILIARES ---------------- */

function SectionDivider() {
  return (
    <div className="my-12 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
  );
}