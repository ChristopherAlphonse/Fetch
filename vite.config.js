import { VitePWA } from 'vite-plugin-pwa';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => ({
  optimizeDeps: {
    disabled: false
  },
  build: {
    commonjsOptions: {
      include: []
    }
  },
  test: {
    css: false,
    include: ['src/**/__tests__/*'],
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/setupTests.ts',
    clearMocks: true,
    coverage: {
      provider: 'istanbul',
      enabled: true,
      100: true,
      reporter: ['text', 'lcov'],
      reportsDirectory: 'coverage'
    }
  },
  plugins: [
    react(),
    ...(mode !== 'test'
      ? [
          VitePWA({
            registerType: 'autoUpdate',
            includeAssets: [
              'favicon.png',
              'robots.txt',
              'apple-touch-icon.png',
              'icons/*.svg',
              'fonts/*.woff2'
            ],
            manifest: {
              theme_color: '#BD34FE',
              icons: [
                {
                  src: '/logo192.webp',
                  sizes: '192x192',
                  type: 'image/webp',
                  purpose: 'any maskable'
                },
                {
                  src: '/logo512.webp',
                  sizes: '512x512',
                  type: 'image/png'
                }
              ]
            }
          })
        ]
      : [])
  ]
}));
