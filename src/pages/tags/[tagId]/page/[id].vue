<!-- src/pages/tags/[tagId]/page/[id].vue -->
<script setup lang="ts">
const route = useRoute()
const page = Number(route.params.id || 1)
const tagId = String(route.params.tagId || '')

</script>
        
<template>
    <Home :page="page" :tagId="tagId" />
</template>