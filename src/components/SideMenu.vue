<template>
  <nav class="flex flex-col h-screen bg-neutral-100 dark:bg-neutral-700 text-neutral-500 transition-colors duration-700 shadow-2xl">
    <router-link class="h-18 w-18 p-4 bg-accent-2 hover:bg-accent-1 text-neutral-100 shadow-md" to="/">
      <ChipIcon></ChipIcon>
    </router-link>
    <ItemSideMenu text="test" link="/"><BeakerIcon></BeakerIcon></ItemSideMenu>
  </nav>
</template>

<script>
import { ChipIcon, BeakerIcon } from "@heroicons/vue/solid";
import ItemSideMenu from './ItemSideMenu.vue'

export default {
  name: "SideMenu",
  components: {
    ChipIcon,
    BeakerIcon,
    ItemSideMenu
  },
};
</script>

<style>
</style>