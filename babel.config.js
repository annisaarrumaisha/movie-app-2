// Mengekspor fungsi konfigurasi Babel sebagai modul
module.exports = function (api) {
  // Menggunakan API cache untuk meningkatkan performa build
  api.cache(true)

  // Mengembalikan konfigurasi Babel
  return {
    // Menentukan preset yang digunakan Babel, dalam hal ini menggunakan preset Expo
    presets: ['babel-preset-expo'],

    // Menambahkan konfigurasi plugin
    plugins: [
      [
        // Plugin untuk mengimpor variabel lingkungan dari file .env ke dalam aplikasi React Native
        'module:react-native-dotenv',
        {
          // Nama lingkungan yang digunakan
          envName: 'APP_ENV',
          // Nama modul yang akan digunakan untuk mengimpor variabel lingkungan
          moduleName: '@env',
          // Jalur file .env yang berisi variabel lingkungan
          path: '.env',
        },
      ],
    ],
  }
}
