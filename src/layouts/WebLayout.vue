<template>
    <TopMenu></TopMenu>
    <div>
        <SideMenu></SideMenu>
        <div>
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