<template>
  <button
    type="submit"
    class="custom__button"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script>
export default {
  name: 'AppButton',

  props: {
    type: {
      type: String,
      default: 'submit',
    }
  },

  methods: {
    onClick() {
      this.$emit('click');
    },
  },
}
</script>

<style lang="scss">
.custom__button {
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
</style>
