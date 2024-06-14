// Mengimpor React untuk mendukung penulisan komponen dengan JSX
import React from 'react'

// Mengimpor createBottomTabNavigator dari @react-navigation/bottom-tabs untuk membuat navigasi tab bawah
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

// Mengimpor Feather dari @expo/vector-icons untuk menggunakan ikon dari Feather
import { Feather } from '@expo/vector-icons'

// Mengimpor komponen HomeStackNavigation yang baru dibuat dan komponen layar lainnya
import HomeStackNavigation from './HomeStackNavigation'
import Search from '../screens/Search'
import Favorite from '../screens/Favorite'

// Membuat objek navigator untuk navigasi tab bawah
const Tab = createBottomTabNavigator()

// Mendefinisikan komponen BottomTabNavigator yang mengatur navigasi tab
const BottomTabNavigator = (): JSX.Element => (
  // Mengatur Tab.Navigator sebagai container untuk tab-tab kita
  <Tab.Navigator>
    {/* Mendefinisikan tab untuk layar Home */}
    <Tab.Screen
      name="Home" // Menentukan nama tab sebagai "Home"
      component={HomeStackNavigation} // Mengganti komponen Home dengan HomeStackNavigation
      options={{
        // Mengatur ikon untuk tab ini menggunakan ikon Feather
        tabBarIcon: ({ color }) => (
          <Feather name="home" size={28} color={color} />
        ),
        // Menyembunyikan header bar untuk tab ini
        headerShown: false,
      }}
    />
    {/* Mendefinisikan tab untuk layar Search */}
    <Tab.Screen
      name="Search" // Menentukan nama tab sebagai "Search"
      component={Search} // Menentukan komponen yang akan dirender untuk tab ini
      options={{
        // Mengatur ikon untuk tab ini menggunakan ikon Feather
        tabBarIcon: ({ color }) => (
          <Feather name="search" size={28} color={color} />
        ),
        // Menyembunyikan header bar untuk tab ini
        headerShown: false,
      }}
    />
    {/* Mendefinisikan tab untuk layar Favorite */}
    <Tab.Screen
      name="Favorite" // Menentukan nama tab sebagai "Favorite"
      component={Favorite} // Menentukan komponen yang akan dirender untuk tab ini
      options={{
        // Mengatur ikon untuk tab ini menggunakan ikon Feather
        tabBarIcon: ({ color }) => (
          <Feather name="heart" size={28} color={color} />
        ),
        // Menyembunyikan header bar untuk tab ini
        headerShown: false,
      }}
    />
  </Tab.Navigator>
)

// Mengekspor komponen BottomTabNavigator sebagai default export dari modul ini
export default BottomTabNavigator
