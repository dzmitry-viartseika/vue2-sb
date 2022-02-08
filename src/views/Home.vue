<template>
  <div id="app">
    <hr>
    <button-template
        @handleClick="handleClick"
        button-text="Show Modal"
        background="red"
    />
    <hr>
    <input-template
        placeholder-text="Enter your text"
        label-text="labelText"
        type-input="text"
        :autofocus="autofocus"
        :value="inputValue"
        @changeValue="changeValue"
        @inputFocusStatus="inputFocusStatus"
    />
    <hr>
    <modal-template
      :show-modal="isVisibleModal"
      :show-close-icon="true"
      @changed="changeModalCondition"
    >
      <div slot="header">
        Header
      </div>
      <div slot="content">
        Content
      </div>
      <div slot="footer">
        <button-template
            @handleClick="changeModalCondition(false)"
            button-text="OK"
        />
      </div>
    </modal-template>
  </div>
</template>

<script>
import ButtonTemplate from '../components/Elements/ButtonTemplate';
import InputTemplate from '../components/Elements/InputTemplate';
import ModalTemplate from '../components/Modals/ModalTemplate';

export default {
  name: 'Home',
  components: {
    ButtonTemplate,
    InputTemplate,
    ModalTemplate,
  },
  data: () => ({
    inputValue: '',
    autofocus: true,
    isVisibleModal: false,
  }),
  methods: {
    handleClick() {
      this.isVisibleModal = true;
    },
    changeValue(value) {
      this.inputValue = value;
    },
    inputFocusStatus(data) {
      this.autofocus = data;
    },
    changeModalCondition(data) {
      this.isVisibleModal = data;
    }
  }
}
</script>

<style>

</style>
