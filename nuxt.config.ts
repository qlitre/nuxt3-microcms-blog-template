import { defineNuxtConfig } from 'nuxt'
import { resolve } from 'path'
import { createCommonJS } from 'mlly'
const { __dirname } = createCommonJS(import.meta.url)

const { API_KEY, SERVICE_DOMAIN } = process.env;

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    srcDir: 'client/',
    privateRuntimeConfig: {
        apiKey: API_KEY,
        serviceDomain: SERVICE_DOMAIN
    },
    publicRuntimeConfig: {
        apiKey: process.env.NODE_ENV !== 'production' ? API_KEY : undefined,
        serviceDomain: process.env.NODE_ENV !== 'production' ? SERVICE_DOMAIN : undefined,
    },
    link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    css: ['@/assets/css/reset.css', '@/assets/css/style.css'],
    hooks: {
        'pages:extend'(pages) {
            pages.push({
                name: 'page',
                path: '/page/:p',
                file: resolve(__dirname, 'client/pages/index.vue')
            }),
                pages.push({
                    name: 'tag',
                    path: '/tag/:tagId/page/:p',
                    file: resolve(__dirname, 'client/pages/index.vue')
                })
        }
    },
})