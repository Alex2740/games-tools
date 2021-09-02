<template>
    <TopMenu></TopMenu>
    <div>
        <slot></slot>
    </div>
</template>

<script>
import TopMenu from '../components/TopMenu.vue'

export default {
    name: 'AppLayout',
    components: {
        TopMenu
    }
}
</script>

<style>

</style>