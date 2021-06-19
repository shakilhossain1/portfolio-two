<template>
  <header
    id="header"
    class="
      h-[80vh]
      flex flex-col
      justify-start
      overflow-hidden
      bg-skin-primary
      md:bg-white
      relative
    "
  >
    <div
      class="
        hidden
        md:block
        bg-skin-primary
        absolute
        left-0
        bottom-0
        top-0
        w-[350px]
        z-0
      "
    ></div>
    <div
      id="socialIcons"
      class="
        absolute
        top-1/2
        -translate-y-1/3
        right-10
        flex-col
        items-end
        justify-center
        space-y-4
        hidden
        md:flex
      "
    >
      <span class="rotate-90 mr-2 uppercase text-skin-primary origin-right">Follow Me on: ------</span>
      <a href="#" class="text-skin-primary hover:text-skin-dark"
        ><FacebookIcon></FacebookIcon
      ></a>
      <a href="#" class="text-skin-primary hover:text-skin-dark"
        ><TwitterIcon></TwitterIcon
      ></a>
      <a href="#" class="text-skin-primary hover:text-skin-dark"
        ><InstagramIcon></InstagramIcon
      ></a>
    </div>
    <div
      id="bottomBorder"
      class="bg-skin-primary absolute bottom-0 w-full h-4"
    ></div>
    <nav class="container z-10 py-4 flex items-center justify-between">
      <Logo></Logo>
      <div class="flex items-center justify-center space-x-4">
        <a href="#" class="text-skin-dark hover:text-skin-muted uppercase hidden md:block">About Me</a>
        <a href="#" class="text-skin-dark hover:text-skin-muted uppercase hidden md:block">Portfolio</a>
        <a href="#" class="btn btn-light md:hidden">Download CV</a>
        <a href="#" class="btn btn-primary hidden md:block">Download CV</a>
      </div>
    </nav>
    <div
      class="
        my-auto
        md:flex
        md:justify-start
        md:items-center
        space-y-4
        container
      "
    >
      <img
        src="/profile-image.png"
        class="w-44 md:w-80 mx-auto md:mx-0 z-10"
        alt=""
      />
      <div class="space-y-4 md:ml-20">
        <h2
          class="
            text-4xl text-white
            md:text-skin-primary md:text-left
            text-center
            font-semibold
            mt-3
          "
        >
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
import FacebookIcon from './Icons/Facebook.vue';
import InstagramIcon from './Icons/Instagram.vue';
import TwitterIcon from './Icons/Twitter.vue';
export default {
  components: { Logo, FacebookIcon, InstagramIcon, TwitterIcon },
};
</script>

<style></style>
