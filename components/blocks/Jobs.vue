<template>
  <div class="jobs" v-if="positions[0]">
    <div class="wrapper">
      <elementsHeader>
        <template #header>Join <span>us</span></template>
        <template #text
          >Are you looking for an exciting and fulfilling career opportunity?
          Look no further! we are always on the lookout for talented individuals
          to join our team.
        </template>
      </elementsHeader>

      <div class="positions">
        <elementsPosition
          v-for="item in positions"
          :position="item"
          :key="item.id" />
      </div>

      <div class="center-button">
        <elementsButton
          class="button__trans-red wide"
          router-link="/positions/">
          <template #text>See all</template>
        </elementsButton>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from '~/stores/index'

const store = useMainStore()
const positions = store.getPositions.slice(0, 4)
</script>

<style scoped lang="scss">
.jobs {
  padding-top: var(--vertical150);
}
</style>
