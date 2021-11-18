<template>
  <main class="container prose">
    <h1>{{ page.title }} - project</h1>
    <nuxt-content class :document="page" />
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const page = await $content('project', params.slug).fetch()

    return {
      page
    }
  },
  head() {
    return {
      title: this.page.title + ' - project',
      meta: [
        { hid: 'og:title', property: 'og:title', content: this.page.title },
      ]
    }
  }
}
</script>

<style>
header {
  position: sticky !important;
  top: 0;
}
.prose hr {
  background: #e5e7eb;
  height: 1px;
  margin: 3px 0 !important;
}
</style>