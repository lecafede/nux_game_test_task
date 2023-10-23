<template>
  <div
    class="custom-input"
  >
    <label
      class="custom-input-label"
      :for="id"
    >
      {{ label }}
      <input
        :id="id"
        v-model="modelValue"
        :type="type"
        :name="name"
        :value="value"
        class="custom-input-field"
        :placeholder="placeholder"
        @input="updateValue"
      >
    </label>
    <div
      v-if="error"
      class="error-container"
    >
      {{ errorMessage }}
    </div>
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
    error: {
      type: Boolean,
      default: false,
    },
    errorMessage: {
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

<style>
.custom-input-label {
  gap: 4px;
  display: flex;
  color: #5F5F5F;
  font-size: 15px;
  font-weight: 400;
  line-height: 21px;
  flex-direction: column;
  align-items: flex-start;
}

.custom-input-field {
  width: 100%;
  height: 100%;
  padding: 10px;
  color: #353535;
  outline: none;
  font-size: 17px;
  appearance: none;
  min-height: 100%;
  font-weight: 400;
  line-height: 21px;
  border-radius: 5px;
  border: 1px solid #ccc;
  background-color: white;
}

.error-container {
  height: 24px;
  display: flex;
  color: red;
  font-size: 14px;
  position: absolute;
  align-items: center;
}
</style>
