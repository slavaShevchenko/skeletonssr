<template>
  <form class="search" @keydown.enter.prevent="submitSearch">
    <input
      type="text"
      class="search__input"
      v-model="searchValue"
      :placeholder="placeholder" />
    <div class="search__icon" @click="submitSearch">
      <svgSearch />
    </div>
  </form>
</template>

<script setup>
import debounce from 'lodash.debounce'

import { checkEmptyVar } from '~/api/functions'

const props = defineProps({
  placeholder: String,
  value: String,
})

const emit = defineEmits(['submitSearch', 'searchData'])

const searchValue = ref('')

function submitSearch() {
  checkEmptyVar(searchValue.value) && emit('submitSearch', searchValue.value)
}

watch(
  searchValue,
  debounce((newValue) => {
    emit('searchData', newValue)
  }, 500)
)

onMounted(() => {
  const { value } = props

  if (checkEmptyVar(value)) {
    searchValue.value = value
  }
})
</script>

<style scoped lang="scss">
.search {
  display: block;
  height: 48px;
  border: 1px solid var(--red);
  border-radius: 4px;
  position: relative;
  fill: var(--main);

  &__input {
    width: 100%;
    height: 100%;
    padding: 0 52px 0 20px;
    background-color: transparent;
    border: none;
    outline: none;
    font-size: var(--text14);
    color: var(--main);
  }

  &__icon {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translate(0, -50%);
    cursor: pointer;
  }
}
</style>
