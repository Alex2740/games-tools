<template>
  <nav
    class="
      fixed
      flex
      bg-neutral-100
      dark:bg-neutral-700
      float-right
      top-4
      right-8
      text-neutral-500
      rounded-bl-3xl
      overflow-hidden
      transition-colors
      duration-500
    "
  >
    <!--
    <div class="flex items-center justify-center w-18 h-18 p-4 bg-accent-1 text-neutral-100 font-bold cursor-pointer">
        <span>PRO</span>
    </div>
    -->
    <div
      class="
        w-18
        h-18
        p-4
        hover:text-neutral-700
        dark:hover:text-neutral-100
        transition-colors
        duration-500
        cursor-pointer
      "
    >
      <div id="moon" @click="activateDarkMode()">
        <MoonIcon></MoonIcon>
      </div>
      <div id="sun" @click="deactivateDarkMode()" class="hidden">
        <SunIcon></SunIcon>
      </div>
    </div>
    <div
      class="
        w-18
        h-18
        p-4
        hover:text-neutral-700
        dark:hover:text-neutral-100
        transition-colors
        duration-500
        cursor-pointer
      "
    >
      <div id="dots" @click="openMenu()">
        <DotsVerticalIcon></DotsVerticalIcon>
      </div>
      <div id="cross" @click="closeMenu()" class="hidden">
        <XIcon></XIcon>
      </div>
    </div>
  </nav>
  <div
    id="menu"
    class="
      absolute
      top-28
      right-8
      bg-accent-2
      text-neutral-100
      w-screen-60
      transform
      scale-y-0
      transition-transform
      duration-500
      origin-top
    "
  >
    <div class="grid grid-cols-2 p-5">
      <div>
        <h3 class="border-b border-neutral-100 mt-5 pb-4 font-extrabold">
          Pokémon
        </h3>
        <ul class="my-5">
          <li>Dynamax Expedition</li>
        </ul>
      </div>
      <div>
        <h3 class="border-b border-neutral-100 mt-5 pb-4 font-extrabold">
          League of Legends
        </h3>
        <ul class="my-5">
          <li>
            <router-link to='/lol/theorycraft'>Theorycraft</router-link>
          </li>
        </ul>
      </div>
    </div>
    <div
      class="
        flex flex-row
        justify-around
        bg-neutral-900 bg-opacity-10
        py-3
        text-sm
      "
    >
      <span>Games Tools</span>
      <div>Terms</div>
      <div>Privacy</div>
    </div>
  </div>
</template>

<script>
import {
  MoonIcon,
  SunIcon,
  DotsVerticalIcon,
  XIcon,
} from "@heroicons/vue/solid";

export default {
  name: "TopMenu",
  components: {
    MoonIcon,
    SunIcon,
    DotsVerticalIcon,
    XIcon,
  },
  setup() {
    const openMenu = () => {
      const menu = document.getElementById("menu");
      const dots = document.getElementById("dots");
      const cross = document.getElementById("cross");

      menu.classList.remove("scale-y-0");
      menu.classList.add("scale-y-100");

      dots.classList.add("hidden");
      cross.classList.remove("hidden");
    };

    const closeMenu = () => {
      const menu = document.getElementById("menu");
      const dots = document.getElementById("dots");
      const cross = document.getElementById("cross");

      menu.classList.remove("scale-y-100");
      menu.classList.add("scale-y-0");

      dots.classList.remove("hidden");
      cross.classList.add("hidden");
    };

    const activateDarkMode = () => {
      document.documentElement.classList.add("dark");
      document.getElementById("moon").classList.add("hidden");
      document.getElementById("sun").classList.remove("hidden");
    };

    const deactivateDarkMode = () => {
      document.documentElement.classList.remove("dark");
      document.getElementById("moon").classList.remove("hidden");
      document.getElementById("sun").classList.add("hidden");
    };

    return {
      openMenu,
      closeMenu,
      activateDarkMode,
      deactivateDarkMode,
    };
  },
};
</script>

<style>
</style>