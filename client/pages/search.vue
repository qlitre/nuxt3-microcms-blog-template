<script setup lang="ts">
const route = useRoute()
const page: number = Number(route.query.page || 1)
const query: string | string[] = route.query.q
const limit: number = 5
const offset: number = (page - 1) * limit
const params: object = {
  q: query,
  limit: limit,
  offset: offset
}
const { data: posts, refresh } = await useFetch('/api/search',
  {
    params: params
  }
)

const totalCount: number = posts.value.totalCount
const numPages: number = Math.ceil(totalCount / limit)

function submit(q: string) {
  return navigateTo({
    path: '/search',
    query: {
      q: q
    }
  })
}

// queryが変化した場合にページをリロードする
// これを記述しないと再検索ができない
watch(() => route.query, () => location.reload())

</script>

<template>
  <div class="main">
    <div class="search-form">
      <input v-model="query" type="text" @keyup.enter="(e) => submit((e.target as HTMLInputElement).value)" />
    </div>
    <PostList :posts="posts" />
    <PaginationWithSearch :numPages="numPages" :current="page" :q="String(query)" />
  </div>
</template>

<style>
.search-form {
  margin-top: 2rem;
  position: relative;
  margin-bottom: 2rem;
}

input[type=text] {
  border: 1px solid #ccc;
  width: 100%;
  box-sizing: border-box;
  border-radius: 5px;
  height: 40px;
  font-size: 16px;
  padding-left: 10px;
  box-shadow: none;
  -webkit-appearance: none;
  transition: box-shadow 0.2s ease;
}

input[type=text]:focus {
  outline: 0;
  box-shadow: 0 0 0 0.25rem rgba(13, 110, 253, 0.25);
}
</style>
