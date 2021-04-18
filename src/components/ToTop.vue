<template>
  <div id="totop" @click="go" v-if="visible">
    <v-icon>mdi-chevron-up</v-icon>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ToTop',
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    go() {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
    },
  },
  mounted() {
    window.onscroll = () => {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        this.visible = true;
      } else {
        this.visible = false;
      }
    };
  },
});
</script>

<style lang="scss" scoped>
#totop {
  position: fixed;
  z-index: 10;
  bottom: 40px;
  right: 40px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #1B84FF;
  @media screen and (max-width: 600px) {
    bottom: 20px;
    right: calc(50% - 20px);
  }
  .v-icon {
    font-size: 40px;
    color: #FFF;
  }
}
</style>
