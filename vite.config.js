import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import { createHtmlPlugin } from 'vite-plugin-html';
import { defineConfig } from 'vite';

export default defineConfig(() => {
    return {
        plugins: [
            createHtmlPlugin({
                minify: true,
            }),
            ViteImageOptimizer({
                test: /\.(jpg|png)$/i,
                includePublic: true,
                logStats: true,
                png: {
                    quality: 90,
                },
                jpg: {
                    quality: 90,
                },
                webp: {
                    quality: 90,
                },
            }),
        ],
        build: {
            rollupOptions: {
                output: {
                    chunkFileNames: 'js/[name]-[hash].js',
                    entryFileNames: 'js/[name]-[hash].js',
                    assetFileNames: ({ name }) => {
                        if (/\.(jpg|png)$/.test(name ?? '')) {
                            return 'images/[name]-[hash][extname]';
                        }
                        if (/\.css$/.test(name ?? '')) {
                            return 'css/[name]-[hash][extname]';
                        }
                        return '[name]-[hash][extname]';
                    },
                },
            },
        },
        server: {
            port: 3000,
        },
    };
});
