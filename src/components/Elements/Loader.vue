<template>
  <div class="app-loader" v-if="isLoader">
    <div class="app-loader__elem"></div>
  </div>
</template>

<script>
export default {
  name: 'accordion',
  props: {
    isLoader: {
      type: Boolean,
      default: false,
    }
  }
}
</script>

<style scoped>
.app-loader {
  width: 100%;
  height: 100%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  z-index: 1000;
}
.app-loader__elem {
  width: 28px;
  height: 28px;
  border: 4px solid transparent;
  border-top-color: gray;
  border-bottom-color: gray;
  border-radius: 50%;
  animation: loader-rotate 1s linear infinite;
  margin: -28px auto 0;
}
@keyframes loader-rotate {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
