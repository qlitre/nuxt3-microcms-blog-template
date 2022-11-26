// src/server/api/postList.ts
import client from './client'
import { Post } from '../../types/blog'


export default defineEventHandler(async (event) => {
    const queries = getQuery(event)
    const data = await client
        .getList<Post>({
            endpoint: 'post',
            queries: queries
        })
    return data
})
