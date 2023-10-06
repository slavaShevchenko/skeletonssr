<template>
  <div class="blog-item">
    <div class="blog-item__col">
      <div class="blog-item__image" :class="{ noImage: !blogPost.image }">
        <NuxtLink
          :to="`/blog/${categoryDef(blogPost.category_id)}/${blogPost.slug}/`">
          <nuxt-img
            :src="blogPost.image ? BASE_URL + blogPost.image : noImage"
            @mouseenter="activeHover"
            @mouseleave="unActiveHover"
            alt="post in blog page" />
        </NuxtLink>
      </div>
    </div>
    <div class="blog-item__col">
      <div class="blog-item__row">
        <NuxtLink
          :to="`/blog/${categoryDef(blogPost.category_id)}/${blogPost.slug}/`">
          <div class="blog-item__title" :class="{ active: hoverBlogItem }">
            {{ blogPost.name }}
          </div>
        </NuxtLink>
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
        <div class="blog-item__text">{{ blogPost.short_description }}</div>
      </div>
      <div class="blog-item__row">
        <elementsButton
          class="button__trans-white"
          :router-link="`/blog/${categoryDef(blogPost.category_id)}/${
            blogPost.slug
          }/`">
          <template #text>Read more</template>
          <template #postIcon>
            <svgArrow />
          </template>
        </elementsButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from '~/stores/index'
import { BASE_URL } from '@/api/endpoints'
import noImage from '/image/noImage.png'

import { splitDate } from '@/api/functions'

const store = useMainStore()
const hoverBlogItem = ref(false)

const props = defineProps({
  blogPost: Object,
})

function categoryDef(id) {
  return store.getCategories.find((item) => item.id == id).slug
}

function activeHover() {
  hoverBlogItem.value = true
}
function unActiveHover() {
  hoverBlogItem.value = false
}
</script>

<style scoped lang="scss">
.blog-item + .blog-item {
  margin-top: 48px;
}
.blog-item {
  display: flex;
  column-gap: 40px;
  height: 344px;

  &__col {
    flex: 0 1 50%;
    display: flex;
    flex-direction: column;
  }

  &__col:last-child {
    padding-top: 12px;
    padding-bottom: 12px;
  }

  &__row:first-child {
    flex: 1 0 auto;
  }

  &__image {
    height: 100%;
    border-radius: 20px;
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
      background-color: rgba(255, 255, 255, 0.1);
      text-align: center;

      img {
        width: 40%;
        height: 40%;
        object-fit: contain;
      }
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

    &.active,
    &:hover {
      color: var(--red);
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

  &__text {
    font-size: var(--text20);
    line-height: 1.5;
    color: var(--main);
    display: -webkit-box;
    display: box;
    -webkit-line-clamp: 3;
    line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

@media (max-width: 1023px) {
  .blog-item + .blog-item {
    margin-top: 32px;
  }
  .blog-item {
    display: block;
    height: auto;
    padding-bottom: 32px;
    border-bottom: 1px solid var(--unactive);

    &__col {
      display: block;
    }

    &__col:last-child {
      padding-top: 0;
      padding-bottom: 0;
    }

    &__row + &__row {
      display: flex;
      justify-content: center;
      padding-top: 28px;

      svg {
        display: none;
      }
    }

    &__image {
      margin-bottom: 20px;
    }

    &__title {
      display: block;
    }

    &__info {
      font-size: 12px;
    }
    &__text {
      display: block;
    }
  }
}
</style>
