<template>
  <section id="about">
    <div>
      <h2>{{ $t('header.links.about') }}</h2>
      <p>{{ $t('about.text') }}</p>
      <p v-if="isExpanded">{{ $t('about.text2') }}</p>
      <v-btn v-else plain @click="isExpanded = true" class="expand">
        <p>{{ $t('about.expand') }}</p>
      </v-btn>
    </div>

    <div class="mt-10">
      <v-row class="hidden-xs-only about-images">
        <v-col sm="4" v-for="i in 3" :key="i">
          <v-img :src="`images/about/${i}.jpg`" :aspect-ratio="44/27"></v-img>
        </v-col>
      </v-row>
      <v-carousel
        a-cycle
        interval="10000"
        hide-delimiter-background
        class="d-flex d-sm-none about-carousel"
        height="260"
        :show-arrows="false"
      >
        <v-carousel-item
          v-for="i in 3"
          :key="i"
          class="about-image"
        >
          <v-img :src="`images/about/${i}.jpg`"></v-img>
        </v-carousel-item>
      </v-carousel>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'About',
  data() {
    return {
      isExpanded: false,
    };
  },
});
</script>

<style lang="scss" scoped>
.expand {
  border-bottom: 1px solid #0E0B0B;
  border-radius: 0;
  padding: 0 !important;
  height: 20px !important;
}
.about-image {
  width: 90vw;
  height: 179px;
}
</style>
<style lang="scss">
.about-images {
  .v-image {
    border-radius: 9px;
  }
}
.about-carousel {
  .v-carousel__controls__item {
    &.v-btn--icon {
      i {
        color: #C8D7EC;
        opacity: 1;
      }
    }
    &.v-item--active {
      i {
        color: #1B84FF;
      }
    }
  }
}
</style>
