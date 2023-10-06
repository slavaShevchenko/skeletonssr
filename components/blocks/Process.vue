<template>
  <div class="process">
    <div class="wrapper">
      <elementsHeader>
        <template #header><h1 v-html="title"></h1></template>
        <template #text>{{ description }}</template>
      </elementsHeader>

      <div @click="onClick">
        <Swiper
          :space-between="24"
          :slides-per-view="1.2"
          :breakpoints="{
            479: { slidesPerView: 2.2 },
            767: { slidesPerView: 2.2 },
            1024: { slidesPerView: 3.2 },
            1200: { slidesPerView: 4 },
          }"
          class="slider"
          :speed="800"
          @swiper="onSwiper"
          :long-swipes="isMobile"
          :short-swipes="!isMobile"
          :simulate-touch="isMobile"
          :follow-finger="isMobile"
          :prevent-interaction-on-transition="!isMobile">
          <SwiperSlide v-for="item in processData" :key="item.id">
            <div class="slider__item">
              <div>
                <p class="slider__item-title">{{ item.title }}</p>
                <div class="slider__item-description-hovered">
                  <div v-html="item.text"></div>
                </div>
              </div>

              <div class="slider__image">
                <div class="slider__image_background" />
                <svgQuestion />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  description: String,
  processData: Object,
})

const swiperData = ref()
const isMobile = ref(false)

const handleResize = () => {
  isMobile.value = window.innerWidth < 1023
}

function onSwiper(swiper) {
  swiperData.value = swiper
}

function onClick(event) {
  if (isMobile.value) return

  const windowMiddlePoint = window.innerWidth / 2
  const clickPoint = event.x

  if (clickPoint < windowMiddlePoint) {
    swiperData.value.slidePrev()
  } else {
    swiperData.value.slideNext()
  }
}

onMounted(() => {
  isMobile.value = window.innerWidth < 1023
  window.addEventListener('resize', handleResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
})
</script>

<style scoped lang="scss">
.process {
  position: relative;

  .wrapper {
    column-gap: 60px;
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
    &__item {
      padding: 40px 30px;
      background-color: rgba(30, 29, 29, 0.84);
      border-radius: 8px;
      width: 100%;
      height: 448px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      cursor: pointer;
      overflow: hidden;
      -webkit-tap-highlight-color: transparent;

      &:hover .slider__image_background {
        z-index: 10;
        transform: scale(30);
      }

      &:hover .slider__item-description {
        opacity: 0;
        height: 0;
        transition: all 0.5s;
      }

      &:hover .slider__item-description-hovered {
        transition: all 0.5s;
        opacity: 1;
        line-height: 20px;
        height: fit-content;
      }

      &-title {
        font-family: 'Transducer-bold';
        color: var(--main);
        font-size: var(--text28);
        font-weight: 700;
        margin-bottom: 16px;
        z-index: 100;
        position: relative;
      }

      &-description {
        color: var(--text);
        font-size: var(--text16);
        line-height: 20px;
        height: fit-content;
        transition: all 0.8s;

        &-hovered {
          z-index: 100;
          position: relative;
          opacity: 0;
          height: 0;

          &:deep p {
            color: var(--text);
            font-size: var(--text16);
            margin-bottom: 16px;
          }
        }
      }
    }

    &__image {
      position: relative;
      fill: var(--main);
      margin-left: auto;
      width: 48px;
      height: 48px;
      background-color: var(--red);
      border-radius: 50%;
      transition: all 0.8s ease-out;

      &_background {
        transition: all 0.8s ease-out;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        position: absolute;
        right: 0;
        z-index: -1;
        background-color: var(--red);
      }
    }
  }
}

@media (max-width: 1023px) {
  .process {
    &:deep .header {
      .header__h {
        white-space: normal;
      }
    }

    .slider {
      padding-top: 32px;

      &__item {
        padding: 30px 20px;
      }
    }
  }
}

@media (max-width: 767px) {
  .process {
    max-height: none;
    padding-top: 0;

    .wrapper {
      column-gap: 0;
      flex-wrap: wrap;
      max-height: none;
    }

    .header {
      display: block;
      margin-bottom: 0;
      position: relative;
      z-index: 5;
    }
  }
}

@media (max-height: 479px) {
  .process {
    max-height: none;

    .wrapper {
      max-height: none;
    }
  }
}
</style>
