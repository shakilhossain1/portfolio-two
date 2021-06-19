<template>
  <header id="header" class="h-[80vh] flex flex-col justify-start overflow-hidden bg-skin-primary md:bg-white relative">
    <div class="hidden md:block bg-skin-primary absolute left-0 bottom-0 top-0 w-[350px] z-0"></div>
    <div id="socialIcons" class="absolute top-1/2 -translate-y-1/2 right-10 flex-col space-y-4 hidden md:flex">
    <span>icons</span>
    <span>icons</span>
    <span>icons</span>
    </div>
    <div id="bottomBorder" class="bg-skin-primary absolute bottom-0 w-full h-4"></div>
    <nav class="container z-10 py-4 flex items-center justify-between">
      <Logo></Logo>
      <a href="#" class="btn btn-light md:hidden">Hire me</a>
      <a href="#" class="btn btn-primary hidden md:block">Hire me</a>
    </nav>
    <div class="my-auto md:flex md:justify-start md:items-center space-y-4 container">
      <img src="/profile-image.png" class="w-44 md:w-80 mx-auto md:mx-0 z-10" alt="" />
      <div class="space-y-4 md:ml-20">
        <h2 class="text-4xl text-white md:text-skin-primary md:text-left text-center font-semibold mt-3">
          Desing & <br />
          development
        </h2>

        <!-- for small devices -->
        <div class="flex items-center justify-center space-x-4 md:hidden">
          <a href="#" class="btn btn-light">Contact Now</a>
          <a href="#" class="btn btn-outline-light">Hire Me</a>
        </div>

        <!-- For medium devices -->
        <div class="items-center justify-center space-x-4 hidden md:flex">
          <a href="#" class="btn btn-primary">Contact Now</a>
          <a href="#" class="btn btn-outline-primary">Hire Me</a>
        </div>
      </div>
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
