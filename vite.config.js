import { defineConfig } from 'vite';
import { resolve } from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import zipPack from 'vite-plugin-zip-pack';

export default defineConfig({
    plugins: [
        viteStaticCopy({
            targets: [
                {
                    src: 'src/manifest.json',
                    dest: '.',
                },
            ],
        }),
        zipPack(),
    ],
    build: {
        rollupOptions: {
            input: {
                background: resolve(__dirname, 'src/background.js'),
            },
            output: {
                entryFileNames: '[name].js',
            },
        },
        outDir: 'dist',
        emptyOutDir: true,
        minify: false,
    },
});
