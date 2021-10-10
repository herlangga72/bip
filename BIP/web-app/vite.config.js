import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';
import { minify } from 'html-minifier';
import { optimizeImports, optimizeCss } from 'carbon-preprocess-svelte';
import windiCss from 'vite-plugin-windicss';

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
                preprocess: [optimizeImports()],
            }),
            isProduction && optimizeCss(),
            isProduction && minifyHtml(),
        ],
        build: {
            assetsDir: 'assets/',
            cssCodeSplit: false,
            outDir: '../website/',
            emptyOutDir: 'true',
            minify: isProduction,
        },
    };
});
