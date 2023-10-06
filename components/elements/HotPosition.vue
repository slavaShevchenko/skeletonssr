<template>
  <div class="position">
    <div class="position__wrap">
      <div class="position__header" v-html="position?.title"></div>
      <div class="position__text" v-html="position?.description"></div>
    </div>
    <div class="position__more">
      <elementsButton
        class="button__trans-white"
        :router-link="`/services/${position?.slug}`">
        <template #text>{{ 'Learn more' }}</template>
        <template #postIcon>
          <svgArrow />
        </template>
      </elementsButton>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  position: Object,
})

onMounted(() => {
  console.log(props.position)
})
</script>

<style scoped lang="scss">
.position {
  display: flex;
  flex-direction: column;
  padding: 64px;
  background-color: rgba(30, 29, 29, 0.84);
  border-radius: 8px;
  text-align: center;

  &__wrap {
    flex: 1 0 auto;
  }

  &__header {
    margin-bottom: 16px;
    font-family: 'Transducer-bold';
    font-size: var(--text36);
    line-height: 1.1;
    color: var(--main);
    text-transform: uppercase;

    &:deep span {
      color: var(--red);
    }
  }

  &__text {
    font-size: var(--text16);
    line-height: 1.4;
    color: var(--text);
  }

  &__salary {
    margin-top: 24px;
    font-family: 'Transducer-bold';
    font-size: clamp(28px, 2.1vw, 42px);
    color: var(--main);

    &:deep span {
      color: var(--red);
    }
  }

  &__more {
    margin-top: 48px;
  }
}
@media (max-width: 767px) {
  .position {
    padding: 32px 16px;
  }
  .position + .position {
    margin-top: 20px;
  }
}
</style>
