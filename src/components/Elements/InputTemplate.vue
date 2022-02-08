<template>
  <div>
    <div
        v-if="labelText"
        class="text-field__label"
    >
      {{ labelText }}
    </div>
    <div>
      <input
          ref="input"
          v-model="model"
          :type="typeInput"
          class="text-field__input"
          :autofocus="autofocus"
          :placeholder="placeholderText"
          :value="value"
          @focus="inputFocusStatus(true)"
          @blur="inputFocusStatus(false)"
          @keydown="handleEventClick($event)"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputTemplate',
  props: {
    value: {
      type: String,
      default: () => '',
    },
    labelText: {
      type: String,
      default: () => '',
    },
    placeholderText: {
      type: String,
      default: () => '',
    },
    typeInput: {
      type: String,
      default: () => 'text',
    },
    autofocus: {
      type: Boolean,
      default: () => false,
    },
  },
  computed: {
    model: {
      get() {
        return this.value;
      },
      set(data) {
        this.$emit('update:value', data);
      },
    },
  },
  mounted() {
    if (this.$refs !== undefined) {
      if (this.autofocus) {
        this.$refs.input.focus();
      }
    }
  },
  methods: {
    inputFocusStatus(data) {
      this.$emit('inputFocusStatus', data);
    },
    handleEventClick(e) {
      this.$emit('changeValue', e.target.value);
    },
  }
}
</script>

<style scoped>

</style>
