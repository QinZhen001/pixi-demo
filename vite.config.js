import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import pck from "./package.json"



const genBaseUrl = (mode) => {
  switch (mode) {
    case "production":
      return `/${pck.name}/`
    default:
      return "/"
  }
}

export default defineConfig(({ mode }) => {
  return {
    base: genBaseUrl(mode),
    plugins: [react()],
  }
})
