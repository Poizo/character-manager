<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h1>
          Character manger
        </h1>
      </div>
    </div>
    <div class="row">
      <div class="col-12 flex">
        <div class="task-card  mr-4">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae vero necessitatibus facilis illo incidunt
              ipsum inventore quibusdam eum, illum a maxime pariatur veritatis earum ut accusantium, provident dicta
              aliquam dolores.
            </div>
          </div>

          <!-- CARD FOOT -->
          <div class="task-card__foot">
            <div class="task-card__date">
              01/01/2020
            </div>
          </div>
        </div>

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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae vero necessitatibus facilis illo incidunt
              ipsum inventore quibusdam eum, illum a maxime pariatur veritatis earum ut accusantium, provident dicta
              aliquam dolores.
            </div>
          </div>

          <!-- CARD FOOT -->
          <div class="task-card__foot">
            <div class="task-card__date">
              01/01/2020
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <HelloWorld msg="Vite + Vue" /> -->
</template>

<style scoped></style>
