<template>
  <div class="container">
    <div class="registration-form">
      <AppForm
        title="Registration"
        button-name="Register"
        @form-submitted="handleFormSubmission"
      >
        <template>
          <AppInput
            id="username"
            type="text"
            name="username"
            label="User Name"
            placeholder="Enter username"
            :error="isShowUserErrorMessage"
            error-message="You must enter only letters"
            v-model.trim="$v.userName.$model"
          />
          <AppInput
            id="phone"
            type="tel"
            name="phone"
            label="Phone Number"
            placeholder="Enter phone number"
            :error="isShowPhoneErrorMessage"
            error-message="You must enter only numbers or symbols"
            v-model.trim="$v.phoneNumber.$model"
          />
        </template>
      </AppForm>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { validationMixin } from 'vuelidate';
import ValidationType from '@/const/validation';
import checkValidation from '@/utils/validation';
import AppInput from '@/components/AppInput.vue';
import { required } from 'vuelidate/lib/validators';
import AppForm from "@/components/AppForm.vue";

export default {
  name: 'MainPage',

  components: {
    AppForm,
    AppInput,
  },

  mixins: [validationMixin],

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
    ...mapGetters([
      'getAllUsers',
    ]),

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

  mounted() {
    this.fetchLoadAllUsers();
  },

  methods: {
    ...mapActions([
      'loadAllUsers',
    ]),

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

    fetchLoadAllUsers() {
      if (this.getAllUsers.length) {
        return;
      }

      this.loadAllUsers();
    },
  },
};
</script>
