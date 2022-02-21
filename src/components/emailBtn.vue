<template>
  <Fragment>
    <a @click="showPopup" :class="'btn ' + _class" :href="'mailto:' + email">
      <strong>{{ text }}</strong>
      <img src="landing/next.svg" class="icon" />
    </a>
    <pop-up :show="popup" @close="popup = !popup;">
      <img src="mail.svg" class="p-3 h-1/2 m-auto" alt />
      <h1 class="mt-3 p-3 bg-dark-200 rounded-md text-white bold" v-text="email" />
      <button @click="copyMail()" class="btn btn-mail">Copy my mail</button>
    </pop-up>
    <transition name="fade">
      <Coped v-show="alert" />
    </transition>
  </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment';

export default {
  props: ["text", "_class"],
  data() {
    return {
      email: "salemkode@salemkode.com",
      popup: false,
      alert: false
    }
  },
  methods: {
    showPopup() {
      this.popup = !this.popup;
      this.copyMail()
    },
    copyMail() {
      navigator.clipboard.writeText(this.email);
      if (!this.alert) {
        this.alert = true;
        setTimeout(e => this.alert = false, 500)
      }
    }
  },
  components: {
    Fragment
  }
}
</script>

<style scoped>
.btn {
  @apply "bg-main text-white rounded-full p-3 md:px-4 px-3 flex items-center w-max text-sm";
}
.btn-mail {
  @apply "px-8 mt-4 font-bold";
}
.btn .icon {
  @apply "px-2 md:px-3 pt-0.5 transition transition-all";
}
.btn:hover .icon {
  @apply "sm:pl-6";
}
</style>
