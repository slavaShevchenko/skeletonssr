<template>
  <div class="swiper__main-container">
    <div class="wrapper">
      <div class="swiper__main-background">
        <svgBackgroundMain />
      </div>
      <Swiper
        :slides-per-view="1"
        :space-between="0"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
        @transition-start="onSliderTransitionStart"
        @transition-end="onSliderTransitionEnd"
        :speed="800"
        :follow-finger="false"
        :long-swipes="false"
        :short-swipes="true"
        :prevent-interaction-on-transition="true"
        :breakpoints="{
          1023: {
            shortSwipes: false,
          },
        }"
        class="swiper__main">
        <SwiperSlide>
          <div class="swiper__main-item">
            <div class="swiper__main-item-header">
              <svgLogo />
            </div>
            <div class="swiper__main-item-image first-image">
              <picture class="imageForDesktop">
                <img
                  sizes="(max-width: 1000px) 100vw, 1000px"
                  srcset="
                    /image/skeleton-mobile1.webp                 697w,
                    /image/Skelet_1_1_u3wrw4_c_scalew_875.webp   875w,
                    /image/Skelet_1_1_u3wrw4_c_scalew_1000.webp 1000w
                  "
                  src="/image/Skelet_1_1_u3wrw4_c_scalew_1000.webp"
                  alt="" />
              </picture>
              <img
                class="imageForMobile"
                src="/image/skeleton-mobile1.webp "
                alt="skeleton main page" />
            </div>
            <div class="swiper__main-item-text swiper__main-item-text-type-new">
              <p>
                At The SkeletonCrew, we strive to make the entire process
                straightforward, efficient, and enjoyable. Our goal is to exceed
                your expectations and establish a long-term, trusted
                relationship with you. Experience the seamless process of
                working with us and let us help you achieve your goals.
              </p>
            </div>
            <div class="swiper__main-cntrl">
              <div
                class="swiper__main-cntrl-left"
                @click="sliderMovePrev"></div>
              <div
                class="swiper__main-cntrl-right"
                @click="sliderMoveNext"></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="swiper__main-item">
            <div class="swiper__main-item-header">
              <h1 class="swiper__main__title">about <span>us</span></h1>
            </div>
            <div class="swiper__main-item-image">
              <picture class="imageForDesktop">
                <nuxt-img
                  sizes="(max-width: 824px) 100vw, 824px"
                  srcset="
                    /image/skeleton-mobile3.webp      544w,
                    /image/3_wqge7l_c_scalew_686.webp 686w,
                    /image/3_wqge7l_c_scalew_824.webp 824w
                  "
                  src="/image/3_wqge7l_c_scalew_824.webp"
                  alt="skeleton team description" />
              </picture>
              <nuxt-img
                class="imageForMobile"
                src="/image/skeleton-mobile3.webp"
                alt="skeleton team description" />
            </div>
            <div class="swiper__main-item-text swiper__main-item-text-type2">
              <p>
                <span>Skeleton <span>Crew</span></span> is a team of talented
                and creative people.
              </p>
              <p>
                Our team includes designers, web developers, copywriters, and
                account specialists who create projects and solve any problems.
                We mix strategy and creativity to produce cool digital projects.
              </p>
              <p>
                We're waiting for you! Arm yourself with a versatile perspective
                and experience to be part of the process from conception to
                implementation of our ideas.
              </p>
            </div>
            <div class="swiper__main-cntrl">
              <div
                class="swiper__main-cntrl-left"
                @click="sliderMovePrev"></div>
              <div
                class="swiper__main-cntrl-right"
                @click="sliderMoveNext"></div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="swiper__main-item">
            <div class="swiper__main-item-header">
              <div class="swiper__main__title">How it <span>works</span></div>
            </div>
            <div class="swiper__main-item-image">
              <picture class="imageForDesktop">
                <nuxt-img
                  sizes="(max-width: 972px) 100vw, 972px"
                  srcset="
                    /image/skeleton-mobile2.webp      619w,
                    /image/2_exvc68_c_scalew_792.webp 792w,
                    /image/2_exvc68_c_scalew_972.webp 972w
                  "
                  src="/image/2_exvc68_c_scalew_972.webp"
                  alt="how it works" />
              </picture>
              <nuxt-img
                class="imageForMobile"
                src="/image/skeleton-mobile2.webp"
                alt="how it works" />
            </div>
            <div class="swiper__main-item-text swiper__main-item-text-type1">
              <p>
                At The SkeletonCrew, we strive to make the entire process
                straightforward, efficient, and enjoyable. Our goal is to exceed
                your expectations and establish a long-term, trusted
                relationship with you. Experience the seamless process of
                working with us and let us help you achieve your goals.
              </p>
            </div>
            <div class="swiper__main-cntrl">
              <div
                class="swiper__main-cntrl-left"
                @click="sliderMovePrev"></div>
              <div
                class="swiper__main-cntrl-right"
                @click="sliderMoveNext"></div>
            </div>
            <div class="swiper__main-item-big-links">
              <div class="swiper__main-item-big-links-item">
                <div class="swiper__main-item-big-links-item-header">
                  For <span>candidates</span>
                </div>
                <div class="swiper__main-item-big-links-item-text">
                  Please contact us using the form available in each job vacancy
                  or select the general Contact Us form at the bottom of the
                  page.
                </div>
                <div class="swiper__main-item-big-links-item-button">
                  <div class="swiper__main-item-big-links-item-button-wrap">
                    <elementsButton
                      class="button__red"
                      router-link="/positions/"
                      type="link">
                      <template #text>See all</template>
                    </elementsButton>
                  </div>
                </div>
              </div>
              <div class="swiper__main-item-big-links-item">
                <div class="swiper__main-item-big-links-item-header">
                  For <span>Recruiting</span>
                </div>
                  <div class="swiper__main-item-big-links-item-text">
                      Leave recommendations for any open position or submit an excellent candidate using the Contact Us
                      form
                  </div>
                <div class="swiper__main-item-big-links-item-button">
                  <div class="swiper__main-item-big-links-item-button-wrap">
                    <elementsButton
                      class="button__red"
                      router-link="/recruter-profile/"
                      type="link">
                      <template #text>See all</template>
                    </elementsButton>
                  </div>
                </div>
              </div>
              <div class="swiper__main-item-big-links-item">
                <div class="swiper__main-item-big-links-item-header">
                  For <span>Business</span>
                </div>
                  <div class="swiper__main-item-big-links-item-text">
                      Please leave your contact information, and our manager will get in touch with you to discuss all
                      the details and provide information about our current opportunities.
                  </div>
                <div class="swiper__main-item-big-links-item-button">
                  <div class="swiper__main-item-big-links-item-button-wrap">
                    <elementsButton
                      class="button__red"
                      router-link="/services/"
                      type="link">
                      <template #text>See all</template>
                    </elementsButton>
                  </div>
                </div>
              </div>
            </div>
            <Swiper
              :slides-per-view="1.1"
              :space-between="24"
              :breakpoints="{
                767: { slidesPerView: 2.1 },
              }"
              class="swiperForMobile">
              <SwiperSlide>
                <div class="swiper__main-item-big-links-item">
                  <div class="swiper__main-item-big-links-item-header">
                    For <span>candidates</span>
                  </div>
                  <div class="swiper__main-item-big-links-item-text">
                    Please contact us using the form available in each job
                    vacancy or select the general Contact Us form at the bottom
                    of the page.
                  </div>
                  <div class="swiper__main-item-big-links-item-button">
                    <div class="swiper__main-item-big-links-item-button-wrap">
                      <elementsButton
                        class="button__red"
                        router-link="/positions/"
                        type="link">
                        <template #text>See all</template>
                      </elementsButton>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="swiper__main-item-big-links-item">
                  <div class="swiper__main-item-big-links-item-header">
                    For <span>Recruiting</span>
                  </div>
                    <div class="swiper__main-item-big-links-item-text">
                        Leave recommendations for any open position or submit an excellent candidate using the Contact
                        Us form
                    </div>
                  <div class="swiper__main-item-big-links-item-button">
                    <div class="swiper__main-item-big-links-item-button-wrap">
                      <elementsButton
                        class="button__red"
                        router-link="/recruter-profile/"
                        type="link">
                        <template #text>See all</template>
                      </elementsButton>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="swiper__main-item-big-links-item">
                  <div class="swiper__main-item-big-links-item-header">
                    For <span>Business</span>
                  </div>
                    <div class="swiper__main-item-big-links-item-text">
                      Please leave your contact information, and our manager will get in touch with you to discuss all
                      the details and provide information about our current opportunities.
                    </div>
                  <div class="swiper__main-item-big-links-item-button">
                    <div class="swiper__main-item-big-links-item-button-wrap">
                      <elementsButton
                        class="button__red"
                        router-link="/services/"
                        type="link">
                        <template #text>See all</template>
                      </elementsButton>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </SwiperSlide>
      </Swiper>
      <blocksSwiperPagination />
      <div
        class="swiper__scroll-arrow"
        :class="{ rotate: store.getSwiperPosition === 2 }"
        @click="scrollArrowAction">
        <svgScrollArrow />
      </div>
    </div>
    <div class="swiper__main-fog"></div>
  </div>
</template>

<script setup>
import { useMainStore } from '~/stores/index'
import WheelIndicator from 'wheel-indicator'

const store = useMainStore()
const swiperMain = ref()
const indicator = ref()
const flag = ref(true)

function onSwiper(swiper) {
  swiperMain.value = swiper
  swiperSlide(store.getSwiperPosition)
  setTimeout(() => {
    swiper.el.style.opacity = 1
  }, 600)
}
const onSlideChange = () => {
  store.setSwiperPosition(swiperMain.value.activeIndex)
}
function onSliderTransitionStart() {
  store.setSwiperTransition(true)
}
function onSliderTransitionEnd() {
  store.setSwiperTransition(false)
}
function swiperSlide(index) {
  swiperMain.value.slideTo(index)
}
function sliderMovePrev() {
  swiperMain.value.slidePrev(800)
}
function sliderMoveNext() {
  swiperMain.value.slideNext(800)
}
function eventHandler() {
  if (window.scrollY <= 0 && swiperMain.value.activeIndex == 2) {
    indicator.value && indicator.value.turnOn()
  }
}

function scrollArrowAction() {
  if (!store.getSwiperTransition) {
    if (store.getSwiperPosition < 2) {
      swiperMain.value.slideNext(800)
    } else {
      window.scrollTo({
        top: window.innerHeight + (window.innerWidth > 1439 ? 100 : 50),
        behavior: 'smooth',
      })
      indicator.value && indicator.value.turnOff()
      flag.value = false
    }
  }
}

onMounted(() => {
  indicator.value = new WheelIndicator({
    elem: document.querySelector('#__nuxt'),
    callback: function (e) {
      if (
        e.direction == 'down' &&
        swiperMain.value.activeIndex == 2 &&
        !store.getSwiperTransition
      ) {
        indicator.value && indicator.value.turnOff()
        flag.value = false
      } else if (e.direction == 'up') {
        flag.value && swiperMain.value.slidePrev(800)
        flag.value = true
      } else {
        swiperMain.value.slideNext(800)
      }
    },
  })

  document.addEventListener('scroll', eventHandler)

  store.setSoloScreen(false)
})
onBeforeRouteLeave((to, from, next) => {
  document.removeEventListener('scroll', eventHandler)
  indicator.value.destroy()
  store.setSoloScreen(true)
  next()
})
watch(
  () => store.getSwiperPosition,
  (newValue) => {
    if (newValue > 1) {
      store.setSoloScreen(true)
    } else {
      store.setSoloScreen(false)
    }
    swiperSlide(newValue)
  }
)
</script>

<style scoped lang="scss">
.swiper__scroll-arrow {
  position: absolute;
  right: 40px;
  bottom: 280px;
  z-index: 100;
  transition: transform 0.4s ease;
  transform-origin: right center;
  cursor: pointer;

  &.rotate {
    transform: rotate(90deg);
  }
}
.swiper__main-item-text-type-new {
  display: none;
  padding-top: 16px;
}
.imageForMobile {
  display: none;
}
.swiperForMobile {
  opacity: 0;
  display: none;
  width: calc(100% - 48px);
  overflow: visible;
  transition: opacity 0.8s ease;
  position: absolute;
  left: 24px;
  top: 356px;
}
.swiper__main {
  opacity: 0;
  height: calc(100svh - 100px);
  overflow: visible;
  z-index: 2;
  transition: opacity 0.4s ease;

  &-container {
    position: relative;
    overflow: hidden;

    .wrapper {
      height: 100%;
      position: relative;
    }
  }

  &__title {
    font-family: 'Transducer-bold';
    font-size: var(--text168);
    line-height: 1;
    color: var(--main);
    text-transform: uppercase;
    text-align: center;

    span {
      color: var(--red);
    }
  }

  &-fog {
    width: 100vw;
    height: 8vh;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.85) 90%,
      #000000 100%
    );
    position: absolute;
    left: 50%;
    bottom: 0;
    z-index: 7;
    transform: translate(-50%, 0);
    transition: opacity 0.8s ease;
    pointer-events: none;
  }

  &-background {
    width: 70vw;
    height: auto;
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);

    svg {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  &-cntrl {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;

    &-left,
    &-right {
      width: 50%;
      height: 100%;
      position: absolute;
      left: 0;
      top: 0;
      cursor: pointer;
    }

    &-right {
      left: auto;
      right: 0;
    }
  }

  &-item {
    opacity: 0.2;
    display: flex;
    align-items: flex-end;
    justify-content: center;
    height: 100%;
    position: relative;
    transform: scale(0.7);
    transition: all 0.8s ease;

    &-header {
      opacity: 0;
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      z-index: 1;
      transition: opacity 0.8s ease;

      svg {
        width: 100%;
        height: 100%;
        margin-top: 16px;
        object-fit: contain;
      }
    }

    &-image {
      width: 100%;
      height: calc(100% - 106px);
      position: absolute;
      left: 0;
      bottom: 0;
      z-index: 5;

      &.first-image {
        height: calc(100% - 120px);
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center bottom;
      }
    }

    &-text {
      opacity: 0;
      font-weight: 400;
      font-size: 1rem;
      line-height: 1.5;
      color: var(--text);
      position: absolute;
      right: 0;
      top: 200px;
      z-index: 10;
      transition: opacity 0.8s ease;

      p + p {
        margin-top: 8px;
      }

      span {
        color: var(--white);

        span {
          color: var(--red);
        }
      }

      &-type1 {
        max-width: 380px;
      }
      &-type2 {
        max-width: 480px;
      }
    }

    &-big-links {
      opacity: 0;
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      column-gap: 40px;
      width: calc(100% - 64px);
      position: absolute;
      left: 32px;
      bottom: 40px;
      z-index: 30;
      transition: opacity 0.6s ease;

      &-item {
        padding: 32px 24px;
        background-color: rgba(30, 29, 29, 0.84);
        backdrop-filter: blur(10px);
        border-radius: 8px;
        text-align: center;
        display: flex;
        flex-direction: column;

        &-header {
          margin-bottom: 16px;
          font-family: 'Transducer-bold';
          font-size: var(--text32);
          color: var(--main);
          text-transform: uppercase;

          span {
            color: var(--red);
          }

          @media (max-width: 400px) {
            font-size: var(--text28);
          }
        }

        &-text {
          font-size: var(--text16);
          line-height: 1.4;
          color: var(--text);
          overflow: hidden;
          display: -moz-box;
          -moz-box-orient: vertical;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          box-orient: vertical;

          @media (max-width: 1023px) {
            height: 56px;
          }

          @media (max-width: 767px) {
            height: 42px;
          }

          @media (max-width: 525px) {
            height: 56px;
          }

          @media (max-width: 430px) {
            height: 72px;
          }
        }

        &-button {
          margin-top: auto;
          &-wrap {
            opacity: 0;
            margin-top: -44px;
            transition: all 0.6s ease;
          }
        }

        &:hover &-button-wrap {
          opacity: 1;
          margin-top: 32px;
        }
      }
    }

    &-scroll {
      position: absolute;
      right: 0;
      bottom: 5vh;
      z-index: 20;
    }
  }

  .swiper-slide:first-child:not(
      .swiper-slide-prev,
      .swiper-slide-next,
      .swiper-slide-active
    )
    &-item {
    opacity: 0;
    transform: translate(150%, 25%) scale(0.5);
  }
  .swiper-slide:last-child:not(
      .swiper-slide-prev,
      .swiper-slide-next,
      .swiper-slide-active
    )
    &-item {
    opacity: 0;
    transform: translate(-150%, 25%) scale(0.5);
  }

  .swiper-slide-next &-item {
    transform: translate(calc((100% - 60vh) * -1), 10%) scale(0.8);
  }
  .swiper-slide-prev &-item {
    transform: translate(calc(100% - 60vh), 10%) scale(0.8);
  }

  .swiper-slide-active {
    z-index: 10;
  }
  .swiper-slide-active &-item {
    opacity: 1;
    transform: scale(1);

    &-header,
    &-text,
    &-big-links,
    .swiperForMobile {
      opacity: 1;
    }
  }
}
@media (min-width: 2000px) {
  .swiper__main {
    &-item {
      &-image {
        &.first-image {
          height: calc(100% - 180px);
        }
      }

      &-text {
        top: 300px;
      }
    }
  }
  .swiper__main-container {
    .wrapper {
      max-width: 90%;
    }
  }
}

@media (min-width: 2600px) {
  .swiper__main {
    &-item {
      &-image {
        height: calc(100% - 160px);

        &.first-image {
          height: calc(100% - 300px);
        }
      }

      &-text {
        top: 500px;
        font-size: 32px;

        &-type1,
        &-type2 {
          max-width: 650px;
        }
      }
    }
  }
}

@media (max-width: 1800px) {
  .swiper__scroll-arrow {
    transform: scale(0.7);

    &.rotate {
      transform: rotate(90deg) scale(0.7);
    }
  }
}

@media (max-width: 1679px) {
  .swiper__scroll-arrow {
    right: 40px;
    bottom: 180px;
  }
  .swiper__main {
    &-item {
      &-image {
        height: calc(100% - 80px);
      }

      &-text {
        font-size: 0.75rem;
        &-type1 {
          max-width: 440px;
        }
        &-type2 {
          max-width: 360px;
        }
      }

      &-big-links {
        column-gap: 20px;

        &-item {
          padding: 24px 24px;
          border-radius: 6px;

          &-header {
            margin-bottom: 12px;
          }
        }
      }
    }
  }
}

@media (max-width: 1479px) {
  .swiper__main {
    &-item {
      &-image {
        height: calc(100% - 64px);
      }

      &-text {
        &-type1 {
          max-width: 440px;
        }
        &-type2 {
          max-width: 440px;
        }
      }
    }
  }
}

@media (max-width: 1279px) {
  .swiper__main {
    &-background {
      width: 100vw;
    }

    &-item {
      &-image {
        &.first-image {
          height: calc(100% - 100px);
        }
      }

      &-text {
        top: 160px;

        &-type1 {
          max-width: 320px;
        }
        &-type2 {
          max-width: 300px;
        }
      }
      &-big-links {
        column-gap: 16px;
        width: calc(100% - 32px);
        position: absolute;
        left: 16px;
        bottom: 24px;

        &-item {
          padding: 16px;

          &-header {
            margin-bottom: 8px;
          }

          &-button {
            &-wrap {
              opacity: 1;
              margin-top: 16px;
            }
          }

          &:hover &-button-wrap {
            opacity: 1;
            margin-top: 16px;
          }
        }
      }
    }
  }
}
@media (max-width: 1023px) {
  .swiper__scroll-arrow {
    width: 46px;
    height: 46px;
    right: 10px;
    bottom: auto;
    top: 150px;
    transform-origin: center center;
    overflow: hidden;

    &.rotate {
      transform: rotate(90deg) scale(0.7);
    }

    &:deep svg {
      position: absolute;
      right: 0;
      top: 0;
      g:first-child {
        display: none;
      }
    }
  }
  .swiper__main-item-text-type1 {
    display: none;
  }
  .swiper__main-item-text-type-new {
    display: block;
  }
  .swiper__main-item-text-type2 {
    padding-top: 16px;
  }
  .imageForDesktop {
    display: none;
  }
  .imageForMobile {
    display: block;
  }
  .swiperForMobile {
    display: block;
  }
  .swiper__main {
    &-background {
      height: 300px;
      position: absolute;
      left: 50%;
      top: 0;
      transform: translate(-50%, 0);
    }
    &-cntrl {
      display: none;
    }
    &__title {
      font-size: 32px;
    }
    &-fog {
      height: 50px;
      top: 268px;
    }
    &-item {
      padding-bottom: 32px;
      overflow: hidden;

      &-header {
        height: 64px;
        top: 0;

        svg {
          margin-top: 0;
        }
      }
      &-image {
        width: 300px;
        height: 300px;
        bottom: auto;
        top: 16px;
        left: 50%;
        transform: translate(-50%, 0);

        img {
          width: auto;
          height: 300px;
          object-fit: initial;
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
        }

        &.first-image {
          width: 300px;
          height: 292px;
          top: 24px;

          img {
            height: 292px;
          }
        }
      }

      &-text {
        width: 100%;
        line-height: 1.2;
        text-align: center;
        right: 0;
        top: 340px;

        &-type1 {
          max-width: 100%;
        }
        &-type2 {
          max-width: 100%;
        }
      }

      &-big-links {
        display: none;
      }

      &-scroll {
        bottom: 2vh;

        svg {
          width: 20px;
          height: auto;
        }
      }
    }
  }

  .swiper__main-item-big-links-item {
    padding: 16px;
  }
  .swiper__main-item-big-links-item-header {
    margin-bottom: 8px;
  }
  .swiper__main-item-big-links-item-text {
    font-size: 12px;
    line-height: 1.2;
  }
  .swiper__main-item-big-links-item-button-wrap,
  .swiper__main-item-big-links-item:hover
    .swiper__main-item-big-links-item-button-wrap {
    margin-top: 16px;
  }
  .button {
    height: 32px;
  }

  .swiper__main {
    .swiper-slide-next &-item {
      transform: translate(0, 0) scale(1);
    }
    .swiper-slide-prev &-item {
      transform: translate(0, 0) scale(1);
    }
  }
}

@media (max-height: 479px) {
  .swiper__main-fog {
    top: auto;
    bottom: 0;
  }
  .swiper__main-item-image {
    display: none;
  }
  .swiper__main-item-text {
    top: 120px;
  }

  .swiperForMobile {
    top: 76px;
  }
  .swiper__main-item-text-type-new {
    top: 60px;
  }
  .swiper__main-item-text-type2 {
    top: 60px;
  }
}
</style>
