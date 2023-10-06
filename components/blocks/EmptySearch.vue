<template>
  <div class="positions__empty">
    <div><span>nothing</span> was found</div>
  </div>
</template>

<style scoped lang="scss">
.positions__empty {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 32px;
  font-family: 'Transducer-bold';
  font-size: var(--text36);
  color: var(--main);
  text-align: center;
  text-transform: uppercase;

  span {
    color: var(--red);
  }
}
</style>
