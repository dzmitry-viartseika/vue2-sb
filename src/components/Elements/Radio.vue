<template>
  <div class="custom-radio" :class="{ inverted: inverted }">
    <input type="radio"
           :name="name"
           :class="className"
           :id="id"
           :checked="checked"
           :value="value"
           :required="required"
           @change="updateInput"
    />
    <label :for="id">{{ label }}
    </label>
  </div>
</template>

<script>

export default {
  name: 'Radio',
  props: {
    name: {
      type: String,
      required: false
    },
    className: {
      type: String,
      required: false
    },
    id: {
      type: String,
      required: false
    },
    value: {
      type: String,
      required: false
    },
    required: {
      type: Boolean,
      required: false,
      default: false
    },
    checked: {
      type: Boolean,
      required: false,
      default: false
    },
    label: {
      type: String,
      required: true
    },
    inverted: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    updateInput(event) {
      console.log('1')
      this.$emit('input', event.target.value);
    }
  }
};
</script>

<style scoped>
.custom-radio {
  padding: 5px;
  margin: 5px auto;
}
.custom-radio input[type=radio], .custom-radio label {
  user-select: none;
  display: inline-block;
  vertical-align: middle;
}
.custom-radio input {
  display: none;
}
.custom-radio input[type=checkbox], .custom-radio input[type=radio] {
  -webkit-appearance: none;
  -webkit-border-radius: 0;
  transition: all 0.2s ease;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.custom-radio input[type=checkbox]:focus, .custom-radio input[type=radio]:focus {
  outline: 0;
}
.custom-radio input[type=checkbox]:active, .custom-radio input[type=radio]:active {
  outline: none;
}
.custom-radio input[type=checkbox]:hover, .custom-radio input[type=radio]:hover {
  outline: none;
}
.custom-radio input[type=radio] + label {
  font-size: 20px;
  cursor: pointer;
  padding-left: 28px;
  position: relative;
}
.custom-radio input[type=radio]:checked + label {
  color: #17aa1c;
  font-weight: bolder;
}
.custom-radio input[type=radio] + label:before {
  content: "";
  top: 2px;
  left: 0;
  width: 18px;
  height: 18px;
  position: absolute;
  background: #17aa1c;
  border-radius: 100%;
  transition: all 0.3s ease;
  box-shadow: inset 0 0 0 18px #e0e0e0;
}
.custom-radio input[type=radio]:checked + label:before {
  border: 1px solid #17aa1c;
  box-shadow: inset 0 0 0 4px #fff;
}
.custom-radio.inverted input[type=checkbox], .custom-radio.inverted input[type=radio] {
  border: 1px solid black;
}
.custom-radio.inverted input[type=checkbox]:focus, .custom-radio.inverted input[type=radio]:focus {
  border: 1px solid #000;
}
.custom-radio.inverted input[type=checkbox]:checked, .custom-radio.inverted input[type=radio]:checked {
  background: black;
}
</style>
