<template>
  <div class="container">
    <h2 class="heading">My Portfolio</h2>
    <p class="heading-subtittle mt-1">Web And app</p>
    <div class="md:grid md:grid-cols-3 md:gap-4 space-y-4 md:space-y-0 mt-4">
      <Portfolio
        v-for="portfolio in portfolios"
        :key="portfolio.id"
        :data="portfolio"
        class="last:col-span-2 last:row-start-2 last:row-end-3"
      ></Portfolio>
    </div>
  </div>
</template>

<script>
import Portfolio from './Portfolio.vue';
export default {
  components: { Portfolio },
  data() {
    return {
      portfolios: [
        {
          id: 1,
          title: 'Portfolio',
          description: 'this is portofolio description.',
          image: '/portfolio-1.png',
        },
        {
          id: 2,
          title: 'Portfolio two',
          description: 'this is second portofolio description.',
          image: '/portfolio-2.png',
        },
        {
          id: 3,
          title: 'Portfolio',
          description: 'this is portofolio description.',
          image: '/portfolio-3.png',
        },
        {
          id: 4,
          title: 'Portfolio',
          description: 'this is portofolio description.',
          image: '/portfolio-4.png',
        },
        {
          id: 5,
          title: 'Portfolio',
          description: 'this is portofolio description.',
          image: '/portfolio-5.png',
        },
        {
          id: 6,
          title: 'Portfolio',
          description: 'this is portofolio description.',
          image: '/portfolio-6.png',
        },
        {
          id: 7,
          title: 'Portfolio',
          description: 'this is portofolio description.',
          image: '/portfolio-7.png',
        },
        {
          id: 8,
          title: 'Portfolio',
          description: 'this is portofolio description.',
          image: '/portfolio-8.png',
        },
      ],
    };
  },
};
</script>
