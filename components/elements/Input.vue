<template>
  <div class="form__line-input">
    <div class="form__element" :class="{ error: validation?.$error }">
      <div class="form__element-label">
        {{ label }}
        <span class="form__element-label-required" v-if="isRequired"> *</span>
      </div>
      <input
        type="text"
        class="form__element-input"
        :value="inputValue"
        @blur="$emit('onBlur')"
        @input="$emit('update:inputValue', $event.target.value)" />
      <div class="form__element-error" v-if="validation?.$error">
        <svgError />
        <span>{{ validation?.$errors?.[0]?.$message }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  inputValue: String,
  validation: Object,
  label: String,
  isRequired: Boolean,
})
const emit = defineEmits(['update:inputValue', 'onBlur'])
</script>

<style scoped lang="scss">
.form {
  &__line {
    &-input {
      margin-top: 24px;
    }
  }
  &__element {
    &-label {
      margin-bottom: 10px;
      font-family: 'Transducer-bold';
      font-size: var(--text16);
      color: var(--main);
      &-required {
        color: var(--red);
      }
    }
    &-input {
      width: 100%;
      height: 48px;
      padding: 0 16px;
      background-color: rgba(151, 151, 151, 0.08);
      border: 1px solid transparent;
      border-radius: 4px;
      outline: none;
      font-size: var(--text14);
      color: var(--main);
    }
    &-error {
      display: flex;
      align-items: center;
      column-gap: 10px;
      padding-top: 10px;
      font-size: var(--text12);
      color: var(--error);
      fill: var(--error);
    }
    &.error &-input {
      border: 1px solid var(--error);
    }
    &.error &-label {
      color: var(--error);
    }
  }
}

@media (max-width: 1023px) {
  .form {
    &__line {
      &-input {
        margin-top: 24px;
      }
    }
    &__element {
      &-input {
        height: 40px;
      }
    }
  }
}
</style>
