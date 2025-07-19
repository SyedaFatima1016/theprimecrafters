import { motion } from 'framer-motion';
import Hero from '../components/herosection'
import AboutUs from '../components/aboutus';
import Services from '../components/services';
import Footer from '../components/footer';
import Header from '../components/header';

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <AboutUs />
      <Services />
      <Footer />
    </main>
  );
}
