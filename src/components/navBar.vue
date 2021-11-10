<template>
    <header :class="scrolled ? 'scrolled' : ''">
        <nav>
            <h1>SalemKode</h1>
            <ul class="media-list">
                <li v-for="(site,name) in media" :key="name">
                    <a :href="site.url" class="media-item">
                        <img :src="'media/' + name + '.svg'" :alt="'icon of' + name" />
                    </a>
                </li>
                <li class="lang-btn">
                    <img src="landing/world.svg" alt />
                    <span>English</span>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    data() {
        return {
            scrolled: false,
            media: {
                github: {
                    url: 'https://github.com/salemkode',
                },
                telegram: {
                    url: 'https://t.me/salemkode'
                },
                twitter: {
                    url: 'https://twitter.com/salemkode'
                },
            }
        }
    },
    mounted() {
        let vue = this;
        window.onscroll = function () {
            vue.scrolled = !!window.scrollY;
        }
    }
}
</script>

<style scoped>
header {
    @apply "fixed right-0 left-0 z-50 py-4 font-bold transition";
}
header nav {
    @apply "w-full flex justify-between container items-center";
}
header.scrolled {
    @apply "bg-white shadow-lg";
}
header nav .media-list {
    @apply "flex";
}
header nav .media-item {
    @apply "mx-1 block rounded-full p-1.5 border-main border hover:bg-[#21242926]";
}
header nav .lang-btn {
    @apply "bg-main text-white rounded-full p-2 px-4 mx-2 flex items-center w-max";
}
header nav .lang-btn span {
    @apply "mx-2";
}
</style>