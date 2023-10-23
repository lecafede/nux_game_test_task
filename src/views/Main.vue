<template>
  <div
    class="container"
  >
    <AppForm
      title="Registration"
      button-name="Register"
      @form-submitted="handleFormSubmission"
    >
      <template #default>
        <AppInput
          id="username"
          v-model.trim="$v.userName.$model"
          type="text"
          name="username"
          label="User Name"
          placeholder="Enter username"
          :error="isShowUserErrorMessage"
          error-message="You must enter only letters"
        />
        <AppInput
          id="phone"
          v-model.trim="$v.phoneNumber.$model"
          type="tel"
          name="phone"
          label="Phone Number"
          placeholder="Enter phone number"
          :error="isShowPhoneErrorMessage"
          error-message="You must enter only numbers or symbols"
        />
      </template>
    </AppForm>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate';
import AppForm from "@/components/AppForm.vue";
import ValidationType from '@/const/validation';
import checkValidation from '@/utils/validation';
import AppInput from '@/components/AppInput.vue';
import { required } from 'vuelidate/lib/validators';
import userFetchingMixin from "@/mixins/userFetchingMixin";

export default {
  name: 'Main',

  components: {
    AppForm,
    AppInput,
  },

  mixins: [
    validationMixin,
    userFetchingMixin,
  ],

  data() {
    return {
      userName: '',
      phoneNumber: '',
    };
  },

  validations: {
    userName: {
      required,
      custom: checkValidation(ValidationType.NAME),
    },
    phoneNumber: {
      required,
      custom: checkValidation(ValidationType.PHONE),
    },
  },

  computed: {
    isShowUserErrorMessage() {
      return !this.$v.userName.custom;
    },

    isShowPhoneErrorMessage() {
      return !this.$v.phoneNumber.custom;
    },

    getValidUser() {
      return this.getAllUsers.find((item) => this.userName === item.username
        && this.phoneNumber === item.phone);
    },
  },

  methods: {
    handleFormSubmission() {
      this.$v.$touch();

      if (this.$v.$error || !this.getValidUser) {
        return window.alert('Login Error: Invalid username or phone number.');
      }

      this.redirectUser(this.getValidUser);
    },

    redirectUser(user) {
      const { id } = user;

      this.$router.push({ path: `/user/${id}` });
    },
  },
};
</script>
