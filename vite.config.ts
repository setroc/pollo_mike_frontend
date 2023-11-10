import { VitePWA, VitePWAOptions } from "vite-plugin-pwa";
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const manifestForPlugin: Partial<VitePWAOptions> = {
  registerType: "prompt",
  includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
  manifest: {
    name: "Weather Ups", 
    short_name: "Weathe Ups",
    description: "An app that can show weather forecast for your city",
    icons: [
      {
        src: '/img/logo.png',
        sizes: '192x192',
        type: 'image/png'
      },
      {
        src: '/img/logo.png',
        sizes: '144x144',
        type: 'image/png'
      },
    ],
    theme_color: "#171717",
    background_color: "#e8ebf2",
    display: "standalone", 
    scope: "/",
    start_url: "/",
    orientation: "portrait"
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  base: "./",
  plugins: [react(), VitePWA(manifestForPlugin)],
})

