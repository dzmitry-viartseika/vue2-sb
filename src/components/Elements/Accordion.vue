<template>
  <div class="accordion">
    <ul>
      <li v-for="item in items" @click="toggle(item.id)" :key="item.title">
        <div class="arrow_box" :class="{'arrow_box--open' : activeItem === item.id}"></div>
        {{item.title}}
        <transition>
          <div v-if="activeItem === item.id" class="item">
            {{item.content}}
          </div>
        </transition>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'accordion',
  props: ['items'],
  data: () => ({
    activeItem: -1,
  }),
  methods: {
    toggle(id) {
      this.activeItem = this.activeItem === id ? -1 : id;
    },
  },
};
</script>

<style scoped>
</style>
