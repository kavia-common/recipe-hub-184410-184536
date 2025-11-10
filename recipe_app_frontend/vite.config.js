import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Vite 5 configuration compatible with Node 18 and Tizen packaging
export default defineConfig({
  plugins: [
    react(),
    // Inject a minimal runtime shim for globalThis.crypto when missing (no top-level await).
    {
      name: 'crypto-shim',
      apply: 'build',
      transform(code, id) {
        if (id.endsWith('src/main.jsx')) {
          const shim = `
(function() {
  if (typeof globalThis !== 'undefined' && typeof globalThis.crypto === 'undefined') {
    try {
      // Prefer Node's webcrypto if available without using top-level await
      var req = (typeof require !== 'undefined') ? require : null;
      if (req) {
        try {
          var nodeCrypto = req('node:crypto');
          if (nodeCrypto && nodeCrypto.webcrypto) {
            // eslint-disable-next-line no-global-assign
            globalThis.crypto = nodeCrypto.webcrypto;
            return;
          }
        } catch (e) { /* ignore */ }
      }
      // Fallback to empty object if nothing is available
      // eslint-disable-next-line no-global-assign
      globalThis.crypto = {};
    } catch (e) {
      try {
        // eslint-disable-next-line no-global-assign
        globalThis.crypto = {};
      } catch (_) { /* ignore */ }
    }
  }
})();
`;
          return { code: shim + code, map: null };
        }
        return null;
      },
    },
  ],
  server: {
    port: 3000,
    strictPort: true,
    host: true, // allow access via container network if needed
  },
  preview: {
    port: 3000,
    strictPort: true,
    host: true,
  },
  base: './',
})
