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
        <transition-group name="fade">
          <div
            v-for="i in [currentIndex]"
            :key="i"
            class="
              w-full
              absolute
              inset-0
              bg-yellow-400
              flex
              items-center
              justify-center
              text-white text-2xl
            "
          >
            {{ currentSlide.title }}
          </div>
        </transition-group>
      </div>
    </div>
    <p>
      <button @click="prev">prev</button><button @click="next">next</button>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
      voluptates quod asperiores harum ipsum, temporibus hic! Odio illum neque
      exercitationem aliquam veritatis labore recusandae modi.
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
        {
          title: 'Slide one',
        },
        {
          title: 'Slide Two',
        },
        {
          title: 'Slide Three',
        },
      ],
      currentIndex: 0,
      timer: null,
    };
  },
  mounted() {
    this.startSlide();
  },
  methods: {
    startSlide() {
      this.timer = setInterval(this.next, 2000);
    },
    prev(e) {
      if (e != undefined) {
        clearInterval(this.timer);
        this.timer = setInterval(this.next, 3000);
      }
      this.currentIndex -= 1;
    },
    next(e) {
      if (e != undefined) {
        clearInterval(this.timer);
        this.timer = setInterval(this.next, 3000);
      }
      this.currentIndex += 1;
    },
  },
  computed: {
    currentSlide() {
      return this.testimonials[
        Math.abs(this.currentIndex % this.testimonials.length)
      ];
    },
  },
};
</script>

<style>
.fade-enter-active,
.fade-leave-active {
  transition: all 0.9s ease;
  overflow: hidden;
  visibility: visible;
  position: absolute;
  width: 100%;
  opacity: 1;
}

.fade-enter,
.fade-leave-to {
  visibility: hidden;
  width: 100%;
  opacity: 0;
}
</style>
