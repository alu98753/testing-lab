import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { configDefaults } from 'vitest/config'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:8888',
        changeOrigin: true
      }
    }
  },
  test: {
    environment: 'jsdom',
    coverage: {
      enabled: true,
      provider: 'v8',
      reportsDirectory: 'coverage',
      reporter: ['lcov', 'text'],
    },
    include: ['src/**/*.test.tsx', 'src/**/*.test.ts'],
    exclude: [
      ...configDefaults.exclude,
      'tests',              // <== 排除 Playwright 測試資料夾
      'playwright.config.ts'
    ]
  }
})
