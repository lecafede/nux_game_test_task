<template>
  <div class="todo__item">
    <AppTextItem
      text="Id:"
      :info="id"
    />
    <AppTextItem
      text="UserId:"
      :info="userId"
    />
    <AppTextItem
      text="Title:"
      :info="title"
    />
    <AppTextItem
      text="Completed:"
      :info="completed"
    />
    <AppButton
      @click="handleButtonClick(id)"
    >
      Add to Favorites
    </AppButton>
  </div>
</template>

<script>
import AppButton from '@/components/AppButton.vue';
import AppTextItem from '@/components/AppTextItem.vue';

export default {
  name: 'AllTodosItem',

  components: {
    AppButton,
    AppTextItem,
  },

  props: {
    id: {
      type: Number,
      default: 0,
    },
    userId: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: '',
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },

  methods: {
    handleButtonClick(id) {
      this.$emit('on-button-click', id)
    }
  },
}
</script>

<style lang="scss">
.todo__item {
  display: flex;
  padding: 24px;
  font-size: 18px;
  text-align: left;
  border-radius: 8px;
  flex-direction: column;
  background-color: #A5A5A5;
  justify-content: space-between;
  box-shadow: 4px 4px 2px 1px #5c5c5c;
}
</style>
