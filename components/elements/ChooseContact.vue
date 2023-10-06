<template>
  <div class="form__line form__line-input">
    <div class="form__element" :class="{ error: !!errorMessage }">
      <div class="form__element-wrapper">
        <div class="form__element-select-wrapper">
          <div class="form__element-label">
            Choose method <span class="form__element-label-required"> *</span>
          </div>

          <elementsSelect
            :category="connectionMethods"
            @selectData="selectChange"
            class="form__element-input form__element-select"
            :v-model="selectValue" />
        </div>

        <div class="form__element-select-input">
          <div class="form__element-label">
            Contact information
            <span class="form__element-label-required"> *</span>
          </div>
          <input
            type="text"
            class="form__element-input"
            :value="inputValue"
            @blur="$emit('onBlur')"
            @input="$emit('update:inputValue', $event.target.value)" />
        </div>
      </div>

      <div class="form__element-error" v-if="!!errorMessage">
        <svgError />
        <span>{{ errorMessage }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  inputValue: String,
  selectValue: String,
  errorMessage: String,
})
const emit = defineEmits(['update:inputValue', 'handleSelect', 'onBlur'])

const connectionMethods = [
  { name: 'Telegram', id: 1, value: 'telegram' },
  { name: 'Whatsapp', id: 2, value: 'whatsapp' },
  { name: 'Email', id: 3, value: 'email' },
]

function selectChange(data) {
  const selectedMethod = connectionMethods.find(
    (item) => item.id === data
  ).value

  emit('handleSelect', selectedMethod)
}
</script>

<style scoped lang="scss">
.form {
  padding: 40px 48px;
  background: rgba(30, 29, 29, 0.58);
  backdrop-filter: blur(13px);
  border-radius: 36px;

  &__line {
    &-input + &-input,
    &-checkbox + &-input {
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
    &-select {
      padding: 0;

      & :deep(.select__view),
      :deep(.select__content) {
        border: none;
      }
      &-wrapper {
        width: 40%;
        margin-right: 16px;
      }
      &-input {
        width: 60%;
      }
    }
    &-wrapper {
      display: flex;
      align-items: center;
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
    padding: 30px 32px;
    border-radius: 24px;

    &__line {
      &-input + &-submit,
      &-checkbox + &-submit {
        margin-top: 24px;
      }
    }

    &__element {
      &-input {
        height: 40px;
      }
      &-select {
        & :deep(.select__view) {
          height: 40px;
        }
      }
    }
  }
}

@media (max-width: 576px) {
  .form {
    &__element {
      &-wrapper {
        flex-direction: column;
      }
      &-select {
        &-wrapper {
          width: 100%;
          margin-right: 0;
          margin-bottom: 24px;
        }
        &-input {
          width: 100%;
        }
      }
    }
  }
}
</style>
