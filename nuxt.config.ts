const { API_KEY, SERVICE_DOMAIN } = process.env;

export default defineNuxtConfig({
    srcDir: 'src/',
    runtimeConfig: {
        apiKey: API_KEY,
        serviceDomain: SERVICE_DOMAIN
    },
    css: ['~/assets/css/reset.css', '~/assets/css/style.css',],
})