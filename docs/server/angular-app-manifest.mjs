
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://rodrigonunezpalmadgr-cmd.github.io/lab1/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/lab1"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-L6L4LYWW.js"
    ],
    "route": "/lab1/about"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 14602, hash: 'e2daa323471b50b089fa47dc6b50184bcd6a9d2e5f41927baefe2aa0921e46b2', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 15122, hash: '833ae0f5aeaf1ab0a75e59cee142eeba5f2f337199390f55d67781193feeae65', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 16429, hash: '35c88cbb0188c65b6f1a3843e28612483d39313bd9ee0a375673634273c3664c', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 20952, hash: '91c0de44ea05f30802f2143f84de2a0a59eaac009ce0926c5d663950a106e5d8', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
