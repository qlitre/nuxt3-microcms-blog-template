<script setup lang="ts">

const props = defineProps({
    tags: Object,
})

</script>

<template>
    <div class="wrapper">
        <h1 class="pageTitle">タグ</h1>
        <ul>
            <li v-for="tag in tags.contents" :key="tag.id" class="list">
                <NuxtLink :to="`/tag/${tag.id}/page/1`" class="link">
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

.link {
    display: block;
    padding: 10px;
    color: #888;
    font-size: 1.6rem;
}
</style>