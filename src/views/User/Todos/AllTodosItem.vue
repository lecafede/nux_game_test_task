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
    <button
      class="todo-button"
      @click="handleButtonClick(id)"
    >
      Add to Favorites
    </button>
  </div>
</template>

<script>
import AppTextItem from '@/components/AppTextItem.vue';

export default {
  name: 'AllTodosItem',

  components: {
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

.todo-button {
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
