import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:"/PPM-pfo",
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.PNG', '**/*.png'] // Add all image formats you use
})
