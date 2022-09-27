<template>
    <Fragment>
        <transition name="fade">
            <div class="popup center-position" v-show="show">
                <slot />
            </div>
        </transition>
        <transition name="fade">
            <span
                class="popup-shadow center-position"
                v-show="show"
                @click="$emit('close', $event.target.value)"
            />
        </transition>
    </Fragment>
</template>

<script>
import { Fragment } from 'vue-fragment';
export default {
    props: ["show"],
    components: {
        Fragment
    }
}
</script>

<style scoped>
.popup {
    @apply "fixed flex flex-col bg-white p-4 rounded-md text-black w-[360px] h-[350px] z-60";
}
.popup-shadow {
    @apply "fixed bg-white bg-opacity-5 w-full h-full z-50";
    backdrop-filter: blur(3px);
}
</style>