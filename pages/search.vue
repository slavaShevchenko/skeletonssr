<template>
  <div class="search-page">
    <div class="wrapper">
      <div class="search-page__search">
        <elementsSearch
          @submitSearch="goToSearchPage"
          placeholder="Search"
          :value="searchQuery" />
      </div>

      <template v-if="searchResultWithHighlight.length">
        <blocksBlogSearchContent :searchResult="searchResultWithHighlight" />
      </template>
      <template v-else>
        <blocksEmptySearch />
      </template>

      <blocksPagination
        :totalPosts="totalPosts"
        :postsPerPage="postsPerPage"
        :paginationActivePage="paginationActivePage"
        @changePaginationEmit="changePagination" />
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from '~/stores/index'

import { BLOG_ALL_NEWS_ENDPOINT } from '@/api/endpoints'
import { formatRoute, scrollToTop } from '@/api/functions'

const store = useMainStore()
const route = useRoute()
const router = useRouter()
const searchResultWithHighlight = reactive([])
const totalPosts = ref(null)
const postsPerPage = ref(5)
const paginationActivePage = ref(1)
const searchQuery = computed(() => route.query.s)

useHead({
  title: 'Search',
})

const { data } = await useFetch(BLOG_ALL_NEWS_ENDPOINT, {
  query: {
    per_page: postsPerPage,
    page: paginationActivePage,
    search: searchQuery,
  },
  lazy: true,
  server: false,
  onRequest() {
    store.setLoader(true)
  },
  onResponse({ request, response }) {
    searchQuery.value && getData(response._data)
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
  searchResultWithHighlight.splice(0, searchResultWithHighlight.length)
  searchResultWithHighlight.push(
    ...wrapSubstringWithSpan(data, searchQuery.value)
  )
  scrollToTop()
  setTimeout(() => {
    store.setLoader(false)
  }, 200)
}

function wrapSubstringWithSpan(array, substring) {
  return array.map((obj) => {
    const { name } = obj
    const regex = new RegExp(substring, 'gi')
    if (regex.test(name)) {
      const wrappedName = name.replace(
        regex,
        (matchedSubstring) => `<span>${matchedSubstring}</span>`
      )
      return { ...obj, name: wrappedName }
    }
    return obj
  })
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
.search-page {
  padding-top: var(--vertical90);
  padding-bottom: var(--vertical150);

  &__search {
    margin-bottom: var(--vertical90);
  }

  &__pagination {
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
}

@media (max-width: 767px) {
  .search-page {
    padding-top: 0;
  }
}
</style>
