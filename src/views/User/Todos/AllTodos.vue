<template>
  <div
    class="todos"
  >
    <AllTodosItem
      v-for="item in list"
      :id="item.id"
      :key="item.id"
      :title="item.title"
      :user-id="item.userId"
      :completed="item.completed"
      @on-button-click="addTodoToFavorite"
    />
    <AppEmpty
      v-if="!list.length"
      title="Oops! No todos found."
      sub-title="Looks like you chose the wrong settings."
    />
  </div>
</template>

<script>
  import AppEmpty from '@/components/AppEmpty.vue';
  import AllTodosItem from '@/views/User/Todos/AllTodosItem.vue';

  export default {
    name: 'AllTodos',

    components: {
      AppEmpty,
      AllTodosItem,
    },

    props: {
      list: {
        type: Array,
        default: () => [],
      },
    },

    methods: {
      addTodoToFavorite(id) {
        this.$emit('on-button-click', id);
      },
    }
  };
</script>

<style scoped>
.todos {
  display: grid;
  grid-gap: 20px;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr 1fr;
}

@media screen and (max-width: 1280px) {
  .todos {
    grid-template-columns: 1fr 1fr;
  }
}

@media screen and (max-width: 1024px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>
