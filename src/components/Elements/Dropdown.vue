<template>
  <div class="dropdown"
  >
    <div class="dropdown__select">
      <div class="dropdown__label">
        <div class="dropdown__wrap"
             @click="toggle()"
        >
                <span class="dropdown__text">
                {{ value }}
              </span>
          <svg class="dropdown__arrow"
               :class="{'dropdown__arrow_down': !visible}" width="12" height="6" viewBox="0 0 12 6"
               fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.2221 5.7221L5.99999 2.55552L1.77784 5.7221C1.28716 6.0904 0.590339
             5.9903 0.222328 5.4999C-0.145971 5.00903 -0.046343 4.31268 0.444531 3.94438L5.33338
              0.277743C5.53082 0.129544 5.76545 0.055541 5.99999 0.055541C6.23453 0.055541
               6.46916 0.129544 6.6666 0.277743L11.5554 3.94438C12.0463 4.31268 12.1459
                5.00903 11.7776 5.4999C11.4096 5.99058 10.713 6.09059
                 10.2221 5.7221Z" fill="#276EF1"/>
          </svg>

        </div>
      </div>
    </div>
    <transition name="fade-el">
      <div class="dropdown-modal"
           :class="!visible ? 'dropdown-modal_hidden' : 'dropdown-modal_visible'">
        <div class="dropdown-modal__list">
          <div class="dropdown-modal__item"
               :class="{ 'dropdown-modal__item_current' : item === value }"
               v-for="item in list"
               @click="select(item.code)"
               :key="item.code"
          >
            {{ item.text }}
            <svg class="dropdown-modal__item-img" v-if="item.code === value" width="16" height="16"
                 viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 0C3.58125 0 0 3.58125 0 8C0 12.4187 3.58125 16 8 16C12.4187 16
               16 12.4187 16 8C16 3.58125 12.4187 0 8 0ZM11.7625 6.43125L7.90625 10.2875L7.1875
                11.0063C6.79063 11.4031 6.14687 11.4031 5.75 11.0063L4.23438 9.4875C4.03438
                 9.29063 3.9375 9.02812 3.9375 8.76875C3.9375 8.50938 4.0375 8.25 4.23438
                  8.05C4.63125 7.65313 5.275 7.65313 5.67188 8.05L6.47188 8.85L10.3281
                   4.99375C10.725 4.59688 11.3687 4.59688 11.7656 4.99375C12.1594
                    5.39062 12.1594 6.03438 11.7625 6.43125Z" fill="#276EF1"/>
            </svg>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'dropdown',
  data: () => ({
    visible: false,
    valueDef: '',
  }),
  props: {
    dropdownOptions: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    list() {
      return this.dropdownOptions.list;
    },
    value: {
      get() {
        return this.valueDef;
      },
      set(data) {
        this.valueDef = data;
      },
    },
  },
  methods: {
    toggle() {
      this.visible = !this.visible;
    },
    select(code) {
      this.value = code;
      this.visible = false;
    },
    close(e) {
      // console.log('!this.$el.contains(e.target)', !this.$el.contains(e.target));
      if (!this.$el.contains(e.target)) {
        this.visible = false;
      }
    },
  },
  beforeMount() {
    this.value = 'Ru';
  },
  mounted() {
    document.addEventListener('click', this.close);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.close);
  },
};
</script>

<style scoped>
.dropdown {
  min-width: 170px;
  width: 100%;
  text-align: right;
  position: relative;
  padding-right: 15px;
  border-right: 1px solid rgba(39, 110, 241, .08);
}
.dropdown__wrap {
  min-width: 50px;
  cursor: pointer;
  transition: opacity 0.15s ease-in;
}
.dropdown__wrap:hover {
  opacity: 0.8;
}
.dropdown__arrow {
  position: relative;
  top: -2px;
}
.dropdown__arrow_down {
  transform: rotate(-180deg);
}
.dropdown__text {
  margin-right: 6px;
  display: inline-block;
  color: #276ef1;
}
.dropdown__label {
  display: flex;
  justify-content: flex-end;
}
.dropdown-modal_hidden {
  visibility: hidden;
}
.dropdown-modal_visible {
  visibility: visible;
}
.dropdown-modal__list {
  width: 100%;
  max-width: 170px;
  font-size: 16px;
  position: absolute;
  z-index: 1;
  background: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, .06);
  border-radius: 2px;
  text-align: left;
  padding: 2px 0;
  top: 21px;
  right: 0;
}
.dropdown-modal__item {
  padding: 11px 12px;
  color: #000;
  position: relative;
  cursor: pointer;
  height: 42px;
  transition: background-color 0.15s ease-in;
  display: flex;
  align-items: center;
}
.dropdown-modal__item_current {
  background: #f8f8f8;
}
.dropdown-modal__item-img {
  position: absolute;
  right: 11px;
  top: 13px;
}
.dropdown-modal__item:hover {
  background-color: #f8f8f8;
}

</style>
