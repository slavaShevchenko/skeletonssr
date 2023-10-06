<template>
  <div class="departments" v-if="items[0]">
    <div class="wrapper">
      <elementsHeader>
        <template #header>Dep<span>art</span>ments</template>
        <template #text
          >Our team includes designers, web developers, copywriters, and account
          specialists who create projects and solve any problems. We mix
          strategy and creativity to produce cool digital projects.
        </template>
      </elementsHeader>
    </div>
    <blocksSwiperDepartments :items="items" />
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
