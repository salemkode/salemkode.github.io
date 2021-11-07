<template>
  <header class="container">
    <nav>
      <h1>
        <a href="/">{{ $t('navbar.title') }}</a>
        <img :src="'image/icons/menu.svg'" @click="showDropdown" class="block md:hidden" />
      </h1>
      <SlideUpDown :active="dropdown_menu">
        <ul ref="navList" class="nav-list">
          <li v-for="(item,key) in $i18n.t('navbar.content', { returnObjects: true })" :key="item">
            <button @click="scrollTo(section[key])">{{ item }}</button>
          </li>
        </ul>
      </SlideUpDown>
    </nav>
  </header>
</template>

<script>
import SlideUpDown from 'vue-slide-up-down'

export default {
  mounted() {
    let _this = this;
    if (document.body.offsetWidth < 752) {
      this.dropdown_menu = false
    }
    window.addEventListener("resize", function () {
      if (document.body.offsetWidth < 752) {
        _this.dropdown_menu = false
      }else {
        _this.dropdown_menu = true
      }
    })
  },
  data() {
    return {
      dropdown_menu: true,
      section: {
        services: "#section-service",
        contact: "#section-connect"
      }
    }
  },
  methods: {
    showDropdown() {
      this.dropdown_menu = !this.dropdown_menu;
    },
    scrollTo(selector) {
      document.querySelector(selector).scrollIntoView()
    }
  },
  components: {
    SlideUpDown
  }
}
</script>

<style lang="scss" scoped>
header {
  @apply "pt-2 fixed left-0 right-0 z-50";
}

nav {
  @apply "bg-[#4E598C] flex flex-col md:flex-row justify-between md:items-center text-white py-1 px-2 rounded-md";
  h1 {
    @apply "m-1 p-0 text-2xl flex justify-between";
  }
  .nav-list {
    @apply "flex flex-col md:flex-row";
    li {
      @apply "m-1 p-1";
      &:last-child {
        background: var(--sec-color);
        @apply "px-3 py1 text-black rounded-md";
      }
    }
  }
}

@keyframes drop {
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
}
</style>