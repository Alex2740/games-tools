<template>
    <TopMenu></TopMenu>
    <div class="flex flex-row">
        <SideMenu></SideMenu>
        <div class="flex-grow">
            <slot></slot>
        </div>
    </div>
</template>

<script>
import SideMenu from '../components/SideMenu.vue'
import TopMenu from '../components/TopMenu.vue'

export default {
    name: 'WebLayout',
    components: {
        SideMenu,
        TopMenu
    }
}
</script>

<style>

</style>