<template>
  <div class="filter">
    <AppInput
      id="search"
      type="text"
      :value="searchValue"
      placeholder="Search"
      @input="updateSearchValue"
    />
    <AppSelect
      :options="statusOptionList"
      :value="selectedStatusValue"
      @input="updateSelectedStatusValue"
    />
    <AppSelect
      :value="selectedUserIdValue"
      :options="userOptionList"
      @input="updateSelectedUserIdValue"
    />
  </div>
</template>

<script>
  import AppInput from '@/components/AppInput.vue';
  import AppSelect from "@/components/AppSelect.vue";

  export default {
    name: 'Filter',

    components: {
      AppInput,
      AppSelect,
    },

    props: {
      statusOptionList: {
        type: Array,
        default: () => [],
      },
      userOptionList: {
        type: Array,
        default: () => [],
      },
      searchValue: {
        type: String,
        default: '',
      },
      selectedStatusValue: {
        type: String,
        default: '',
      },
      selectedUserIdValue: {
        type: String,
        default: '',
      },
    },

    methods: {
      updateSearchValue(event) {
        this.$emit('update-search-value', event);
      },

      updateSelectedUserIdValue(event) {
        this.$emit('update-selected-user-id-value', event);
      },

      updateSelectedStatusValue(event) {
        this.$emit('update-selected-status-value', event);
      },
    },
  }
</script>

<style>
.filter {
  display: grid;
  grid-gap: 24px;
  margin-bottom: 24px;
  grid-template-rows: 1fr 1fr 1fr;
  align-items: center;
  margin-top: 24px;
}
</style>
