<template>
  <div class="cards">
    <AllCardsItem
      v-for="item in list"
      :key="item.id"
      :id="item.id"
      :title="item.title"
      :user-id="item.userId"
      :completed="item.completed"
      @on-button-click="addToFavorite"
    />
  </div>
</template>

<script>
  import AllCardsItem from '@/views/User/Cards/AllCardsItem.vue';

  export default {
    name: 'AllCards',

    components: {
      AllCardsItem,
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
.cards {
  display: grid;
  grid-gap: 20px;
  justify-content: space-between;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
