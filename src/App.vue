<template>
  <div id="app">
    <button-template
      @handleClick="handleClick"
      button-text="Button text"
      background="red"
    />
  </div>
</template>

<script>
import ButtonTemplate from './components/Elements/ButtonTemplate';

export default {
  name: 'App',
  components: {
    ButtonTemplate,
  },
  methods: {
    handleClick() {
      console.log('handleClick')
      alert('wertey')
    }
  }
}
</script>

<style>

</style>
