<template>
    <a :href="project.url" class="card project-card flex">
        <img class="card-img" :src="'image/project/' + name + '.png'" alt=" " />
        <div class="card-about">
            <h3 ref="title" />
            <p ref="info" />
        </div>
    </a>
</template>

<script>
export default {
    mounted() {
        let title = this.$t("projects." + this.name + ".title");
        let info = this.$t("projects." + this.name + ".info");
        this.write(title, this.$refs.title)
        this.write(info, this.$refs.info)
    },
    props: ["project", "name", "index"],
    data() {
        return {
        }
    },
    methods: {
        write(text, target, speed = 100) {
            target.innerText = "";
            let i = 0;
            let interval = setInterval(function () {
                target.innerText = text.substr(0, i);
                if (text.length == i) {
                    clearInterval(interval);
                }
                i++;
            }, speed)
        }
    }
}
</script>

<style lang="scss" scoped>
.project-card {
    max-width: 600px;
    margin: auto;
    .card-img {
        @apply "w-3/10 h-25 object-contain my-auto py-2";
    }
    .card-about {
        width: 70%;
        height: max-content;
        margin: auto;
        > * {
            margin: 15px 0;
        }
    }
}
</style>