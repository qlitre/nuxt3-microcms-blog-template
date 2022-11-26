<!-- src/pages/search.vue -->
<script setup lang="ts">
import { MicroCMSQueries } from 'microcms-js-sdk'
import { BLOG_PER_PAGE } from '../settings/siteSettings';

const route = useRoute()
const query = String(route.query.q)
// 追加　ページ遷移時にページ情報を受け取る
const page = Number(route.query.page || 1)
const limit = BLOG_PER_PAGE
// ページ情報を持たせる
const queries: MicroCMSQueries = {
    q: query,
    orders: '-publishedAt',
    limit: limit,
    offset: (page - 1) * limit,
}

const { data: posts } = await useFetch('/api/postList', { params: queries })

const totalCount = posts.value.totalCount
const numPages = Math.ceil(totalCount / limit)

// queryが変化した場合にページをリロードする
watch(() => route.query, () => location.reload())

</script>

<template>
    <div class="wrapper">
        <SearchForm :keyword="query" />
        <div class="results">
            <div v-if="posts.contents">
                <PostList :posts="posts.contents" />
                <!-- 追加 -->
                <Pagination :numPages="numPages" :current="page" :keyword="query" />
            </div>
            <div v-if="posts.contents.length == 0">
                <h1 class="no-result">お探しの記事は見つかりませんでした。</h1>
            </div>
        </div>
    </div>
</template>

<style scoped>
.wrapper {
    padding-top: 112px;
    position: relative;
    width: 960px;
    margin: 0 auto 0;
}

.results {
    margin-top: 3rem;
}

.no-result {
    text-align: center;
    font-size: 2.4rem;
    margin-bottom: 30px;
}


@media (max-width: 1024px) {
    .wrapper {
        max-width: 600px;
        position: relative;
        width: 100%;
        padding-right: 1rem;
        padding-left: 1rem;
        margin-right: auto;
        margin-left: auto;
    }
}
</style>
