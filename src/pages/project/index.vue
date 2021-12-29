<template>
    <div class="container">
        <a v-for="project in projects" :href="getCardUrl(project)" :key="project.title" class="card">
            <img :src="project.image" />
            <div class="px-8 my-3">
                <h1 class="text-2xl mb-3">{{ project.title }}</h1>
                <p>{{ project.description }}</p>
            </div>
        </a>
    </div>
</template>

<script>
export default {
    async asyncData({ $content }) {
        const projects = await $content('project')
            .only(["title", "description", "image", "path", "url"])
            .fetch()

        return {
            projects
        }
    },
    methods : {
      getCardUrl(project){
        return project.url || project.path;
      }
    }
}
</script>

<style>
header {
    position: sticky !important;
    top: 0;
}
</style>

<style scoped>
.card {
    @apply "border block border-gray-400 rounded-lg overflow-hidden shadow-lg md:flex items-center mb-3";
}
.card img {
    @apply "w-full md:w-1/3 h-[150px] md:h-[200px] object-cover";
}
</style>
