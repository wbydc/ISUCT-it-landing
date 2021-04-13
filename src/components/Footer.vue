<template>
  <section id="footer">
    <v-row>
      <v-col md="10" sm="9" cols="7">
        <p>
          © 2021 {{ $t('header.banner.title') }}
          <span class="text-right">Created by <a href="https://t.me/wbydc" target="_blank">@wbydc</a></span>
        </p>
      </v-col>
      <v-col md="2" sm="3" cols="5">
        <div class="d-flex d-md-none socials float-right">
          <v-btn
            v-for="(social, i) in socials"
            :key="i"
            plain
            :href="social.url"
            target="_blank"
          >
            <div :class="`icon ${social.icon}`"></div>
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
          icon: 'viber',
          url: 'viber://chat?number=79206783390',
        },
        {
          icon: 'fb',
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
        font-size: 10px;
        line-height: 10px;
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
    .v-btn {
      padding: 0;
      min-width: 0;
      margin-left: 15px;
    }
    .icon {
      width: 22px;
      background-color: #FFF;
      @media screen and (max-width: 600px) {
        width: 20px;
      }
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
