import Categories from "../components/Categories";
import CTASection from "../components/CTASection";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <CTASection />
      <Footer />
    </>
  );
}
