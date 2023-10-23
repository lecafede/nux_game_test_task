<template>
  <div>
    <label
      :for="id"
    >
      {{ label }}
      <input
        :id="id"
        :type="type"
        :name="name"
        :value="value"
        :placeholder="placeholder"
        v-model="modelValue"
        @input="updateValue"
      >
    </label>
  </div>
</template>

<script>
export default {
  name: 'AppInput',

  props: {
    id: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: 'text',
    },
    name: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    value: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
  },

  computed: {
    modelValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit('input', newValue);
      },
    },
  },

  methods: {
    updateValue(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>
