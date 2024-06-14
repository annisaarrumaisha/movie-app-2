// Mengimpor React untuk mendukung penulisan komponen dengan JSX
import React from 'react'

// Mengimpor View, Text, dan Button dari React Native untuk membuat elemen UI
import { View, Text, Button } from 'react-native'

// Mendefinisikan komponen Home yang merupakan komponen fungsional
export default function Home({ navigation }: any): JSX.Element {
  return (
    // Menggunakan View sebagai container utama
    <View>
      {/* Menampilkan teks "Home" di layar */}
      <Text>Home</Text>
      {/* Menambahkan tombol yang akan menavigasi ke layar MovieDetail saat ditekan */}
      <Button
        title="Go to Movie Detail" // Teks pada tombol
        onPress={() => navigation.navigate('MovieDetail')} // Fungsi yang dipanggil saat tombol ditekan
      />
    </View>
  )
}
