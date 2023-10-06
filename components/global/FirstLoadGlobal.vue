<template>
  <div class="first-loader">
    <div class="first-loader__content" :class="{ active: isActive }">
      <div class="first-loader__image">
        <img src="/image/first-load.webp" alt="loading" />
      </div>

      <div class="first-loader__indicator">
        <div class="first-loader__indicator-text">loading</div>
        <div class="first-loader__indicator-line" :class="{ active: isActive }">
          <div class="first-loader__indicator-line-fill"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from '~/stores/index'
const isActive = ref(false)
const store = useMainStore()

onMounted(() => {
  setTimeout(() => {
    isActive.value = true
  }, 0)
  setTimeout(() => {
    store.setFirstLoad(false)
  }, 800)
})
</script>

<style scoped lang="scss">
.first-loader {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100dvw;
  height: 100dvh;
  padding: 10vh 16px;
  background-color: var(--black);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 9999;

  &__content {
    opacity: 0;
    flex: 1 0 auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    height: 100%;
    transition: opacity 0.6s linear;

    &.active {
      opacity: 1;
    }
  }

  &__image {
    flex: 0 0 0;
    height: 100%;
    text-align: center;

    img {
      max-width: 100%;
      max-height: 100%;
    }
  }

  &__indicator {
    margin-top: -80px;

    &-text {
      margin-bottom: 40px;
      font-family: 'Transducer-bold';
      font-size: 36px;
      color: var(--main);
      text-align: center;
      text-transform: uppercase;
    }

    &-line {
      width: 500px;
      height: 6px;
      margin-left: auto;
      margin-right: auto;
      background-color: var(--unactive);
      border-radius: 3px;
      overflow: hidden;

      &-fill {
        width: 100%;
        height: 100%;
        background-color: var(--red);
        transform: translate(-100%, 0);
        transition: all 0.8s linear;
      }

      &.active {
        .first-loader__indicator-line-fill {
          transform: translate(0, 0);
        }
      }
    }
  }
}

@media (max-width: 1023px) {
  .first-loader {
    &__indicator {
      margin-top: -24px;

      &-text {
        margin-bottom: 24px;
        font-size: 24px;
      }
    }
  }
}
</style>
