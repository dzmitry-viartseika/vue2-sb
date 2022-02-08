<template>
  <div class="app-breadcrumb">
    <div
        v-for="(item, index) in items"
        :key="item.name"
        class="app-breadcrumb__item"
        :class="{'app-breadcrumb__item--active': index === items.length -1}"
        @click="proceedTo(item.route)"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'BreadCrums',
  props: {
    items: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    proceedTo(route) {
      if (route === this.$route.path) return;
      this.$router.push(route);
    },
  },
};
</script>

<style scoped>
.app-breadcrumb {
  display: flex;
}

.app-breadcrumb__item {
  color: gray;
}

.app-breadcrumb__item + .app-breadcrumb__item {
  margin-left: 6px;
}

.app-breadcrumb__item:after {
  color: red;
  margin-right: 6px;
  content: '/';
}

.app-breadcrumb__item--active {
  color: green;
}
</style>
