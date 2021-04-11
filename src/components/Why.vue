<template>
  <section id="why">
    <h2>{{ $t('why.title') }}</h2>
    <v-row>
      <v-col
        v-for="i in 6"
        :key="i"
        sm="4"
        cols="12"
      >
        <v-card flat>
          <img :src="`images/why/${i}.svg`" />
          <v-card-title>
            <h3>{{ $t(`why.cards[${i-1}].title`) }}</h3>
          </v-card-title>
          <v-card-text class="d-none d-md-flex">
            <p>{{ $t(`why.cards[${i-1}].text`) }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Why',
});
</script>

<style lang="scss" scoped>
.v-card {
  > * {
    padding: 0;
    padding-right: 16px;
  }
  img {
    height: 95px;
  }
  &__title {
    margin-top: 25px;
    h3 {
      @media screen and (max-width: 960px) {
        font-size: 16px;
        line-height: 25px;
      }
    }
  }
  &__text {
    p {
      font-size: 18px;
      line-height: 30px;
    }
  }
  @media screen and (max-width: 960px) {
    text-align: center;
  }
}
</style>
