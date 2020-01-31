let mangaData = [
  {
    "name": "Solo Leveling",
    "author": "JANG Sung-Lak",
    "serialization_year": 2018,
    "genres": ["Action", "Adventure", "Fantasy", "Shounen"],
    "chapters": 104,
    "status": "Ongoing",
    "publisher": "Kakao",
    "location": "Korea"
  },
  {
    "name": "One Piece",
    "author": "ODA Eiichiro",
    "serialization_year": 1997,
    "genres": ["Action", "Adventure", "Fantasy", "Shounen", "Comedy"],
    "chapters": 969,
    "status": "Ongoing",
    "publisher": "Shueisha",
    "location": "Japan"
  },
  {
    "name": "Komi-san wa Komyushou Desu",
    "author": "ODA Tomohito",
    "serialization_year": 2015,
    "genres": ["Comedy", "Romance", "School Life", "Shounen", "Slice of Life"],
    "chapters": 237,
    "status": "Ongoing",
    "publisher": "Shogakukan",
    "location": "Japan"
  },
  {
    "name": "Koe no Katachi",
    "author": "OOIMA Yoshitoki",
    "serialization_year": 2013,
    "genres": ["Comedy", "Drama", "Psychological", "Romance", "School Life", "Shounen", "Slice of Life"],
    "chapters": 62,
    "status": "Completed",
    "publisher": "Kodansha",
    "location": "Japan"
  },
  {
    "name": "Shingeki no Kyojin",
    "author": "ISAYAMA Hajime",
    "serialization_year": 2009,
    "genres": ["Action", "Drama", "Fantasy", "Horror", "Mature", "Mystery", "Shounen", "Supernatural", "Tragedy"],
    "chapters": 125,
    "status": "Ongoing",
    "publisher": "Kodansha",
    "location": "Japan"
  },
  {
    "name": "Bakuman",
    "author": "OHBA Tsugumi",
    "serialization_year": 2008,
    "genres": ["Comedy", "Drama", "Romance", "School Life", "Shounen", "Slice of Life"],
    "chapters": 171,
    "status": "Completed",
    "publisher": "Shueisha",
    "location": "Japan"
  },
  {
    "name": "Beck",
    "author": "HAROLD Sakuishi",
    "serialization_year": 1999,
    "genres": ["Comedy", "Drama", "Ecchi", "Romance", "Shounen", "Slice of Life"],
    "chapters": 102,
    "status": "Completed",
    "publisher": "Kodansha",
    "location": "Japan"
  },
  {
    "name": "Kimetsu no Yaiba",
    "author": "GOTOUGE Koyoharu",
    "serialization_year": 2016,
    "genres": ["Action", "Adventure", "Drama", "Fantasy", "Historical", "Martial Arts", "Shounen", "Supernatural", "Tragedy"],
    "chapters": 191,
    "status": "Ongoing",
    "publisher": "Shueisha",
    "location": "Japan"
  },
  {
    "name": "Exterminator",
    "author": "Hanabokuro",
    "serialization_year": 2017,
    "genres": ["Action", "Adventure", "Comedy", "Ecchi", "Fantasy", "Harem", "Romance", "Shounen"],
    "chapters": 18,
    "status": "Ongoing",
    "publisher": "Kadokawa",
    "location": "Japan"
  },
  {
    "name": "Shokugeki no Soma",
    "author": "TSUKUDA Yuuto",
    "serialization_year": 2012,
    "genres": ["Comedy", "Drama", "Ecchi", "School Life", "Shounen"],
    "chapters": 315,
    "status": "Completed",
    "publisher": "Shueisha",
    "location": "Japan"
  },
  {
    "name": "Goblin Slayer",
    "author": "KAGYU Kumo",
    "serialization_year": 2016,
    "genres": ["Action", "Adult", "Adventure", "Drama", "Fantasy", "Harem", "Horror", "Mature", "Seinen"],
    "chapters": 45,
    "status": "Ongoing",
    "publisher": "Square Enix",
    "location": "Japan"
  },
  {
    "name": "Fuuka",
    "author": "SEO Kouji",
    "serialization_year": 2014,
    "genres": ["Comedy", "Drama", "Ecchi", "Romance", "School Life", "Shounen", "Slice of Life"],
    "chapters": 115,
    "status": "Completed",
    "publisher": "Kodansha",
    "location": "Japan"
  }, 
  {
    "name": "Hajime no Ippo",
    "author": "MORIKAWA Jyoji",
    "serialization_year": 1989,
    "genres": ["Action", "Comedy", "Drama", "Shounen", "Slice of Life", "Sports"],
    "chapters": 1287,
    "status": "Ongoing",
    "publisher": "Kodansha",
    "location": "Japan"
  },
  {
    "name": "Horimiya",
    "author": "HERO",
    "serialization_year": 2011,
    "genres": ["Comedy", "Romance", "School Life", "Shounen", "Slice of Life"],
    "chapters": 110,
    "status": "Ongoing",
    "publisher": "Square Enix",
    "location": "Japan"
  },
  {
    "name": "Shijou Saikyou no Deshi Kenichi",
    "author": "MATSUENA Syun",
    "serialization_year": 2002,
    "genres": ["Action", "Comedy", "Drama", "Ecchi", "Harem", "Martial Arts", "Romance", "School Life", "Shounen"],
    "chapters": 583,
    "status": "Completed",
    "publisher": "Shogakukan",
    "location": "Japan"
  },
  {
    "name": "Dungeon no Deai o Motomeru no wa Machigatte iru Darou Ka",
    "author": "OOMORI Fujino",
    "serialization_year": 2013,
    "genres": ["Action", "Adventure", "Comedy", "Ecchi", "Fantasy", "Harem", "Romance", "Seinen"],
    "chapters": 90,
    "status": "Ongoing",
    "publisher": "Square Enix",
    "location": "Japan"
  },
  {
    "name": "Kimi ni Todoke",
    "author": "SHINA Karuho",
    "serialization_year": 2005,
    "genres": ["Comedy", "Drama", "Romance", "School Life", "Shoujo", "Slice of Life"],
    "chapters": 112,
    "status": "Completed",
    "publisher": "Shueisha",
    "location": "Japan"
  },
  {
    "name": "Breaker",
    "author": "JEON Geuk-Jin",
    "serialization_year": 2007,
    "genres": ["Actio", "Comedy", "Drama", "Martial Arts", "Romance", "School Life", "Shounen"],
    "chapters": 72,
    "status": "Completed",
    "publisher": "Daiwon",
    "location": "Korea"
  },
  {
    "name": "Kobayashi-san Chi no Maid Dragon",
    "author": "COOL Kyoushinsha",
    "serialization_year": 2013,
    "genres": ["Comedy", "Ecchi", "Fantasy", "Seinen", "Shoujo Ai", "Slice of Life"],
    "chapters": 90,
    "status": "Ongoing",
    "publisher": "Futabasha",
    "location": "Japan"
  },
  {
    "name": "One Punch-Man",
    "author": "ONE",
    "serialization_year": 2012,
    "genres": ["Action", "Adventure", "Comedy", "Drama", "Sci-fi", "Seinen", "Supernatural"],
    "chapters": 126,
    "status": "Ongoing",
    "publisher": "Shueisha",
    "location": "Japan"
  },
  {
    "name": "Pastel",
    "author": "KOBAYASHI Toshihiko",
    "serialization_year": 2002,
    "genres": ["Comedy", "Ecchi", "Romance", "School Life", "Shounen", "Slice of Life"],
    "chapters": 153,
    "status": "Complete",
    "publisher": "Kodansha",
    "location": "Japan"
  },
  {
    "name": "Seishun Buta Yarou wa Bunny Girl Senpai no Yume o Minai",
    "author": "KAMOSHIDA Hajime",
    "serialization_year": 2015,
    "genres": ["Comedy", "Drama", "Mystery", "Psychological", "Romance", "School Life", "Seinen", "Slice of Life"],
    "chapters": 21,
    "status": "Completed",
    "publisher": "ASCII Media Works",
    "location": "Japan"
  },
  {
    "name": "Tondemo Skill de Isekai Hourou Meshi",
    "author": "EGUCHI Ren",
    "serialization_year": 2016,
    "genres": ["Action", "Adventure", "Comedy", "Fantasy", "Shounen"],
    "chapters": 27,
    "status": "Ongoing",
    "publisher": "Overlap",
    "location": "Japan"
  },
  {
    "name": "ReLIFE",
    "author": "YAYOI Sou",
    "serialization_year": 2013,
    "genres": ["Comedy", "Drama", "Romance", "School Life", "Slice of Life"],
    "chapters": 108,
    "status": "Completed",
    "publisher": "NHN Entertainment",
    "location": "Japan"
  },
  {
    "name": "Sewayaki Kitsune no Senko-san",
    "author": "Rimukoro",
    "serialization_year": 2017,
    "genres": ["Comedy", "Romance", "Slice of Life", "Supernatural"],
    "chapters": 60,
    "status": "Ongoing",
    "publisher": "Kadokawa",
    "location": "Japan"
  },
  {
    "name": "Soul Eater",
    "author": "OHKUBO Atsushi",
    "serialization_year": 2003,
    "genres": ["Action", "Adventure", "Comedy", "Drama", "Horro", "School Life", "Shounen", "Supernatural"],
    "chapters": 113,
    "status": "Completed",
    "publisher": "Square Enix",
    "location": "Japan"
  },
  {
    "name": "Karakai Jouzu no Takagi-san",
    "author": "YAMAMOTO Souichirou",
    "serialization_year": 2012,
    "genres": ["Comedy", "Romance", "School Life", "Shounen", "Slice of Life"],
    "chapters": 119,
    "status": "Ongoing",
    "publisher": "Shogakukan",
    "location": "Japan"
  },
  {
    "name": "GTO",
    "author": "FUJISAWA Tohru",
    "serialization_year": 1997,
    "genres": ["Comedy", "Drama", "Ecchi", "School Life", "Shounen"],
    "chapters": 200,
    "status": "Completed",
    "publisher": "Kodansha",
    "location": "Japan"
  },
  {
    "name": "Bleach",
    "author": "KUBO Tite",
    "serialization_year": 2000,
    "genres": ["Action", "Adventure", "Comedy", "Drama", "Shounen", "Supernatural"],
    "chapters": 705,
    "status": "Completed",
    "publisher": "Shueisha",
    "location": "Japan"
  },
  {
    "name": "Naruto",
    "author": "KISHIMOTO Masashi",
    "serialization_year": 1999,
    "genres": ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Shounen"],
    "chapters": 700,
    "status": "Completed",
    "publisher": "Shueisha",
    "location": "Japan"
  },
  {
    "name": "MG Hammer",
    "author": "KOGA Kiyoshi",
    "serialization_year": 2024,
    "genres": ["Action", "Adventure", "Comedy", "Fantasy", "Shounen"],
    "chapters": 2,
    "status": "Ongoing",
    "publisher": "Lazy Publications",
    "location": "USA"
  },
  {
    "name": "Cyborg Beat-Box",
    "author": "KOGA Kiyoshi",
    "serialization_year": 2402,
    "genres": ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Shounen"],
    "chapters": 10,
    "status": "Completed",
    "publisher": "Digital Publisher",
    "location": "Japan"
  },
  {
    "name": "Something Interesting",
    "author": "KOGA Kiyoshi",
    "serialization_year": 1989,
    "genres": ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Shounen"],
    "chapters": 100,
    "status": "Ongoing",
    "publisher": "Lame Enterprise",
    "location": "USA"
  },
  {
    "name": "Life of a Basement Dweller",
    "author": "KOGA Kiyoshi",
    "serialization_year": 1999,
    "genres": ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Shounen"],
    "chapters": 400,
    "status": "Completed",
    "publisher": "Sad House",
    "location": "USA"
  },
  {
    "name": "How to Fall Behind",
    "author": "KOGA Kiyoshi",
    "serialization_year": 2020,
    "genres": ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Shounen"],
    "chapters": 1,
    "status": "Completed",
    "publisher": "Funky Press",
    "location": "Japan"
  },
  {
    "name": "Crazy Code",
    "author": "KOGA Kiyoshi",
    "serialization_year": 2002,
    "genres": ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Shounen"],
    "chapters": 72,
    "status": "Completed",
    "publisher": "A Publishing Company",
    "location": "USA"
  },
  {
    "name": "Super Normal",
    "author": "Some Dude",
    "serialization_year": 2000,
    "genres": ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Shounen"],
    "chapters": 704,
    "status": "Completed",
    "publisher": "Tired Publications",
    "location": "USA"
  },
  {
    "name": "Happy Story",
    "author": "John Doe",
    "serialization_year": 2020,
    "genres": ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Shounen"],
    "chapters": 1000,
    "status": "Completed",
    "publisher": "Happy Publications",
    "location": "Japan"
  },
  {
    "name": "Rawwwwwr",
    "author": "Dinosaur",
    "serialization_year": 1002,
    "genres": ["Action", "Adventure", "Comedy", "Drama", "Fantasy", "Shounen"],
    "chapters": 7,
    "status": "Completed",
    "publisher": "Ancient Text",
    "location": "USA"
  },
]

let tableData = mangaData.reduce((acc, manga) => {
  let newObj = {
    publisher: manga.publisher,
    location: manga.location,
    mangas: [],
  }
  if (!acc.includes(newObj.mangas.includes(manga.name))) {
    newObj.mangas.push(manga.name)
    acc.push(newObj)
  }
  console.log(acc)
  return acc
}, [])

module.exports = tableData;