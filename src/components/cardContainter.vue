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
  @apply "relative grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4";
}
.card {
  @apply "rounded-lg bg-white relative overflow-hidden block";
  outline: 0.1px #e3e3e3 solid;
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
.card > * {
  @apply "text-center mx-auto";
}
.card h3 {
  @apply "mb-4 text-xl";
}
</style>
