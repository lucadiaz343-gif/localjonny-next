import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import PhotoStrip from '@/components/PhotoStrip';
import Ticker from '@/components/Ticker';
import InfoBar from '@/components/InfoBar';
import About from '@/components/About';
import MenuSection from '@/components/MenuSection';
import Matcha from '@/components/Matcha';
import Reviews from '@/components/Reviews';
import Gifts from '@/components/Gifts';
import Gallery from '@/components/Gallery';
import Visit from '@/components/Visit';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <PhotoStrip />
      <Ticker />
      <InfoBar />
      <About />
      <MenuSection />
      <Matcha />
      <Reviews />
      <Gifts />
      <Gallery />
      <Visit />
      <Footer />
    </>
  );
}
