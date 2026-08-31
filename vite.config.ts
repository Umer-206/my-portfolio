import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    watch: {
      // Windows fs.watch throws EBUSY and crashes the dev server when a file is
      // briefly locked (image editors, downloads, cloud sync). Polling avoids it.
      usePolling: true,
      interval: 300,
    },
  },
})
