// Mengimpor React untuk mendukung penulisan komponen dengan JSX
import React from 'react'

// Mengimpor View dan Text dari React Native untuk membuat elemen UI
import { View, Text } from 'react-native'

// Mendefinisikan komponen Home yang merupakan komponen fungsional
export default function Home(): JSX.Element {
  return (
    // Menggunakan View sebagai container utama
    <View>
      {/* Menampilkan teks "Home" di layar */}
      <Text>Home</Text>
    </View>
  )
}
