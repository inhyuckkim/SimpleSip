import HeroSection from "@/components/hero-section";
import ProductShowcase from "@/components/product-showcase";
import FeaturesSection from "@/components/features-section";
import FlavorPowdersPreview from "@/components/flavor-powders-preview";
import CustomerReviews from "@/components/customer-reviews";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductShowcase />
      <FeaturesSection />
      <FlavorPowdersPreview />
      <CustomerReviews />
    </>
  );
}
