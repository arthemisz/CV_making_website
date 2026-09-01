<<<<<<< HEAD
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
});
=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',  
  build: {
    outDir: 'dist',
  }
})
>>>>>>> 37e18cdab30a2ea901a19896f2b5d91132deda84
