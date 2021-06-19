<template>
  <div class="container">
    <h2 class="heading">Valuable Testimonial</h2>
    <p class="heading-subtittle mt-1">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus, natus.
    </p>
    <div class="relative lg:w-[90%] mx-auto mt-8">
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
              transition-all
              duration-500
              overflow-hidden
              absolute
              inset-0
              py-4
              px-8
              flex flex-col
              justify-around
              items-center
              drop-shadow-lg
              bg-white
              text-center
            "
          >
            <img
              :src="currentTestimonial.image"
              :alt="currentTestimonial.title"
            />
            <h3
              class="
                text-skin-dark text-lg
                md:text-xl
                lg:text-2xl
                font-semibold
              "
            >
              {{ currentTestimonial.title }}
            </h3>
            <p
              class="
                text-skin-muted text-xs
                md:text-sm
                lg:text-base
                font-semibold
              "
            >
              {{ currentTestimonial.description }}
            </p>
          </div>
        </transition-group>
      </div>
    </div>
    <div class="flex space-x-3 justify-center mt-4">
      <span
        v-for="(item, index) in testimonials"
        :key="item.id"
        @click="setCurrentIndex(index)"
        :class="{ 'bg-opacity-40': index != currentIndex }"
        class="w-3 h-3 cursor-pointer bg-skin-primary rounded-full"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testimonials: [
        {
          id: 1,
          title: 'Jhon Wick, New York',
          image: '/testimonial-one.png',
          description:
            'Writing paragraphs takes practice, but what should students write about? Good paragraph writing prompts allow students to write about what they know and like',
        },
        {
          id: 2,
          title: 'Slide Two',
          image: '/testimonial-one.png',
          description:
            'Description two takes practice, but what should students write about? Good paragraph writing',
        },
        {
          id: 3,
          title: 'Slide Three',
          image: '/testimonial-one.png',
          description:
            'Writing paragraphs this is another one takes practice, but what should students write about? Good paragraph writing prompts allow students to write about what they know and like, so their focus can be on the writing process and using the four essential elements.',
        },
      ],
      currentIndex: 0,
      timer: null,
    };
  },
  mounted() {
    console.log(this.testimonials.length);
    this.startSlide();
  },
  methods: {
    startSlide() {
      this.timer = setInterval(this.next, 4000);
    },
    prev(e) {
      if (this.currentIndex <= 0) {
        this.currentIndex = this.testimonials.length - 1;
      } else {
        this.currentIndex -= 1;
      }
      if (e != undefined) {
        this.resetSlide();
      }
    },
    next(e) {
      if (this.currentIndex == this.testimonials.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex += 1;
      }
      if (e != undefined) {
        this.resetTimer();
      }
    },
    setCurrentIndex(index) {
      this.currentIndex = index;
      this.resetTimer();
    },
    resetTimer() {
      clearInterval(this.timer);
      this.timer = setInterval(this.next, 4000);
    },
  },
  computed: {
    currentTestimonial() {
      return this.testimonials[
        Math.abs(this.currentIndex % this.testimonials.length)
      ];
    },
  },
};
</script>

<style>
.fade-enter-from,
.fade-leave-to {
  @apply opacity-0;
}

.fade-leave-from,
.fade-enter-to {
  @apply opacity-100;
}
</style>
