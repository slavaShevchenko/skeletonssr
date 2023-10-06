<template>
  <div class="hr-profile">
    <div class="wrapper">
      <div class="hr-profile__wrap">
        <div class="hr-profile__left">
          <div class="hr-profile__header">
            recruiter
            <span>profile</span>
          </div>
          <div class="hr-profile__text">
            In your Profile, successes fill positions, performance metrics lead
            your way, rewards recognize accomplishments, connections foster
            networks, and learning propels development. Access all of these
            benefits now!
          </div>
          <div class="hr-profile__button">
            <elementsButton class="button__red" :router-link="HR_CABINET_URL">
              <template #text>Recruiter profile</template>
            </elementsButton>
          </div>
        </div>
        <div class="hr-profile__right">
          <div class="hr-profile__image">
            <nuxt-img
              loading="lazy"
              src="/image/hr-profile.webp"
              alt="hr profile" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { HR_CABINET_URL } from '@/api/endpoints'
</script>

<style scoped lang="scss">
.hr-profile {
  padding-top: var(--vertical150);

  &__wrap {
    display: flex;
    align-items: center;
    column-gap: 80px;
    padding: 40px 0 40px 80px;
    background-color: rgba(30, 29, 29, 0.58);
    border-radius: 20px;
    overflow: hidden;
  }

  &__left,
  &__right {
    flex: 0 1 50%;
  }

  &__header {
    margin-bottom: 20px;
    font-family: 'Transducer-bold';
    font-size: var(--text64);
    color: var(--main);
    text-transform: uppercase;

    span {
      color: var(--red);
    }
  }

  &__text {
    margin-bottom: 48px;
    font-size: var(--text20);
    line-height: 1.5;
    color: var(--text);
  }

  &__image {
    width: 100%;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
}
@media (max-width: 767px) {
  .hr-profile {
    padding-top: var(--vertical150);

    &__wrap {
      display: block;
      padding: 40px 20px 20px 20px;
    }

    &__left {
      margin-bottom: 40px;
    }
    &__right {
      margin-right: -20px;
    }
  }
}
</style>
