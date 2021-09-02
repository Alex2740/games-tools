<template>
  <button class="block w-full rounded text-neutral-100 bg-accent-1 uppercase text-xs py-3 px-6 my-5 transform hover:-translate-y-1 transition-transform font-bold">
      <slot></slot>
  </button>
</template>

<script>
export default {
    name: 'CardButton'
}
</script>

<style>

</style>