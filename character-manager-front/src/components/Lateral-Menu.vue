<template>
  <div>
    <div class="h-screen fixed z-50 top-0 left-0 bg-grey-00 shadow-lg w-[300px]"
      :class="{ 'left-0': isOpen, 'left-[-300px]': !isOpen }">
      <div class="p-2">
        <div class="w-10 h-9 fixed bottom-3 left-3" :class="{ 'opacity-25 hover:opacity-100': !isOpen }">
          <!-- <ds-button [type]="DS_ButtonTypeEnum.SECONDARY"
                [icon]="isLeftMenuOpen ? DS_IconsEnum.arrowLeft : DS_IconsEnum.arrowRight"
                [iconPlacement]="DS_button_icon_placement_enum.center"
                (clicked)="toggleLeftMenu()"></ds-button> -->
        </div>
      </div>
      <ul class="p-2">
        <li class="p-1">
          <a class="main-menu">
            <!-- <ds-icon [icon]="DS_IconsEnum.home" class="mr-2 "></ds-icon> -->
            Home
          </a>
        </li>
        <hr class="py-2">

      </ul>
    </div>
    <div v-show="isOpen" class="menu-overlay" @click="emitClose"></div>
  </div>
</template>

<script lang="ts">
import { Component, Emit, Prop, Vue, toNative } from "vue-facing-decorator";

@Component({})
class LateralMenu extends Vue {
  @Prop() isOpen?: boolean = false;
  public menuClassContainer = '';

  @Emit
  closeMenu: any;

  emitClose() {
    this.$emit('closeMenu');
  }
}

export default toNative(LateralMenu);

</script>

<style>
  .menu-overlay {
    @apply h-screen fixed z-50 top-0 bottom-0 right-0 bg-grey-01 opacity-25;
    left: 300px;
  }
</style>