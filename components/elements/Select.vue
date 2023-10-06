<template>
  <div
    class="select"
    :class="{ open: selectState }"
    v-click-out-side="closeSelect">
    <div class="select__view" @click="toggleSelect">
      <div class="select__view-text">{{ selectValue }}</div>
      <div class="select__view-arrow">
        <svgArrowSelect />
      </div>
    </div>
    <Transition name="select">
      <div class="select__content-wrap" v-show="selectState">
        <div class="select__content">
          <div
            class="select__item"
            :class="{ active: index === 0 }"
            v-for="(item, index) in category"
            :key="item.id"
            :data-id="item.id"
            @click="selectChange">
            {{ item.name }}
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { clickOutSide as vClickOutSide } from '@mahdikhashan/vue3-click-outside'

const props = defineProps({
  category: Object,
})

const emit = defineEmits(['selectData'])

const selectState = ref(false)
const selectValue = ref('')

function toggleSelect() {
  selectState.value = !selectState.value
}

function closeSelect() {
  selectState.value = false
}

function selectChange({ target }) {
  const integerId = parseInt(target.dataset.id)

  selectValue.value = props.category.find((item) => item.id === integerId).name

  emit('selectData', integerId)
  closeSelect()
}

onMounted(() => {
  selectValue.value = props.category[0].name
})
</script>

<style scoped lang="scss">
.select {
  font-size: var(--text14);
  line-height: 1.3;
  position: relative;
  user-select: none;

  &__view {
    display: flex;
    align-items: center;
    height: 48px;
    border: 1px solid var(--red);
    border-radius: 4px;
    cursor: pointer;

    &-text {
      flex: 1 0 calc(100% - 50px);
      padding-left: 20px;
      color: var(--main);
    }

    &-arrow {
      flex: 1 0 50px;
      position: relative;
      fill: var(--main);

      svg {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%) rotate(0);
        transition: transform 0.3s ease;
      }
    }
  }

  &.open &__view-arrow svg {
    transform: translate(-50%, -50%) rotate(-180deg);
  }

  &__content {
    background-color: var(--black);
    border: 1px solid var(--red);
    border-radius: 4px;
    transition: all 0.3s ease;
    overflow: hidden;

    &-wrap {
      display: grid;
      width: 100%;
      padding-top: 2px;
      position: absolute;
      left: 0;
      top: 100%;
      z-index: 10;
      transition: all 0.3s ease;
    }
  }

  &__item {
    padding: 6px 20px;
    color: var(--unactive);
    cursor: pointer;
    transition: background-color 0.3s ease, color 0.3s ease;

    &:hover {
      background-color: var(--red);
      color: var(--main);
    }
  }
}

.select-enter-from .select__content {
  height: 0;
}
.select-enter-to .select__content {
  height: 100%;
}
.select-leave-from .select__content {
  height: 100%;
}
.select-leave-to .select__content {
  height: 0;
}
</style>
