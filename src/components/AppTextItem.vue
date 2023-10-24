<template>
  <p
    class="text__item"
  >
    {{ text }}
    <span
      class="info__item"
    >
      {{ info }}
    </span>
  </p>
</template>

<script>
export default {
  name: 'AppTextItem',

  props: {
    text: {
      type: String,
      default: '',
    },
    info: {
      type: [String, Number, Boolean],
      default: '',
    },
  }
};
</script>

<style scoped>
  .info__item {
    font-weight: 800;
  }
</style>
