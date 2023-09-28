<template>
  <div class="task-card">
    <!-- CARD HEAD -->
    <div class="task-card__head">
      <div class="task-card__title">
        <div class="task-card__title-partOne font-bold">
          Juke
        </div>
        <div class="task-card__title-partTwo">
          le Bricoleur
        </div>
      </div>

      <div class="task-card__actions">
        <button class="button --action --primary" type="button">
          <span class="button__label">bouton</span>
        </button>
      </div>
    </div>

    <!-- CARD BODY -->
    <div class="task-card__body">

      <div class="task-card__description">
        {{ msg }}
      </div>
    </div>

    <!-- CARD FOOT -->
    <div class="task-card__foot">
      <div class="task-card__date">
        01/01/2020
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, toNative } from "vue-facing-decorator";

@Component({})
class Card extends Vue {
  @Prop() readonly msg!: string;
}

export default toNative(Card);

</script>

<style></style>