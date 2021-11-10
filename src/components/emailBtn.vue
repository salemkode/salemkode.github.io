<template>
    <a class="btn-email btn" href="mailto:kodesalem@gmail.com">
        <strong>{{ text }}</strong>
        <img src="landing/next.svg" class="icon" />
    </a>
</template>

<script>
export default {
    props: ["text"]
}
</script>

<style scoped>
.btn {
  @apply "bg-main text-white rounded-full p-3 px-5 flex items-center w-max text-sm";
}
.btn-email .icon {
  @apply "px-3 pt-0.5 transition transition-all";
}
.btn-email:hover .icon {
  @apply "pl-6";
}
</style>