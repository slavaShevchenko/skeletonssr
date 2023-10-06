<template>
  <div class="filter">
    <div class="filter__col">
      <div class="filter__text">Filter by department:</div>
    </div>
    <div class="filter__col">
      <elementsSelect :category="departments" @selectData="selectChange" />
    </div>
    <div class="filter__col">
      <elementsSearch @searchData="searchChange" placeholder="Search" />
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from '~/stores/index'
const store = useMainStore()
const departments = [
  {
    id: 0,
    name: 'All positions',
  },
]

store.getDepartments.forEach((item) => {
  departments.push({
    id: item.id,
    name: item.name,
  })
})

function selectChange(data) {
  store.setFilterCategory(data)
}
function searchChange(data) {
  store.setFilterSearch(data)
}
</script>

<style scoped lang="scss">
.filter {
  display: flex;
  align-items: center;
  column-gap: 20px;
  margin-bottom: 40px;

  &__col:first-child {
    flex: 0 0 auto;
    order: 1;
  }
  &__col:first-child + &__col {
    flex: 0 0 300px;
    order: 2;
  }
  &__col:last-child {
    flex: 1 1 auto;
    order: 3;
  }

  &__text {
    font-size: var(-text18);
    color: var(--main);
    text-align: center;
  }
}

@media (max-width: 1023px) {
  .filter {
    flex-direction: column;
    margin-bottom: 8px;

    &__col:first-child {
      flex: 1 0 100%;
      min-width: 100%;
    }
    &__col:first-child + &__col {
      flex: 1 0 100%;
      min-width: 100%;
      order: 3;
    }

    &__col:last-child {
      flex: 1 0 100%;
      order: 2;
      max-width: 100%;
      min-width: 100%;
    }

    &__col + &__col {
      margin-top: 10px;
    }
  }
}
</style>
