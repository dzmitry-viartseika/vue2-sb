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
    <hr>
    <dropdown :dropdownOptions="dropdownOptions"/>
    <hr>
<!--    // TODO сделать-->
<!--    <check-box-->
<!--        name="test text"-->
<!--        checkbox-text="Wertey"-->
<!--    />-->
    <hr>
    <app-file
        :file="file"
        @addNewFile="addNewFile"
    />
    <hr>
    <loader :isLoader="isLoader"/>
    <hr>
    <radio name="method" value="phone" label="Phone" id="phone" @input="changeRadioValue"></radio>
    <radio name="method" value="email" label="Email" id="email" @input="changeRadioValue"></radio>
  </div>
</template>

<script>
import ButtonTemplate from '../components/Elements/ButtonTemplate';
import InputTemplate from '../components/Elements/InputTemplate';
import Radio from '../components/Elements/Radio';
// import CheckBox from '../components/Elements/Сheckbox';
import AppFile from '../components/Elements/AppFile';
import ModalTemplate from '../components/Modals/ModalTemplate';
import Dropdown from '../components/Elements/Dropdown';
import Loader from '../components/Elements/Loader';

export default {
  name: 'Home',
  components: {
    ButtonTemplate,
    InputTemplate,
    ModalTemplate,
    Dropdown,
    // CheckBox,
    AppFile,
    Loader,
    Radio,
  },
  data: () => ({
    inputValue: '',
    autofocus: true,
    isVisibleModal: false,
    file: '',
    radioValue: '',
    selectedRadio: '',
    isLoader: true,
  }),
  created() {
    setTimeout(() => {
      this.isLoader = false;
    }, 1000)
  },
  computed: {
    settings() {
      return  {
        name: 'wertey'
      }
    },
    positionList() {
      return [
        {
          id: 1,
          position: 'left',
        },
        {
          id: 2,
          position: 'right',
        },
        {
          id: 3,
          position: 'center',
        },
      ]
    },
    dropdownOptions() {
      return {
        list: [
          {
            code: 'Ru',
            text: 'Russian',
          },
          {
            code: 'En',
            text: 'English',
          },
        ],
      };
    },
  },
  methods: {
    changeRadioValue(data) {
      this.radioValue = data;
    },
    handleClick() {
      this.isVisibleModal = true;
    },
    addNewFile(data) {
      this.file = data;
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
