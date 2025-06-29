/// <reference types="vite/client" />
interface ImportMetaEnv {
  VITE_SUPABASE_URL: any
  VITE_SUPABASE_ANON_KEY: any
  readonly VITE_APP_TITLE?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
interface ImportMetaEnv {
  readonly VITE_CONTRACT_ADDRESS: string
}
