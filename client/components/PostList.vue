<script setup lang="ts">
const props = defineProps({
    posts: Object
})
</script>

<template>
    <div>
        <article class="article" v-for="post in posts.contents" :key="post.id">
            <span class="published">{{ $formatDate(post.publishedAt) }}</span>
            <span v-for="tag in post.tag" :key="tag.id" class="tag">{{ tag.name }}</span>
            <nuxt-link :to="`/${post.id}`">
                <h1 class="title">
                    {{ post.title }}
                </h1>
            </nuxt-link>
        </article>
    </div>
</template>

<style scoped>
.article {
    margin-top: 1rem;
    margin-bottom: 6rem;
    width: 100%;
    align-items: center;
}

.published {
    font-size: 1.4rem;
    color: #888;
    margin-right: 20px;
}

.title {
    margin-top: 6px;
    font-size: 2.8rem;
    color: #0d1a3c;
    line-height: 1.6;
    font-weight: bold;
}

.title:hover {
    opacity: .5;
}

.tag {
    font-size: 1.4rem;
    color: 888;
    opacity: 0.7;
    letter-spacing: 1px;
    margin-right: 1rem;
}
</style>