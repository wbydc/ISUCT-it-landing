<template>
  <section id="partners">
    <h2>{{ $t('partners.title') }}</h2>
    <v-slide-group show-arrows="always">
      <v-slide-item
        v-for="i in 8"
        :key="i"
      >
        <v-card
          class="ma-4"
          width="210"
          height="90"
          flat
        >
          <v-img :src="`images/partners/${i}.png`" contain />
        </v-card>
      </v-slide-item>
    </v-slide-group>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Partners',
});
</script>

<style lang="scss" scoped>
.v-item-group {
  margin-left: -52px;
  width: 110%;
  max-width: 1504px;
  .v-card {
    border: 1px solid #C8D7EC;
    box-sizing: border-box;
    border-radius: 15px;
    padding: 15px;
    .v-image {
      height: 100%;
    }
  }
  @media screen and (max-width: 1440px) {
    margin-left: -32px;
    max-width: 98vw;
    overflow-x: hidden;
  }
  @media screen and (max-width: 960px) {
    left: -12px;
    width: 100vw;
    max-width: 100vw;
    overflow-x: hidden;
  }
  @media screen and (max-width: 600px) {
    margin-left: -18px;
    overflow-x: hidden;
  }
}
</style>
<style lang="scss">
#partners {
  .v-slide-group__content {
    > :first-child {
      margin-left: 0 !important;
    }
    > :last-child {
      margin-right: 0 !important;
    }
  }
}
</style>
