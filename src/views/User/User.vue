<template>
  <div class="container">
    <div class="container2">
      <div class="container3">
        <UserInfo
          :id="getCurrentUser.id"
          :name="getCurrentUser.name"
          :email="getCurrentUser.email"
          :phone="getCurrentUser.phone"
          :address="getCurrentUser.address"
          :website="getCurrentUser.website"
          :company="getCurrentUser.company"
          :username="getCurrentUser.username"
        />
        <UserFilter
          :searchValue="searchValue"
          :user-option-list="allUserOptionList"
          :status-option-list="allStatusOptionList"
          :selectedStatusValue="selectedStatusValue"
          :selectedUserIdValue="selectedUserIdValue"
          @update-search-value="updateSearchValue"
          @update-selected-status-value="updateSelectedStatusValue"
          @update-selected-user-id-value="updateSelectedUserIdValue"
        />
        <AppForm
          title="Create Todo"
          button-name="Add"
          @form-submitted="handleFormSubmission"
        >
          <template>
            <AppInput
              id="userId"
              type="text"
              name="userId"
              label="User ID"
              placeholder="Enter User ID"
              v-model.trim="userId"
            />
            <AppInput
              id="title"
              type="text"
              name="title"
              label="Title"
              placeholder="Enter title"
              v-model.trim="title"
            />
          </template>
        </AppForm>
      </div>
      <AllCards
        :list="filteredTodoListBySearch"
        @on-button-click="addToFavorite"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import UserInfo from '@/views/User/Info.vue';
import AppForm from '@/components/AppForm.vue';
import UserFilter from "@/views/User/Filter.vue";
import AppInput from '@/components/AppInput.vue';
import AllCards from "@/views/User/Cards/AllCards.vue";

export default {
  name: 'UserPage',

  components: {
    AppForm,
    UserInfo,
    AppInput,
    AllCards,
    UserFilter,
  },

  data() {
    return {
      title: '',
      userId: '',
      searchValue: '',
      selectedStatusValue: 'all',
      selectedUserIdValue: 'all',
      localeStorageList: Object.keys(localStorage),
    };
  },

  computed: {
    ...mapGetters([
      'getAllUsers',
      'getAllTodos',
    ]),

    getUserId() {
      const { params } = this.$route;
      const { id } = params;

      return id;
    },

    getCurrentUser() {
      const id = this.getUserId;
      const allUsers = this.getAllUsers;

      return allUsers.find((item) => item.id === Number.parseInt(id)) || [];
    },

    filteredTodoListByStatus() {
      switch (this.selectedStatusValue) {
        case 'all':
          return this.getAllTodos;
        case 'completed':
          return this.filteredCompletedStatusList;
        case 'uncompleted':
          return this.filteredUnCompletedStatusList;
        case 'favorites':
          return this.filteredFavoriteList;
        default:
          return this.getAllTodos;
      }
    },

    filteredCompletedStatusList() {
      const allTodos = this.getAllTodos;

      return allTodos.filter((item) => item.completed === true);
    },

    filteredUnCompletedStatusList() {
      const allTodos = this.getAllTodos;

      return allTodos.filter((item) => item.completed === false);
    },

    filteredFavoriteList() {
      const list = this.getAllTodos;

      return list.filter((item) => this.localeStorageList.includes(`${item.id}`)) || [];
    },

    getAllUsersIdList() {
      const allTodos = this.getAllTodos;

      return Array.from(new Set(allTodos.map((item) => {
        const { userId } = item;

        return userId;
      })));
    },

    allUserOptionList() {
      const list = ['all', ...this.getAllUsersIdList];

      return list.map((item) => ({
        name: item === 'all' ? 'All Users' : item,
        value: item,
      }))
    },

    allStatusOptionList() {
      return [
        {
          name: 'All',
          value: 'all'
        },
        {
          name: 'Completed',
          value: 'completed'
        },
        {
          name: 'Uncompleted',
          value: 'uncompleted'
        },
        {
          name: 'Favorites',
          value: 'favorites'
        },
      ]
    },

    filteredTodoListByUserId() {
      const list = this.filteredTodoListByStatus;
      const userId = this.selectedUserIdValue;

      if (userId === 'all') {
        return list;
      }

      return list.filter((item) => item.userId === Number.parseInt(userId))
    },

    filteredTodoListBySearch() {
      const list = this.filteredTodoListByUserId;
      const searchTerm = this.searchValue.toLowerCase();

      return list.filter((item) => {
        const { title } = item;

        return title.toLowerCase().includes(searchTerm);
      });
    },
  },

  mounted() {
    this.fetchLoadAllTodos();
    this.fetchLoadAllUsers();
  },

  methods: {
    ...mapActions([
      'loadAllUsers',
      'loadAllTodos',
    ]),

    handleFormSubmission() {
      this.$store.commit('addNewTodo',
        {
          title: this.title,
          userId: Number.parseInt(this.userId)
        });
    },

    addToFavorite(id) {
      this.localeStorageList.push(String(id));

      localStorage.setItem(id, id);
    },

    fetchLoadAllUsers() {
      this.loadAllUsers();
    },

    fetchLoadAllTodos() {
      this.loadAllTodos()
    },

    updateSearchValue(event) {
      this.searchValue = event;
    },

    updateSelectedStatusValue(event) {
      this.selectedStatusValue = event;
    },

    updateSelectedUserIdValue(event) {
      this.selectedUserIdValue = event;
    },
  },
};
</script>

<style>
.container2 {
  position: relative;
  display: grid;
  grid-gap: 24px;
  align-items: baseline;
  grid-template-columns: 1fr 4fr;
}

.container3 {
  position: sticky;
  top: 15px;
}

@media (max-width: 1440px) {
  .cards {
    grid-template-columns: 1fr 1fr;
  }
}


@media (max-width: 512px) {
  .container2 {
    grid-template-columns: 1fr;
  }
}
</style>
