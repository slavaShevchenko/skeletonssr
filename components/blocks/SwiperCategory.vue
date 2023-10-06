<template>
  <div class="blog__category">
    <Swiper
      :slides-per-view="'auto'"
      :space-between="12"
      class="swiperCategories">
      <SwiperSlide>
        <elementsButton class="button__trans-white" :router-link="'/blog/'">
          <template #text>All</template>
        </elementsButton>
      </SwiperSlide>
      <template v-for="category in categories">
        <SwiperSlide v-if="formatRoute(category.name)" :key="category.id">
          <elementsButton
            class="button__trans-white"
            :router-link="`/blog/${formatRoute(category.name)}/`">
            <template #text>{{ category.name }}</template>
          </elementsButton>
        </SwiperSlide>
      </template>
    </Swiper>
  </div>
</template>

<script setup>
import { formatRoute } from '@/api/functions'

const props = defineProps({
  categories: Object,
})
</script>

<style scoped lang="scss">
.blog__category {
  margin-bottom: var(--vertical90);

  .swiperCategories {
    overflow: visible;
    .swiper-slide {
      width: auto;
    }
  }

  &:deep .button {
    min-width: 0;
    border-width: 1px;
  }

  .router-link-active {
    background-color: var(--red);
    color: var(--black);
    fill: var(--black);
  }
}
@media (max-width: 1023px) {
}
</style>
