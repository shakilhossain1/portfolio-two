<template>
  <div class="w-full h-56 lg:h-72 relative group overflow-hidden">
    <img :src="data.image" class="w-full h-full object-cover" alt="" />
    <div
      class="
        flex flex-col
        text-center
        justify-center
        items-center
        bg-skin-primary/90
        absolute
        inset-0
        z-10
        p-4
        transition-all
        duration-200
        scale-0
        group-hover:scale-100
      "
    >
      <h3 class="text-white text-2xl font-semibold">{{ data.title }}</h3>
      <p class="text-sm md:text-base text-white mt-4">
        {{ data.description }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
};
</script>

<style></style>
