<template>
  <header class="container">
    <nav>
      <h1>
        <a href="/">{{ $t('title') }}</a>
        <img src="/image/icons/menu.svg" @click="showDropdown" class="block md:hidden" />
      </h1>
      <ul :class="'nav-list ' + (dropdown_menu ? 'menu-show' : '')">
        <li v-for="(item,key) in $i18n.t('navbar', { returnObjects: true })" :key="item">
          <button @click="scrollTo(section[key])">{{ item }}</button>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      dropdown_menu: false,
      section: {
        services: "#section-service",
        contact: "#section-connect"
      }
    }
  },
  methods: {
    showDropdown() {
      this.dropdown_menu = !this.dropdown_menu
    },
    scrollTo(selector) {
      document.querySelector(selector).scrollIntoView()
    }
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
    @apply "hidden md:flex flex-col md:flex-row";
    li {
      @apply "m-1 p-1";
      &:last-child {
        background: var(--sec-color);
        @apply "px-3 py1 text-black rounded-md";
      }
    }
    &.menu-show {
      animation: drop 1s;
      display: flex;
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