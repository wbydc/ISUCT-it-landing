<template>
  <v-app app>
    <Background />
    <div class="content">
      <Header />
      <About />
      <Profiles />
      <Why />
      <Spheres />
      <Partners />
      <Contacts />
    </div>
    <Footer />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';

import Background from '@/components/Background.vue';
import Header from '@/components/Header.vue';
import About from '@/components/About.vue';
import Profiles from '@/components/Profiles.vue';
import Why from '@/components/Why.vue';
import Spheres from '@/components/Spheres.vue';
import Partners from '@/components/Partners.vue';
import Contacts from '@/components/Contacts.vue';
import Footer from '@/components/Footer.vue';

export default Vue.extend({
  name: 'App',
  components: {
    Background,
    Header,
    About,
    Profiles,
    Why,
    Spheres,
    Partners,
    Contacts,
    Footer,
  },
});
</script>

<style lang="scss">
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #0E0B0B;
  // margin: 0 auto;
  // max-width: 1400px;
  font-family: Montserrat;
  font-style: normal;
  * {
    word-break: keep-all;
  }
  a {
    color: #0E0B0B;
    text-decoration: none;
  }
}
h1 {
  font-weight: 600;
  font-size: 45px;
  line-height: 50px;
  color: #0E0B0B;
  @media screen and (max-width: 960px) {
    font-size: 30px;
    line-height: 40px;
  }
  @media screen and (max-width: 600px) {
    font-size: 19px;
    line-height: 25px;
  }
}
h2 {
  font-weight: 600;
  font-size: 45px;
  line-height: 60px;
  margin-bottom: 45px;
  @media screen and (max-width: 960px) {
    font-size: 30px;
    line-height: 40px;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 600px) {
    font-size: 19px;
    line-height: 25px;
    margin-bottom: 15px;
  }
}
h3 {
  font-weight: 600;font-size: 25px;
  line-height: 30px;
  margin-bottom: 20px;
  @media screen and (max-width: 960px) {
    font-size: 30px;
    line-height: 40px;
    margin-bottom: 30px;
  }
  @media screen and (max-width: 600px) {
    font-size: 19px;
    line-height: 25px;
    margin-bottom: 15px;
  }
}
p {
  font-weight: 400;
  font-size: 25px;
  line-height: 35px;
  color: #35363A;
  @media screen and (max-width: 960px) {
    font-size: 20px;
    line-height: 30px;
  }
  @media screen and (max-width: 600px) {
    font-size: 16px;
    line-height: 20px;
  }
}
section {
  position: relative;
  margin: 0 auto;
  margin-bottom: 120px;
  max-width: 1400px;
  padding: 0 16px;
  @media screen and (max-width: 960px) {
    margin-bottom: 75px;
  }
  @media screen and (max-width: 600px) {
    margin-bottom: 45px;
  }
}
.content {
  padding: 12px 0;
}
.v-btn.v-btn--has-bg {
  background: #1B84FF !important;
  border-radius: 26px;
  padding: 25px 40px !important;
  span {
    color: #fff;
    font-family: Montserrat;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 20px;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
}

.icon {
  width: 30px;
  height: 30px;
  -webkit-mask-size: contain !important;
  mask-size: contain !important;
  &.vk {
    -webkit-mask: url(./assets/icons/vk.png) no-repeat center;
    mask: url(./assets/icons/vk.png) no-repeat center;
  }
  &.viber {
    -webkit-mask: url(./assets/icons/viber.png) no-repeat center;
    mask: url(./assets/icons/viber.png) no-repeat center;
  }
  &.fb {
    -webkit-mask: url(./assets/icons/fb.png) no-repeat center;
    mask: url(./assets/icons/fb.png) no-repeat center;
  }
}
</style>
