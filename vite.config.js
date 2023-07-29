import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pck from "./package.json"




export default defineConfig(({ mode }) => {
  return {
    plugins: [react()],
  }
})
