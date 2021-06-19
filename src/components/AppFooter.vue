<template>
  <footer class="bg-skin-primary py-6">
    <div class="container md:flex md:justify-between md:items-center space-y-4 md:space-y-0">
      <Logo class="mx-auto md:mx-0"></Logo>
      <div class="flex space-x-4 justify-center items-center">
        <a href="#" class="text-skin-secondary hover:text-white">About Me</a>
        <a href="#" class="text-skin-secondary hover:text-white">Portfolio</a>
        <a href="#" class="text-skin-secondary hover:text-white">Download CV</a>
      </div>
      <div class="flex justify-center items-center space-x-4">
        <a href="#" class="text-white hover:text-skin-secondary">
          <FacebookIcon></FacebookIcon>
        </a>
        <a href="#" class="text-white hover:text-skin-secondary">
          <InstagramIcon></InstagramIcon>
        </a>
        <a href="#" class="text-white hover:text-skin-secondary">
          <TwitterIcon></TwitterIcon>
        </a>
      </div>
    </div>
  </footer>
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
