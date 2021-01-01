<template>
  <hero-section></hero-section>
  <features-section></features-section>
  <pricing-section></pricing-section>
  <call-to-action></call-to-action>
</template>

<script>
import HeroSection from "../components/layouts/landing/Hero";
import FeaturesSection from "../components/layouts/landing/Features";
import PricingSection from "../components/layouts/landing/Pricing";
import CallToAction from "../components/layouts/landing/CallToAction";

export default {
  components: {
    HeroSection,
    FeaturesSection,
    PricingSection,
    CallToAction,
  },
};
</script>
