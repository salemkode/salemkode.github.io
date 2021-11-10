<template>
    <section class="section-service">
        <h1>I develop and maintain</h1>
        <div class="content">
            <div class="card" v-for="service in services" :key="service.title">
                <img :src="'service/' + service.title + '.svg'" alt="">
                <h3 v-text="service.title" />
                <p v-text="service.info" />
            </div>
        </div>
    </section>
</template>

<script>
export default {
    data() {
        return {
            services: [
                {
                    title: "Websites",
                    info: "I mainly develop full dynamic easy to use websites."
                },
                {
                    title: "Blockchain",
                    info: "Building and dealing with smart contracts is the future."
                },
                {
                    title: "Bot",
                    info: "I develop telegram bots to do some crazy things sometimes."
                }
            ]
        }
    }
}
</script>

<style scoped>
.section-service {
    @apply "container py-10 bg-[#FBFBFB]";
}
.section-service h1 {
    @apply "text-3xl";
}
.section-service .content {
    @apply "md:flex py-15";
}
.section-service .content .card {
    @apply "md:w-1/3 shadow-card pb-8 px-6 m-5 rounded-lg";
}
.section-service .content .card > * {
    @apply "text-center mx-auto";
}
.section-service .content .card h3 {
    @apply "my-2 text-xl";
}
.section-service {
    @apply "container";
}
</style>