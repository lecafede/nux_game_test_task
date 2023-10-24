<template>
  <div
    class="empty"
  >
    <p>{{ title }}</p>
    <p>{{ subTitle }}</p>
  </div>
</template>

<script>
  export default {
    name: 'AppEmpty',

    props: {
      title: {
        type: String,
        default: '',
      },
      subTitle: {
        type: String,
        default: '',
      },
    },
  }
</script>

<style>
.empty {
  top: 30%;
  left: 50%;
  color: white;
  font-size: 32px;
  font-weight: 800;
  position: absolute;
}

@media screen and (max-width: 768px) {
  .empty {
    top: 0;
    left: 0;
    margin-top: 24px;
    position: relative;
  }
}
</style>
