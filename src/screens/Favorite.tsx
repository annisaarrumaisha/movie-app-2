// Mengimpor React untuk mendukung penulisan komponen dengan JSX
import React from 'react'

// Mengimpor View dan Text dari React Native untuk membuat elemen UI
import { View, Text } from 'react-native'

// Mendefinisikan komponen Favorite yang merupakan komponen fungsional
export default function Favorite(): JSX.Element {
  return (
    // Menggunakan View sebagai container utama
    <View>
      {/* Menampilkan teks "Favorite" di layar */}
      <Text>Favorite</Text>
    </View>
  )
}
