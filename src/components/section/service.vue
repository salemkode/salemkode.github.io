<template>
  <section class="service container" id="section-service">
    <h1 class="w-full">{{ $t('service.title') }}</h1>
    <div class="row">
      <div
        class="card"
        v-for="(service , key) in $t('service.content', { returnObjects: true })"
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
<style scoped>
.service {
  @apply "flex flex-col items-center md:py-6";
}
.service .row {
  @apply "flex md:flex-row flex-col-reverse ";
}
.service .card {
  @apply "mt-[50px] pb-8 mx-6 ";
}
.service .card img {
  @apply "w-4/10 mx-auto my-3";
}
.service .card article {
  @apply "px-2 md:px-4";
}
.service .card article h1 {
  @apply "text-2xl py-2";
}
.service .card:hover {
  transform: translateY(-40px);
  box-shadow: 10px 10px var(--main-color);
}
</style>