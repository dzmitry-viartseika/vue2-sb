<template>
  <div id="app">
    <bread-crumbs :items="breadCrumbs"/>
    <router-view />
  </div>
</template>

<script>
import BreadCrumbs from './components/Elements/BreadCrumbs';

export default {
  name: 'App',
  components: {
    BreadCrumbs,
  },
  computed: {
    breadCrumbs() {
      return [
        { name: 'Главная', route: '/' },
        { name: 'Второстепенная', route: '/about' },
      ];
    },
  },
}
</script>

<style>

</style>
