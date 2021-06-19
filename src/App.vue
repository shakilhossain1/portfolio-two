<template>
  <AppHeader></AppHeader>
  <main class="">
    <ServiceCards class="mt-12"></ServiceCards>
    <PortfolioSection class="mt-12"></PortfolioSection>
    <TestimonialSection class="mt-12"></TestimonialSection>
    <HireMe class="mt-12"></HireMe>
    <AppFooter class="mt-12"></AppFooter>
  </main>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue';
import ServiceCards from './components/ServiceCards.vue';
import PortfolioSection from './components/PortfolioSection.vue';
import TestimonialSection from './components/TestimonialSection.vue';
import HireMe from "./components/HireMe.vue";
import AppFooter from "./components/AppFooter.vue";
</script>
