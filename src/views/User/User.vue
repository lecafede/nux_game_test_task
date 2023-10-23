<template>
  <div class="container">
    <div class="filter-todo__container">
      <div class="filter__container">
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
          :search-value="searchValue"
          :user-option-list="allUserOptionList"
          :status-option-list="allStatusOptionList"
          :selected-status-value="selectedStatusValue"
          :selected-user-id-value="selectedUserIdValue"
          @update-search-value="updateSearchValue"
          @update-selected-status-value="updateSelectedStatusValue"
          @update-selected-user-id-value="updateSelectedUserIdValue"
        />
        <AppForm
          title="Create Todo"
          button-name="Add"
          @form-submitted="handleFormSubmission"
        >
          <template #default>
            <AppInput
              id="userId"
              v-model.trim="userId"
              type="text"
              name="userId"
              label="User ID"
              placeholder="Enter User ID"
            />
            <AppInput
              id="title"
              v-model.trim="title"
              type="text"
              name="title"
              label="Title"
              placeholder="Enter title"
            />
          </template>
        </AppForm>
      </div>
      <AllTodos
        :list="filteredTodoListBySearch"
        @on-button-click="addToFavorite"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import FilterType from '@/const/filter';
import AppForm from '@/components/AppForm.vue';
import AppInput from '@/components/AppInput.vue';
import UserInfo from '@/views/User/UserInfo.vue';
import UserFilter from "@/views/User/UserFilter.vue";
import AllTodos from '@/views/User/Todos/AllTodos.vue';
import userFetchingMixin from '@/mixins/userFetchingMixin';

export default {
  name: 'User',

  components: {
    AppForm,
    UserInfo,
    AppInput,
    AllTodos,
    UserFilter,
  },

  mixins: [
    userFetchingMixin,
  ],

  data() {
    return {
      title: '',
      userId: '',
      searchValue: '',
      selectedStatusValue: FilterType.ALL,
      selectedUserIdValue: FilterType.ALL,
      localeStorageList: Object.keys(localStorage),
    };
  },

  computed: {
    ...mapGetters([
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
        case FilterType.ALL:
          return this.getAllTodos;
        case FilterType.COMPLETED:
          return this.filteredCompletedStatusList;
        case FilterType.UNCOMPLETED:
          return this.filteredUnCompletedStatusList;
        case FilterType.FAVORITES:
          return this.filteredFavoriteList;
        default:
          return this.getAllTodos;
      }
    },

    filteredCompletedStatusList() {
      const list = this.getAllTodos;

      return list.filter((item) => item.completed === true);
    },

    filteredUnCompletedStatusList() {
      const list = this.getAllTodos;

      return list.filter((item) => item.completed === false);
    },

    filteredFavoriteList() {
      const list = this.getAllTodos;

      return list.filter((item) => this.localeStorageList.includes(`${item.id}`)) || [];
    },

    getAllUsersIdList() {
      const list = this.getAllTodos;

      return Array.from(new Set(list.map((item) => {
        const { userId } = item;

        return userId;
      })));
    },

    allUserOptionList() {
      const list = [
        FilterType.ALL,
        ...this.getAllUsersIdList
      ];

      return list.map((item) => ({
        name: item === FilterType.ALL ? 'All Users' : item,
        value: item,
      }))
    },

    allStatusOptionList() {
      return [
        {
          name: 'All Status',
          value: FilterType.ALL,
        },
        {
          name: 'Completed',
          value: FilterType.COMPLETED,
        },
        {
          name: 'Uncompleted',
          value: FilterType.UNCOMPLETED,
        },
        {
          name: 'Favorites',
          value: FilterType.FAVORITES,
        },
      ];
    },

    filteredTodoListByUserId() {
      const list = this.filteredTodoListByStatus;
      const userId = this.selectedUserIdValue;

      if (userId === FilterType.ALL) {
        return list;
      }

      return list.filter((item) => item.userId === Number.parseInt(userId));
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
  },

  methods: {
    ...mapActions([
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
      window.alert(`Success: Todo with ID ${id} has been successfully added to favorites.`);
    },

    fetchLoadAllTodos() {
      if (this.getAllTodos.length) {
        return;
      }

      this.loadAllTodos()
        .catch((error) =>
          console.warn(
            error.response.data.message
          ));
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
.filter-todo__container {
  position: relative;
  display: grid;
  grid-gap: 24px;
  align-items: baseline;
  grid-template-columns: 1fr 4fr;
}

.filter__container {
  min-width: 350px;
}

@media screen and (max-width: 1440px) {
  .filter-todo__container {
    grid-template-columns: 2fr 4fr;
  }
}

@media screen and (max-width: 768px) {
  .filter-todo__container {
    grid-template-columns: 1fr;
  }
}
</style>
