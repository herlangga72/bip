import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { minify } from 'html-minifier';
import { optimizeImports, optimizeCss } from 'carbon-preprocess-svelte';
import windiCss from 'vite-plugin-windicss';
import { VitePWA } from 'vite-plugin-pwa'
const minifyHtml = () => {
    return {
        name: 'html-transform',
        transformIndexHtml(html) {
            return minify(html, {
                collapseWhitespace: true,
            });
        },
    };
};

module.exports = defineConfig(({ mode }) => {
    const isProduction = mode === 'production';

    return {
        optimizeDeps: {
            exclude: ['@roxi/routify'],
            include: ['clipboard-copy'],
        },
        plugins: [
            windiCss(),
            svelte({
                onwarn(warning, defaultHandler) {
                    if (warning.code === 'a11y-mouse-events-have-key-events') return;
                    defaultHandler(warning)},
                preprocess: [optimizeImports()],
            }),
            isProduction && optimizeCss(),
            isProduction && minifyHtml(),
            VitePWA({}),
        ],
        build: {
            sourcemap: true,
            assetsDir: 'assets/',
            cssCodeSplit: false,
            // outDir: '../website/',
            emptyOutDir: 'true',
            minify: isProduction,
        },
    };
});
