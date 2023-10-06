<template>
  <div class="form-sended">
    <div class="form-sended__content">
      <div class="form-sended__image">
        <nuxt-img src="/image/form-sended.png" alt="form sent" />
      </div>
      <div class="form-sended__header">
        {{ formResult.title }}
      </div>
      <div class="form-sended__text">
          {{ formResult.message }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  formResult: String,
})
</script>

<style scoped lang="scss">
.form-sended {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background: rgba(60, 60, 60, 0.12);
  backdrop-filter: blur(10px);
  position: fixed;
  left: 0;
  top: 0;
  z-index: 1000;

  &__content {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 586px;
    padding: 32px 140px;
    background-color: var(--black);
  }

  &__image {
    position: relative;

    &::before {
      content: '';
      width: 100%;
      height: 54px;
      background: linear-gradient(
        360deg,
        #000000 9.65%,
        rgba(0, 0, 0, 0) 108.27%
      );
      position: absolute;
      left: 0;
      bottom: 0;
    }
  }

  &__header {
    margin-bottom: 16px;
    font-family: 'Transducer-bold';
    font-size: var(--text32);
    color: var(--main);
    text-align: center;
  }

  &__text {
    font-size: var(--text16);
    line-height: 1.4;
    color: var(--text);
    text-align: center;
  }
}
</style>
