<template>
  <div class="partner-offer">
    <div class="wrapper">
      <div class="partner-offer__left">
        <div class="partner-offer__left-top">
          <elementsHeader>
            <template #header><h1 v-html="title"></h1></template>
            <template #text>{{ description }} </template>
          </elementsHeader>

          <elementsButton
            v-if="isWithButton"
            class="button__red"
            :router-link="HR_CABINET_URL">
            <template #text>Recruiter Profile</template>
          </elementsButton>
        </div>
      </div>
      <div class="partner-offer__right">
        <elementsHeader>
          <template #header><h1 v-html="title"></h1></template>
        </elementsHeader>
        <div class="partner-offer__image">
          <svgBackground />
          <nuxt-img :src="image" alt="{{ description }}" />
          <div class="partner-offer__image-fog"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { HR_CABINET_URL } from '@/api/endpoints'

const props = defineProps({
  isWithButton: Boolean,
  title: String,
  description: String,
  image: String,
})
</script>

<style scoped lang="scss">
.partner-offer {
  .wrapper {
    display: flex;
    column-gap: 60px;
    height: 100%;
    // padding-top: var(--vertical150);
    position: relative;
  }

  &__left {
    flex: 1 1 55%;
    order: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-top: var(--vertical150);
    padding-bottom: 16px;

    .social {
      margin-top: 32px;
    }

    .button {
      margin-left: auto;
      margin-right: auto;
    }
  }
  &__right {
    flex: 1 1 45%;
    order: 2;

    .header {
      display: none;
    }
  }

  &:deep .header {
    margin-left: 0;
    margin-right: 0;
    margin-bottom: 40px;
    text-align: left;
  }

  &__image {
    width: 100%;
    height: 100%;
    // margin-top: calc(min(6vw, 120px) * -1);
    position: relative;
    // transform: translate(15%, 0);
    overflow: hidden;

    svg {
      width: 100%;
      height: 100%;
      object-fit: contain;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -30%);
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      object-position: center bottom;
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
}
@media (max-width: 767px) {
  .partner-offer {
    max-height: none;
    padding-top: 0;

    .wrapper {
      column-gap: 0;
      flex-wrap: wrap;
      max-height: none;
    }

    &__left {
      flex: 1 0 100%;
      order: 2;
      padding-top: 0;
      text-align: center;
      position: relative;
      z-index: 5;

      .social {
        display: none;
      }

      &:deep .header {
        .header__h {
          display: none;
        }

        .header__text {
          text-align: center;
        }
      }
    }
    &__right {
      flex: 1 0 100%;
      order: 1;
      position: relative;
      z-index: 1;

      .header {
        display: block;
        margin-bottom: 0;
        text-align: center;
        position: relative;
        z-index: 5;
      }
    }

    &__image {
      margin-top: -56px;
      transform: translate(0, 0);
      z-index: 10;
    }
  }
}
@media (max-height: 479px) {
  .partner-offer {
    max-height: none;

    .wrapper {
      max-height: none;
    }
  }
  .partner-offer__image {
    width: 200px;
    height: auto;
    margin-top: -24px;
    margin-left: auto;
    margin-right: auto;
  }
}
</style>
