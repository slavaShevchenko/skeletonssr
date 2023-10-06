<template>
  <div class="how-it-works">
    <div class="wrapper">
      <elementsHeader>
        <template #header>How it <span>works</span></template>
        <template #text
          >At The SkeletonCrew, we strive to make the entire process
          straightforward, efficient, and enjoyable. Our goal is to exceed your
          expectations and establish a long-term, trusted relationship with you.
          Experience the seamless process of working with us and let us help you
          achieve your goals.
        </template>
      </elementsHeader>

      <div class="how-it-works__content">
        <div class="how-it-works__item">
          <div class="how-it-works__item-header">
            For <span>candidates</span>
          </div>
          <div class="how-it-works__item-text">
            Please contact us using the form available in each job vacancy or
            select the general Contact Us form at the bottom of the page.
          </div>
        </div>
        <div class="how-it-works__item">
          <div class="how-it-works__item-header">
            For <span>Recruiting</span>
          </div>
          <div class="how-it-works__item-text">
            You can leave your recommendation for any open position, even if you
            haven't found a suitable one, but have an excellent candidate,
            please use the general Contact Us form.
          </div>
        </div>
        <div class="how-it-works__item">
          <div class="how-it-works__item-header">For <span>Business</span></div>
          <div class="how-it-works__item-text">
            Please leave your contact information, and our manager will get in
            touch with you to discuss all the details of our further
            communication and provide information about our current
            opportunities.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.how-it-works {
  padding-top: var(--vertical150);

  &__content {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    background-color: rgba(30, 29, 29, 0.84);
    border-radius: 8px;
  }

  &__item {
    padding: 48px;
    text-align: center;

    &-header {
      margin-bottom: 16px;
      font-family: 'Transducer-bold';
      font-size: var(--text32);
      line-height: 1.1;
      color: var(--main);
      text-transform: uppercase;

      span {
        color: var(--red);
      }
    }

    &-text {
      font-size: var(--text16);
      line-height: 1.4;
      color: var(--text);
    }
  }
}

@media (max-width: 1023px) {
  .how-it-works {
    &__content {
      display: block;
      background: none;
      border-radius: 0;
    }

    &__item {
      padding: 24px;
      background-color: rgba(30, 29, 29, 0.84);
      border-radius: 8px;

      &-header {
        margin-bottom: 16px;
        font-family: 'Transducer-bold';
        font-size: var(--text32);
        line-height: 1.1;
        color: var(--main);
        text-transform: uppercase;

        span {
          color: var(--red);
        }
      }

      &-text {
        font-size: var(--text16);
        line-height: 1.4;
        color: var(--text);
      }
    }

    &__item + &__item {
      margin-top: 24px;
    }
  }
}
</style>
