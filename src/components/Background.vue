<template>
  <div class="header-bg">
    <img class="header-bg-xs d-flex d-sm-none" alt="Backgroung" src="../assets/header-bg-xs.svg" />
    <img class="header-bg-sm d-none d-sm-flex d-md-none" alt="Backgroung" src="../assets/header-bg-sm.svg" />
    <img class="header-bg-md d-none d-md-flex d-lg-none" alt="Backgroung" src="../assets/header-bg-md.svg" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Background',
});
</script>

<style lang="scss" scoped>
.header-bg {
  overflow-x: hidden;
  img {
    position: absolute;
  }
  .header-bg-xs {
    width: 100%;
    height: 354.57px;
    top: -50px;
  }
  .header-bg-sm {
    right: 0;
    z-index: 1;
  }
  .header-bg-md {
    left: 812px;
    z-index: 1;
  }
}
</style>
