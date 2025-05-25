import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'  // se estiver usando React
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),         // só se usa React, se não pode omitir
    tailwindcss(),
  ],
})
