// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from '@tailwindcss/vite';

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },
    modules: [
        '@nuxt/eslint',
        '@nuxt/image',
        '@nuxt/ui',
        '@nuxtjs/google-fonts',
    ],
    // @tailwindcss/vite
    css: ['~/assets/css/tailwind.css'],
    vite: {
        plugins: [tailwindcss()],
    },
    // @nuxtjs/google-fonts
    googleFonts: {
        families: {
            Onest: true,
            Inter: true,
        },
    },
    // @nuxt/image
    image: {
        dir: 'assets/img',
    },
});
