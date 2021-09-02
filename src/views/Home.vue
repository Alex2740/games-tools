<template>
  <WebLayout>
    Home
  </WebLayout>
</template>

<script>
import WebLayout from '../layouts/WebLayout.vue'

export default {
  name: 'Home',
  components: {
    WebLayout
  },
  setup() {
    document.title = "Games Tools"
  }
}
</script>

<style>

</style>