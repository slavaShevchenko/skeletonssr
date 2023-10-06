<template>
  <div class="header">
    <div class="header__h">
      <slot name="header"></slot>
    </div>
    <div class="header__text">
      <slot name="text"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.header {
  max-width: 920px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: var(--vertical80);
  text-align: center;

  &__h {
    margin-bottom: 20px;
    font-family: 'Transducer-bold';
    font-size: var(--text96);
    color: var(--main);
    text-transform: uppercase;

    &:deep span {
      color: var(--red);
    }
  }

  &__text {
    font-size: var(--text20);
    color: var(--text);
    line-height: 1.5;
    white-space: pre-line;
  }
}
@media (max-width: 1023px) {
  .header {
    &__h {
      margin-bottom: 8px;
    }
  }
}
</style>
