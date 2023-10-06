<template>
  <div class="blog-post__content">
    <elementsHeader class="top-header">
      <template #header
        ><h1>{{ post?.name }}</h1></template
      >
    </elementsHeader>

    <div class="blog-post__info">
      <div class="blog-post__info-date">
        {{ splitDate(post?.created_at) }}
      </div>

      <div class="blog-post__info-tags">
        <div
          class="blog-post__info-tags-item"
          v-for="tag in post?.tags"
          :key="`${tag?.name}${tag?.id}`">
          {{ '#' + tag?.name }}
        </div>
      </div>
    </div>

    <div class="blog-post__socials">
        <elementsSocial :column="false" />
    </div>

    <div class="blog-post__description" v-html="post?.description"></div>
  </div>
</template>

<script setup>
import { splitDate } from '@/api/functions'

const props = defineProps({
  post: Object,
})
</script>

<style scoped lang="scss">
.blog-post {
  &__content {
    width: 100%;
    &:deep .header.top-header {
      max-width: none;
      margin-left: 0;
      margin-right: 0;
      margin-bottom: 20px;
      text-align: left;

      .header__h {
        font-size: var(--text64);
      }
    }
  }

  &__info {
    display: flex;
    column-gap: 12px;
    margin-bottom: var(--vertical90);
    font-family: 'Transducer-bold';
    font-size: var(--text20);
    line-height: 1.2;

    &-date {
      flex: 0 0 max-content;
      color: var(--unactive);
    }

    &-tags {
      flex: 0 1 auto;
      flex-wrap: wrap;
      display: flex;
      column-gap: 12px;
      color: var(--red);
    }
  }

  &__description {
    font-size: var(--text20);
    line-height: 1.5;
    color: var(--text);

    &:deep {
      h2,
      h3 {
        margin-bottom: 20px;
        font-family: 'Transducer-bold';
        font-size: var(--text36);
        line-height: 1;
        color: var(--main);
        text-transform: uppercase;
      }
      h3 {
        font-size: var(--text28);
      }

      p + p {
        margin-top: 12px;
      }

      p + h2,
      p + h3,
      ul + p,
      ul + h2,
      ul + h3,
      ul + p {
        margin-top: 60px;
      }

      ul {
        margin: 0;
        li + li {
          margin-top: 12px;
        }
      }

      a {
        color: var(--red);
        text-decoration: underline;
      }

      img {
        max-width: 100%;
      }
    }
  }

  &__socials {
    display: none;

    @media (max-width: 1023px) {
      display: block;
      margin-bottom: 32px;
    }
  }
}
</style>
