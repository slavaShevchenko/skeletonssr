<template>
  <div class="partner-offer">
    <div class="wrapper">
      <elementsHeader>
        <template #header>Services</template>
      </elementsHeader>
      <div class="partner-offer__image">
        <nuxt-img
          loading="lazy"
          src="/image/partner-offer.webp"
          alt="partner offer" />
        <div class="partner-offer__image-fog"></div>
      </div>
      <div class="partner-offer__text">
        Our team includes designers, web developers, copywriters, and account
        specialists who create projects and solve any problems. We mix strategy
        and creativity to produce cool digital projects. We're waiting for you!
        Arm yourself with a versatile perspective and experience to be part of
        the process from conception to implementation of our ideas.
      </div>
      <div class="center-button">
        <div class="center-button__line"></div>
        <div class="center-button__center">
          <elementsButton
            class="button__trans-red wide"
            router-link="/services/">
            <template #text>Read more</template>
          </elementsButton>
        </div>
        <div class="center-button__line"></div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.partner-offer {
  padding-top: var(--vertical150);

  .wrapper {
    max-width: 1200px;
  }

  &:deep .header {
    margin-bottom: 0;

    &__h {
      margin-bottom: 0;
    }
  }

  &__image {
    max-width: 960px;
    margin-left: auto;
    margin-right: auto;
    position: relative;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      position: relative;
      z-index: 1;
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
    max-width: 960px;
    margin-left: auto;
    margin-right: auto;
    font-size: var(--text20);
    line-height: 1.5;
    color: var(--text);
    text-align: center;
  }
}

@media (max-width: 1023px) {
  .partner-offer {
    &__image {
      margin-top: -24px;
    }
  }
}
</style>
