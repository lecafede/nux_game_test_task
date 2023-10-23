<template>
  <div
    class="user-info"
  >
    <div
      class="user-info__header"
    >
      <p>User Info</p>
    </div>
    <div
      class="user-info__main"
    >
      <AppTextItem
        text="Id:"
        :info="id"
      />
      <AppTextItem
        text="Username:"
        :info="username"
      />
      <AppTextItem
        text="Name:"
        :info="name"
      />
      <AppTextItem
        text="Email:"
        :info="email"
      />
      <AppTextItem
        text="Phone:"
        :info="phone"
      />
      <AppTextItem
        text="Address:"
        :info="address"
      />
      <AppTextItem
        text="Website:"
        :info="website"
      />
      <AppTextItem
        text="Company:"
        :info="company"
      />
    </div>
  </div>
</template>

<script>
  import AppTextItem from '@/components/AppTextItem.vue';

  export default {
    name: 'UserInfo',

    components: {
      AppTextItem,
    },

    props: {
      id: {
        type: [String, Number],
        default: '',
      },
      name: {
        type: String,
        default: '',
      },
      email: {
        type: String,
        default: '',
      },
      phone: {
        type: String,
        default: '',
      },
      address: {
        type: String,
        default: '',
      },
      website: {
        type: String,
        default: '',
      },
      company: {
        type: String,
        default: '',
      },
      username: {
        type: String,
        default: '',
      },
    },
  };
</script>

<style scoped>
  .user-info {
    color: #5F5F5F;
    border-radius: 8px;
    background-color: #C3C3C3;
  }

  .user-info__header {
    font-size: 24px;
    font-weight: bold;
    background-color: #A5A5A5;
    border-radius: 8px 8px 0 0;
  }

  .user-info__main {
    padding: 24px;
    color: #5F5F5F;
    font-size: 18px;
    text-align: left;
  }
</style>
