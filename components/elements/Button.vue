<template>
  <template v-if="routerLink">
    <NuxtLink class="button" :to="routerLink">
      <span class="button__text">
        <slot name="text"></slot>
      </span>
      <slot name="postIcon"></slot>
    </NuxtLink>
  </template>
  <template v-else>
    <button v-bind:class="disabled && 'button__disabled'" class="button">
      <span class="button__text">
        <slot name="text"></slot>
      </span>
      <slot name="postIcon"></slot>
    </button>
  </template>
</template>

<script setup>
const props = defineProps({
  disabled: Boolean,
  routerLink: String,
})
</script>

<style scoped lang="scss">
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  column-gap: 16px;
  min-width: 200px;
  height: 44px;
  padding: 0 32px;
  background-color: transparent;
  border: 2px solid transparent;
  border-radius: 4px;
  outline: none;
  font-family: 'Transducer-bold';
  font-size: var(--textButton20);
  position: relative;
  transition: background 0.4s ease, border 0.4s ease, color 0.4s ease;
  cursor: pointer;

  &.wide {
    min-width: 452px;
  }

  &.full {
    min-width: 100%;
  }

  &__red {
    background-color: var(--red);
    color: var(--main);

    &:hover {
      background-color: var(--main);
      color: var(--red);
    }
  }

  &__trans-red {
    border-color: var(--red);
    color: var(--red);

    &:hover {
      background-color: var(--red);
      color: var(--main);
    }
  }

  &__trans-white {
    border-color: var(--red);
    color: var(--main);
    fill: var(--red);

    &:hover {
      background-color: var(--red);
      color: var(--black);
      fill: var(--black);
    }
  }

  &__disabled {
    pointer-events: none;
    opacity: 0.1;
  }
}

@media (max-width: 600px) {
  .button {
    &.wide {
      min-width: 200px;
    }
  }
}
</style>
