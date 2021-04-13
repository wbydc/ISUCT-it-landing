<template>
  <section id="spheres">
    <div>
      <h2>{{ $t('spheres.title') }}</h2>
      <p>{{ $t('spheres.text') }}</p>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Spheres',
});
</script>

<style lang="scss" scoped>
#spheres {
  padding-top: 45px;
  padding-bottom: 40px;
  background: url(../../public/images/spheres/bg.png);
  background-color: #E7EFFA;
  max-width: 100% !important;
  div {
    max-width: 1400px;
    margin: 0 auto;
    padding-right: 50px;
    h2 {
      max-width: 1000px;
      @media screen and (max-width: 960px) {
        max-width: 660px;
      }
    }
  }
}
</style>
