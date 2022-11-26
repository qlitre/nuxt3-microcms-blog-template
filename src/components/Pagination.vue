<!-- src/components/Pagination.vue -->
<script setup lang="ts">

type Props = {
    numPages: number;
    current: number;
    // タグIDを受け取るようにする
    selectedTagId?: string | undefined;
    keyword?: string;
}

const { numPages, current, selectedTagId, keyword } = defineProps<Props>();

function getPath(p: number) {
    // 追加　タグありのリンク
    if (selectedTagId) return `tag/${selectedTagId}/page/${p}`
    if (keyword) return `/search?q=${keyword}&page=${p}`
    return `/page/${p}`
}

function getClass(page: number, current: number) {
    if (page == current) return 'current'
    return 'link'
}

</script>

<template>
    <div class="pagination">
        <NuxtLink v-for="page in numPages" :key="page" :class="getClass(page, current)" :to="getPath(page)">
            {{ page }}
        </NuxtLink>
    </div>
</template>

<style scoped>
.pagination {
    position: relative;
    width: 100%;
    margin: 8em 0 8rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    line-height: 1.1;
    text-align: center;
    vertical-align: middle;
}

.current,
.link {
    display: inline-block;
    margin: 0 2rem;
    padding: 2px 0;
    text-align: center;
    font-size: 3rem;
    font-weight: lighter;
}

.current {
    color: #000;
}

.link {
    color: #A2A2A6;
}
</style>