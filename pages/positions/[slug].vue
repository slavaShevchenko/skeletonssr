<template>
  <div class="position-page">
    <div class="wrapper">
      <elementsHeader>
        <template #header><h1 v-html="position?.title"></h1></template>
        <template #text>{{ position?.location }}</template>
      </elementsHeader>

      <div class="position-page__content">
        <div class="position-page__block">
          <div class="position-page__block-header">Overview:</div>
          <div class="position-page__block-left">Product Development:</div>
          <div
            class="position-page__block-right"
            v-html="position?.overview"></div>
        </div>
        <div class="position-page__block">
          <div class="position-page__block-header">Experience:</div>
          <div class="position-page__block-left">The ideal candidate has:</div>
          <div
            class="position-page__block-right"
            v-html="position?.experience"></div>
        </div>
        <div class="position-page__block">
          <div class="position-page__block-header">Benefits:</div>
          <div class="position-page__block-left">Learning & Development:</div>
          <div
            class="position-page__block-right"
            v-html="position?.benefits"></div>
        </div>
      </div>

      <div class="position-page__contact-us">
        <elementsHeader>
          <template #header>contact <span>us</span></template>
          <template #text
            >Do you have any questions or need more information? Get in touch
            with us using the form below. Our dedicated team is ready to assist
            you with any inquiries you may have.
          </template>
        </elementsHeader>

        <div class="position-page__contact-us-content">
          <div class="position-page__contact-us-image">
            <nuxt-img src="/image/skeleton7.webp" alt="current positions" />
            <div class="position-page__contact-us-image-fog-bottom"></div>
            <div class="position-page__contact-us-image-fog-top"></div>
          </div>
          <div class="position-page__contact-us-form">
            <FormGlobal form-type="candidate" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from '~/stores/index'

const route = useRoute()
const slug = ref(route.params.slug)
const store = useMainStore()

const position = store.getPositions.find((item) => item.slug == slug.value)

useHead({
  title: position?.title,
  meta: [
    {
      name: 'description',
      content: `Skeleton crew is looking for ${
        position?.title || ''
      } to join innovative and forward-thinking company.`,
    },
  ],
})

if (!position) {
  navigateTo('/404', { redirectCode: 301 })
}

onMounted(() => {
  setTimeout(() => {
    store.setLoader(false)
  }, 200)
})
</script>

<style scoped lang="scss">
.position-page {
  padding-top: var(--vertical90);
  padding-bottom: var(--vertical150);

  &:deep .header {
    max-width: 1080px;
    margin-left: 0;
    margin-right: 0;
    text-align: left;
    position: relative;
    z-index: 5;
  }

  &__content {
    max-width: 1080px;
  }

  &__block + &__block {
    margin-top: 60px;
  }

  &__block {
    display: flex;
    flex-wrap: wrap;
    column-gap: 16px;
    font-size: var(--text20);
    color: var(--main);

    &-header {
      flex: 1 0 100%;
      margin-bottom: 20px;
      padding-left: 316px;
      padding-bottom: 20px;
      border-bottom: 1px solid var(--unactive);
      font-family: 'Transducer-bold';
      font-size: var(--text36);
      text-transform: uppercase;
    }

    &-left {
      flex: 0 0 300px;
      font-family: 'Transducer-bold';
      line-height: 1.5;
    }

    &-right {
      flex: 1 1 calc(100% - 316px);
      line-height: 1.5;
      color: var(--text);

      &:deep p + p,
      &:deep p + ul,
      &:deep ul + p,
      &:deep ul + ul {
        margin-top: 16px;
      }

      &:deep ul {
        margin: 0;
        padding: 0;
        list-style: none;

        li {
          margin: 0;
          padding: 0 0 0 16px;
          position: relative;

          &:before {
            content: '';
            width: 8px;
            height: 8px;
            background-color: var(--red);
            border-radius: 100%;
            position: absolute;
            left: 0;
            top: clamp(5px, 0.5vw, 9px);
          }
        }

        li + li {
          margin-top: 16px;
        }
      }
    }
  }

  &__contact-us {
    padding-top: var(--vertical150);
    position: relative;
    z-index: 1;

    &:deep .header {
      &__text {
        width: 85%;
      }
    }

    &-content {
      display: flex;
      justify-content: flex-end;
      padding-top: 320px;
      position: relative;
    }

    &-form {
      flex: 0 0 75%;
      position: relative;
      z-index: 5;
    }

    &-image {
      width: clamp(900px, 50vw, 960px);
      position: absolute;
      left: -200px;
      bottom: -60px;
      z-index: 1;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }

      &-fog-bottom {
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
      &-fog-top {
        width: 100%;
        height: 200px;
        background: linear-gradient(
          0deg,
          rgba(0, 0, 0, 0) 0%,
          rgba(0, 0, 0, 0.85) 67.19%,
          #000000 100%
        );
        position: absolute;
        left: 0;
        top: -1px;
        z-index: 7;
      }
    }
  }
}

@media (max-width: 1023px) {
  .position-page {
    &__block + &__block {
      margin-top: 32px;
    }

    &__block {
      display: block;

      &-header {
        margin-bottom: 24px;
        padding-left: 0;
        padding-bottom: 24px;
      }

      &-left {
        margin-bottom: 16px;
      }

      &-right {
        ul {
          li + li {
            margin-top: 12px;
          }
        }
      }
    }

    &__contact-us {
      &-content {
        display: block;
        padding-top: 60vw;
      }

      &-image {
        width: 100%;
        top: 0;
        bottom: auto;
        left: 0;

        &-fog-top {
          height: 120px;
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .position-page {
    padding-top: 0;
  }
}
</style>
