<template>
  <Fragment>
    <nav-bar />
    <Nuxt :dir="dir" />
    <footer>
      <h3>All rights reserved {{ new Date().getFullYear() }}</h3>
    </footer>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment';
import navBar from "../components/navBar.vue";
export default {
  components: { navBar },
  computed: {
    dir() {
      return ""
    },
  },
  components: { Fragment },
};
</script>
<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+Arabic:wght@100;200;300;400;500;600&display=swap");
html,
body,
#__nuxt {
  height: 100%;
}

#app[dir="rtl"] {
  font-family: "Noto Sans Arabic", sans-serif;
}
footer {
  padding: 8px;
  background: var(--main-color);
  color: white;
  text-align: center;
  h3 {
    margin: 0;
  }
}
</style>