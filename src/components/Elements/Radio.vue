<template lang="pug">
  div.lp__radio
    label.lp__radio-label(v-for="(item, index) in positionList" :key="index")
      input(type="radio" value="male" :name="radioSettingsDef.name")
      span
      div {{ item.position }}
</template>

<script>
export default {
  name: 'checkbox',
  props: ['positionList', 'settings'],
  computed: {
    radioSettingsDef() {
      return this.settings;
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/scss/variables.scss";

.lp__radio {
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  &-label {
    display: flex;
    align-items: center;
    font-size: 14px;
    position: relative;
    padding-left: 30px;
    margin-bottom: 14px;
    font-family: 'Open Sans', sans-serif;
    cursor: pointer;
    & input {
      display: none;
    }
    & span {
      width: 20px;
      height: 20px;
      border-radius: 50%;
      border: 3px solid $checkboxColor;
      display: block;
      position: absolute;
      left: 0;
      top: -4px;
      &:after {
        content: '';
        height: 8px;
        width: 8px;
        background: $checkboxColor;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%) scale(0);
        border-radius: 50%;
        transition: 300ms ease-in-out 0s;
      }
    }
    & input:checked ~ span:after {
      transform: translate(-50%,-50%) scale(1);
    }
  }
}


</style>
