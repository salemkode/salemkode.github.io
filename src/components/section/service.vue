<template>
    <section class="section-service">
        <h1>I develop and maintain</h1>
        <div class="content">
            <card-containter :data="services" :img="img"/>
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
                    description: "I mainly develop full dynamic easy to use websites."
                },
                {
                    title: "Blockchain",
                    description: "Building and dealing with smart contracts is the future."
                },
                {
                    title: "Bot",
                    description: "I develop telegram bots to do some crazy things sometimes."
                }
            ]
        }
    },
    methods : {
        img(service){
            return 'service/' + service.title + '.svg'
        }
    }
}
</script>

<style scoped>
.section-service {
    @apply "container py-10 bg-opacity-5 overflow-hidden";
}
.section-service .content {
    @apply "md:flex py-15 relative";
}
.section-service .content {
    @apply "py-15";
}
</style>