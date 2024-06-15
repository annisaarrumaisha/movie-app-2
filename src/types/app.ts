// Mendefinisikan tipe data MovieListProps
export interface MovieListProps {
  title: string // Judul daftar film
  path: string // Path untuk mengambil data film
  coverType: 'poster' | 'backdrop' // Tipe cover yang digunakan
}

// Mendefinisikan tipe data Movie
export interface Movie {
  backdrop_path: string // Path untuk gambar backdrop
  genres: { id: number; name: string }[] // Daftar genre film
  homepage: string // Homepage film
  id: number // ID film
  original_title: string // Judul asli film
  overview: string // Sinopsis film
  popularity: number // Popularitas film
  poster_path: string // Path untuk gambar poster
  original_language: string // Bahasa asli film
  production_companies: {
    id: number
    logo_path: string
    name: string
    origin_country: string
  }[] // Daftar perusahaan produksi
  production_countries: {
    iso_3166_1: string
    name: string
  }[] // Daftar negara produksi
  release_date: string // Tanggal rilis film
  revenue: number // Pendapatan film
  runtime: number // Durasi film
  spoken_languages: {
    english_name: string
    iso_639_1: string
    name: string
  }[] // Daftar bahasa yang digunakan
  status: string // Status film
  tagline: string // Tagline film
  title: string // Judul film
  video: boolean // Apakah film memiliki video
  vote_average: number // Rata-rata vote film
  vote_count: number // Jumlah vote film
}

// Mendefinisikan tipe data MovieItemProps
export interface MovieItemProps {
  movie: Movie // Data film
  size: { width: number; height: number } // Ukuran gambar
  coverType: 'poster' | 'backdrop' // Tipe cover yang digunakan
}
