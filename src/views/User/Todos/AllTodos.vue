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
      @on-button-click="addToFavorite"
    />
    <div
      v-if="!list.length"
      class="todos__error-message"
    >
      <p>Oops! No todos found.</p>
      <p>Looks like you chose the wrong settings.</p>
    </div>
  </div>
</template>

<script>
  import AllTodosItem from '@/views/User/Todos/AllTodosItem.vue';

  export default {
    name: 'AllTodos',

    components: {
      AllTodosItem,
    },

    props: {
      list: {
        type: Array,
        default: () => [],
      },
    },

    methods: {
      addToFavorite(id) {
        this.$emit('on-button-click', id);
      },
    }
  };
</script>

<style>
.todos {
  display: grid;
  grid-gap: 20px;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr 1fr;
}

.todos__error-message {
  top: 50%;
  left: 50%;
  color: white;
  font-size: 32px;
  font-weight: 800;
  position: absolute;
  transform: translate(-50%, -50%);
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

@media screen and (max-width: 1440px) {
  .todos__error-message {
    display: none;
  }
}
</style>
