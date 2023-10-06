<template>
  <div class="pagination">
    <div
      class="pagination__item"
      v-for="(item, index) in pagination"
      :key="item.id"
      :class="{ active: item.isActive }"
      @click="changePosition(index)">
      <span>{{ item.text }}</span>
    </div>
    <div class="pagination__dis" v-if="store.getSwiperTransition"></div>
  </div>
</template>

<script setup>
import { useMainStore } from '~/stores/index'

const store = useMainStore()

const pagination = reactive([
  {
    id: 1,
    isActive: true,
    text: 'skeleton Crew',
  },
  {
    id: 2,
    isActive: false,
    text: 'About us',
  },
  {
    id: 3,
    isActive: false,
    text: 'How it works',
  },
])

function changePosition(index) {
  pagination.find((item) => item.isActive === true).isActive = false
  pagination[index].isActive = true
  store.setSwiperPosition(index)
}
changePosition(store.getSwiperPosition)

watch(
  () => store.getSwiperPosition,
  (newValue) => {
    typeof newValue === 'number' && changePosition(newValue)
  }
)
</script>

<style scoped lang="scss">
.pagination {
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 16px;
  top: 300px;
  z-index: 20;
  user-select: none;

  &__dis {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
  }

  &::after,
  &::before {
    content: '';
    opacity: 0.5;
    width: 3px;
    height: 64px;
    background-color: var(--main);
    border-radius: 2px;
    position: absolute;
    left: 3px;
    top: 0;
    transform: translate(0, calc(-100% - 16px));
  }
  &::before {
    top: 100%;
    transform: translate(0, 16px);
  }

  &__item {
    margin: 12px 0;
    padding-left: 26px;
    font-size: var(--text20);
    line-height: 1.3;
    color: var(--unactive);
    text-transform: capitalize;
    position: relative;
    cursor: pointer;

    &::before {
      content: '';
      width: 10px;
      height: 10px;
      border-radius: 100%;
      background-color: var(--unactive);
      position: absolute;
      left: 0;
      top: 50%;
      transform: translate(0, -50%);
      transition: background-color 0.8s ease;
    }

    &::after {
      content: '';
      opacity: 0;
      width: 22px;
      height: 22px;
      border: 2px solid var(--main);
      border-radius: 100%;
      position: absolute;
      left: -6px;
      top: 50%;
      transform: translate(0, -50%);
      transition: opacity 0.8s ease;
    }

    &.active {
      font-family: 'Transducer-bold';
      color: var(--main);

      &::before {
        background-color: var(--red);
      }

      &::after {
        opacity: 1;
      }
    }
  }
}

@media (min-width: 2000px) {
  .pagination {
    top: 400px;
  }
}

@media (min-width: 2600px) {
  .pagination {
    top: 600px;

    &__item {
      font-size: 32px;
    }
  }
}
@media (max-width: 1279px) {
  .pagination {
    top: 250px;
  }
}
@media (max-width: 1023px) {
  .pagination {
    flex-direction: row;
    left: 50%;
    top: auto;
    bottom: 46px;
    z-index: 20;
    transform: translate(-50%, 0);

    &::after,
    &::before {
      display: none;
    }

    &__item {
      &::before {
        left: 50%;
        transform: translate(-50%, 50%);
      }
      &::after {
        display: none;
      }
      span {
        display: none;
      }
    }
  }
}
@media (max-height: 479px) {
  .pagination {
    bottom: 24px;
  }
}
</style>
