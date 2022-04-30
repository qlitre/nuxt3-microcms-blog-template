import type { IncomingMessage, ServerResponse } from 'http'
import client from './client'
import { Tag } from './types'


export default async (req: IncomingMessage, res: ServerResponse) => {

    const data = client.getList<Tag>({
        endpoint: 'tag',
        queries: {
            fields: 'id,name',
            // これより増えることはないだろう、という値
            limit: 30,
        },
    })

    return data
}