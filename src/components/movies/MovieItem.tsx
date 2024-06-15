import React from 'react' // Mengimpor pustaka React
import {
  ImageBackground,
  Text,
  StyleSheet,
  View,
  TouchableOpacity, // Ditambahkan untuk membuat elemen yang dapat ditekan
} from 'react-native'
// Tambahkan code di bawah
import { useNavigation, StackActions } from '@react-navigation/native' // Mengimpor hook navigasi dari react-navigation

import { FontAwesome } from '@expo/vector-icons' // Mengimpor ikon FontAwesome
import { LinearGradient } from 'expo-linear-gradient' // Mengimpor LinearGradient dari expo-linear-gradient
import type { MovieItemProps } from '../../types/app' // Mengimpor tipe data MovieItemProps dari file types/app

// Komponen MovieItem
const MovieItem = ({ movie, size, coverType }: MovieItemProps): JSX.Element => {
  // Tambahkan code di bawah
  const navigation = useNavigation() // Mengambil objek navigasi menggunakan hook useNavigation
  const pushAction = StackActions.push('MovieDetail', { id: movie.id }) // Membuat aksi push untuk navigasi ke layar MovieDetail dengan membawa id film
  return (
    // Ganti <View> dengan <TouchableOpacity>
    <TouchableOpacity
      onPress={() => {
        navigation.dispatch(pushAction) // Menjalankan aksi push saat item ditekan
      }}
    >
      <ImageBackground
        resizeMode="cover"
        style={[size, styles.backgroundImage]} // Mengatur gaya backgroundImage
        imageStyle={styles.backgroundImageStyle} // Mengatur gaya gambar
        source={{
          uri: `https://image.tmdb.org/t/p/w500${
            coverType === 'backdrop' ? movie.backdrop_path : movie.poster_path
          }`, // Mengatur sumber gambar berdasarkan tipe cover
        }}
      >
        <LinearGradient
          colors={['#00000000', 'rgba(0, 0, 0, 0.7)']} // Warna gradien
          locations={[0.6, 0.8]} // Lokasi gradien
          style={styles.gradientStyle} // Mengatur gaya gradien
        >
          <Text style={styles.movieTitle}>{movie.title}</Text>
          <View style={styles.ratingContainer}>
            <FontAwesome name="star" size={16} color="yellow" />
            <Text style={styles.rating}>{movie.vote_average.toFixed(1)}</Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  )
}

// Mendefinisikan gaya untuk komponen
const styles = StyleSheet.create({
  backgroundImage: {
    marginRight: 4, // Mengatur margin kanan
  },
  backgroundImageStyle: {
    borderRadius: 8, // Mengatur radius border
  },
  movieTitle: {
    color: 'white', // Mengatur warna teks judul film
  },
  gradientStyle: {
    padding: 8, // Mengatur padding
    height: '100%', // Mengatur tinggi 100%
    width: '100%', // Mengatur lebar 100%
    borderRadius: 8, // Mengatur radius border
    display: 'flex', // Mengatur tampilan menjadi flexbox
    justifyContent: 'flex-end', // Mengatur konten di akhir (bawah)
  },
  ratingContainer: {
    flexDirection: 'row', // Mengatur arah flex menjadi baris
    alignItems: 'center', // Menyelaraskan item ke tengah secara vertikal
    gap: 2, // Menambahkan jarak antar elemen
  },
  rating: {
    color: 'yellow', // Mengatur warna teks rating
    fontWeight: '700', // Mengatur ketebalan font
  },
})

export default MovieItem // Mengekspor komponen MovieItem sebagai default
