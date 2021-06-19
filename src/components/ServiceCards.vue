<template>
  <div class="container md:flex md:justify-center space-y-6 md:space-y-0 md:space-x-6">
    <div class="shadow-2xl p-4 text-center rounded-sm space-y-4 h-[400px] border-2 border-skin-primary flex flex-col justify-around items-center">
        <Watch class="mx-auto"></Watch>
        <div class="space-y-4">
          <h3>Clean Work</h3>
          <p class="text-skin-muted">All i want to have client setisfaction & this is my aim</p>
        </div>
        <button class="!rounded-none btn btn-primary">Learn More</button>
    </div>
    <div class="shadow-2xl p-4 text-center rounded-sm space-y-4 h-[400px] border-2 border-skin-primary flex flex-col justify-around items-center">
        <SafeBox class="mx-auto"></SafeBox>
        <div class="space-y-4">
          <h3>Clean Work</h3>
          <p class="text-skin-muted">All i want to have client setisfaction & this is my aim</p>
        </div>
        <button class="!rounded-none btn btn-primary">Learn More</button>
    </div>
    <div class="shadow-2xl p-4 text-center rounded-sm space-y-4 h-[400px] border-2 border-skin-primary flex flex-col justify-around items-center">
        <Bence class="mx-auto"></Bence>
        <div class="space-y-4">
          <h3>Clean Work</h3>
          <p class="text-skin-muted">All i want to have client setisfaction & this is my aim</p>
        </div>
        <button class="!rounded-none btn btn-primary">Learn More</button>
    </div>
  </div>
</template>

<script>
import SafeBox from "./Icons/SafeBox.vue"
import Watch from "./Icons/Watch.vue"
import Bence from "./Icons/Bence.vue"
export default {
    components: {SafeBox, Watch, Bence}
};
</script>
