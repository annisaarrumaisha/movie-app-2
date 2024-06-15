import React from 'react' // Mengimpor pustaka React
import { ScrollView, View, StatusBar, StyleSheet } from 'react-native' // Mengimpor komponen dari React Native
import type { MovieListProps } from '../types/app' // Mengimpor tipe data MovieListProps dari file types/app
import MovieList from '../components/movies/MovieList' // Mengimpor komponen MovieList

// Mendefinisikan daftar film yang akan ditampilkan
const movieLists: MovieListProps[] = [
  {
    title: 'Now Playing in Theater', // Judul daftar film
    path: 'movie/now_playing?language=en-US&page=1', // Path untuk mengambil data film yang sedang tayang di bioskop
    coverType: 'backdrop', // Tipe cover yang digunakan (backdrop)
  },
  {
    title: 'Upcoming Movies', // Judul daftar film
    path: 'movie/upcoming?language=en-US&page=1', // Path untuk mengambil data film yang akan datang
    coverType: 'poster', // Tipe cover yang digunakan (poster)
  },
  {
    title: 'Top Rated Movies', // Judul daftar film
    path: 'movie/top_rated?language=en-US&page=1', // Path untuk mengambil data film dengan rating tertinggi
    coverType: 'poster', // Tipe cover yang digunakan (poster)
  },
  {
    title: 'Popular Movies', // Judul daftar film
    path: 'movie/popular?language=en-US&page=1', // Path untuk mengambil data film populer
    coverType: 'poster', // Tipe cover yang digunakan (poster)
  },
]

// Komponen Home yang akan ditampilkan
const Home = (): JSX.Element => {
  return (
    <ScrollView>
      {/* Menggunakan ScrollView untuk membuat tampilan bisa di-scroll */}
      <View style={styles.container}>
        {/* Menggunakan View dengan gaya yang telah ditentukan */}
        {movieLists.map((movieList) => (
          <MovieList
            title={movieList.title} // Mengirimkan properti title ke komponen MovieList
            path={movieList.path} // Mengirimkan properti path ke komponen MovieList
            coverType={movieList.coverType} // Mengirimkan properti coverType ke komponen MovieList
            key={movieList.title} // Menetapkan key unik berdasarkan title untuk setiap komponen MovieList
          />
        ))}
        <StatusBar translucent={false} />
        {/* Menampilkan StatusBar yang tidak tembus pandang */}
      </View>
    </ScrollView>
  )
}

// Mendefinisikan gaya untuk komponen
const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight ?? 32, // Menambahkan margin atas berdasarkan ketinggian StatusBar atau 32 jika tidak tersedia
    alignItems: 'center', // Menyelaraskan item ke tengah secara horizontal
    justifyContent: 'center', // Menyelaraskan item ke tengah secara vertikal
    rowGap: 16, // Menambahkan jarak vertikal antara item
  },
})

export default Home // Mengekspor komponen Home sebagai default
