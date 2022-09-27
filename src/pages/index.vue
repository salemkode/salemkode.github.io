<template>
  <div>
    <section-landing />
    <section-service />
    <section-skill />
    <section-project :articles="articles"/>
    <email-btn text="Need to know more? Just click to ask" _class="mx-auto my-8" />
  </div>
</template>

<script>
export default {
  async asyncData({ $content }) {
    let articles = await $content('project')
      .only(['title', 'description', 'image', 'flags', 'path', 'url'])
      .sortBy('order', 'asc')
      .fetch();

    return {
      articles
    }
  },
}
</script>
