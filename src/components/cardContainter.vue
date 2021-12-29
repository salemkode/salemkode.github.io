<template>
    <div class="card-container">
        <a :href="card.url || card.path" class="card" v-for="card in data" :key="card.title">
            <img v-if="img" :src="img(card)" alt :class="size === 'large' ? 'large' : ''"/>
            <div class="info">
                <h3 v-text="card.title" />
                <p v-text="card.description" />
            </div>
        </a>
    </div>
</template>

<script>
export default {
    mounted(){
        console.log(this.size , ":" , this.size === 'large' ? 'large' : '')
    },
    props: [
        "data",
        "img",
        "size",
    ]
}
</script>

<style scoped>
.card-container {
    @apply "md:flex relative";
}
.card-container::before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    background: #606060;
    opacity: 0.18;
    filter: blur(25px);
    transform: scaleX(1.1);
}
.card {
    @apply "md:w-1/3 shadow-card rounded-lg bg-white relative overflow-hidden block";
}
.card img.large{
    @apply "h-[150px] w-full object-cover";
}
.card img.large ~ .info{
    @apply "pt-3";
}
.card .info {
    @apply "pb-8 px-6";
}
.card:nth-child(2) {
    @apply "my-6 md:mx-6 md:my-0";
}
.card > * {
    @apply "text-center mx-auto";
}
.card h3 {
    @apply "mb-4 text-xl";
}
</style>
