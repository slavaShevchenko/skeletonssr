<template>
  <div class="swiper__departments-container">
    <div class="swiper__departments-background">
      <svgBackground />
    </div>
    <Swiper
      :loop="true"
      :looped-slides="3"
      :slides-per-view="1"
      :centered-slides="true"
      :space-between="0"
      @swiper="onSwiper"
      @real-index-change="onSlideChange"
      :speed="800"
      :long-swipes="false"
      :short-swipes="true"
      :simulate-touch="false"
      :follow-finger="false"
      :prevent-interaction-on-transition="true"
      :breakpoints="{
        767: { slidesPerView: 3 },
        1023: { slidesPerView: 5, shortSwipes: false },
      }"
      class="swiper-departments">
      <SwiperSlide v-for="item in doubleItems" :key="item.id">
        <div class="department__item">
          <div
            class="department__item-img"
            :class="{ noImage: !defImage(item.department_id) }">
            <nuxt-img
              :src="
                defImage(item.department_id)
                  ? BASE_URL + defImage(item.department_id)
                  : noImage
              "
              :alt="'department ' + item.id" />
          </div>
        </div>
      </SwiperSlide>
      <template v-slot:container-end>
        <div class="department__item-content-wrap">
          <div
            class="department__item-content"
            v-for="(item, index) in doubleItems"
            :key="item.id"
            :data-index="index">
            <div class="department__item-header" v-html="item.title"></div>
            <div
              class="department__item-text"
              v-html="item.short_description"></div>
            <div class="center-button">
              <elementsButton
                class="button__trans-red"
                :router-link="`/positions/${item.slug}/`">
                <template #text>Read more</template>
              </elementsButton>
            </div>
          </div>
        </div>
      </template>
      <template v-slot:container-start>
        <div class="swiper__departments-left"></div>
        <div class="swiper__departments-right"></div>
      </template>
    </Swiper>
    <div class="newPagination">
      <div class="newPagination__active">
        {{ swiperPagination.activeSlide }}
      </div>
      <div class="newPagination__content">
        <div
          class="newPagination__item"
          v-for="(item, index) in items"
          :key="item.id"
          :class="{ active: swiperPagination.activeSlide == index + 1 }"></div>
      </div>
      <div class="newPagination__total">
        {{ swiperPagination.totalSlides }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from '~/stores/index'
import noImage from '/image/noImage.png'

import { BASE_URL } from '@/api/endpoints'

const props = defineProps({
  items: Object,
})

const store = useMainStore()
let paginationFlag = false
const doubleItems = ref()
doubleItems.value = props.items ? [...props.items, ...props.items] : null
const swiperDepartments = ref()
const departmentsContent = ref()
const swiperPagination = reactive({
  activeSlide: 0,
  totalSlides: 0,
})

function onSwiper(swiper) {
  swiperDepartments.value = swiper
  departmentsContent.value = swiperDepartments.value.el.querySelectorAll(
    '.department__item-content'
  )
  paginationFlag = true
  document
    .querySelector('.swiper__departments-left')
    .addEventListener('click', () => {
      swiper.slidePrev()
    })
  document
    .querySelector('.swiper__departments-right')
    .addEventListener('click', () => {
      swiper.slideNext()
    })
  newPagination()
}
function onSlideChange() {
  if (swiperDepartments.value) {
    const activeIndex = swiperDepartments.value.activeIndex
    swiperDepartments.value.slides.forEach((slide) => {
      slide.classList.remove('swiper-slide-right', 'swiper-slide-left')
    })
    swiperDepartments.value.slides[activeIndex - 2]?.classList.add(
      'swiper-slide-left'
    )
    swiperDepartments.value.slides[activeIndex + 2]?.classList.add(
      'swiper-slide-right'
    )
    paginationFlag && changeContent(swiperDepartments.value.realIndex)
    paginationFlag && newPagination()
  }
}
function newPagination() {
  const total = swiperDepartments.value.slides.length / 2
  swiperPagination.activeSlide =
    (swiperDepartments.value.realIndex - total + 1 > 9 ? '' : '0') +
    (swiperDepartments.value.realIndex + 1 > total
      ? swiperDepartments.value.realIndex - total + 1
      : swiperDepartments.value.realIndex + 1)

  swiperPagination.totalSlides =
    (total > 9 ? '' : '0') + swiperDepartments.value.slides.length / 2
}
function changeContent(index) {
  if (departmentsContent.value[index]) {
    departmentsContent.value.forEach((item) => {
      item.style.opacity = 0
    })
    setTimeout(() => {
      departmentsContent.value.forEach((item) => {
        item.style.position = 'absolute'
      })
      departmentsContent.value[index].style.position = 'relative'
      departmentsContent.value[index].style.opacity = 1
    }, 400)
  }
}
function defImage(id) {
  return store.getDepartments.find((item) => item.id == id).image
}
function setParentHeightToMaxChild(parentElement) {
  let maxHeight = 0
  for (let i = 0; i < parentElement.children.length; i++) {
    const child = parentElement.children[i]
    const childHeight = child.offsetHeight
    if (childHeight > maxHeight) {
      maxHeight = childHeight
    }
  }
  parentElement.style.height = maxHeight + 'px'
}
onMounted(() => {
  onSlideChange()
  const parentElement = document.querySelector('.department__item-content-wrap')
  setParentHeightToMaxChild(parentElement)
})
</script>

<style scoped lang="scss">
.newPagination {
  width: calc(100% - 48px);
  max-width: 720px;
  margin: clamp(24px, 3.6vw, 72px) auto 0 auto;
  position: relative;
  z-index: 20;

  &__content {
    display: flex;
    height: 2px;
    background-color: rgba(167, 167, 167, 0.58);
  }

  &__active,
  &__total {
    font-size: var(--text20);
    color: var(--main);
    position: absolute;
    left: -20px;
    top: 50%;
    transform: translate(-100%, -50%);
  }
  &__total {
    left: auto;
    right: -20px;
    transform: translate(100%, -50%);
  }

  &__item {
    flex: 1 0 auto;
    transition: background-color 0.8s ease;

    &.active {
      background-color: var(--red);
    }
  }
}
.swiper-departments {
  margin-left: -8vw;
  margin-right: -8vw;
  overflow: visible;
  user-select: none;

  .center-button {
    position: relative;
    z-index: 20;
  }
}

.swiper__departments {
  &-container {
    max-width: 2000px;
    margin-left: auto;
    margin-right: auto;
    position: relative;
  }

  &-background {
    width: clamp(500px, 45vw, 1000px);
    height: clamp(500px, 45vw, 1000px);
    position: absolute;
    left: 50%;
    top: 0;
    transform: translate(-50%, -15%);

    svg {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &-left,
  &-right {
    width: 50%;
    height: calc(100% - 10px);
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
    cursor: pointer;
  }
  &-right {
    left: auto;
    right: 0;
  }
}
.department__item {
  height: 100%;

  &-content {
    opacity: 0;
    width: 100%;
    text-align: center;
    position: absolute;
    top: 0;
    transition: opacity 0.6s ease;

    &-wrap {
      width: 720px;
      margin: 0 auto;
      position: relative;
    }
  }

  &-img {
    opacity: 0;
    max-width: 480px;
    height: calc(100% - 40px);
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 40px;
    border-radius: 20px;
    overflow: hidden;
    transform: scale(0.68);
    transition: opacity 0.8s ease, transform 0.8s ease;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &.noImage {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100%;

      img {
        width: 40%;
        height: 40%;
        object-fit: contain;
      }
    }
  }

  &-header {
    margin-bottom: 20px;
    font-family: 'Transducer-bold';
    font-size: var(--text36);
    color: var(--main);
    text-transform: uppercase;

    &:deep span {
      color: var(--red);
    }
  }

  &-text {
    font-size: var(--text16);
    line-height: 1.75;
    color: var(--text);
  }

  &-salary {
    margin-top: 20px;
    font-family: 'Transducer-bold';
    font-size: clamp(28px, 2.1vw, 42px);
    color: var(--main);

    span {
      color: var(--red);
    }
  }

  .center-button {
    padding-top: 48px;
  }
}

@media (max-width: 1023px) {
  .swiper__departments {
    &-left,
    &-right {
      display: none;
    }
  }
}
@media (max-width: 767px) {
  .swiper-departments {
    width: calc(100% - 80px);
    margin-left: auto;
    margin-right: auto;
  }
  .swiper {
    &__departments {
      &-background {
        transform: translate(-50%, 0);
      }
    }
  }
  .department {
    &__item {
      &-content {
        &-wrap {
          width: auto;
          margin-left: -16px;
          margin-right: -16px;
        }
      }
    }
  }
}

.swiper-slide {
  height: auto;
}
.swiper-slide-active {
  .department__item-content {
    opacity: 1;
  }
  .department__item-img {
    opacity: 1;
    transform: scale(1);
  }
}
.swiper-slide-next {
  .department__item-img {
    opacity: 1;
    transform: scale(0.8) translate(-5%, 0);
  }
}
.swiper-slide-prev {
  .department__item-img {
    opacity: 1;
    transform: scale(0.8) translate(5%, 0);
  }
}
.swiper-slide-right {
  .department__item-img {
    opacity: 0.6;
    transform: scale(0.68) translate(-40%, 0);
  }
}
.swiper-slide-left {
  .department__item-img {
    opacity: 0.6;
    transform: scale(0.68) translate(40%, 0);
  }
}
</style>
