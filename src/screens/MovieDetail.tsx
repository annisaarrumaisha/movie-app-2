// Mengimpor React untuk mendukung penulisan komponen dengan JSX
import React from 'react'

// Mengimpor View dan Text dari React Native untuk membuat elemen UI
import { View, Text } from 'react-native'

// Mendefinisikan komponen MovieDetail yang merupakan komponen fungsional
export default function MovieDetail({ navigation }: any): JSX.Element {
  return (
    // Menggunakan View sebagai container utama
    <View>
      {/* Menampilkan teks "Movie Detail" di layar */}
      <Text>Movie Detail</Text>
      {/* Informasi detail tentang film bisa ditambahkan di sini */}
    </View>
  )
}
