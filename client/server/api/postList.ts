import type { IncomingMessage, ServerResponse } from 'http'
import client from './client'
import { Post } from './types'
import * as url from "url";

export default async (req: IncomingMessage, res: ServerResponse) => {
    const params = url.parse(req.url as string, true).query

    const queries = {
        fields: 'id,title,publishedAt,tag',
        limit: Number(params.limit),
        offset: Number(params.offset)
    }

    // タグIDがキーに存在するときはqueryを加える
    if ("tagId" in params) {
        queries["filters"] = `tag[contains]${params.tagId}`
    }

    const data = client.getList<Post>({
        endpoint: 'post',
        queries: queries
    })

    return data
}