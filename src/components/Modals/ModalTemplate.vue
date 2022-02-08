<template>
  <div class="ui dimmer modals page"
       :class="[showModal ? 'visible active' : '']">
    <div class="ui modal"
         :class="[showModal ? 'visible active' : '']"
         :style="[showModal ? { display: 'block' } : { display: 'none' } ]">

      <i v-if="showCloseIcon" class="close icon" @click="close">X</i>

      <div class="header">
        <slot name="header"></slot>
      </div>

      <div class="content">
        <slot name="content"></slot>
      </div>

      <div class="actions">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalTemplate',
  model: {
    prop: 'showModal',
    event: 'changed'
  },
  props: {
    showModal: {
      required: true,
      type: Boolean,
      default: false
    },
    showCloseIcon: {
      type: Boolean,
      default: false
    },
  },
  methods: {
    close() {
      this.$emit('changed', false);
    }
  }
}
</script>
