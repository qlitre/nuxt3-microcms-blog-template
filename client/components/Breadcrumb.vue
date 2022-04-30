<script setup lang="ts">

const props = defineProps({
  tag: Object,
})

function hasTag(arg: object) {
  return Object.keys(arg).length > 0
}

</script>

<template>
  <ul class="breadcrumb">
    <li class="breadcrumbList">
      <nuxt-link to="/">記事一覧</nuxt-link>
    </li>
    <li v-if="hasTag(tag)" class="breadcrumbList">
      <nuxt-link :to="`/tag/${tag.id}/page/1`">{{ tag.name }}</nuxt-link>
    </li>
  </ul>
</template>


<style scoped>
ul {
  list-style-type: none;
  margin-bottom: 2rem;
}

.breadcrumb {
  display: flex;
  flex-wrap: wrap;
}

.breadcrumbList {
  color: #616269;
  font-size: 1.4rem;
}

.breadcrumbList a {
  color: #331cbf;
}

.breadcrumbList::after {
  content: '>';
  margin: 0 10px;
}

.breadcrumbList:last-child::after {
  content: '';
  margin: 0;
}


@media (max-width: 600px) {
  .breadcrumbList {
    font-size: 14px;
  }
}
</style>
