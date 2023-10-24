<template>
  <select
    class="custom__select"
    :value="selectedOption"
    @input="updateValue"
  >
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>

<script>
  export default {
    name: 'AppSelect',

    props: {
      value: {
        type: [String, Number],
        default: null,
      },
      options: {
        type: Array,
        default: () => [],
      },
    },

    computed: {
      selectedOption: {
        get() {
          return this.value;
        },
        set(newValue) {
          this.$emit('input', newValue)
        }
      }
    },

    methods: {
      updateValue(event) {
        this.$emit('input', event.target.value);
      },
    }
  }
</script>

<style scoped>
.custom__select {
  width: 100%;
  height: 100%;
  min-height: 100%;
  border-radius: 5px;
}
</style>
