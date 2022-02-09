<template>
  <div class="container">
    <div class="large-12 medium-12 small-12 cell">
      <label>File
        <input-template
            ref="file"
            placeholder-text="Enter your text"
            label-text="labelText"
            type-input="file"
            :value="file"
            @changeValue="handleFileUpload"
        />
      </label>
      <button-template
          v-if="isVisibleButton"
          @handleClick="submitFile"
          button-text="Add File"
      />
    </div>
  </div>
</template>

<script>
import ButtonTemplate from './ButtonTemplate';
import InputTemplate from './InputTemplate';

export default {
  name: "AppFile",
  components: {
    ButtonTemplate,
    InputTemplate,
  },
  props: {
    file: {
      type: String,
      required: true,
    },
    isVisibleButton: {
      type: Boolean,
      default: false,
    }
  },
  methods: {
    handleFileUpload() {
      if (this.$refs.file.files[0]) {
        this.$emit('addNewFile', this.$refs.file.files[0])
      }
    },
    submitFile() {
      let formData = new FormData();
      formData.append('file', this.file);
      // axios.post( '/single-file',
      //     formData,
      //     {
      //       headers: {
      //         'Content-Type': 'multipart/form-data'
      //       }
      //     }
      // ).then(function(){
      //   console.log('SUCCESS!!');
      // })
      // .catch(function(){
      //   console.log('FAILURE!!');
      // });
    }
  }
}
</script>
