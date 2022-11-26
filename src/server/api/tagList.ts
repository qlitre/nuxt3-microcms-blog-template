// src/server/api/tagList.ts
import client from './client'
import { Tag } from '../../types/blog'


export default defineEventHandler(async (event) => {
    // これ以上は増えない、という値
    const queries = {
        limit: 100,
    }
    const data = await client.getList<Tag>({
        endpoint: 'tag',
        queries: queries
    })
    return data
})