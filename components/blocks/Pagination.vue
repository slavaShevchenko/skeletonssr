<template>
  <div class="blog__pagination" v-if="totalPosts > postsPerPage">
    <div
      class="blog__pagination-item"
      v-for="item in generatePagination(
        totalPosts,
        postsPerPage,
        paginationActivePage
      )"
      :key="item.index"
      :class="{ active: item.active, pointer: item.index != '...' }"
      @click="changePagination(item.index)">
      {{ item.index }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  totalPosts: Number,
  postsPerPage: Number,
  paginationActivePage: Number,
})
const emit = defineEmits(['changePaginationEmit'])

function changePagination(index) {
  emit('changePaginationEmit', index)
}

const generatePagination = (totalPosts, postsPerPage, activePage) => {
  const totalPages = Math.ceil(totalPosts / postsPerPage)
  const pageRange = 2
  const pagination = []

  for (let i = activePage - pageRange; i < activePage; i++) {
    if (i >= 1) {
      pagination.push({ index: i, active: false })
    }
  }

  pagination.push({ index: activePage, active: true })

  for (let i = activePage + 1; i <= activePage + pageRange; i++) {
    if (i <= totalPages) {
      pagination.push({ index: i, active: false })
    }
  }

  if (activePage + pageRange < totalPages - 2) {
    pagination.push({ index: '...', active: false })
  }

  if (activePage < totalPages - 4) {
    for (let i = totalPages - 1; i <= totalPages; i++) {
      pagination.push({
        index: i,
        active: false,
      })
    }
  }

  return pagination
}
</script>

<style scoped lang="scss">
.blog__pagination {
  display: flex;
  justify-content: center;
  column-gap: 20px;
  margin-top: var(--vertical90);
  font-size: var(--text20);
  color: var(--unactive);

  &-item {
    &.active {
      color: var(--red);
    }
    &.pointer {
      cursor: pointer;
    }
  }
}
@media (max-width: 1023px) {
}
</style>
