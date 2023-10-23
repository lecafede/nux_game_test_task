<template>
  <p
    class="text"
  >
    {{ text }}
    <span
      class="info"
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
  .info {
    font-weight: 800;
  }

</style>
