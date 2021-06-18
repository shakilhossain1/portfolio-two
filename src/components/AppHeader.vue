<template>
  <header id="header" class="h-[80vh] bg-skin-primary">
    <nav class="container py-4">
      <Logo></Logo>
    </nav>
    <div class="mt-10">
      <img src="/IMAGE.png" class="w-32 mx-auto" alt="" />
      <h2 class="text-2xl text-white text-center font-semibold mt-3">
        Desing & development changed okay
      </h2>
    </div>
  </header>
</template>

<script>
import Logo from './Logo.vue';
export default {
  components: { Logo },
};
</script>

<style></style>
