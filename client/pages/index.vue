<script setup lang="ts">

const route = useRoute()
const page: number = Number(route.params.p || 1)
const selectedTagId: string = String(route.params.tagId == undefined ? '' : route.params.tagId)

const limit: number = 5
const offset: number = (page - 1) * limit
const params: object = { limit: limit, offset: offset }
if (selectedTagId) {
    params["tagId"] = selectedTagId
}

const { data: posts } = await useFetch('/api/postList', { params: params })
const { data: tags, refresh } = await useFetch(`/api/tagList`)

const selectedTagObject: object =
    selectedTagId !== '' ?
        tags.value.contents.find((content) => content.id === selectedTagId) : {};

const totalCount: number = posts.value.totalCount
const numPages: number = Math.ceil(totalCount / limit)

</script>

<template>
    <div>
        <div class="divider">
            <section class="container">
                <!-- パンくずリスト -->
                <Breadcrumb :tag="selectedTagObject" />
                <!-- 記事一覧 -->
                <PostList :posts="posts" />
            </section>
            <aside class="aside">
                <!-- キーワード検索 -->
                <SearchForm />
                <!-- 、タグ一覧 -->
                <Tags :tags="tags" />
            </aside>
        </div>

        <Pagination :numPages="numPages" :current="page" :selectedTagId="selectedTagId" />
    </div>
</template>

<style scoped>
@media (min-width: 1160px) {
    .divider {
        display: flex;
        justify-content: space-between;
        width: 1080px;
        margin: 20px auto 0;
        padding-top: 84px;
    }

    .container {
        width: 600px;
    }

    .aside {
        width: 300px;
    }
}

@media (min-width: 820px) and (max-width: 1160px) {
    .divider {
        margin: 20px auto 0;
        width: 740px;
        padding-top: 112px;
    }

    .aside {
        margin-top: 60px;
    }
}

@media (max-width: 820px) {
    .divider {
        margin: 20px 0 0;
        padding: 0 20px;
        padding-top: 112px;
    }

    .aside {
        margin-top: 60px;
        width: 100%;
    }
}
</style>
