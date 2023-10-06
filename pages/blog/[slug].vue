<template>
  <div class="blog">
    <div class="wrapper">
      <elementsHeader class="top-header">
        <template #header
          ><h1>{{ activeCategory?.name }}</h1></template
        >
      </elementsHeader>

      <div class="blog__tags">
        <template
          v-for="tag in activeCategory?.tags"
          :key="`${tag.name}${tag.id}`">
          <div
            class="blog__tags-item"
            v-if="formatRoute(tag.name)"
            @click="changeTag(tag.id)"
            :class="{ active: tag.id == tagId }">
            {{ `#${tag.name}` }}
          </div>
        </template>
      </div>

      <div class="blog__content">
        <template v-if="posts.length">
          <elementsBlogPost
            v-for="post in posts"
            :key="post.id"
            :blogPost="post" />
        </template>
        <template v-else>
          <blocksEmptySearch />
        </template>
      </div>

      <blocksPagination
        :totalPosts="totalPosts"
        :postsPerPage="postsPerPage"
        :paginationActivePage="paginationActivePage"
        @changePaginationEmit="changePagination" />

      <blocksSwiperHotNews />
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from '~/stores/index'

import { BLOG_ALL_NEWS_ENDPOINT } from '@/api/endpoints'
import { formatRoute, scrollToTop } from '@/api/functions'

const route = useRoute()
const store = useMainStore()
const posts = reactive([])
const totalPosts = ref()
const postsPerPage = ref(5)
const paginationActivePage = ref(1)
const categoryId = categoryDef(route.params.slug)
const activeCategory = store.getCategories.find(
  (item) => item?.id == categoryId
)
const tagId = ref(0)

useHead({
  title: activeCategory?.name,
  meta: [
    {
      name: 'description',
      content:
        'Latest news from HR & Tech field provided by Skeleton Crew 360 business-building platform',
    },
  ],
})

await useFetch(`${BLOG_ALL_NEWS_ENDPOINT}`, {
  query: {
    per_page: postsPerPage,
    page: paginationActivePage,
    category: categoryId,
    tags: tagId,
  },
  lazy: true,
  server: false,
  onRequest() {
    store.setLoader(true)
  },
  onResponse({ request, response }) {
    if (activeCategory) {
      getData(response._data)
    } else {
      navigateTo('/404', { redirectCode: 301 })
    }
  },
  onRequestError() {
    navigateTo('/404', { redirectCode: 301 })
  },
  onResponseError() {
    navigateTo('/404', { redirectCode: 301 })
  },
})

function getData({ data, count }) {
  totalPosts.value = count
  posts.splice(0, posts.length)
  posts.push(...data)
  scrollToTop()
  setTimeout(() => {
    store.setLoader(false)
  }, 200)
}

function categoryDef(slug) {
  return store.getCategories.find((item) => item.slug == slug)?.id
}

function changePagination(id) {
  if (id != '...') {
    paginationActivePage.value = id
  }
}

function changeTag(id) {
  paginationActivePage.value = 1
  tagId.value = id
}
</script>

<style scoped lang="scss">
.blog {
  padding-top: var(--vertical90);
  padding-bottom: var(--vertical150);

  &:deep .header.top-header {
    max-width: min-content;
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 20px;
    text-align: left;

    .header__h {
      white-space: nowrap;
    }
  }

  &__content {
    margin-top: var(--vertical90);
  }

  &__tags {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    font-family: 'Transducer-bold';
    font-size: var(--text20);
    color: var(--main);

    &-item {
      cursor: pointer;
      &.active {
        color: var(--red);
      }
    }
  }
}

@media (max-width: 767px) {
  .blog {
    padding-top: 0;
  }
}
</style>
