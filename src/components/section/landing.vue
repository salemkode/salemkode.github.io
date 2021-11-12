<template>
    <section class="section-landing container">
        <div class="shadow" />
        <div class="content">
            <div class="info">
                <h1>
                    Hi
                    <img src="landing/hand.png" class="hand-icon" />
                </h1>
                <h1>
                    I'm
                    <span class="w-3" />
                    <strong>Salem Shamakh</strong>
                </h1>
                <h1>Full stack web developer from Yemen</h1>
                <div class="talk">
                    <email-btn text="Ready for new opportunities, let’s talk" />
                    <a target="_blank" ref="talk-telegram" class="talk-telegram" href="https://t.me/salemkode">
                        <img src="media/telegram.svg" alt="icon of telegram" />
                    </a>
                </div>
            </div>
            <div class="photo">
                <img class="avater" src="landing/avater.png" alt="avater" />
            </div>
        </div>
        <div @click="down" class="mouse">
            <svg
                width="30"
                height="45"
                viewBox="0 0 30 45"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <g opacity="0.79">
                    <path
                        d="M5 17C5 11.4772 9.47715 7 15 7C20.5228 7 25 11.4772 25 17V28C25 33.5228 20.5228 38 15 38C9.47715 38 5 33.5228 5 28V17Z"
                        fill="#212429"
                    />
                    <rect x="14" y="12" width="2" height="8" rx="1" fill="white" />
                </g>
            </svg>
        </div>
    </section>
</template>

<script>
export default {
    mounted() {
        let vue = this;
        vue.makeSquare("talk-telegram")
        window.addEventListener("resize", function(){
            vue.makeSquare("talk-telegram")
        })
    },
    data() {
        return {
        }
    },
    methods: {
        down() {
            let elmScroll = document.querySelector(".section-landing").offsetHeight - document.querySelector("nav").offsetHeight;
            window.scrollTo(0, elmScroll)
        },
        makeSquare(ref) {
            let node = this.$refs[ref];
            node.style.width = "0px";
            node.style.width = node.offsetHeight + "px"
        }
    }
}
</script>

<style scoped>
.section-landing {
    @apply "h-screen relative";
}
.section-landing h1 {
    @apply "text-lg sm:text-2xl my-1 flex items-center ";
}
.section-landing h1 .hand-icon {
    animation: 1s hello;
    animation-direction: alternate;
}
.section-landing h1 .hand-icon:hover {
    animation: 1s hello;
    animation-direction: alternate;
}
.section-landing .shadow {
    @apply "w-full absolute h-2/5 left-0 top-[50%]";
    z-index: -1;
    filter: blur(85px);
    transform: rotate(-5deg) translateY(-50%);
    background: radial-gradient(
        109.72% 133.34% at 66.99% 117.71%,
        rgba(38, 232, 127, 0.5) 0%,
        rgba(0, 163, 255, 0.5) 100%
    );
}
.section-landing .mouse {
    @apply "cursor-pointer absolute left-[50%] top-[85%] hidden md:block";
    transform: translate(-50%, -50%);
}
.section-landing .mouse rect {
    transition: all 1s;
}
.section-landing .mouse:hover rect {
    transform: translate(0, 26%);
}
.section-landing .content {
    @apply "flex items-center justify-center h-full flex-col-reverse md:flex-row";
}
.section-landing .content > * {
    @apply "md:w-3/5";
}
.section-landing .content .photo {
    @apply "md:w-2/5";
}
.section-landing .content .avater {
    @apply "m-auto";
}
.section-landing .talk {
    @apply "flex mt-8";
}
.section-landing .talk .talk-telegram {
    @apply "p-2 hidden md:flex mx-2 items-center justify-center border border-main rounded-full hover:bg-[#21242926]";
}
@keyframes hello {
    0% {
        transform: rotate(-9deg);
    }
    20% {
        transform: rotate(30deg);
    }
    40% {
        transform: rotate(-9deg);
    }
    60% {
        transform: rotate(30deg);
    }
    80% {
        transform: rotate(0deg);
    }
}
</style>