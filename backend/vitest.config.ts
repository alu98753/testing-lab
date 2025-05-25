// backend/vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'node',
    coverage: {
      enabled: true,
      provider: 'v8',
      reporter: ['lcov', 'text'],
      reportsDirectory: 'coverage'
    },
    exclude: [
      'dist',       // 不要測試 build 出來的檔案
      '**/node_modules/**'
    ]
  }
})
