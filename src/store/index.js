import Vue from 'vue';
import Vuex from 'vuex';
import api from '@/api';
import createAllUsers from '@/adapters/createAllUsers';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    allUsers: [],
    allTodos: [],
  },
  getters: {
    getAllUsers: (state) => state.allUsers,
    getAllTodos: (state) => state.allTodos,
  },
  mutations: {
    setAllUsers(state, payload) {
      state.allUsers = payload;
    },
    setAllTodos(state, payload) {
      state.allTodos = payload;
    },
    setNewTodo(state, payload) {
      state.allTodos.unshift(payload);
    },
  },
  actions: {
    loadAllUsers({ commit }) {
      api.get('/users')
        .then((response) => {
          commit('setAllUsers', createAllUsers(response));
        });
    },
    loadAllTodos({ commit }) {
     api.get('/todos')
       .then((response) => {
         const { data } = response;

         commit('setAllTodos', data)
       });
    },
  },
});
