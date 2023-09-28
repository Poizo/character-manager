<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h1>
          Character manger - home
        </h1>
      </div>
    </div>
  </div>
</template>


<script lang="ts">

  import { Component, Vue, toNative } from "vue-facing-decorator";
  @Component({
    components: {},
    name: 'Home'
  })
  class Home extends Vue {


  }

  export default toNative(Home)


</script>

<style scoped></style>
