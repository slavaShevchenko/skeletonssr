<template>
  <blocksSwiperMain />
  <div v-if="store.getSoloScreen">
    <blocksDepartments :items="store.getDepartments" />
    <blocksJobs />
    <blocksPartnerOffer />
    <blocksHRProfile />
    <blocksContactUs :isWithoutCV="true" form-type="candidate" />
  </div>
</template>

<script setup>
import { useMainStore } from '~/stores/index'

const store = useMainStore()

useHead({
  title: 'Skeleton crew',
})

onMounted(() => {
  setTimeout(() => {
    store.setLoader(false)
  }, 200)
})
</script>

<style scoped lang="scss">
@media (max-width: 767px) {
}
</style>
