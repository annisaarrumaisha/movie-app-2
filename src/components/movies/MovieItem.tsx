import React from 'react' // Mengimpor pustaka React
import { ImageBackground, Text, StyleSheet, View } from 'react-native' // Mengimpor komponen dari React Native
import { FontAwesome } from '@expo/vector-icons' // Mengimpor ikon FontAwesome
import { LinearGradient } from 'expo-linear-gradient' // Mengimpor LinearGradient dari expo-linear-gradient
import type { MovieItemProps } from '../../types/app' // Mengimpor tipe data MovieItemProps dari file types/app

// Komponen MovieItem
const MovieItem = ({ movie, size, coverType }: MovieItemProps): JSX.Element => {
  return (
    <View>
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
    </View>
  )
}

// Mendefinisikan gaya untuk komponen
const styles = StyleSheet.create({
  backgroundImage: {
    marginRight: 4,
  },
  backgroundImageStyle: {
    borderRadius: 8,
  },
  movieTitle: {
    color: 'white',
  },
  gradientStyle: {
    padding: 8,
    height: '100%',
    width: '100%',
    borderRadius: 8,
    display: 'flex',
    justifyContent: 'flex-end',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
  },
  rating: {
    color: 'yellow',
    fontWeight: '700',
  },
})

export default MovieItem // Mengekspor komponen MovieItem sebagai default
