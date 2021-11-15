<template>
  <div class="page">
    <article class="container pt-20 prose">
      <h1>{{ page.title }}</h1>
      <nuxt-content class :document="page" />
    </article>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content('project', params.project).fetch()

    return {
      page
    }
  },
  head() {
    return {
      title: this.page.title + ' - project',
      meta: [
        {hid: 'og:title', property: 'og:title', content: this.page.title},
      ]
    }
  }
}
</script>

<style>
.prose hr {
  background: #e5e7eb;
  height: 1px;
  margin: 3px 0 !important;
}
</style>