<template>
  <div class="position">
    <div class="position__date">{{ splitDate(position.updated_at) }}</div>
    <div class="position__name">
      <div class="position__name-header" v-html="title"></div>
      <div class="position__name-text">{{ position.location }}</div>
    </div>
    <div class="position__more">
      <elementsButton
        class="button__trans-white"
        :router-link="`/positions/${position.slug}/`">
        <template #text>Read more</template>
        <template #postIcon>
          <svgArrow />
        </template>
      </elementsButton>
    </div>
    <NuxtLink
      :to="`/positions/${position.slug}/`"
      class="position__more-mobile">
      <svgArrowMobile />
    </NuxtLink>
  </div>
</template>

<script setup>
import { useMainStore } from '~/stores/index'

const props = defineProps({
  position: Object,
})

const store = useMainStore()
const title = ref(props.position.title || '')

function wrapSubstringWithSpan(substring) {
  const newValue = title.value.replace('</span>', '').replace('<span>', '')

  if (!substring.length) return newValue

  const regex = new RegExp(substring, 'gi')

  if (regex.test(newValue)) {
    return newValue.replace(
      regex,
      (matchedSubstring) => `<span>${matchedSubstring}</span>`
    )
  } else {
    return newValue
  }
}

watch(
  () => store.getSearch,
  (newValue) => {
    title.value = wrapSubstringWithSpan(newValue)
  }
)

onMounted(() => {
  title.value = wrapSubstringWithSpan(store.getSearch)
})

function splitDate(date) {
  return date.split('T')[0]
}
</script>

<style scoped lang="scss">
.position {
  display: flex;
  column-gap: 24px;
  padding-top: 32px;
  padding-bottom: 32px;
  border-bottom: 2px solid var(--unactive);
  position: relative;

  &__date {
    flex: 0 0 20%;
    font-size: var(--text20);
    line-height: 1.5;
    color: var(--text);
  }

  &__name {
    flex: 1 0 calc(80% - 300px);
    &-header {
      font-family: 'Transducer-bold';
      font-size: var(--text36);
      line-height: 1.1;
      color: var(--main);
      text-transform: uppercase;

      &:deep span {
        background-color: var(--red);
        color: var(--main);
      }
    }

    &-text {
      font-size: var(--text20);
      line-height: 1.5;
      color: var(--unactive);
    }
  }

  &__more {
    flex: 0 0 auto;
  }

  &__more-mobile {
    display: none;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 5;
    fill: var(--red);

    svg {
      position: absolute;
      right: 0;
      top: 50%;
      transform: translate(-50%, 0);
    }
  }
}

@media (max-width: 1023px) {
  .position {
    display: block;
    column-gap: 0;
    padding-top: 24px;
    padding-bottom: 12px;
    padding-right: 32px;

    &__more {
      display: none;
    }

    &__more-mobile {
      display: block;
    }
  }
}
</style>
