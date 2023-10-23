import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters([
      'getAllUsers',
    ]),
  },

  mounted() {
    this.fetchLoadAllUsers();
  },

  methods: {
    ...mapActions([
      'loadAllUsers',
    ]),

    fetchLoadAllUsers() {
      if (this.getAllUsers.length) {
        return;
      }

      this.loadAllUsers()
        .catch((error) =>
          console.warn(error.response.data.message
          ));
    },
  },

}
