<template>
  <div class="social" :class="{ column: column }">
    <a
      href="https://www.facebook.com/profile.php?id=61550742774976"
      class="social-item">
      <svgFacebook />
    </a>
    <a href="https://www.instagram.com/skltncrew_/" class="social-item">
      <svgInstagram />
    </a>
    <a href="https://www.linkedin.com/company/skltn_crew/" class="social-item">
      <svgLinkedin />
    </a>
    <a href="https://www.behance.net/skeleton_crew" class="social-item">
      <svgBehance />
    </a>
  </div>
</template>

<script setup>
const props = defineProps({
  column: Boolean,
})
</script>

<style scoped lang="scss">
.social {
  display: flex;
  align-items: flex-end;
  gap: 32px;

  &.column {
    flex-direction: column;
    align-items: center;
  }
}
</style>
