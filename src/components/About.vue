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
      <div class="hidden-xs-only about-images">
        <div class="about-images__nav about-images__nav__prev">
          <v-btn plain @click="() => i--">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </div>
        <v-row>
          <v-col sm="4" v-for="i in 3" :key="i">
            <v-img :src="`images/about/${img(i)}.jpg`" :aspect-ratio="44/27"></v-img>
          </v-col>
        </v-row>
        <div class="about-images__nav about-images__nav__next">
          <v-btn plain @click="() => i++">
            <v-icon>mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </div>
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
          <v-img :src="`images/about/${i}.jpg`" width="92vw" :aspect-ratio="363/200"></v-img>
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
      i: 0,
      isExpanded: false,
    };
  },
  methods: {
    img(p: number) {
      let c: number = this.i + p;
      while (c < 0) { c += 6; }
      return c % 6 || 6;
    },
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
.about-images {
  position: relative;
  &__nav {
    position: absolute;
    top: 0;
    padding-top: 12px;
    width: 50px;
    &__prev {
      left: -50px;
      @media screen and (max-width: 960px) {
        left: -40px;
      }
    }
    &__next {
      right: -50px;
      @media screen and (max-width: 960px) {
        right: -40px;
      }
    }
    .v-btn {
      height: 270px !important;
      min-width: 50px !important;
      padding: 0 13px !important;
      @media screen and (max-width: 960px) {
        height: 138px !important;
      }
    }
  }
  .v-image {
    border-radius: 9px;
  }
}
.about-carousel {
  .v-image {
    border-radius: 15px;
  }
}
</style>
<style lang="scss">
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
