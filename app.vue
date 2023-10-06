<template>
  <HeaderGlobal />
  <NuxtPage />
  <template v-if="store.getSoloScreen">
    <FooterGlobal />
  </template>
  <Transition name="loader">
    <LoaderGlobal v-if="store.getLoader" />
  </Transition>
  <Transition name="loader">
    <FormSendedGlobal
      v-if="store.getFormSended"
      v-bind:formResult="store.getFormSended" />
  </Transition>
  <Transition name="loader">
    <FirstLoadGlobal v-if="store.getFirstLoad" />
  </Transition>
</template>

<script setup>
import { useMainStore } from '~/stores/index'
import {
  DEPARTMENTS_ENDPOINT,
  BLOG_CATEGORIES_ENDPOINT,
  BLOG_HOT_NEWS_ENDPOINT,
} from '@/api/endpoints'

const store = useMainStore()
const router = useRouter()
const route = useRoute()
const url = useRequestURL()

const [departments, categories, hotNews] = await Promise.all([
  useFetch(DEPARTMENTS_ENDPOINT, {
    lazy: true,
  }),
  useFetch(BLOG_CATEGORIES_ENDPOINT, {
    lazy: true,
  }),
  useFetch(BLOG_HOT_NEWS_ENDPOINT, {
    lazy: true,
  }),
])

store.setData(departments.data.value.data)
store.setCategories(categories.data.value.data)
store.setHotNews(hotNews.data.value.data)

const formationDepartments = () => {
  const keysForDepartments = ['id', 'name', 'image', 'description']

  const formatedData = store.getData.map((item) => {
    const newObj = {}
    keysForDepartments.forEach((key) => {
      newObj[key] = item[key]
    })
    return newObj
  })

  return formatedData
}
const formationPositions = () => {
  const formatedData = store.getFilterCategory
    ? store.getData.find((item) => item.id === store.getFilterCategory)
        .positions
    : store.getData.map((obj) => obj.positions).flat()

  return store.getFilterSearch.trim()
    ? formationSearchResult(formatedData)
    : formatedData
}
function formationSearchResult(data) {
  const filteredData = data.filter((item) =>
    item.title.toLowerCase().includes(store.getFilterSearch.toLowerCase())
  )
  return filteredData
}

store.setDepartments(formationDepartments())
store.setPositions(formationPositions())

router.afterEach((to) => {
  store.setBurgerState(false)
  store.setFilterCategory(0)
  store.setFilterSearch('')
  store.setSwiperPosition(0)
})

router.beforeEach((to, from, next) => {
  store.setLoader(true)
  useHead({
    link: [
      {
        rel: 'canonical',
        href: url.origin + to.path,
      },
    ],
  })
  if (to.name === 'index') {
    store.setSoloScreen(false)
  } else {
    store.setSoloScreen(true)
  }
  setTimeout(() => {
    next()
  }, 200)
})

useHead({
  link: [
    {
      rel: 'canonical',
      href: url.origin + route.path,
    },
  ],
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    {
      name: 'robots',
      content: 'noindex, nofollow',
    },
  ],
})

onMounted(() => {
  const isPageRefreshed = performance.navigation.type === 1

  if (!sessionStorage.getItem('hasVisited') || isPageRefreshed) {
    store.setFirstLoad(true)
    sessionStorage.setItem('hasVisited', 'true')
  }
})

watch(
  () => store.getFilterCategory,
  () => {
    store.setPositions(formationPositions())
  }
)
watch(
  () => store.getFilterSearch,
  () => {
    store.setPositions(formationPositions())
  }
)
</script>

<style lang="scss">
.loader-enter-active,
.loader-leave-active {
  transition: all 0.2s ease-in-out;
}
.loader-enter-from {
  opacity: 0;
}
.loader-enter-to {
  opacity: 1;
}
.loader-leave-from {
  opacity: 1;
}
.loader-leave-to {
  opacity: 0;
}

@import '~/assets/style.scss';
</style>
