import React, { useState, useEffect } from 'react' // Mengimpor React dan hook useState, useEffect dari pustaka React
import { View, Text, StyleSheet, FlatList } from 'react-native' // Mengimpor komponen dari React Native
import type { MovieListProps, Movie } from '../../types/app' // Mengimpor tipe data dari file types/app
import { API_ACCESS_TOKEN } from '@env' // Mengimpor token akses API dari variabel lingkungan
import MovieItem from './MovieItem' // Mengimpor komponen MovieItem

// Mendefinisikan ukuran gambar cover untuk tipe yang berbeda
const coverImageSize = {
  backdrop: {
    width: 280,
    height: 160,
  },
  poster: {
    width: 100,
    height: 160,
  },
}

// Komponen MovieList
const MovieList = ({ title, path, coverType }: MovieListProps): JSX.Element => {
  const [movies, setMovies] = useState<Movie[]>([]) // Mendefinisikan state movies dengan useState

  // Mengambil daftar film ketika komponen dimuat pertama kali
  useEffect(() => {
    getMovieList()
  }, [])

  // Fungsi untuk mengambil daftar film dari API
  const getMovieList = (): void => {
    const url = `https://api.themoviedb.org/3/${path}` // URL endpoint API
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_ACCESS_TOKEN}`, // Menambahkan header otorisasi dengan token API
      },
    }

    // Melakukan permintaan fetch ke API
    fetch(url, options)
      .then(async (response) => await response.json()) // Mengkonversi respons ke JSON
      .then((response) => {
        setMovies(response.results) // Menyimpan hasil respons ke state movies
      })
      .catch((errorResponse) => {
        console.log(errorResponse) // Menangani error dengan menampilkan di console
      })
  }

  return (
    <View>
      <View style={styles.header}>
        <View style={styles.purpleLabel}></View>
        <Text style={styles.title}>{title}</Text>
      </View>
      <FlatList
        style={{
          ...styles.movieList,
          maxHeight: coverImageSize[coverType].height, // Mengatur tinggi maksimal berdasarkan tipe cover
        }}
        showsHorizontalScrollIndicator={false} // Menyembunyikan indikator scroll horizontal
        horizontal // Mengatur FlatList untuk menggulir secara horizontal
        data={movies} // Data film yang akan ditampilkan
        renderItem={({ item }) => (
          <MovieItem
            movie={item} // Mengirim data film ke komponen MovieItem
            size={coverImageSize[coverType]} // Mengirim ukuran gambar ke komponen MovieItem
            coverType={coverType} // Mengirim tipe cover ke komponen MovieItem
          />
        )}
        keyExtractor={(item) => item.id.toString()} // Mengatur key unik untuk setiap item
      />
    </View>
  )
}

// Mendefinisikan gaya untuk komponen
const styles = StyleSheet.create({
  header: {
    marginLeft: 6,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  purpleLabel: {
    width: 20,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#8978A4',
    marginRight: 12,
  },
  title: {
    fontSize: 20,
    fontWeight: '900',
  },
  movieList: {
    paddingLeft: 4,
    marginTop: 8,
  },
})

export default MovieList // Mengekspor komponen MovieList sebagai default
