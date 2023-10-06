<template>
  <div class="blog">
    <div class="wrapper">
      <elementsHeader class="top-header">
        <template #header
          ><h1>Skeleton <span>blog</span></h1></template
        >
        <template #text>
          Want to know all our (and not only our) secrets? Welcome to our
          delightful corner of the internet - our blog's sanctuary. Here we talk
          about everything - HR branding, talent allure, emotional engagement
          mastery, and more. So, get ready to be informed, inspired, empowered
          and let the revelations begin!
        </template>
      </elementsHeader>

      <div class="blog__search">
        <elementsSearch @submitSearch="goToSearchPage" placeholder="Search" />
      </div>

      <blocksSwiperCategory :categories="store.getCategories" />

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
import { scrollToTop } from '@/api/functions'

useHead({
  title: 'Blog',
  meta: [
    {
      name: 'description',
      content:
        'Latest Tech news and HR insights for your growth and development provided by Skeleton Crew 360 business-building platform',
    },
  ],
})

const store = useMainStore()
const router = useRouter()
const posts = reactive([])
const totalPosts = ref(null)
const postsPerPage = ref(5)
const paginationActivePage = ref(1)

await useFetch(BLOG_ALL_NEWS_ENDPOINT, {
  query: { per_page: postsPerPage, page: paginationActivePage },
  lazy: true,
  server: false,
  onRequest() {
    store.setLoader(true)
  },
  onResponse({ request, response }) {
    getData(response._data)
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

function goToSearchPage(search) {
  paginationActivePage.value = 1
  router.push({ path: '/search', query: { s: search } })
}

function changePagination(id) {
  paginationActivePage.value = id
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
    text-align: left;

    .header__h {
      white-space: nowrap;
    }
  }

  &__search {
    margin-bottom: 20px;
  }
}

@media (max-width: 767px) {
  .blog {
    padding-top: 0;
  }
}
</style>
