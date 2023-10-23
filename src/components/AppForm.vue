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
      <button
        type="submit"
        class="form-main__button"
      >
        {{ buttonName }}
      </button>
    </div>
  </form>
</template>

<script>
  export default {
    name: 'AppForm',

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
  max-width: 447px;
  margin: auto;
}

.form__header {
  padding: 15px 0;
  color: #5F5F5F;
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

.form-main__button {
  width: 100%;
  color: #FFF;
  border: none;
  outline: none;
  padding: 10px;
  margin-top: 5px;
  font-size: 17px;
  cursor: pointer;
  font-weight: 600;
  line-height: 21px;
  border-radius: 5px;
  background-color: #519945;

  &:hover {
     background-color: #3d6b34;
   }
}

@media screen and (max-width: 768px) {
  .form {
    max-width: 100%;
  }
}
</style>
