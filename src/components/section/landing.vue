<template>
  <section class="landing" id="section-landing">
    <div class="left">
      <h1>
        <span v-html="$t('us.name')" />
        <br>
        <small>{{ $t('us.work') }}</small>
      </h1>
    </div>
    <div class="right">
      <span class="avatar-container">
        <img src="image/avatar.jpg" class="avatar" alt="avatar" />
      </span>
    </div>
  </section>
</template>

<style scoped>
h1 {
  @apply "text-xl sm:text-2xl lg:text-3xl ";
}
.landing {
  @apply "h-screen pt-16 flex container md:flex-row flex-col-reverse";
}
.landing > * {
  @apply "w-1/2 m-auto";
}
.landing .avatar::before {
  content: "before";
}
.landing > * .avatar {
  @apply "md:w-5/10 block m-auto rounded-md";
  box-shadow: 20px 20px 0 var(--sec-color);
  transition: all 1s;
}
.avatar-container {
  @apply "block relative";
}
.avatar-container::before {
  content: "";
  position: absolute;
  background: var(--sec-color);
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  transform: scale(5);
  z-index: 1000;
  overflow: hidden;
  /*opacity: 0;*/
}

.landing > * .avatar:hover {
  box-shadow: -20px 20px 0 var(--sec-color);
}
.landing > .left {
  width: max-content;
}
</style>