<template>
  <AppHeader></AppHeader>
  <main class="">
    <ServiceCards class="mt-12"></ServiceCards>
    <PortfolioSection class="mt-12"></PortfolioSection>
    <TestimonialSection class="mt-12"></TestimonialSection>
  </main>
</template>

<script setup>
import AppHeader from './components/AppHeader.vue';
import ServiceCards from './components/ServiceCards.vue';
import PortfolioSection from './components/PortfolioSection.vue';
import TestimonialSection from './components/TestimonialSection.vue';
</script>
