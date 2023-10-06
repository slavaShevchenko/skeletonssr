<template>
  <div class="blog-item">
    <div class="blog-item__image" :class="{ noImage: !blogPost.image }">
      <NuxtLink
        :to="`/blog/${categoryDef(blogPost.category_id)}/${blogPost.slug}/`">
        <nuxt-img
          :src="blogPost.image ? BASE_URL + blogPost.image : noImage"
          alt="hot post in blog page" />
      </NuxtLink>
    </div>
    <div class="blog-item__info">
      <div class="blog-item__info-date">
        {{ splitDate(blogPost.created_at) }}
      </div>
      <div class="blog-item__info-tags">
        <div
          class="blog-item__info-tags-item"
          v-for="tag in blogPost.tags"
          :key="`${tag.name}${tag.id}`">
          {{ '#' + tag.name }}
        </div>
      </div>
    </div>
    <NuxtLink
      :to="`/blog/${categoryDef(blogPost.category_id)}/${blogPost.slug}/`">
      <div class="blog-item__title">{{ blogPost.name }}</div>
    </NuxtLink>

    <div class="blog-item__text">{{ blogPost.short_description }}</div>
  </div>
</template>

<script setup>
import { useMainStore } from '~/stores/index'
import { BASE_URL } from '@/api/endpoints'
import noImage from '/image/noImage.png'

import { splitDate } from '@/api/functions'

const store = useMainStore()

const props = defineProps({
  blogPost: Object,
})

function categoryDef(id) {
  return store.getCategories.find((item) => item.id == id).slug
}
</script>

<style scoped lang="scss">
.blog-item {
  &__image {
    height: 320px;
    margin-bottom: 28px;
    border-radius: 4px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &.noImage {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;

      img {
        width: 40%;
        height: 40%;
        object-fit: contain;
      }
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

    &-tags {
      flex: 0 1 auto;
      flex-wrap: wrap;
      display: flex;
      column-gap: 12px;
      color: var(--red);
    }
  }

  &__title {
    margin-bottom: 12px;
    font-family: 'Transducer-bold';
    font-size: var(--text36);
    line-height: 1.1;
    color: var(--main);
    text-transform: uppercase;
    transition: color 0.4s ease;

    display: -webkit-box;
    display: box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
      color: var(--red);
    }
  }

  &__text {
    font-size: var(--text20);
    line-height: 1.5;
    color: var(--main);
    display: -webkit-box;
    display: box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

.blog-item__image:hover + .blog-item__info + a {
  .blog-item__title {
    color: var(--red);
  }
}

@media (max-width: 1023px) {
}
</style>
