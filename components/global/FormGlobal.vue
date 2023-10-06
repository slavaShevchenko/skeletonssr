<template>
  <div class="form">
    <template v-if="formType === 'business'">
      <elementsInput
        label="Company Name"
        :isRequired="true"
        :inputValue="validateState.company_name"
        :validation="v$.company_name"
        @onBlur="onValidateField('company_name')"
        @update:inputValue="
          (newValue) => (validateState.company_name = newValue)
        " />

      <elementsInput
        label="Link to Website"
        :inputValue="validateState.website"
        @update:inputValue="(newValue) => (validateState.website = newValue)" />

      <elementsInput
        label="Contact person"
        :inputValue="validateState.employee_name"
        @update:inputValue="
          (newValue) => (validateState.employee_name = newValue)
        " />
    </template>

    <template v-if="formType !== 'business'">
      <elementsInput
        :label="fullName"
        :isRequired="true"
        :inputValue="validateState.full_name"
        :validation="v$.full_name"
        @onBlur="onValidateField('full_name')"
        @update:inputValue="
          (newValue) => (validateState.full_name = newValue)
        " />
    </template>

    <elementsChooseContact
      :inputValue="validateState.contact_info"
      :selectValue="validateState.contact_method"
      :errorMessage="
        v$.contact_method.$errors?.[0]?.$message ||
        v$.contact_info.$errors?.[0]?.$message
      "
      @onBlur="onValidateField('contact_info')"
      @update:inputValue="(newValue) => (validateState.contact_info = newValue)"
      @handleSelect="handleSelect" />

    <template v-if="formType === 'recruiter'">
      <elementsInput
        label="Candidate's Full Name"
        :isRequired="true"
        :inputValue="validateState.full_name_candidates"
        :validation="v$.full_name_candidates"
        @onBlur="onValidateField('full_name_candidates')"
        @update:inputValue="
          (newValue) => (validateState.full_name_candidates = newValue)
        " />

      <elementsChooseContact
        :inputValue="validateState.contact_info_candidates"
        :selectValue="validateState.contact_method_candidates"
        :errorMessage="
          v$.contact_method_candidates.$errors?.[0]?.$message ||
          v$.contact_info_candidates.$errors?.[0]?.$message
        "
        @onBlur="onValidateField('contact_info_candidates')"
        @update:inputValue="
          (newValue) => (validateState.contact_info_candidates = newValue)
        "
        @handleSelect="handleSelectCandidates" />
    </template>

    <!--    <template v-if="formType === 'candidate'">-->
    <!--      <elementsInput-->
    <!--        label="Level"-->
    <!--        :inputValue="validateState.level"-->
    <!--        @update:inputValue="(newValue) => (validateState.level = newValue)" />-->
    <!--    </template>-->

    <div class="form__line form__line-checkbox">
      <div class="form__element" :class="{ error: v$.agree.$error }">
        <input
          type="checkbox"
          id="terms"
          @change="onValidateField('agree')"
          class="form__element-checkbox"
          v-model="validateState.agree" />
        <label for="terms" class="form__element-checkbox-label">
          <svgCheck />
          <span
            >Agree to
            <NuxtLink to="/terms-and-conditions/">Terms </NuxtLink>
            <span class="form__element-label-required"> *</span></span
          >
        </label>
        <div class="form__element-error" v-if="v$.agree.$error">
          <svgError />
          <span>{{ v$.agree.$errors[0].$message }}</span>
        </div>
      </div>
    </div>

    <div class="form__line form__line-input">
      <div class="form__element">
        <div class="form__element-label">Message</div>
        <textarea
          class="form__element-textarea"
          v-model="validateState.message"></textarea>
      </div>
    </div>

    <div v-if="!isWithoutCV" class="form__line form__line-checkbox">
      <input type="file" id="cv" class="form__element-file" @change="LoadCV" />
      <label for="cv" class="form__element-file-label">
        <span>{{ fileNames[formType]}}</span>
        <svgFile />
      </label>
      <div
        class="form__element-file-name"
        v-if="cvName"></div>
<!--      <div class="form__element-error" v-if="v$.cv.$error">-->
<!--        <svgError />-->
<!--        <span>{{ v$.cv.$errors[0].$message }}</span>-->
<!--      </div>-->
    </div>

    <div class="form__line form__line-submit">
      <elementsButton
        :disabled="isFormInvalid"
        class="button__red full"
        @click="submitForm()">
        <template #text>Send</template>
      </elementsButton>
    </div>
  </div>
</template>

<script setup>
import { useMainStore } from '~/stores/index'
import useValidate from '@vuelidate/core'
import { required, minLength, helpers, email } from '@vuelidate/validators'
import { fetchRequest } from '@/api/fetchRequest'
import { FORM_ENDPOINT } from '@/api/endpoints'

const props = defineProps({
  formType: String,
  isWithoutCV: Boolean,
})

const store = useMainStore()
var formData = new FormData()
const cvName = ref(false)
const isPdf = ref(null)
const isFormInvalid = ref(true)

const validateState = reactive({
  full_name: '',
  full_name_candidates: '',
  company_name: '',
  website: '',
  employee_name: '',
  agree: '',
  message: '',
  contact_method: 'telegram',
  contact_info: '',
  contact_method_candidates: 'telegram',
  contact_info_candidates: '',
  // level: '',
})
const validatePhoneNumber = (value) => {
  const cleanedValue = value.replace(/[^0-9+]/g, '')
  if (cleanedValue !== value) {
    return false
  }
  const regex = /^\+[0-9]+$/
  return regex.test(cleanedValue)
}
const validateTelegramUsername = (value) => {
  const regex = /^@/
  return regex.test(value)
}
const validateAgree = (value) => {
  return value
}

const validateCV = () => !!cvName.value

const connectionMethodsValidation = (value) => {
  const isPhoneNumber = value?.[0] === '+'

  const telegramValidation = {
    minLengthValue:minLength(2),
    validateTelegramUsername:helpers.withMessage(
      'The Telegram username format must start with a "@" symbol',
      validateTelegramUsername
    ),
  }

  const phoneValidation = {
    minLengthValue:minLength(10),
    validatePhoneNumber:helpers.withMessage(
      'The phone format must contain only numbers and start with a "+" symbol',
      validatePhoneNumber
    ),
  }

  return ({
    telegram: isPhoneNumber ? phoneValidation : telegramValidation,
    email:{
      email:helpers.withMessage("Doesn't match email format", email),
    },
    whatsapp: phoneValidation,
  })
}

const validateRules = computed(() => {
  const { formType } = props

  const isBusiness = formType === 'business'
  const isRecruiter = formType === 'recruiter'

  return {
    ...(!isBusiness && {
      full_name: {
        required: helpers.withMessage('Input is required', required),
        minLengthValue: minLength(2),
      },
    }),

    ...(isBusiness && {
      company_name: {
        required: helpers.withMessage('Input is required', required),
        minLengthValue: minLength(2),
      },
    }),

    ...(isRecruiter && {
      full_name_candidates: {
        required: helpers.withMessage('Input is required', required),
        minLengthValue: minLength(2),
      },

      contact_method_candidates: {
        required: helpers.withMessage('Input is required', required),
      },

      contact_info_candidates: {
        required: helpers.withMessage('Input is required', required),
        ...connectionMethodsValidation(validateState.contact_info_candidates)[validateState.contact_method_candidates],
      },
    }),

    contact_method: {
      required: helpers.withMessage('Input is required', required),
    },

    contact_info: {
      required: helpers.withMessage('Input is required', required),
      ...connectionMethodsValidation(validateState.contact_info)[validateState.contact_method],
    },

    agree: {
      validateAgree: helpers.withMessage('Input is required', validateAgree),
    },

    // ...(!props.isWithoutCV && {
    //   cv: {
    //     validateCV: helpers.withMessage('This field is required', validateCV),
    //   },
    // }),
  }
})

const v$ = useValidate(validateRules, validateState)

watch(v$, (newState) => {
  isFormInvalid.value = !!newState?.$silentErrors?.length
})

async function LoadCV(event) {
  cvName.value = true

  await nextTick()

  if (event.target.files[0].name.split('.').pop().toLowerCase() === 'pdf') {
    isPdf.value = true
    event.target
      .closest('.form__line')
      .querySelector('.form__element-file-name').innerText =
      event.target.files[0].name

    formData.append('cv', event.target.files[0])
  } else {
    isPdf.value = false
    event.target
      .closest('.form__line')
      .querySelector('.form__element-file-name').innerText =
      'Only .pdf files are supported'
  }
}

const fields = {
  common: ['agree', 'message', 'contact_method', 'contact_info'],
  recruiter: [
    'full_name',
    'full_name_candidates',
    'contact_method_candidates',
    'contact_info_candidates',
  ],
  candidate: ['full_name', 'level'],
  business: ['company_name', 'website', 'employee_name'],
}

function getSuccessResponse(response) {
  const isBusiness = props.formType === 'business'

  const successTitle = isBusiness ? 'Thank you for your request!' : 'Congratulations!'
  const successMessage = isBusiness
    ? 'We\'ll get in touch with you as soon as possible.'
    : 'Now you will be aware of all the promotions and news!'

  store.setFormSended({
    title: response?.success ? successTitle : 'Error!',
    message:  response?.success ? successMessage : response?.message,
  })

  setTimeout(() => {
    store.setFormSended(false)
  }, 3000)
}

function onValidateField(fieldName) {
  v$.value?.[fieldName]?.$validate()
}

function submitForm() {
  v$.value.$validate()

  if (!v$.value.$error) {
    formData.append('type', props.formType)

    const currentFields = [...fields.common, ...fields[props.formType]]

    currentFields.forEach((field) => {
      if (validateState[field]) {
        formData.append(field, validateState[field] || '')
      }
    })

    const myHeaders = new Headers()
    myHeaders.append('Accept', 'application/json')

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: formData,
      redirect: 'follow',
    }

    fetchRequest(FORM_ENDPOINT, requestOptions, getSuccessResponse)
  }
}

function changeSelect(data, fieldName) {
  formData.append(fieldName, data)
  validateState[fieldName] = data
}

function handleSelect(data) {
  changeSelect(data, 'contact_method')
}

function handleSelectCandidates(data) {
  changeSelect(data, 'contact_method_candidates')
}

const fullName = `${
  props.formType === 'recruiter' ? "Recruiter's" : ''
} Full Name`

const fileNames = {
  recruiter: "Candidate's CV",
  business: 'Attach detailed description',
  candidate: 'Your CV',
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
    &-input + &-checkbox {
      margin-top: 10px;
    }
    &-input + &-submit,
    &-checkbox + &-submit {
      margin-top: 40px;
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
    &-textarea {
      width: 100%;
      height: 174px;
      padding: 16px;
      background-color: rgba(151, 151, 151, 0.08);
      border: 1px solid transparent;
      border-radius: 4px;
      outline: none;
      resize: none;
      font-size: var(--text14);
      color: var(--main);
    }
    &-checkbox {
      display: none;

      &-label {
        display: inline-flex;
        align-items: center;
        height: 20px;
        padding-left: 30px;
        font-family: 'Transducer-bold';
        font-size: var(--text12);
        color: var(--text);
        position: relative;
        cursor: pointer;
        user-select: none;
        fill: var(--red);

        svg {
          opacity: 0;
          position: absolute;
          left: 6px;
          top: 7px;
          transition: opacity 0.3s ease;
        }

        &::before {
          content: '';
          width: 20px;
          height: 20px;
          border: 1px solid var(--red);
          border-radius: 6px;
          position: absolute;
          left: 0;
          top: 0;
        }

        a {
          color: var(--text);
          text-decoration: underline;
        }
      }

      &:checked + &-label {
        svg {
          opacity: 1;
        }
      }
    }
    &-file {
      display: none;

      &-label {
        display: inline-flex;
        align-items: center;
        column-gap: 10px;
        height: 20px;
        font-size: var(--text16);
        color: var(--text);
        position: relative;
        cursor: pointer;
        user-select: none;
        fill: var(--red);

        svg {
          fill: var(--red);
        }
      }

      &-name {
        padding-top: 10px;
        font-size: var(--text12);
        color: var(--text);

        &.error {
          color: var(--error);
        }
      }
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
    &.error &-input,
    &.error &-textarea {
      border: 1px solid var(--error);
    }
    &.error &-label {
      color: var(--error);
    }
    &.error &-checkbox {
      &-label {
        color: var(--error);

        &::before {
          border: 1px solid var(--error);
        }
      }
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
      &-textarea {
        height: 130px;
      }
    }
  }
}
</style>
