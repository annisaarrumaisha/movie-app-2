// Mengimpor React untuk mendukung penulisan komponen dengan JSX
import React from 'react'

// Mengimpor NavigationContainer dari @react-navigation/native untuk mengelola status navigasi
import { NavigationContainer } from '@react-navigation/native'

// Mengimpor BottomTabNavigator untuk mengatur navigasi tab bawah
import BottomTabNavigator from './src/navigations/BottomTabNavigation'

// Mendefinisikan komponen App yang mengatur struktur utama aplikasi
export default function App(): JSX.Element {
  return (
    // Membungkus aplikasi dalam NavigationContainer untuk mengelola status navigasi
    <NavigationContainer>
      {/* Menampilkan komponen BottomTabNavigator yang berisi tab navigasi */}
      <BottomTabNavigator />
    </NavigationContainer>
  )
}
