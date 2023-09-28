<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-12">
        <h1>
          Character manger - Login
        </h1>
      </div>
    </div>
  </div>
</template>


<script lang="ts">

  import { Component, Vue, toNative } from "vue-facing-decorator";
  @Component({
    components: {},
    name: 'Login'
  })
  class Login extends Vue {

  }

  export default toNative(Login)


</script>

<style scoped></style>
