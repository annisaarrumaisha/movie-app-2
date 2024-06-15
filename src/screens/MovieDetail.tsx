// Mengimpor React dan komponen yang dibutuhkan dari React Native
import React, { useEffect, useState } from 'react'
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native'
import { FontAwesome } from '@expo/vector-icons' // Mengimpor ikon FontAwesome
import { API_URL, API_ACCESS_TOKEN } from '@env' // Mengimpor variabel lingkungan dari file .env
import MovieList from '../components/movies/MovieList' // Mengimpor komponen MovieList dari folder components

// Mendefinisikan komponen MovieDetail yang menerima props, termasuk route untuk mendapatkan parameter navigasi
const MovieDetail = ({ route, navigation }: any): JSX.Element => {
  // Mengambil id dari parameter route
  const { id } = route.params
  const [movie, setMovie] = useState<any>(null) // State untuk menyimpan detail film
  const [recommendations, setRecommendations] = useState<any[]>([]) // State untuk menyimpan rekomendasi film

  // Fungsi fetchData untuk mengambil data dari API
  const fetchData = (): void => {
    // Memeriksa apakah variabel lingkungan API_URL dan API_ACCESS_TOKEN telah diatur
    if (API_URL == null || API_ACCESS_TOKEN == null) {
      throw new Error('ENV not found') // Menampilkan kesalahan jika tidak ditemukan
    }

    // Mengatur opsi untuk permintaan API dengan metode GET dan header yang dibutuhkan
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json', // Menerima respons dalam format JSON
        Authorization: `Bearer ${API_ACCESS_TOKEN}`, // Menggunakan token akses dalam header Authorization
      },
    }

    // Menggunakan fetch API untuk mengambil data dari API_URL dengan opsi yang telah ditentukan
    fetch(`${API_URL}/movie/${id}?language=en-US`, options)
      .then((response) => response.json()) // Mengurai respons menjadi objek JSON
      .then((response) => {
        setMovie(response) // Menyimpan data respons ke state movie
      })
      .catch((err) => {
        console.error(err) // Menampilkan kesalahan di konsol jika permintaan gagal
      })
  }

  // Fungsi fetchRecommendations untuk mengambil data rekomendasi film dari API
  const fetchRecommendations = (): void => {
    // Mengatur opsi untuk permintaan API dengan metode GET dan header yang dibutuhkan
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json', // Menerima respons dalam format JSON
        Authorization: `Bearer ${API_ACCESS_TOKEN}`, // Menggunakan token akses dalam header Authorization
      },
    }

    // Menggunakan fetch API untuk mengambil data rekomendasi film
    fetch(
      `${API_URL}/movie/${id}/recommendations?language=en-US&page=1`,
      options,
    )
      .then((response) => response.json()) // Mengurai respons menjadi objek JSON
      .then((response) => {
        setRecommendations(response.results) // Menyimpan data respons ke state recommendations
      })
      .catch((err) => {
        console.error(err) // Menampilkan kesalahan di konsol jika permintaan gagal
      })
  }

  // Mengambil data film dan rekomendasi saat komponen dimuat
  useEffect(() => {
    fetchData() // Memanggil fungsi fetchData
    fetchRecommendations() // Memanggil fungsi fetchRecommendations
  }, [id])

  // Mengembalikan elemen UI untuk komponen MovieDetail
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {movie && ( // Menampilkan detail film jika data tersedia
          <>
            <View style={styles.posterContainer}>
              <Image
                style={styles.poster}
                source={{
                  uri: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
                }} // Sumber gambar poster film
              />
              <View style={styles.ratingContainer}>
                <FontAwesome name="star" size={16} color="yellow" />
                <Text style={styles.rating}>
                  {movie.vote_average.toFixed(1)}
                </Text>
                {/* Menampilkan rating dengan bintang */}
              </View>
            </View>
            <Text style={styles.title}>{movie.title}</Text>
            {/* Menampilkan judul film */}
            <Text style={styles.overview}>{movie.overview}</Text>
            {/* Menampilkan sinopsis film */}
            <Text style={styles.label}>Release Date:</Text>
            <Text style={styles.value}>{movie.release_date}</Text>
            {/* Menampilkan tanggal rilis */}
            <Text style={styles.label}>Rating:</Text>
            <Text style={styles.value}>{movie.vote_average}</Text>
            {/* Menampilkan rata-rata vote */}
            <Text style={styles.label}>Runtime:</Text>
            <Text style={styles.value}>{movie.runtime} minutes</Text>
            {/* Menampilkan durasi film */}
            <Text style={styles.label}>Original Language:</Text>
            <Text style={styles.value}>{movie.original_language}</Text>
            {/* Menampilkan bahasa asli */}
            <Text style={styles.label}>Popularity:</Text>
            <Text style={styles.value}>{movie.popularity}</Text>
            {/* Menampilkan popularitas */}
            <Text style={styles.label}>Vote Count:</Text>
            <Text style={styles.value}>{movie.vote_count}</Text>
            {/* Menampilkan jumlah vote */}
          </>
        )}
        <MovieList
          title="Recommendations" // Judul untuk daftar rekomendasi film
          path={`movie/${id}/recommendations?language=en-US&page=1`} // Path untuk mengambil data rekomendasi
          coverType="poster" // Tipe cover yang digunakan (poster)
        />
      </ScrollView>
    </SafeAreaView>
  )
}

// Mendefinisikan gaya untuk komponen
const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // Memastikan SafeAreaView mengambil seluruh layar
  },
  container: {
    padding: 16, // Menambahkan padding di sekitar kontainer
    paddingBottom: 100, // Menambahkan padding bawah untuk memberi ruang pada tombol navigasi
  },
  posterContainer: {
    position: 'relative', // Mengatur posisi relatif untuk kontainer poster
  },
  poster: {
    width: '100%', // Mengatur lebar gambar menjadi 100% dari lebar kontainer
    height: 400, // Mengatur tinggi gambar
    borderRadius: 10, // Mengatur radius border gambar
    marginBottom: 16, // Menambahkan margin bawah
  },
  ratingContainer: {
    position: 'absolute', // Mengatur posisi absolut untuk kontainer rating
    top: 10, // Mengatur jarak dari atas poster
    left: 10, // Mengatur jarak dari kiri poster
    flexDirection: 'row', // Mengatur arah tata letak dalam baris
    alignItems: 'center', // Menyelaraskan item di tengah secara vertikal
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Menambahkan latar belakang semi-transparan
    padding: 5, // Menambahkan padding dalam kontainer rating
    borderRadius: 5, // Menambahkan radius border untuk kontainer rating
  },
  rating: {
    fontSize: 16, // Mengatur ukuran font untuk rating
    color: 'yellow', // Mengatur warna teks rating
    marginLeft: 5, // Menambahkan margin kiri untuk teks rating
  },
  title: {
    fontSize: 24, // Mengatur ukuran font untuk judul
    fontWeight: 'bold', // Mengatur ketebalan font
    marginBottom: 8, // Menambahkan margin bawah
  },
  overview: {
    fontSize: 16, // Mengatur ukuran font untuk sinopsis
    marginBottom: 16, // Menambahkan margin bawah
  },
  label: {
    fontSize: 18, // Mengatur ukuran font untuk label
    fontWeight: 'bold', // Mengatur ketebalan font
    marginBottom: 4, // Menambahkan margin bawah
  },
  value: {
    fontSize: 16, // Mengatur ukuran font untuk nilai
    marginBottom: 12, // Menambahkan margin bawah
  },
})

export default MovieDetail // Mengekspor komponen MovieDetail agar dapat digunakan di tempat lain
