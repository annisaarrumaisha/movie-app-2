// Mendeklarasikan modul '@env' agar TypeScript mengenali impor variabel lingkungan dari modul ini
declare module '@env' {
  // Mendeklarasikan bahwa `API_URL` adalah string
  export const API_URL: string
  // Mendeklarasikan bahwa `API_ACCESS_TOKEN` adalah string
  export const API_ACCESS_TOKEN: string
}
