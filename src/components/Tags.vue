<!-- src/components/Tags.vue -->
<script setup lang="ts">
import { Tag } from '../types/blog';

type Props = {
    tags: Tag[];
    selectedTagId: string | undefined;
}

const { tags, selectedTagId } = defineProps<Props>();

function getClass(tagId: string) {
    if (tagId == selectedTagId) return 'active'
    return 'link'
}

</script>

<template>
    <div class="wrapper">
        <h1 class="pageTitle">タグ</h1>
        <ul>
            <li v-for="tag in tags" :key="tag.id" class="list">
                <NuxtLink :to="`/tags/${tag.id}/page/1`" :class="getClass(tag.id)">
                    {{ tag.name }}
                </NuxtLink>
            </li>
        </ul>
    </div>
</template>

<style scoped>
.wrapper {
    padding: 20px 0;
}

.pageTitle {
    font-size: 2rem;
    font-weight: bold;
    color: #5ba9f7;
    background-color: #c8e4ff;
    padding: 6px 10px;
    margin-bottom: 10px;
    border-radius: 5px;
}

.list {
    border-bottom: 1px solid #eee;
    list-style-type: none;
}

.link,
.active {
    display: block;
    padding: 10px;
    color: #888;
    font-size: 1.6rem;
}

.active {
    color: #5ba9f7;
}
</style>