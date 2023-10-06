<template>
  <blocksServiceMain
    :isWithButton="true"
    title="skeleton recruiter <span>profile</span>"
    image="/image/skeleton6.webp"
    description="Welcome to your Recruiter Profile - your very own gateway to a world where closed vacancies turn into stats of success, KPIs light your path, bonuses are badges of honour, the HR community is your network, and the education library fuels your growth. Let’s embrace the metrics, celebrate the victories, and chart your course in this universe of limitless HR possibilities together!" />
  <blocksHowItWorks />
  <blocksPositions :items="slicedItems" />
  <blocksHRProfile />
  <blocksContactUs :isWithoutCV="false" formType="recruiter" />
</template>

<script setup>
import { useMainStore } from '~/stores/index'

const store = useMainStore()

useHead({
  title: 'Skeleton recruiter profile',
  meta: [
    {
      name: 'description',
      content:
        'Get access to unlimited HR-power for your business. Check out partner offer from Skeleton crew to know how we can help each other',
    },
  ],
})

const slicedItems = store.getPositions
  .sort((a, b) => {
    return b.priority - a.priority
  })
  .slice(0, 5)
const copyPositions = store.getPositions.slice(0)
const randomItems = defRandomItems()
function defRandomItems() {
  let tempArr = []
  for (var i = 0; i < 4; i++) {
    var randomIndex = Math.floor(Math.random() * copyPositions.length)
    tempArr.push(copyPositions[randomIndex])
    copyPositions.splice(randomIndex, 1)
  }
  return tempArr
}

onMounted(() => {
  setTimeout(() => {
    store.setLoader(false)
  }, 200)
})
</script>
