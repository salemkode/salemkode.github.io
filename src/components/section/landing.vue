<template>
  <section class="landing" id="section-landing">
    <div class="left">
      <h1 v-html="$t('us.name')" />
      <h2>{{ $t("us.work") }}</h2>
    </div>
    <div class="right">
      <img src="image/avatar.jpg" class="avatar" alt="avatar" />
    </div>
  </section>
</template>

<style scoped>
h1 {
  @apply "text-3xl";
}
.landing {
  @apply "h-screen pt-16 flex align-center container md:flex-row flex-col-reverse";
}
.landing > * {
  @apply "w-1/2 m-auto";
}
.landing > * .avatar {
  @apply "md:w-5/10 w-8/10 block m-auto rounded-md";
  box-shadow: 20px 20px 0 var(--sec-color);
  transition: all 1s;
}
.landing > * .avatar:hover {
  box-shadow: -20px 20px 0 var(--sec-color);
}
.landing > .left {
  width: max-content;
}
</style>