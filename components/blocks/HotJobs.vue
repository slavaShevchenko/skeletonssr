<template>
  <div class="hot-jobs" v-if="items[0]">
    <div class="wrapper">
      <elementsHeader>
        <template #header>all <span>vacancies</span></template>
        <template #text
          >Our team includes designers, web developers, copywriters, and account
          specialists who create projects and solve any problems. We mix
          strategy and creativity to produce cool digital projects.
        </template>
      </elementsHeader>

      <div class="positions">
        <elementsHotPosition
          v-for="item in items"
          :position="item"
          :key="item?.id"
          routerLink="/positions/" />
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
const props = defineProps({
  items: Object,
})
</script>

<style scoped lang="scss">
.hot-jobs {
  padding-top: var(--vertical150);
}
.positions {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}
@media (max-width: 767px) {
  .positions {
    display: block;
  }
}
</style>
