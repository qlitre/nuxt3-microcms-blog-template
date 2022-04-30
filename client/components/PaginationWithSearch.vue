<script setup lang="ts">

const props = defineProps({
    numPages: Number,
    current: Number,
    q: String,
})

function getPath(p: number) {
    return `/search?q=${props.q}&page=${p}`
}

</script>

<template>
    <div class="pagination">
        <NuxtLink v-for="num in numPages" :key="num" :class="[num == current ? 'current' : 'link']" :to="getPath(num)">
            {{ num }}
        </NuxtLink>
        <router-view />
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