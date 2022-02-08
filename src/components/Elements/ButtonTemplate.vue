<template>
  <button
      :class="classes"
      :style="{'backgroundColor': background}"
      @click="handleClick"
  >
    {{ buttonText }}
  </button>
</template>

<script>
export default {
  name: 'ButtonTemplate',
  props: {
    buttonText: {
      type: String,
      required: true,
    },
    filled: {
      type: Boolean,
      default: false,
    },
    background: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleClick(e) {
      this.$emit('handleClick', e);
    }
  },
  computed: {
    classes() {
      return this.filled ? 'app__button--filled' : 'app__button--outline';
    }
  }
}
</script>

<style scoped>
  .app__button {
    cursor: pointer;
  }

  .app__button--filled {
    border: 1px solid red;
    color: red;
  }

  .app__button--outline {
    border: none;
    background: white;
  }
</style>
