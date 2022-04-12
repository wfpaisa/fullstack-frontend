/// <reference types="vite/client" />

/* eslint-disable */
// declare namespace NodeJS {
//   interface ProcessEnv {
//     NODE_ENV: string;
//     VUE_ROUTER_MODE: 'hash' | 'history' | 'abstract' | undefined;
//     VUE_ROUTER_BASE: string | undefined;
//     VITE_API_PATH: string;
//   }
// }

interface ImportMetaEnv {
  readonly VITE_GRAPHQL_URI: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
