<template>
  <form
    class="form"
    @submit.prevent="submitForm"
  >
    <div
      class="form__header"
    >
      <p>
        {{ title }}
      </p>
    </div>
    <div
      class="form__main"
    >
      <slot />
      <AppButton>
        {{ buttonName }}
      </AppButton>
    </div>
  </form>
</template>

<script>
  import AppButton from '@/components/AppButton.vue';
  export default {
    name: 'AppForm',

    components: {
      AppButton,
    },

    props: {
      title: {
        type: String,
        default: '',
      },
      buttonName: {
        type: String,
        default: '',
      },
    },

    methods: {
      submitForm() {
        this.$emit('form-submitted');
      }
    }
  }
</script>

<style lang="scss" scoped>
.form {
  margin: auto;
  max-width: 447px;
}

.form__header {
  color: #5F5F5F;
  padding: 15px 0;
  font-weight: 400;
  line-height: 21px;
  background-color: #A5A5A5;
}

.form__main {
  gap: 20px;
  display: flex;
  flex-direction: column;
  background-color: #C3C3C3;
  padding: 15px 25px 25px 30px;
}

@media screen and (max-width: 768px) {
  .form {
    max-width: 100%;
  }
}
</style>
