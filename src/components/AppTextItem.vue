<template>
  <p class="text">
    {{ text }}
    <span class="label">
      {{ label }}
    </span>
  </p>
</template>

<script>
export default {
  name: 'InfoText',

  props: {
    text: {
      type: String,
      default: '',
    },
    label: {
      type: [String, Number],
      default: '',
    },
  }
};
</script>
