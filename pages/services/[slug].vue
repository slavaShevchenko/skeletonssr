<template>
  <blocksServiceMain
    image="/image/skeleton6.webp"
    :title="data?.data?.header?.title"
    :description="data?.data?.header?.description" />
  <blocksExamples
    v-if="data?.data?.header?.title.toLowerCase() == 'design'"
    :examplesData="examples" />
  <blocksProcess
    :title="data?.data?.service_card_section?.title"
    :description="data?.data?.service_card_section?.description"
    :processData="data?.data?.service_card_section?.cards" />
  <blocksContactUs />
</template>

<script setup>
import { useMainStore } from '~/stores/index'
import { SEARCH_ENDPOINT } from '@/api/endpoints'

const route = useRoute()
const store = useMainStore()

const examples = [
  {
    title: 'yendis',
    description: 'UX/UI, marketing, development',
    image: '/image/example.png',
  },
  {
    title: 'bangobet',
    description: 'UX/UI, marketing, development',
    image: '/image/example1.png',
  },
]

const { data } = await useFetch(`${SEARCH_ENDPOINT}`, {
  query: { type: 'services', slug: route.params.slug },
  onResponse({ request, response }) {
    setTitle(response._data)
  },
  onRequestError() {
    navigateTo('/404', { redirectCode: 301 })
  },
  onResponseError() {
    navigateTo('/404', { redirectCode: 301 })
  },
})

function setTitle({ data }) {
  useHead({
    title: data?.meta_title,
    meta: [
      {
        name: 'description',
        content: data?.meta_description,
      },
    ],
  })
}

onMounted(() => {
  setTimeout(() => {
    store.setLoader(false)
  }, 200)
})
</script>
