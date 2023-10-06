<template>
  <div class="examples">
    <div class="wrapper">
      <elementsHeader>
        <template #header>Work <span> Examples</span></template>
        <template #text
          >Examples of Our Successful Projects in Various Industries</template
        >
      </elementsHeader>

      <Swiper
        :space-between="24"
        :slides-per-view="1.2"
        :preventInteractionOnTransition="true"
        :breakpoints="{ 479: { slidesPerView: 1.4 } }"
        class="slider">
        <SwiperSlide v-for="(item, index) in examplesData" :key="index">
          <div class="slider__wrapper">
            <div class="slider__item">
              <nuxt-img class="slider__item-image" :src="item.image" alt="example" />
            </div>
            <div class="slider__item-text">
              <p class="slider__item-title">{{ item.title }}</p>
              <p class="slider__item-description">
                {{ item.description }}
              </p>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  examplesData: Object,
})
</script>

<style scoped lang="scss">
.examples {
  &:deep .swiper-slide-active {
    & p {
      transition: opacity 0.7s;
    }
  }

  &:deep .swiper-slide-next,
  &:deep .swiper-slide-prev {
    & p {
      opacity: 0;
      transition: opacity 0.7s;
    }
  }

  .wrapper {
    height: 100%;
    padding-top: var(--vertical150);
    position: relative;
  }

  &:deep .header {
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 40px;
    text-align: left;
  }

  .slider {
    overflow: visible;
    pointer-events: none;

    &__wrapper {
      height: auto;
    }

    &__item {
      padding: 32px;
      border-radius: 20px;
      background-color: rgba(30, 29, 29, 0.84);
      width: 100%;

      &-image {
        border-radius: 18px;
        width: 100%;
        max-height: 432px;
        object-position: top;
        aspect-ratio: 2/1;
      }

      &-text {
        text-transform: uppercase;
        padding: 28px 0 0 58px;
      }

      &-title {
        font-family: 'Transducer-bold';
        color: var(--main);
        font-size: var(--text36);
        font-weight: 700;
        margin-bottom: 16px;
      }

      &-description {
        color: var(--text);
        font-size: var(--text20);
      }
    }
  }
}

@media (max-width: 1023px) {
  .examples {
    .slider {
      &__item {
        padding: 16px;
      }
    }
  }
}

@media (max-width: 767px) {
  .examples {
    max-height: none;
    padding-top: 0;

    .wrapper {
      column-gap: 0;
      flex-wrap: wrap;
      max-height: none;
    }

    &:deep .header {
      display: block;
      margin-bottom: 0;
      position: relative;
      z-index: 5;

      &__text {
        margin-bottom: 32px;
      }
    }

    .slider {
      &__item {
        padding: 8px;
        border-radius: 8px;

        &-text {
          padding-top: 18px;
          padding-left: 0;
        }

        &-image {
          border-radius: 4px;
        }
      }
    }
  }
}

@media (max-height: 479px) {
  .examples {
    max-height: none;

    .wrapper {
      max-height: none;
    }
  }
}
</style>
