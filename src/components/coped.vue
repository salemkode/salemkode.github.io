<template>
    <h1 class="center-position">My mail is coped</h1>
</template>

<script>
export default {
    props: [
        "show"
    ]
}
</script>

<style scoped>
h1 {
    @apply "fixed top-[90%] z-50 bg-dark-200 bg-opacity-80 rounded-full py-3 px-6 text-white";
}
</style>