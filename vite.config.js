import{defineConfig}from'vite';
export default defineConfig({cacheDir:'.local/vite-cache',build:{target:'es2022'},server:{host:'127.0.0.1',port:4692,strictPort:true,proxy:{'/fixture':{target:'http://127.0.0.1:4693'}}}});
