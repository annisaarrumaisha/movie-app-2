// Mengimpor React dan komponen yang dibutuhkan dari React Native
import React from 'react'
import { View, Text, Button } from 'react-native'

// Mengimpor variabel lingkungan (environment variables) dari file .env
import { API_URL, API_ACCESS_TOKEN } from '@env' // Ditambahkan

// Mendefinisikan komponen MovieDetail yang menerima props, termasuk navigation
const MovieDetail = ({ navigation }: any): any => {
  // Fungsi fetchData untuk mengambil data dari API
  const fetchData = (): void => {
    // Memeriksa apakah variabel lingkungan API_URL dan API_ACCESS_TOKEN telah diatur
    if (API_URL == null || API_ACCESS_TOKEN.length == null) {
      throw new Error('ENV not found') // Menampilkan kesalahan jika tidak ditemukan
    }

    // Mengatur opsi untuk permintaan API dengan metode GET dan header yang dibutuhkan
    const options = {
      method: 'GET', // Metode permintaan adalah GET
      headers: {
        accept: 'application/json', // Menerima respons dalam format JSON
        Authorization: `Bearer ${API_ACCESS_TOKEN}`, // Menggunakan token akses dalam header Authorization
      },
    }

    // Menggunakan fetch API untuk mengambil data dari API_URL dengan opsi yang telah ditentukan
    fetch(API_URL, options)
      .then((response) => response.json()) // Mengurai respons menjadi objek JSON
      .then((response) => {
        console.log(response) // Menampilkan respons di konsol
      })
      .catch((err) => {
        console.error(err) // Menampilkan kesalahan di konsol jika permintaan gagal
      })
  }

  // Mengembalikan elemen UI untuk komponen MovieDetail
  return (
    <View // Kontainer utama dengan gaya untuk menempatkan elemen di tengah layar
      style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
    >
      <Text>Movie Detail Page</Text>
      {/* Menampilkan teks "Movie Detail Page" */}
      <Button
        title="Fetch Data" // Label tombol adalah "Fetch Data"
        onPress={() => {
          fetchData() // Memanggil fungsi fetchData saat tombol ditekan
        }}
      />
    </View>
  )
}

// Mengekspor komponen MovieDetail agar dapat digunakan di tempat lain
export default MovieDetail
