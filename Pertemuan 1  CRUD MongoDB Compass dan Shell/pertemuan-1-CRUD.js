db["books"].find()
show databases
Bookstore   56.00 KiB
admin       40.00 KiB
config     100.00 KiB
local       40.00 KiB
use Bookstore
switched to db Bookstore
db.books.insertMany([
    // Buku lama (before 2000)
    {
        title: "No Longer Human",
        author: "Osamu Dazai",
        year: 1948,
        pages: 271,
        summary: "Cerita tentang seorang pria yang merasa terasing dari masyarakat",
        publisher: "Gramedia",
        language: "Indonesian",
        rating: 4.8,
        tags: ["fiction", "classic", "japanese"]
    },
    {
        title: "The Setting Sun",
        author: "Osamu Dazai",
        year: 1947,
        pages: 175,
        summary: "Kisah tentang kemunduran keluarga bangsawan Jepang",
        publisher: "Yen Press",
        language: "English",
        rating: 4.5,
        tags: ["fiction", "classic", "japanese"]
    },
    {
        title: "I Am a Cat",
        author: "Natsume Souseki",
        year: 1905,
        pages: 532,
        summary: "Satire tentang masyarakat Jepang dari sudut pandang kucing",
        publisher: "Gramedia",
        language: "Indonesian",
        rating: 4.3,
        tags: ["fiction", "classic", "satire"]
    },
    {
        title: "Kokoro",
        author: "Natsume Souseki",
        year: 1914,
        pages: 248,
        summary: "Kisah tentang kesepian dan perubahan di era Meiji",
        publisher: "Yen Press",
        language: "English",
        rating: 4.6,
        tags: ["fiction", "classic", "psychological"]
    },
    
    // Buku modern (after 2000)
    {
        title: "Overlord I",
        author: "Kugane Maruyama",
        year: 2012,
        pages: 548,
        summary: "Game veteran terjebak di dunia game kesayangannya",
        publisher: "Yen Press",
        language: "English",
        rating: 4.7,
        tags: ["fantasy", "light novel", "isekai"]
    },
    {
        title: "Overlord II",
        author: "Kugane Maruyama",
        year: 2013,
        pages: 512,
        summary: "Petualangan Ainz Ooal Gown berlanjut",
        publisher: "Yen Press",
        language: "English",
        rating: 4.6,
        tags: ["fantasy", "light novel", "isekai"]
    },
    {
        title: "Hujan",
        author: "Tere Liye",
        year: 2016,
        pages: 320,
        summary: "Kisah cinta di tengah bencana dan kehilangan memori",
        publisher: "Gramedia",
        language: "Indonesian",
        rating: 4.9,
        tags: ["fiction", "romance", "indonesian"]
    },
    {
        title: "Bumi",
        author: "Tere Liye",
        year: 2014,
        pages: 440,
        summary: "Petualangan anak-anak dengan kekuatan khusus",
        publisher: "Gramedia",
        language: "Indonesian",
        rating: 4.8,
        tags: ["fantasy", "indonesian", "adventure"]
    },
    {
        title: "Bulan",
        author: "Tere Liye",
        year: 2015,
        pages: 398,
        summary: "Lanjutan petualangan di dunia paralel",
        publisher: "Gramedia",
        language: "Indonesian",
        rating: 4.7,
        tags: ["fantasy", "indonesian", "adventure"]
    },
    {
        title: "The Name of the Wind",
        author: "Patrick Rothfuss",
        year: 2007,
        pages: 662,
        summary: "Kisah legenda seorang musisi dan penyihir",
        publisher: "DAW Books",
        language: "English",
        rating: 4.9,
        tags: ["fantasy", "epic", "magic"]
    },
    
    // Buku dengan variasi untuk demo
    {
        title: "Buku Tanpa Rating",
        author: "Anonim",
        year: 2020,
        pages: 100,
        summary: null,
        publisher: "Self-publish",
        language: "Indonesian",
        tags: ["experimental"]
        // Field rating TIDAK ADA
    },
    {
        title: "Buku Tanpa Tags",
        author: "John Doe",
        year: 2021,
        pages: 150,
        summary: "Buku tanpa tags untuk demo",
        publisher: "Gramedia",
        language: "English",
        rating: 3.5
        // Field tags TIDAK ADA
    },
    {
        title: "Buku Tipis",
        author: "Test Author",
        year: 2022,
        pages: 50,
        summary: "Buku dengan sedikit halaman",
        publisher: "Yen Press",
        language: "English",
        rating: 3.0,
        tags: ["short"]
    },
    {
        title: "Buku Tebal",
        author: "Test Author",
        year: 2023,
        pages: 950,
        summary: "Buku dengan banyak halaman",
        publisher: "Gramedia",
        language: "Indonesian",
        rating: 4.0,
        tags: ["long"]
    },
    {
        title: "Buku Bahasa Indonesia Lain",
        author: "Penulis Indonesia",
        year: 2021,
        pages: 280,
        summary: "Buku berbahasa Indonesia",
        publisher: "Gramedia",
        language: "Indonesian",
        rating: 4.2,
        tags: ["indonesian", "fiction"]
    }
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('69a1af35fe94806c275aa91b'),
    '1': ObjectId('69a1af35fe94806c275aa91c'),
    '2': ObjectId('69a1af35fe94806c275aa91d'),
    '3': ObjectId('69a1af35fe94806c275aa91e'),
    '4': ObjectId('69a1af35fe94806c275aa91f'),
    '5': ObjectId('69a1af35fe94806c275aa920'),
    '6': ObjectId('69a1af35fe94806c275aa921'),
    '7': ObjectId('69a1af35fe94806c275aa922'),
    '8': ObjectId('69a1af35fe94806c275aa923'),
    '9': ObjectId('69a1af35fe94806c275aa924'),
    '10': ObjectId('69a1af35fe94806c275aa925'),
    '11': ObjectId('69a1af35fe94806c275aa926'),
    '12': ObjectId('69a1af35fe94806c275aa927'),
    '13': ObjectId('69a1af35fe94806c275aa928'),
    '14': ObjectId('69a1af35fe94806c275aa929')
  }
}
// Cek jumlah data
db.books.countDocuments()
17
// CREATE - Insert banyak buku
db.books.insertMany([
    { title: "Buku A", author: "Penulis A", year: 2023 },
    { title: "Buku B", author: "Penulis B", year: 2024 }
])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId('69a1b043fe94806c275aa92a'),
    '1': ObjectId('69a1b043fe94806c275aa92b')
  }
}
// READ - Cari semua buku
db.books.find()
{
  _id: ObjectId('6324941458115a5f019b9c8c'),
  title: 'No Longer Human',
  author: 'Osamu Dazai',
  year: 1948,
  pages: 271,
  summary: 'Lorem ipsum dolor sit amet'
}
{
  _id: ObjectId('63249aaf58115a5f019b9c8e'),
  title: 'I Am a Cat',
  author: 'Natsume Souseki',
  year: 1905,
  pages: 532,
  summary: 'Buku yang bagus',
  publisher: 'Gramedia'
}
{
  _id: ObjectId('69a1af35fe94806c275aa91b'),
  title: 'No Longer Human',
  author: 'Osamu Dazai',
  year: 1948,
  pages: 271,
  summary: 'Cerita tentang seorang pria yang merasa terasing dari masyarakat',
  publisher: 'Gramedia',
  language: 'Indonesian',
  rating: 4.8,
  tags: [
    'fiction',
    'classic',
    'japanese'
  ]
}
{
  _id: ObjectId('69a1af35fe94806c275aa91c'),
  title: 'The Setting Sun',
  author: 'Osamu Dazai',
  year: 1947,
  pages: 175,
  summary: 'Kisah tentang kemunduran keluarga bangsawan Jepang',
  publisher: 'Yen Press',
  language: 'English',
  rating: 4.5,
  tags: [
    'fiction',
    'classic',
    'japanese'
  ]
}
{
  _id: ObjectId('69a1af35fe94806c275aa91d'),
  title: 'I Am a Cat',
  author: 'Natsume Souseki',
  year: 1905,
  pages: 532,
  summary: 'Satire tentang masyarakat Jepang dari sudut pandang kucing',
  publisher: 'Gramedia',
  language: 'Indonesian',
  rating: 4.3,
  tags: [
    'fiction',
    'classic',
    'satire'
  ]
}
{
  _id: ObjectId('69a1af35fe94806c275aa91e'),
  title: 'Kokoro',
  author: 'Natsume Souseki',
  year: 1914,
  pages: 248,
  summary: 'Kisah tentang kesepian dan perubahan di era Meiji',
  publisher: 'Yen Press',
  language: 'English',
  rating: 4.6,
  tags: [
    'fiction',
    'classic',
    'psychological'
  ]
}
{
  _id: ObjectId('69a1af35fe94806c275aa91f'),
  title: 'Overlord I',
  author: 'Kugane Maruyama',
  year: 2012,
  pages: 548,
  summary: 'Game veteran terjebak di dunia game kesayangannya',
  publisher: 'Yen Press',
  language: 'English',
  rating: 4.7,
  tags: [
    'fantasy',
    'light novel',
    'isekai'
  ]
}
{
  _id: ObjectId('69a1af35fe94806c275aa920'),
  title: 'Overlord II',
  author: 'Kugane Maruyama',
  year: 2013,
  pages: 512,
  summary: 'Petualangan Ainz Ooal Gown berlanjut',
  publisher: 'Yen Press',
  language: 'English',
  rating: 4.6,
  tags: [
    'fantasy',
    'light novel',
    'isekai'
  ]
}
{
  _id: ObjectId('69a1af35fe94806c275aa921'),
  title: 'Hujan',
  author: 'Tere Liye',
  year: 2016,
  pages: 320,
  summary: 'Kisah cinta di tengah bencana dan kehilangan memori',
  publisher: 'Gramedia',
  language: 'Indonesian',
  rating: 4.9,
  tags: [
    'fiction',
    'romance',
    'indonesian'
  ]
}
{
  _id: ObjectId('69a1af35fe94806c275aa922'),
  title: 'Bumi',
  author: 'Tere Liye',
  year: 2014,
  pages: 440,
  summary: 'Petualangan anak-anak dengan kekuatan khusus',
  publisher: 'Gramedia',
  language: 'Indonesian',
  rating: 4.8,
  tags: [
    'fantasy',
    'indonesian',
    'adventure'
  ]
}
{
  _id: ObjectId('69a1af35fe94806c275aa923'),
  title: 'Bulan',
  author: 'Tere Liye',
  year: 2015,
  pages: 398,
  summary: 'Lanjutan petualangan di dunia paralel',
  publisher: 'Gramedia',
  language: 'Indonesian',
  rating: 4.7,
  tags: [
    'fantasy',
    'indonesian',
    'adventure'
  ]
}
{
  _id: ObjectId('69a1af35fe94806c275aa924'),
  title: 'The Name of the Wind',
  author: 'Patrick Rothfuss',
  year: 2007,
  pages: 662,
  summary: 'Kisah legenda seorang musisi dan penyihir',
  publisher: 'DAW Books',
  language: 'English',
  rating: 4.9,
  tags: [
    'fantasy',
    'epic',
    'magic'
  ]
}
{
  _id: ObjectId('69a1af35fe94806c275aa925'),
  title: 'Buku Tanpa Rating',
  author: 'Anonim',
  year: 2020,
  pages: 100,
  summary: null,
  publisher: 'Self-publish',
  language: 'Indonesian',
  tags: [
    'experimental'
  ]
}
{
  _id: ObjectId('69a1af35fe94806c275aa926'),
  title: 'Buku Tanpa Tags',
  author: 'John Doe',
  year: 2021,
  pages: 150,
  summary: 'Buku tanpa tags untuk demo',
  publisher: 'Gramedia',
  language: 'English',
  rating: 3.5
}
{
  _id: ObjectId('69a1af35fe94806c275aa927'),
  title: 'Buku Tipis',
  author: 'Test Author',
  year: 2022,
  pages: 50,
  summary: 'Buku dengan sedikit halaman',
  publisher: 'Yen Press',
  language: 'English',
  rating: 3,
  tags: [
    'short'
  ]
}
{
  _id: ObjectId('69a1af35fe94806c275aa928'),
  title: 'Buku Tebal',
  author: 'Test Author',
  year: 2023,
  pages: 950,
  summary: 'Buku dengan banyak halaman',
  publisher: 'Gramedia',
  language: 'Indonesian',
  rating: 4,
  tags: [
    'long'
  ]
}
{
  _id: ObjectId('69a1af35fe94806c275aa929'),
  title: 'Buku Bahasa Indonesia Lain',
  author: 'Penulis Indonesia',
  year: 2021,
  pages: 280,
  summary: 'Buku berbahasa Indonesia',
  publisher: 'Gramedia',
  language: 'Indonesian',
  rating: 4.2,
  tags: [
    'indonesian',
    'fiction'
  ]
}
{
  _id: ObjectId('69a1b043fe94806c275aa92a'),
  title: 'Buku A',
  author: 'Penulis A',
  year: 2023
}
{
  _id: ObjectId('69a1b043fe94806c275aa92b'),
  title: 'Buku B',
  author: 'Penulis B',
  year: 2024
}
// READ - Cari dengan filter
db.books.find({ author: "Tere Liye" })
{
  _id: ObjectId('69a1af35fe94806c275aa921'),
  title: 'Hujan',
  author: 'Tere Liye',
  year: 2016,
  pages: 320,
  summary: 'Kisah cinta di tengah bencana dan kehilangan memori',
  publisher: 'Gramedia',
  language: 'Indonesian',
  rating: 4.9,
  tags: [
    'fiction',
    'romance',
    'indonesian'
  ]
}
{
  _id: ObjectId('69a1af35fe94806c275aa922'),
  title: 'Bumi',
  author: 'Tere Liye',
  year: 2014,
  pages: 440,
  summary: 'Petualangan anak-anak dengan kekuatan khusus',
  publisher: 'Gramedia',
  language: 'Indonesian',
  rating: 4.8,
  tags: [
    'fantasy',
    'indonesian',
    'adventure'
  ]
}
{
  _id: ObjectId('69a1af35fe94806c275aa923'),
  title: 'Bulan',
  author: 'Tere Liye',
  year: 2015,
  pages: 398,
  summary: 'Lanjutan petualangan di dunia paralel',
  publisher: 'Gramedia',
  language: 'Indonesian',
  rating: 4.7,
  tags: [
    'fantasy',
    'indonesian',
    'adventure'
  ]
}
// UPDATE - Update satu buku
db.books.updateOne(
    { title: "Hujan" },
    { $set: { rating: 5.0 } }
)
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
// DELETE - Hapus satu buku
db.books.deleteOne({ title: "Buku Baru" })
{
  acknowledged: true,
  deletedCount: 0
}
// DELETE - Hapus banyak buku
db.books.deleteMany({ author: "Penulis A" })
{
  acknowledged: true,
  deletedCount: 1
}
Bookstore


