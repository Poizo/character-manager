<template>
  <label class="textfield" :class="{'-error': isOnError}" :for="inputId">
    <input class="textfield__field" ref="inputRef" :id="inputId" :type="inputType" @input="inputchanged" v-model="internalValue">
  </label>
</template>

<script lang="ts">
import { ObjectHelper } from "../../../../helpers/object.helper";
import { Component, Emit, Prop, Ref, Vue, toNative } from "vue-facing-decorator";

@Component({
  components: {},
  name: 'Texfield'
})
class Texfield extends Vue {

  @Ref
  readonly inputRef!: HTMLInputElement

  @Emit
  inputchange: {inputEvent: InputEvent, value: string};

  @Prop() inputId?: string = ObjectHelper.generateUUIDv4();
  @Prop() inputType?: 'text' | 'password' | 'number' | 'email' = 'text';
  @Prop() value?: string;
  @Prop() isOnError? = false;

  internalValue: string = '';

  mounted() {
    this.internalValue = this.value ? this.value : this.internalValue;
  }

  inputchanged(e: Event) {
    this.$emit('inputchange', {inputEvent: e, value: this.internalValue});
  }
}

export default toNative(Texfield);

</script>

<style></style>