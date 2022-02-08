<template>
  <label
      class="ub-checkbox"
      @click="toggleValue($event)"
  >
    <input
        v-model="statusCheckbox"
        class="ub-checkbox__input"
        type="checkbox"
        :name="name"
    >
    <i
        :class="{'ub-icon-check-mark': value}"
        class="ub-checkbox__icon"
    ></i>
    <template v-if="checkboxText">
      <textInput
          v-if="stepsField"
          :typeInput="'text'"
          :autofocus="true"
          class="ub-checkbox__text-field"
          :value.sync="checkboxTextModel"
          :placeholderText="$t('elements.checkbox')"
          @inputFocusStatus="$emit('inputFocusStatus', $event)"
      />
      <span
          v-else
          :class="checkboxValueClass ? `ub-checkbox__value ${checkboxValueClass}` : 'ub-checkbox__value'"
      >
        {{ checkboxText }}
      </span>
    </template>
  </label>
</template>

<script>
import textInput from '@/components/fields/textInput';
export default {
  name: 'CheckBox',
  components: {
    textInput,
  },
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
    checkboxTextModel: {
      get() {
        return this.checkboxText;
      },
      set(data) {
        this.$emit('update:checkboxText', data);
      },
    },
    statusCheckbox: {
      get() {
        return this.value;
      },
      set(data) {
        this.$emit('changeCheckBox', data);
        this.$emit('update:value', data);
      },
    },
  },
  methods: {
    toggleValue(e) {
      if (this.stepsField) {
        e.stopPropagation();
        e.preventDefault();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../sass/variables";
.ub-checkbox {
  display: flex;
  align-items: center;
  cursor: pointer;
  width: auto;
  &__icon {
    display: inline-block;
    box-sizing: border-box;
    width: 16px;
    height: 16px;
    border-radius: $borderRadiusSmall;
    position: relative;
    top: -1px;
    border: 1px solid $color-dodger-blue;
    color: $color-white;
    &:before {
      margin-left: .05em;
      font-weight: bold;
    }
  }
  &__input {
    position: absolute;
    transform: scale(0);
    &:checked {
      + .ub-checkbox__icon {
        background-color: $color-dodger-blue;
        border-color: $color-dodger-blue;
        font-size: $font-size-md;
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 2px;
      }
      + .ub-checkbox__value {
        color: $color-dodger-blue;
        + .ub-checkbox__icon_confirm {
          color: $color-dodger-blue;
          opacity: 1;
        }
      }
    }
  }
  &__value {
    position: relative;
    top: -1px;
    margin-left: 8px;
    white-space: nowrap;
    user-select: none;
    color: $color-black;
    line-height: 1.5;
    font: $font-size-md $font-global;
    &_font {
      font-size: $font-size-md;
      top: 0;
    }
    &_big {
      font: 18px $font-global;
    }
  }
  &__text-field {
    margin-left: 6px;
    flex-grow: 1;
  }
  &:hover {
    .ub-checkbox__icon {
      border-color: $color-dodger-blue;
    }
  }
}
</style>
