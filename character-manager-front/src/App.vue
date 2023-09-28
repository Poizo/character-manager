<template>
  <div>
    
    <Lateral-Menu :isOpen="isMenuOpen" @closeMenu="closeMenu"></Lateral-Menu>
    
    <div class="relative" :class="{'pl-[300px]':isMenuOpen}">
        <button v-show="!isMenuOpen" @click="toggleMenu" class="button --action --primary" type="button">
          <span class="button__label">toggle menu</span>
        </button>
        <router-view></router-view>
    </div>

  </div>
</template>


<script lang="ts">

  import { Component, Vue, toNative } from "vue-facing-decorator";
  import Card from "./components/Card.vue";
  import LateralMenu from "./components/Lateral-Menu.vue";
  import { RouterView } from "vue-router";
  
  
  @Component({
    components: { LateralMenu, Card, RouterView },
    name: 'App'
  })
  class App extends Vue {

    public isMenuOpen= false;

    public toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    }

    public closeMenu() {
      this.isMenuOpen= false;
    }
  }

  export default toNative(App)

</script>

<style scoped></style>
