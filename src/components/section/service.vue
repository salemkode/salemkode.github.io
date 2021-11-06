<template>
  <section class="service container" id="section-service">
    <h1 class="w-full text-4xl">My service</h1>
    <div class="row">
      <div
        class="card"
        v-for="(service , key) in $i18n.t('service', { returnObjects: true })"
        :key="service.title"
      >
        <img :src="'image/service/' + key + '.svg'" alt />
        <article>
          <h1>{{ service.title }}</h1>
          <p>{{ service.article }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
<style lang="scss" scoped>
.service {
  @apply "flex flex-col items-center md:py-6";
  .row {
    @apply "flex md:flex-row flex-col-reverse ";
  }
  .card {
    margin-top: 50px;
    padding-bottom: 15px;
    img {
      @apply "w-4/10 mx-auto my-3";
    }
    &:hover {
      transform: translateY(-40px);
      box-shadow: 10px 10px var(--main-color);
    }
    article {
      @apply "px-2 md:px-4";
      h1 {
        @apply "text-2xl py-2";
      }
    }
  }
}
</style>