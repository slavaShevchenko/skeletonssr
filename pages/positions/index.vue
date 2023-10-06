<template>
  <div class="positions-page">
    <div class="wrapper">
      <elementsHeader>
        <template #header
          ><h1>Open <span>Positions</span></h1></template
        >
        <template #text
          >Don’t just settle for good enough - unlock your business's full
          potential with us. Whether you need a stunning website, unforgettable
          branding, or a strategic marketing plan, Skeleton Crew’s team of
          experts has you covered. With a focus on quality, creativity, and
          innovation, we'll help your business stand out in a crowded market.
          Take your business to the top with us!
        </template>
      </elementsHeader>

      <blocksFilter />

      <div class="positions">
        <elementsPosition
          v-for="item in sortedItems"
          :position="item"
          :key="item.id"
          v-show="defPositions" />
        <blocksEmptySearch v-show="!defPositions" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from '~/stores/index'

useHead({
  title: 'Open positions',
  meta: [
    {
      name: 'description',
      content:
        'Check out Skeleton Crew open positions to join the most innovative and forward-thinking companies.',
    },
  ],
})

const store = useMainStore()

const sortedItems = computed(() => sortPositions(store.getPositions))
const defPositions = computed(() => store.getPositions.length)

const sortPositions = (positions) => {
  return positions.sort((a, b) => {
    return b.priority - a.priority
  })
}

onMounted(() => {
  setTimeout(() => {
    store.setLoader(false)
  }, 200)
})
</script>

<style scoped lang="scss">
.positions-page {
  padding-top: var(--vertical90);
  padding-bottom: var(--vertical150);
}

@media (max-width: 767px) {
  .positions-page {
    padding-top: 0;
  }
}
</style>
