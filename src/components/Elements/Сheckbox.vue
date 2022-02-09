<template>
  <label
      class="app-checkbox"
  >
    <input
        v-model="statusCheckbox"
        class="app-checkbox__input"
        type="checkbox"
        :name="name"
    >
    <i
        :class="{'app-icon-check-mark': value}"
        class="app-checkbox__icon"
    ></i>
    <div>
      {{ checkboxText }}
    </div>
  </label>
</template>

<script>

export default {
  name: 'CheckBox',
  props: {
    value: {
      type: Boolean,
    },
    name: {
      type: String,
    },
    checkboxValueClass: {
      type: String,
    },
    checkboxText: {
      type: String,
    },
    tooltipLength: {
      type: Number,
    },
    stepsField: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    statusCheckbox: {
      get() {
        return this.value;
      },
      set(data) {
        this.$emit('changeCheckBox', data);
      },
    },
  },
};
</script>

<style scoped>
.app-checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  width: auto;
}
.app-checkbox__icon {
  display: inline-block;
  box-sizing: border-box;
  width: 16px;
  height: 16px;
  border-radius: 4px;
  position: relative;
  top: -1px;
  border: 1px solid blue;
  color: #fff;
}
.app-checkbox__icon:before {
  margin-left: 0.05em;
  font-weight: bold;
}
.app-checkbox__input {
  position: absolute;
  transform: scale(0);
}
.app-checkbox__input:checked + .app-checkbox__icon {
  background-color: blue;
  border-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-left: 2px;
}
.app-checkbox__input:checked + .app-checkbox__value {
  color: blue;
}
.app-checkbox__input:checked + .app-checkbox__value + .app-checkbox__icon_confirm {
  color: blue;
  opacity: 1;
}
.app-checkbox__value {
  position: relative;
  top: -1px;
  margin-left: 8px;
  white-space: nowrap;
  user-select: none;
  color: #000;
  line-height: 1.5;
}
.app-checkbox__value_font {
  top: 0;
}
.app-checkbox__text-field {
  margin-left: 6px;
  flex-grow: 1;
}
.app-checkbox:hover .app-checkbox__icon {
  border-color: blue;
}

</style>
