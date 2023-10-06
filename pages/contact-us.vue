<template>
  <div class="contact-us">
    <div class="wrapper">
      <elementsHeader>
        <template #header
          ><h1>contact <span>us</span></h1></template
        >
        <template #text
          >Do you have any questions or need more information? Get in touch with
          us using the form below. Our dedicated team is ready to assist you
          with any inquiries you may have.
        </template>
      </elementsHeader>
      <div class="contact-us__col">
        <FormGlobal :isWithoutCV="true" form-type="candidate" />
      </div>
      <div class="contact-us__col">
        <div class="contact-us__image">
          <svgBackground />
          <nuxt-img src="/image/skeleton4.webp" alt="contact us" />
          <div class="contact-us__image-fog"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from '~/stores/index'

const store = useMainStore()

useHead({
  title: 'Contact us',
  meta: [
    {
      name: 'description',
      content:
        'Contact Skeleton crew if you looking for a business consulting, company’s HR audit or any IT, marketing and design services.',
    },
  ],
})

onMounted(() => {
  setTimeout(() => {
    store.setLoader(false)
  }, 200)
})
</script>

<style scoped lang="scss">
.contact-us {
  padding-top: var(--vertical90);
  padding-bottom: var(--vertical150);

  &:deep .header {
    flex: 0 0 100%;
    min-width: 100%;
    text-align: left;

    .header__text {
      max-width: 50%;
    }
  }

  .wrapper {
    display: flex;
    align-items: center;
    column-gap: 32px;
    flex-wrap: wrap;
  }

  &__col {
    flex: 1 1 50%;
    max-width: calc(50% - 16px);
  }

  &__image {
    width: 100%;
    margin-top: -30%;
    position: relative;
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

@media (max-width: 1023px) {
  .contact-us {
    &:deep .header {
      flex: 1 0 100%;

      .header__text {
        max-width: 100%;
      }
    }
    .wrapper {
      column-gap: 0;
      flex-wrap: wrap;
    }

    &__col {
      flex: 1 1 100%;
      max-width: 100%;

      &:nth-child(1) {
        order: 2;
      }
      &:nth-child(2) {
        order: 1;
        position: relative;
        z-index: 10;
      }
    }

    &__image {
      margin-top: 0;
      margin-bottom: -30%;
    }
  }
}
@media (max-width: 767px) {
  .contact-us {
    padding-top: 0;
  }
}
</style>
