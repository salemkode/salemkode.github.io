<template>
  <div class="card-container">
    <a
      :href="card.url || card.path"
      class="card"
      v-for="card in data"
      :key="card.title"
    >
      <img
        v-if="img"
        :src="img(card)"
        alt
        :class="size === 'large' ? 'large' : ''"
      />
      <div class="info">
        <h3 v-text="card.title" />
        <ul class="flags">
          <li class="flag" v-for="flag in card.flags" :key="flag">
            {{ flag }}
          </li>
        </ul>
        <p v-text="card.description" />
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: ['data', 'img', 'size'],
}
</script>

<style scoped>
.card-container {
  @apply "md:flex relative";
}
.card-container::before {
  content: '';
  width: 100%;
  height: 100%;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  background: #606060;
  opacity: 0.15;
  filter: blur(25px);
}
.card {
  @apply "md:w-1/3 rounded-lg bg-white relative overflow-hidden block";
}
.card .flags {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 5px 0;
}
.card .flags .flag {
  display: flex;
  align-items: center;
  margin: 5px;
  background: #212429;
  color: white;
  padding: 2px 8px;
  border-radius: 5px;
}
.card img.large {
  @apply "h-[200px] w-full object-cover";
}
.card img.large ~ .info {
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
