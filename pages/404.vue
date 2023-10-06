<template>
  <div class="not-found">
    <div class="wrapper">
      <div class="not-found__image">
        <svgBackground />
        <nuxt-img src="/image/skeleton5.webp" alt="not found" />
        <div class="not-found__image-fog"></div>
      </div>
      <div class="not-found__text">
        <div class="not-found__text-header">404</div>
        <div class="not-found__text-text">page not found</div>
      </div>
      <div class="center-button">
        <elementsButton class="button__red wide" router-link="/">
          <template #text>Back to Homepage</template>
        </elementsButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from '~/stores/index'

const store = useMainStore()
const event = useRequestEvent()
setResponseStatus(event, 404)

useHead({
  title: '404 page',
})

onMounted(() => {
  store.setSoloScreen(false)

  setTimeout(() => {
    store.setLoader(false)
  }, 200)
})
</script>

<style scoped lang="scss">
.not-found {
  padding-top: 24px;
  padding-bottom: 64px;

  &__image {
    width: clamp(320px, 50vh, 600px);
    max-width: 100%;
    margin-left: auto;
    margin-right: auto;
    position: relative;
    z-index: 1;

    svg {
      width: 100%;
      height: 100%;
      object-fit: contain;
      position: absolute;
      left: 50%;
      top: 50%;
      z-index: 1;
      transform: translate(-50%, -50%);
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      position: relative;
      z-index: 5;
    }
    &-fog {
      width: 100%;
      height: 120px;
      background: linear-gradient(
        180deg,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.85) 67.19%,
        #000000 100%
      );
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 7;
    }
  }

  &__text {
    margin-top: -70px;
    text-align: center;
    position: relative;
    z-index: 5;

    &-header {
      font-family: 'Transducer-bold';
      font-size: clamp(78px, 6.5vw, 128px);
      line-height: 1.5;
      color: var(--main);
    }

    &-text {
      font-size: clamp(20px, 2.4vw, 48px);
      color: var(--main);
      text-transform: uppercase;
    }
  }
}
</style>
