<template>
    <section class="container skill" id="section-skill">
        <h1>{{$t("skill.title")}}</h1>
        <div class="row">
            <a class="card" v-for="(skill , name) in skills" :key="skill.name" :href="skill.url">
                <img :src="'image/skill/' + skill.icon" />
                <span v-text="name" />
            </a>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            skills: {
                nuxtjs: {
                    icon: "nuxt.svg",
                    url: "https://nuxtjs.org"
                },
                nodejs: {
                    icon: "nodejs.svg",
                    url: "https://nodejs.org"
                },
                windicss: {
                    icon: "windicss.svg",
                    url: "https://windicss.org"
                },
                bootstrap: {
                    icon: "bootstrap.svg",
                    url: "https://getbootstrap.com"
                },
                solidity: {
                    icon: "solidity.svg",
                    url: "https://soliditylang.org"
                },
            }
        }
    }
}
</script>



<style scoped>
.row {
    @apply "md:flex flex-wrap my-5 ";
}
.card {
    @apply "flex px-5 py-3 my-5 items-center md:w-70";
}
.card:hover {
    box-shadow: 10px 10px var(--main-color);
    transform: translate3d(-4px, -4px, 0) rotateZ(-1deg);
}
.card img {
    @apply "h-[3em]";
}
.card span {
    @apply "text-xl mx-3";
}
</style>