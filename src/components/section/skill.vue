<template>
    <section class="section-skill">
        <h1>Frameworks I use</h1>
        <div class="content">
            <a target="_blank" class="card" v-for="(url,name) in skills" :href="url" :key="name">
                <img :src="'skill/' + name + '.svg'" alt />
            </a>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            skills: {
                nuxt: "https://nuxtjs.org/",
                nestjs: "https://nestjs.com/",
                react: "https://reactjs.org",
                bootstrap: "https://getbootstrap.com/",
                windicss: "https://windicss.org/",
                nodejs: "https://nodejs.org/",
            }
        }
    }
}
</script>

<style scoped>
.section-skill {
    @apply "container py-10";
}
.section-skill .content {
    @apply "flex flex-wrap py-15 justify-center relative";
}
.section-skill .content .card {
    @apply "w-34 h-34 flex p-6 m-2 md:m-5 rounded-lg";
    outline: 0.1px #e3e3e3 solid;
}
.section-skill .content .card > * {
    @apply "text-center m-auto";
}
.section-skill .content .card h3 {
    @apply "my-2 text-xl";
}
.section-skill {
    @apply "container";
}
</style>