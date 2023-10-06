<template>
  <div class="departments" v-if="items[0]">
    <div class="wrapper">
      <elementsHeader>
        <template #header>hot <span>jobs</span></template>
        <template #text
          >Looking for exciting career opportunities? Check out our latest hot
          jobs below
        </template>
      </elementsHeader>
    </div>
    <blocksSwiperPositions :items="items" />
  </div>
</template>

<script setup>
const props = defineProps({
  items: Object,
})
</script>

<style scoped lang="scss">
.departments {
  padding-top: var(--vertical150);
}
</style>
