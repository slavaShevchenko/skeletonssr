<template>
  <div class="blog-post">
    <div class="wrapper">
      <div class="blog-post__wrap">
        <div class="blog-post__social">
          <div class="blog-post__social-wrap">
            <elementsSocial :column="true" />
          </div>
        </div>

        <div class="blog-post__content">
          <blocksBlogPostContent :post="post" />
        </div>
      </div>

      <div class="blog-post__news">
        <blocksSwiperHotNews />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from '~/stores/index'

import { SEARCH_ENDPOINT } from '@/api/endpoints'

const route = useRoute()
const store = useMainStore()
const post = ref()

const { data } = await useFetch(`${SEARCH_ENDPOINT}`, {
  query: { type: 'news', slug: route.params.slug },
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
    title: data?.name,
  })
}

onMounted(() => {
  post.value = data.value.data

  setTimeout(() => {
    store.setLoader(false)
  }, 200)

  const element = document.querySelector('.blog-post__social-wrap')
  const parentElement = element.parentElement

  document.addEventListener('scroll', function () {
    const commonHeight = window.innerHeight * 0.45 - 200

    const parentTop = parentElement.offsetTop - 132
    const parentHeight = parentElement.clientHeight
    const elementHeight = element.offsetHeight
    const maxTranslateY = parentHeight - elementHeight
    const translateY = Math.min(
      Math.max(0, window.scrollY - parentTop),
      maxTranslateY
    )

    if (translateY > commonHeight) {
      element.style.position = 'fixed'
      element.style.top = '140px'
    } else {
      element.style.position = 'sticky'
      element.style.top = '45vh'
    }
  })
})
</script>

<style scoped lang="scss">
.blog-post {
  &__content {
    width: 100%;
  }

  padding-top: 90px;
  padding-bottom: 150px;

  @media (max-width: 1023px) {
    padding-top: var(--vertical90);
    padding-bottom: var(--vertical150);
  }

  &__wrap {
    display: flex;
  }

  &__social {
    flex: 0 0 220px;
    display: flex;
    align-items: flex-start;

    @media (max-width: 1300px) {
      flex: 0 0 90px;
    }

    @media (max-width: 1023px) {
      display: none;
    }

    &-wrap {
      position: sticky;
      top: 45vh;
      z-index: 0;
    }
  }

  &__news {
    z-index: 10;
    background-color: var(--black);
    position: relative;
  }
}

@media (max-width: 1023px) {
}
@media (max-width: 767px) {
  .blog-post {
    padding-top: 0;
  }
}
</style>
