<template>
  <div class="container">
    <h2 class="heading">Valuable Testimonial</h2>
    <p class="heading-subtittle mt-1">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, natus.
    </p>
    <div class="relative lg:w-[90%] mt-8">
      <div
        class="
          absolute
          w-full
          bg-skin-primary
          h-[250px]
          top-1/2
          -translate-y-1/2
        "
      ></div>
      <div id="sliderContainer" class="relative w-[90%] mx-auto h-[300px]">
        <div class="w-full absolute inset-0 bg-blue-400 flex items-center justify-center text-white text-2xl">slide One</div>
        <div class="w-full absolute inset-0 bg-green-400 flex items-center justify-center text-white text-2xl">slide two</div>
        <div class="w-full absolute inset-0 bg-yellow-400 flex items-center justify-center text-white text-2xl">slide three</div>
      </div>
      <!-- <carousel>
        <slide> Slide 1 Content </slide>
        <slide> Slide 2 Content </slide>
      </carousel> -->
    </div>
    <p>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
      voluptates quod asperiores harum ipsum, temporibus hic! Odio illum neque
      exercitationem aliquam veritatis labore recusandae modi.
    </p>
  </div>
</template>

<script>
import { Carousel, Slide } from 'vue-carousel';

export default {
  components: { Carousel, Slide },
};
</script>

<style></style>
