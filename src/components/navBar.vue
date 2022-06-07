<template>
  <header :class="scrolled ? 'scrolled' : ''">
    <nav>
      <h1>
        <a href="/">SalemKode</a>
        <IconMenu :click="e => dropdown_menu = !dropdown_menu" />
      </h1>
      <SlideUpDown :duration="200" :active="dropdown_menu">
        <ul class="media-list">
          <li v-for="(site,name) in media" :key="name">
            <a :href="site.url" target="_blank" class="media-item">
              <img :src="'/media/' + name + '.svg'" :alt="'icon of' + name" />
            </a>
          </li>
        </ul>
      </SlideUpDown>
    </nav>
  </header>
</template>

<script>
import SlideUpDown from 'vue-slide-up-down'

export default {
  data() {
    return {
      scrolled: false,
      media: {
        gitlab: {
          url: 'https://gitlab.com/salemkode',
        },
        github: {
          url: 'https://github.com/salemkode',
        },
        telegram: {
          url: 'https://t.me/salemkode'
        },
        twitter: {
          url: 'https://twitter.com/salemkode'
        },
      },
      dropdown_menu: true,
      duration: 1000
    }
  },
  mounted() {
    let _this = this;
    _this.scrolled = !!window.scrollY;
    window.onscroll = function () {
      _this.scrolled = !!window.scrollY;
    }
    if (document.body.offsetWidth < 752) {
      _this.dropdown_menu = false;
    }
    window.addEventListener("resize", function () {
      if (document.body.offsetWidth < 752) {
        _this.dropdown_menu = false;
      } else {
        _this.dropdown_menu = true;
      }
    })
  },
  methods: {
    showDropdown() {
      this.dropdown_menu = !this.dropdown_menu;
    },
  },
  components: {
    SlideUpDown
  }
}
</script>


<style scoped>
header.scrolled {
  backdrop-filter: blur(50px);
  background-color: rgba(255, 255, 255, .7);
}

header {
  @apply "fixed right-0 left-0 z-50 py-4 font-bold transition";
}
header nav {
  @apply "w-full flex flex-col md:flex-row justify-between container items-center";
}
header h1 {
  @apply "flex justify-between w-full md:w-auto text-2xl";
}
header nav .media-list {
  @apply "flex my-3 md:m-0";
}
header nav .media-item {
  @apply "mx-1 block rounded-full p-1.5 transition border-main border hover:bg-[#21242926]";
  transition: 0.3s all;
}
header nav .lang-btn {
  @apply "bg-main text-white rounded-full p-2 px-4 mx-2 flex items-center w-max";
}
header nav .lang-btn span {
  @apply "mx-2";
}
</style>
