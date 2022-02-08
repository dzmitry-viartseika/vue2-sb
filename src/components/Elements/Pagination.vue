<template>
  <div class="pagination">
    <div class="pagination__wrap">
      <button class="pagination__button pagination__button_left"
              @click="page--; setCurrentPage(page)"
              v-if="page !== 1"
      >
        &#8249;
      </button>
      <template v-for="i in pageCount">
        <template
            v-if="i === 1 || i === pageCount ||
          (i <= currentPage + 1 && i >= currentPage - 1) ||
          (i === pageCount - 2 && currentPage === pageCount) ||
          (i === currentPage + 1 && currentPage === 1)"
        >
          <button
              class="pagination__button"
              :key="i"
              :class="{'pagination__button_active': i === currentPage}"
              @click="page = i; setCurrentPage(page)"
          >
            {{ i }}
          </button>
        </template>
        <template v-if="(i ===  currentPage - 2 && i > 1 && i < pageCount - 2) ||
         (i ===  currentPage + 2 && i < pageCount) ||
         (i === pageCount - 3 && currentPage === pageCount)
        "
        >
          ...
        </template>
      </template>
      <button @click="page++;setCurrentPage(page)"
              class="pagination__button pagination__button_right"
              v-if="page !== pageCount"
      >
        &#8250;
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapState, mapMutations } from 'vuex';

export default {
  name: 'v-pagination',
  data() {
    return {
      page: 1,
    };
  },
  computed: {
    ...mapGetters(['pageCount']),
    ...mapState(['currentPage']),
  },
  methods: {
    ...mapMutations(['setCurrentPage']),
  },
};
</script>

<style scoped lang="scss">
@import "src/assets/scss/variables";
.pagination {
  text-align: center;
  display: flex;
  justify-content: flex-end;
  margin-top: 18px;
  &__wrap {
    background: $color-white;
    color: $mainColor;
  }
  &__button {
    height: 27px;
    min-width: 24px;
    background: $color-white;
    transition: all .3s ease-in;
    cursor: pointer;
    box-sizing: border-box;
    outline: none;
    font-family: Manrope,sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 16px;
    color: $mainColor;
    &_left {
      border-radius: 5px 0 0 5px;
    }
    &_right {
      border-radius: 0 5px 5px 0;
    }
    &:hover {
      opacity: 0.8;
    }
    &_active {
      background: $mainColor;
      color: $color-white;
    }
  }
}
</style>
