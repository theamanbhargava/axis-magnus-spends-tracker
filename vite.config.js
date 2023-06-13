import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {format} from "date-fns";

// https://vitejs.dev/config/


export default defineConfig({
  plugins: [react()],
  define: {
    __BUILD_TIME__: JSON.stringify(format(new Date(), 'yyyy-MM-dd HH:mm:ss')),
  },
})
