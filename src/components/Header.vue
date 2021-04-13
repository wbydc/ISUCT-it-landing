<template>
  <section>
    <div class="d-none d-md-flex">
      <v-row>
        <v-col md="1" sm="1" class="logo">
          <v-img alt="Logo" src="../assets/logo.svg" class="logo" />
        </v-col>
        <v-col md="4" sm="4">
          <span class="logo-text" v-html="$t('header.title')"></span>
        </v-col>
        <v-col sm="7" class="menu">
          <a href="#about" v-smooth-scroll class="fg">{{ $t('header.links.about') }}</a>
          <a href="#profiles" v-smooth-scroll class="fg">{{ $t('header.links.profiles') }}</a>
          <a href="#why" v-smooth-scroll class="fg">{{ $t('header.links.why') }}</a>
          <a href="#contacts" v-smooth-scroll class="fg">{{ $t('header.links.contacts') }}</a>

          <span class="blind-changer d-inline-block hidden-sm-and-down">
            <v-btn icon class="fg">
              <v-icon>mdi-eye</v-icon>
            </v-btn>
          </span>
          <span class="locale-changer d-inline-block">
            <v-select
              v-model="locale"
              :items="langs"
              item-text="title"
              item-value="code"
              hide-details
              solo
              flat
            >
              <template slot="selection">
                <span class="fg">
                  <span>{{ locale }}</span>
                </span>
              </template>
            </v-select>
          </span>
        </v-col>
      </v-row>
    </div>

    <div class="d-flex d-md-none">
      <v-row>
        <v-col cols="6">
          <span class="logo-text fg" v-html="$t('header.title')"></span>
        </v-col>
        <v-col cols="6" class="menu">
          <span class="blind-changer d-inline-block">
            <v-btn icon class="fg">
              <v-icon>mdi-eye</v-icon>
            </v-btn>
          </span>
          <span class="locale-changer d-inline-block">
            <v-select
              v-model="locale"
              :items="langs"
              item-text="title"
              item-value="code"
              hide-details

              solo
              flat
              background-color="rgba(0,0,0,0)"
            >
              <template slot="selection">
                <span class="fg">
                  <span>{{ locale }}</span>
                </span>
              </template>
            </v-select>
          </span>
          <v-app-bar-nav-icon @click="sidebar = !sidebar">
          </v-app-bar-nav-icon>
        </v-col>
      </v-row>

      <v-navigation-drawer v-model="sidebar" app width="100%">
        <v-card flat>
          <v-card-title class="logo-text">
            <span v-html="$t('header.title')"></span>
          </v-card-title>
        </v-card>
        <v-card-text>
          <a href="#about" v-smooth-scroll>{{ $t('header.links.about') }}</a>
          <a href="#profiles" v-smooth-scroll>{{ $t('header.links.profiles') }}</a>
          <a href="#why" v-smooth-scroll>{{ $t('header.links.why') }}</a>
          <a href="#contacts" v-smooth-scroll>{{ $t('header.links.contacts') }}</a>
        </v-card-text>
        <v-card-subtitle>
          <p>
            <a href="tel:+7 (4932) 30-82-38">
              <v-icon color="#1B84FF">mdi-phone</v-icon>
              +7 (4932) 30-82-38
            </a>
          </p>
        </v-card-subtitle>
        <v-card-actions>
          <v-btn plain @click="sidebar = false">
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-card-actions>
      </v-navigation-drawer>
    </div>

    <div class="banner">
      <v-row>
        <v-col md="5" sm="6" class="d-flex d-sm-none">
          <v-img src="../assets/header.png" class="header-xs" />
        </v-col>
        <v-col md="7" sm="8">
          <h1>{{ $t('header.banner.title') }}</h1>
          <p class="my-11">{{ $t('header.banner.text') }}</p>
          <v-btn class="mt-1" href="https://vk.com/digit37">
            {{ $t('header.banner.button') }}
          </v-btn>
        </v-col>
        <v-col md="5" sm="6" class="hidden-xs-only">
          <v-img id="header-img" src="../assets/header.png" />
        </v-col>
      </v-row>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Header',
  data() {
    return {
      locale: 'ru',
      sidebar: false,
      langs: [
        { code: 'ru', title: 'Русcкий' },
        { code: 'en', title: 'English' },
      ],
    };
  },
  watch: {
    locale(val) {
      this.$i18n.locale = val;
    },
  },
});
</script>

<style lang="scss" scoped>
.logo {
  width: 76px;
  height: 76px;
}
.logo-text {
  display: inline-block;
  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 20px;
  color: #35363A;
  opacity: 0.9;
  max-width: 280px;
  padding-top: 5px;
  @media screen and (max-width: 960px) {
    font-size: 10px;
    line-height: 12px;
  }
}
.menu {
  text-align: right;
  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 22px;
  margin-right: 0;
  a {
    color: #777F9C !important;
    margin-right: 30px;
    &:active {
      color: #1B84FF !important;
    }
  }
}

.fg {
  z-index: 5;
  position: relative;
}

.blind-changer {
  min-height: 48px;
  button {
    margin-right: 10px;
  }
}
.locale-changer {
  margin-top: 10px;
  max-width: 32px;
  text-transform: uppercase;
  @media screen and (max-width: 960px) {
    max-width: 56px;
  }
}
.v-navigation-drawer {
  padding-top: 20px;
  background-color: #E5E5E5;
  a {
    display: block;
    margin-bottom: 28px;
    color: #777F9C !important;
    font-weight: 500;
    font-size: 25px;
    line-height: 22px;
  }
  .v-btn {
    width: 100%;
  }
  p {
    a {
      font-size: 20px;
      line-height: 35px;
      color: #35363A
    }
  }
}

.banner {
  margin-top: 50px;
  h1 {
    margin-top: 35px;
    @media screen and (max-width: 960px) {
      margin-top: 0;
    }
    @media screen and (max-width: 600px) {
      margin-top: 35px;
    }
  }
  a {
    color: #FFF !important;
  }
  p {
    @media screen and (min-width: 960px) {
      max-width: 600px;
    }
  }
  .v-btn {
    width: 334px;
    height: 68px !important;
    border-radius: 30px;
    @media screen and (max-width: 960px) {
      width: 244px;
      height: 50px !important;
    }
    @media screen and (max-width: 600px) {
      width: 334px;
      height: 40px !important;
    }
  }
  .d-flex.d-sm-none {
    padding: 0 65px;
  }
  .header-xs {
    margin-top: -50px;
  }
  #header-img {
    max-width: 484px;
    z-index: 5;
    position: absolute;
    right: 0;
    top: 61px;
    @media screen and (max-width: 960px) {
      right: 20px;
      top: 100px;
      width: 250px;
    }
  }
}
</style>
<style lang="scss">
.logo-text b {
  font-weight: bold;
  color: #1B84FF;
}
.locale-changer .v-input__append-inner {
  display: none !important;
}
</style>
