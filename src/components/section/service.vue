<template>
    <section class="section-service">
        <h1>I develop and maintain</h1>
        <div class="content">
            <div class="card-container">
                <div class="card" v-for="service in services" :key="service.title">
                    <img :src="'service/' + service.title + '.svg'" alt />
                    <h3 v-text="service.title" />
                    <p v-text="service.info" />
                </div>
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
    @apply "container py-10 bg-opacity-5";
}
.section-service h1 {
    @apply "text-3xl";
}
.section-service .content {
    @apply "md:flex py-15 relative";
}
.section-service .content {
    @apply "py-15";
}
.section-service .content > .card-container {
    @apply "md:flex relative";
}
.section-service .content > .card-container::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: #606060;
    opacity: 0.18;
    filter: blur(25px);
    transform: scaleX(1.1)
}
.section-service .content .card {
    @apply "md:w-1/3 shadow-card pb-8 px-6 rounded-lg bg-white relative";
}
.section-service .content .card:nth-child(2) {
    @apply "my-6 md:mx-6 md:my-0";
}
.section-service .content .card > * {
    @apply "text-center mx-auto";
}
.section-service .content .card h3 {
    @apply "mb-4 text-xl";
}
.section-service {
    @apply "container";
}
</style>