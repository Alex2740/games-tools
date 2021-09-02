<template>
  <router-link class="item relative h-18 w-18 p-4 mt-4 hover:text-accent-2 transition-colors duration-500" :to="link">
    <slot></slot>
    <span class="absolute top-6 left-8 bg-neutral-700 p-1 rounded hover:text-neutral-500 text-neutral-500 transform transition-all duration-700 opacity-0">
        {{ text }}
    </span>
  </router-link>
</template>

<script>
import { BeakerIcon } from "@heroicons/vue/solid";

export default {
  name: "ItemSideMenu",
  props: {
      text: String,
      link: String
  },
  components: {
      BeakerIcon
  }
};
</script>

<style scopped>

.item:hover span {
    transform: translateX(2rem);
    opacity: 0.7;
}

</style>