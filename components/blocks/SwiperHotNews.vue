<template>
  <div class="hot-news">
    <elementsHeader>
      <template #header><span>Hot</span> news</template>
    </elementsHeader>
    <Swiper
      :slides-per-view="1.1"
      :space-between="24"
      :breakpoints="{
        767: { slidesPerView: 2.1 },
        1023: { slidesPerView: 3 },
      }"
      class="swiperForMobile">
      <SwiperSlide v-for="post in store.getHotNews" :key="post.id">
        <elementsBlogPostHot :blogPost="post" />
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script setup>
import { useMainStore } from '~/stores/index'

const store = useMainStore()
</script>

<style scoped lang="scss">
.hot-news {
  margin-top: var(--vertical150);
  color: var(--unactive);

  &:deep .header {
    max-width: none;
    margin-left: 0;
    margin-right: 0;
    text-align: left;
  }
}
@media (max-width: 1023px) {
}
</style>
