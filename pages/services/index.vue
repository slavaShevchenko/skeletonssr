<template>
  <div class="services">
    <div class="wrapper">
      <elementsHeader>
        <template #header><h1>services</h1></template>
        <template #text
          >Want to know all our (and not only our) secrets? Welcome to our
          delightful corner of the internet - our blog's sanctuary. Here we talk
          about everything - HR branding, talent allure, emotional engagement
          mastery, and more. So, get ready to be informed, inspired, empowered
          and let the revelations begin!
        </template>
      </elementsHeader>

      <div class="blog__content">
        <template v-if="servicesData[0]">
          <div class="services-items">
            <elementsHotPosition
              v-for="item in servicesData"
              :position="item"
              :key="item?.id" />
          </div>
        </template>
        <template v-else>
          <blocksEmptySearch />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from '~/stores/index'
import { SERVICES_ENDPOINT } from '@/api/endpoints'

const store = useMainStore()
const servicesData = ref([])

useHead({
  title: 'Services',
  meta: [
    {
      name: 'description',
      content:
        'Skeleton crew’s team of experts helps to embody your business idea by providing strong market expertise and delivering best services in IT, People Management, Marketing and Design services',
    },
  ],
})

const { data } = await useFetch(SERVICES_ENDPOINT, {
  lazy: true,
  server: false,
  onResponse({ request, response }) {
    servicesData.value = response._data.data

    setTimeout(() => {
      store.setLoader(false)
    }, 200)
  },
  onRequestError() {
    navigateTo('/404', { redirectCode: 301 })
  },
  onResponseError() {
    navigateTo('/404', { redirectCode: 301 })
  },
})
</script>

<style scoped lang="scss">
.services {
  padding-top: var(--vertical90);
  padding-bottom: var(--vertical150);

  &-items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
}

@media (max-width: 767px) {
  .services {
    padding-top: 0;
    &-items {
      display: block;
    }
  }
}
</style>
