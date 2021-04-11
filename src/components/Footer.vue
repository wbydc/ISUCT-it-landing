<template>
  <section id="footer">
    <v-row>
      <v-col md="10" sm="9" cols="6">
        <p>
          © 2021 {{ $t('header.banner.title') }}
          <span class="text-right">Created by <a href="https://t.me/wbydc" target="_blank">@wbydc</a></span>
        </p>
      </v-col>
      <v-col md="2" sm="3" cols="6">
        <div class="d-flex d-md-none socials">
          <v-btn
            v-for="(social, i) in socials"
            :key="i"
            plain
            :href="social.url"
            target="_blank"
          >
            <v-icon>mdi-{{ social.icon }}</v-icon>
          </v-btn>
        </div>
      </v-col>
    </v-row>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Footer',
  data() {
    return {
      socials: [
        {
          icon: 'vk',
          url: 'https://vk.me/digit37',
        },
        {
          icon: 'vimeo',
          url: 'viber://chat?number=79206783390',
        },
        {
          icon: 'facebook',
          url: 'https://facebook.com/digit37',
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
#footer {
  background: #1B84FF;
  margin: 0;
  max-width: 100% !important;
  > div {
    max-width: 1400px;
    margin: 2px auto;
    padding-top: 6px;
    position: relative;
    p {
      color: #FFF;
      font-size: 18px;
      margin-bottom: 0;
      @media screen and (max-width: 960px) {
        font-size: 14px;
        line-height: 35px;
      }
      @media screen and (max-width: 600px) {
        font-size: 14px;
        line-height: 14px;
      }
      span {
        font-size: 10px;
        position: absolute;
        right: 0;
        color: #1B84FF;
        a {
          color: #1B84FF;
        }
      }
    }
  }
  .socials {
    padding: 20px;
    @media screen and (max-width: 960px) {
      padding: 0 30px;
    }
    .v-btn {
      padding: 0;
      min-width: 0;
      margin-right: 15px;
    }
  }
}
</style>
<style lang="scss">
#footer {
  .v-icon {
    color: #FFF;
    font-size: 30px;
  }
  .v-btn {
    &__content {
      opacity: 1 !important;
    }
  }
}
</style>
