<template>
  <div class="container-fluid pt-12">
    <div class="row">
      <div class="col-12">
        <h1 class="text-center py-4 text-grey-06">
          Login
        </h1>
      </div>
    </div>

    <div class="row">
      <div class="offset-4 col-4">
        <form @submit.prevent.stop="checkFormBeforeSubmit" class="p-2 rounded border border-grey-03 border-solid bg-grey-02 shadow">
          <div class="p-3">
            <label class="form-label" :for="emailId">Email:</label>
            <Texfield :inputId="emailId" :isOnError="!isValidEmail" @inputchange="emailChange"></Texfield>
          </div>

          <div class="p-3">
            <label class="form-label" :for="passwordId">Password:</label>
            <Texfield :inputId="passwordId" :inputType="'password'" :isOnError="!isPasswordNotEmpty" @inputchange="passwordChange"></Texfield>
          </div>

          <button class="button --action --primary">
            <span class="button__label">Go!</span>
          </button>
        </form>
      </div>
    </div>
  </div>
</template>


<script lang="ts">

import { Component, Vue, toNative, Inject } from "vue-facing-decorator";
import { ObjectHelper } from "../../../helpers/object.helper";
import { LoginService } from "../services/login.service";
import Texfield from "../components/forms/Textfield.vue";

@Component({
  components: { Texfield },
  name: 'Login'
})
class Login extends Vue {

  @Inject
  loginService: LoginService;


  emailId: string = `email-${ObjectHelper.generateUUIDv4()}`;
  email: string;
  passwordId: string = `pwd-${ObjectHelper.generateUUIDv4()}`;
  password: string;

  isValidEmail = true;
  isPasswordNotEmpty = true;

  emailChange(e: { inputEvent: InputEvent, value: string }) {
    this.email = e.value;
  }
  passwordChange(e: { inputEvent: InputEvent, value: string }) {
    this.password = e.value;
  }

  checkFormBeforeSubmit() {
    this.isValidEmail = ObjectHelper.isValidEmail(this.email);
    this.isPasswordNotEmpty = ObjectHelper.isStringAndNotEmpty(this.password);
    if (this.isPasswordNotEmpty && this.isValidEmail) {
      this.submitForm();
    }
  }

  async submitForm() {
    await this.loginService.login(this.email, this.password).then(user => {
      console.log(user);
      
      if (this.loginService.isConnected) {
        this.$router.push('/home') 
      }
    });

  }
}

export default toNative(Login)


</script>

<style scoped></style>
