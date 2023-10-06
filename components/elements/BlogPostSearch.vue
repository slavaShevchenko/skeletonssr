<template>
  <div class="blog-search-item">
    <NuxtLink
      :to="`/blog/${categoryDef(blogSearchPost.category_id)}/${
        blogSearchPost.slug
      }/`">
      <div class="blog-search-item__title" v-html="blogSearchPost?.name"></div>
    </NuxtLink>
    <div class="blog-search-item__info">
      <div class="blog-search-item__info-date">
        {{ splitDate(blogSearchPost?.created_at) }}
      </div>
      <div class="blog-search-item__info-category">
        {{ blogSearchPost?.category?.name }}
      </div>
    </div>
    <div class="blog-search-item__text">
      {{ blogSearchPost?.short_description }}
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from '~/stores/index'
import { splitDate } from '@/api/functions'

const store = useMainStore()

const props = defineProps({
  blogSearchPost: Object,
})

function categoryDef(id) {
  return store.getCategories.find((item) => item.id == id).slug
}
</script>

<style scoped lang="scss">
.blog-search-item + .blog-search-item {
  margin-top: 30px;
}
.blog-search-item {
  padding-bottom: 30px;
  border-bottom: 1px solid var(--unactive);

  &__title {
    display: inline;
    margin-bottom: 12px;
    font-family: 'Transducer-bold';
    font-size: var(--text36);
    line-height: 1.1;
    color: var(--main);
    text-transform: uppercase;
    transition: color 0.4s ease;

    &:hover {
      color: var(--red);
    }

    &:deep span {
      background-color: var(--red);
      color: var(--main);
    }
  }

  &__info {
    display: flex;
    column-gap: 12px;
    margin-bottom: 12px;
    font-family: 'Transducer-bold';
    font-size: var(--text14);
    line-height: 1.2;

    &-date {
      flex: 0 0 max-content;
      color: var(--unactive);
    }

    &-category {
      color: var(--red);
    }
  }

  &__text {
    font-size: var(--text20);
    line-height: 1.5;
    color: var(--main);
  }
}

@media (max-width: 1023px) {
  .blog-item + .blog-item {
    margin-top: 32px;
  }
  .blog-item {
    &__info {
      font-size: 12px;
    }
  }
}
</style>
