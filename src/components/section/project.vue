<template>
    <section class="container">
        <h1>My project</h1>
        <div class="py-15">
            <card-containter :data="articles" size="large" :img="img" />
        </div>
    </section>
</template>


<script>
export default {
    props: ["articles"],
    methods: {
        img(service){
            return service.image
        }
    },
}
</script>