<template>
  <div class="contact-us">
    <div class="wrapper">
      <elementsHeader>
        <template #header>contact <span>us</span></template>
        <template #text
          >Do you have any questions or need more information? Get in touch with us using
          the form below. Our dedicated team is ready to assist you with any
          inquiries you may have.
        </template>
      </elementsHeader>
      <div class="contact-us__image">
        <svgBackground />
        <nuxt-img loading="lazy" src="/image/skeleton4.webp" alt="contact us" />
        <div class="contact-us__image-fog"></div>
      </div>
      <div class="contact-us__form-block">
        <FormGlobal
          :isWithoutCV="isWithoutCV"
          :form-type="formType || 'business'" />
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  formType: String,
  isWithoutCV: Boolean,
})
</script>

<style scoped lang="scss">
.contact-us {
  padding-top: var(--vertical150);
  padding-bottom: var(--vertical150);

  &__form-block {
    max-width: 1000px;
    margin: 0 auto;
    position: relative;
    z-index: 5;
  }

  &__image {
    max-width: 900px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: -21%;
    position: relative;
    z-index: 1;
    overflow: hidden;

    svg {
      width: 100%;
      height: 100%;
      object-fit: contain;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -40%);
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
</style>
