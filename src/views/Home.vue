<template>
  <div id="app">
    <hr>
    <button-template
        @handleClick="handleClick"
        button-text="Button text"
        background="red"
    />
    <hr>
    <input-template
        placeholder-text="Enter your text"
        label-text="labelText"
        type-input="text"
        :autofocus="autofocus"
        :value="inputValue"
        @changeValue="changeValue"
        @inputFocusStatus="inputFocusStatus"
    />
    <hr>
    <modal-template />
  </div>
</template>

<script>
import ButtonTemplate from '../components/Elements/ButtonTemplate';
import InputTemplate from '../components/Elements/InputTemplate';
import ModalTemplate from '../components/Modals/ModalTemplate';

export default {
  name: 'Home',
  components: {
    ButtonTemplate,
    InputTemplate,
    ModalTemplate,
  },
  data: () => ({
    inputValue: '',
    autofocus: true,
  }),
  methods: {
    handleClick(e) {
      console.log('handleClick', e)
    },
    changeValue(value) {
      this.inputValue = value;
    },
    inputFocusStatus(data) {
      this.autofocus = data;
    }
  }
}
</script>

<style>

</style>
