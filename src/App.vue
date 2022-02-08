<template>
  <div id="app">
    <hr>
    <button-template
      @handleClick="handleClick"
      button-text="Button text"
      background="red"
    />
    <hr>
    inputValue={{ inputValue }}
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
  </div>
</template>

<script>
import ButtonTemplate from './components/Elements/ButtonTemplate';
import InputTemplate from './components/Elements/InputTemplate';

export default {
  name: 'App',
  components: {
    ButtonTemplate,
    InputTemplate,
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
      console.log('value', value)
      this.inputValue = value;
    },
    inputFocusStatus(data) {
      console.log('data', data)
      this.autofocus = data;
    }
  }
}
</script>

<style>

</style>
