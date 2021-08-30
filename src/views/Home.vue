<template>
  <WebLayout>
    Home
    <ChipIcon class="h-4"></ChipIcon>
  </WebLayout>
</template>

<script>
import { ChipIcon } from '@heroicons/vue/solid'
import WebLayout from '../layouts/WebLayout.vue'

export default {
  name: 'Home',
  components: {
    WebLayout,
    ChipIcon
  }
}
</script>

<style>

</style>