
export default {
  basePath: 'https://rodrigonunezpalmadgr-cmd.github.io/lab1',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
