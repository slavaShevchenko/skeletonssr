<template>
  <div class="search-page__content">
    <elementsBlogPostSearch
      v-for="post in searchResult"
      :key="post.id"
      :blogSearchPost="post" />
  </div>
</template>

<script setup>
const props = defineProps({
  searchResult: Object,
})
</script>
